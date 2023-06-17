import TableOptions from "./TableOptions";
import ItemUnavailable from "./ItemUnavailable";

/* eslint-disable react/prop-types */
const OrderOptions = ({ item, price, handlePrice }) => {
  const getOptions = (category) => {
    switch (category) {
      case "Furniture":
        return (
          <TableOptions item={item} price={price} handlePrice={handlePrice} />
        );
      default:
        return <ItemUnavailable />;
    }
  };

  return (
    <div className="order-options-container">
      {getOptions(item.category)}
      {/* <div>Length</div>
      <div>Width</div>
      <div>Wood Type</div>
      <div>Leaf Extension</div>
      <div>Quantity</div> */}
      {/* <h3>Base Price: ${item.price}</h3>
      <h3>Total Price: &#40;Base + Customizations&#41;</h3> */}
    </div>
  );
};

export default OrderOptions;
