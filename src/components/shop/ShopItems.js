/* eslint-disable react/prop-types */
const ShopItems = ({ item }) => {
  return (
    <div className="shop-gallery-item">
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <h5>{item.subtitle}</h5>
      <h5>{item.price}</h5>
    </div>
  );
};

export default ShopItems;
