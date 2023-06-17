/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const TableOptions = ({ item, price, handlePrice }) => {
  const initialOrderFormValues = {
    length: { inches: 48, addedCost: 0 },
    width: { inches: 30, addedCost: 0 },
    woodType: { type: "Pine", addedCost: 0 },
    finish: { type: "Natural (clear coat)", addedCost: 0 },
    leafExtension: { inches: 24, addedCost: 50 },
    quantity: 1,
  };
  const [orderForm, setOrderForm] = useState(initialOrderFormValues);

  const handleQuantity = (value) => {
    if (orderForm.quantity === 1 && value === -1) {
      return;
    }
    setOrderForm({ ...orderForm, quantity: orderForm.quantity + value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: JSON.parse(value) });
  };

  console.log(orderForm);

  return (
    <div className="item-customized-options">
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
      <label htmlFor="quantity">Quantity</label>
      <div className="quantity-container">
        <div onClick={() => handleQuantity(-1)}>-</div>
        <input defaultValue={1} value={orderForm.quantity}></input>
        <div onClick={() => handleQuantity(1)}>+</div>
      </div>
    </div>
  );
};

export default TableOptions;
