import TableOptions from "./TableOptions";
import ItemUnavailable from "./ItemUnavailable";
import { useState } from "react";

/* eslint-disable react/prop-types */
const OrderOptions = ({ item }) => {
  const [addOnCost, setAddOnCost] = useState(0);

  const getOrderOptions = (category) => {
    switch (category) {
      case "Furniture":
        return (
          <TableOptions
            item={item}
            addOnCost={addOnCost}
            setAddOnCost={setAddOnCost}
          />
        );
      default:
        return <ItemUnavailable />;
    }
  };

  return (
    <div className="order-options-container">
      {getOrderOptions(item.category)}
      <h3>Base Price: ${item.basePrice}</h3>
      <span>+ ${addOnCost} customizations</span>
      <h3>Total Price: ${item.basePrice + addOnCost}</h3>
    </div>
  );
};

export default OrderOptions;
