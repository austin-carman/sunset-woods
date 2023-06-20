/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
const TableOptions = ({ item, addOnCost, setAddOnCost }) => {
  const initialOrderFormValues = {
    length: { inches: 48, addedCost: 0 },
    width: { inches: 30, addedCost: 0 },
    woodType: { type: "Pine", addedCost: 0 },
    finish: { type: "Natural (clear coat)", addedCost: 0 },
    leafExtension: { inches: 0, addedCost: 0 },
  };
  const [orderForm, setOrderForm] = useState(initialOrderFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: JSON.parse(value) });
  };

  const handleClickOption = (name, value) => {
    console.log(name, value);
    setOrderForm({ ...orderForm, [name]: value });
  };

  useEffect(() => {
    setAddOnCost(
      // eslint-disable-next-line prettier/prettier
      (orderForm.length.addedCost + orderForm.width.addedCost + orderForm.woodType.addedCost + orderForm.finish.addedCost + orderForm.leafExtension.addedCost)
    );
  }, [orderForm]);

  return (
    <div className="item-customized-options">
      {/* Length */}
      <label>Length</label>
      <div className="option-boxes-container">
        {item.options.length.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClickOption("length", option)}
              className={
                orderForm.length.inches === option.inches
                  ? "selected-option option-box"
                  : "option-box"
              }
            >
              <div>{option.inches}&ldquo;</div>
            </div>
          );
        })}
      </div>
      <div className="selected-option-added-cost">
        Added Cost: <span>${orderForm.length.addedCost}</span>
      </div>

      {/* length */}
      <label>Length</label>
      <select name="length" onChange={(e) => handleChange(e)}>
        <optgroup label="Length">
          {item.options.length.map((option, index) => {
            return (
              <option key={index} value={JSON.stringify(option)}>
                {option.inches}&ldquo;{" "}
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </option>
            );
          })}
        </optgroup>
      </select>
      {/* width */}
      <label>Width</label>
      <select name="width" onChange={(e) => handleChange(e)}>
        <optgroup label="Width">
          {item.options.width.map((option, index) => {
            return (
              <option key={index} value={JSON.stringify(option)}>
                {option.inches}&ldquo;{" "}
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </option>
            );
          })}
        </optgroup>
      </select>
      {/* wood type */}
      <label>Wood Type</label>
      <select name="woodType" onChange={(e) => handleChange(e)}>
        <optgroup label="Wood Type">
          {item.options.woodType.map((option, index) => {
            return (
              <option key={index} value={JSON.stringify(option)}>
                {option.type} {option.addedCost > 0 && `+$${option.addedCost}`}
              </option>
            );
          })}
        </optgroup>
      </select>
      {/* Finish */}
      <label>Finish</label>
      <select name="finish" onChange={(e) => handleChange(e)}>
        <optgroup label="Finish">
          {item.options.finish.map((option, index) => {
            return (
              <option key={index} value={JSON.stringify(option)}>
                {option.type} {option.addedCost > 0 && `+$${option.addedCost}`}
              </option>
            );
          })}
        </optgroup>
      </select>
      {/* Leaf Extension */}
      <label>Leaf Extension</label>
      <select name="leafExtension" onChange={(e) => handleChange(e)}>
        <optgroup label="Leaf Extension">
          <option value={JSON.stringify({ inches: 0, addedCost: 0 })}>
            No
          </option>
          {item.options.leafExtension.map((option, index) => {
            return (
              <option key={index} value={JSON.stringify(option)}>
                {option.inches}&ldquo;{" "}
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </option>
            );
          })}
        </optgroup>
      </select>
    </div>
  );
};

export default TableOptions;
