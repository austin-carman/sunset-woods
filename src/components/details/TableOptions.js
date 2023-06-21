/* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import { useState, useEffect } from "react";

const TableOptions = ({ item, orderForm, setOrderForm }) => {
  // const TableOptions = ({ item, setAddOnCost, orderForm, setOrderForm }) => {
  // const TableOptions = ({ item, setAddOnCost }) => {
  // const initialOrderFormValues = {
  //   length: { inches: 48, addedCost: 0 },
  //   width: { inches: 30, addedCost: 0 },
  //   woodType: { type: "Pine", addedCost: 0 },
  //   finish: { type: "Natural (clear coat)", addedCost: 0 },
  //   leafExtension: { inches: 0, addedCost: 0 },
  // };
  // const [orderForm, setOrderForm] = useState(initialOrderFormValues);

  const handleClickOption = (name, value) => {
    console.log("name: ", name, "value: ", value);
    setOrderForm({ ...orderForm, [name]: value });
  };

  // useEffect(() => {
  //   setAddOnCost(
  //     // eslint-disable-next-line prettier/prettier
  //     (orderForm.length.addedCost + orderForm.width.addedCost + orderForm.woodType.addedCost + orderForm.finish.addedCost + orderForm.leafExtension.addedCost)
  //   );
  // }, [orderForm]);

  return (
    <div className="item-customized-options">
      {/* Length */}
      <h3>Length</h3>
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
              <div className="selected-option-added-cost">
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </div>
            </div>
          );
        })}
      </div>
      {/* Width */}
      <h3>Width</h3>
      <div className="option-boxes-container">
        {item.options.width.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClickOption("width", option)}
              className={
                orderForm.width.inches === option.inches
                  ? "selected-option option-box"
                  : "option-box"
              }
            >
              <div>{option.inches}&ldquo;</div>
              <div className="selected-option-added-cost">
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </div>
            </div>
          );
        })}
      </div>
      {/* Wood Type */}
      <h3>Wood Type</h3>
      <div className="option-boxes-container">
        {item.options.woodType.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClickOption("woodType", option)}
              className={
                orderForm.woodType.type === option.type
                  ? "selected-option option-box"
                  : "option-box"
              }
            >
              <div>{option.type}</div>
              <div className="selected-option-added-cost">
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </div>
            </div>
          );
        })}
      </div>
      {/* Finish */}
      <h3>Finish</h3>
      <div className="option-boxes-container">
        {item.options.finish.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClickOption("finish", option)}
              className={
                orderForm.finish.type === option.type
                  ? "selected-option option-box"
                  : "option-box"
              }
            >
              <div>{option.type}</div>
              <div className="selected-option-added-cost">
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </div>
            </div>
          );
        })}
      </div>
      {/* Leaf Extension */}
      <h3>Leaf Extension</h3>
      <div className="option-boxes-container">
        {item.options.leafExtension.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClickOption("leafExtension", option)}
              className={
                orderForm.leafExtension.inches === option.inches
                  ? "selected-option option-box"
                  : "option-box"
              }
            >
              <div>{option.inches > 0 ? `${option.inches}"` : "No"}</div>
              <div className="selected-option-added-cost">
                {option.addedCost > 0 && `+$${option.addedCost}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableOptions;
