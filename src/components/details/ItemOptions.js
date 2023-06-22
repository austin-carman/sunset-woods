import { useEffect } from "react";

/* eslint-disable react/prop-types */
const ItemOptions = ({ item, orderForm, setOrderForm }) => {
  const handleClickOption = (name, value) => {
    setOrderForm({ ...orderForm, [name]: value });
  };

  const getClassName = (key, option) => {
    if (key === "customizations") {
      return orderForm[key] === option
        ? "selected-option option-box"
        : "option-box";
    }
    return orderForm[key] === option
      ? "selected-option option-box"
      : "option-box";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="item-customized-options">
      {Object.keys(orderForm).map((key) => {
        return (
          <div key={key}>
            <h3>{key}</h3>
            <div className="option-boxes-container">
              {item.options[key].map((option, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleClickOption(key, option)}
                    className={getClassName(key, option)}
                  >
                    {typeof option === "object" ? (
                      <div>
                        {option.value === 0 ? "No" : option.value}
                        {option.value !== 0 &&
                          typeof option.value === "number" &&
                          `"`}
                      </div>
                    ) : (
                      <div>{option}</div>
                    )}
                    <div className="selected-option-added-cost">
                      {option.addedCost > 0 && `+$${option.addedCost}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemOptions;
