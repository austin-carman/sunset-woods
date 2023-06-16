/* eslint-disable react/prop-types */
const OrderOptions = ({ item }) => {
  return (
    <div className="order-options-container">
      <div>Length</div>
      <div>Width</div>
      <div>Wood Type</div>
      <div>Leaf Extension</div>
      <div>Quantity</div>
      <h3>Base Price: ${item.price}</h3>
      <h3>Total Price: &#40;Base + Customizations&#41;</h3>
    </div>
  );
};

export default OrderOptions;
