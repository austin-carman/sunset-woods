/* eslint-disable react/prop-types */
const TableOptions = ({ item, orderForm, setOrderForm }) => {
  const handleClickOption = (name, value) => {
    console.log("name: ", name, "value: ", value);
    setOrderForm({ ...orderForm, [name]: value });
  };

  // TODO -> CREATE REUSABLE COMPONENT TO RENDER ALL THE BELOW -> case uses 1) inches (ex: length), 2) type (ex: wood)

  return (
    <div className="item-customized-options">
      {/* Length - uses inches */}
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
      {/* Width - uses inches */}
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
      {/* Wood Type - uses type */}
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
      {/* Finish - uses type */}
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
      {/* Leaf Extension - uses inches */}
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
