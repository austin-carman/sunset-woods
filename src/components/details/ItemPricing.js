/* eslint-disable react/prop-types */
const ItemPricing = ({ basePrice, addOnCost, quantity }) => {
  return (
    <div className="order-price-container">
      <h4>Base Price: ${basePrice}</h4>
      <h4>+ ${addOnCost} customizations</h4>
      <h4>x {quantity} &#40;quantity&#41;</h4>
      <br></br>
      <h3>
        Total:{" "}
        <span className="total-price">
          ${(basePrice + addOnCost) * quantity}
        </span>
      </h3>
    </div>
  );
};

export default ItemPricing;
