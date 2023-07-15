/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ItemOptions = ({ item, itemOptions, setItemOptions }) => {
  // store selected options in state: itemOptions
  const handleClickOption = (name, value) => {
    setItemOptions({ ...itemOptions, [name]: value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="item-customized-options">
      {/* Iterate over option categories */}
      {Object.keys(itemOptions).map((key) => {
        return (
          <div key={key}>
            <h3>{key}</h3>
            <div className="option-boxes-container">
              {/* Iterate over options in current category */}
              {item.options[key].map((option, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleClickOption(key, option)}
                    // eslint-disable-next-line prettier/prettier
                    className={`option-box ${itemOptions[key] === option ? "selected-option" : "not-selected-option"}`}
                  >
                    {/* {typeof option === "object" ? (
                      <div>
                        {option.value === 0 ? "No" : option.value}
                        {option.value !== 0 &&
                          typeof option.value === "number" &&
                          `"`}
                      </div>
                    ) : (
                      <div>{option}</div>
                    )} */}
                    <div>{option.value}</div>
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
