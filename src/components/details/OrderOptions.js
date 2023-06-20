import TableOptions from "./TableOptions";
import ItemUnavailable from "./ItemUnavailable";
import { useState } from "react";

/* eslint-disable react/prop-types */
const OrderOptions = ({ item }) => {
  const [addOnCost, setAddOnCost] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const getOrderOptions = (category) => {
    switch (category) {
      case "Furniture":
        return <TableOptions item={item} setAddOnCost={setAddOnCost} />;
      default:
        return <ItemUnavailable />;
    }
  };

  const handleClickQuantity = (value) => {
    if (quantity === 1 && value === -1) {
      return;
    }
    setQuantity(quantity + value);
  };

  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  return (
    <div className="order-options-container">
      {getOrderOptions(item.category)}
      <h3>Quantity</h3>
      <div className="quantity-container">
        <div
          className="quantity-increments"
          onClick={() => handleClickQuantity(-1)}
        >
          -
        </div>
        <input
          name="quantity"
          value={quantity}
          onChange={handleChangeQuantity}
        ></input>
        <div
          className="quantity-increments"
          onClick={() => handleClickQuantity(1)}
        >
          +
        </div>
      </div>
      <h3>Base Price: ${item.basePrice}</h3>
      <span>+ ${addOnCost} customizations</span>
      <br></br>
      <span>x {quantity} &#40;quantity&#41;</span>
      <h3>Total Price: ${(item.basePrice + addOnCost) * quantity}</h3>
    </div>
  );
};

export default OrderOptions;
