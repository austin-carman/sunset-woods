import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShopItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClickItem = (item) => {
    console.log("click item", item);
    navigate(`/item-details/${item.id}`);
  };

  return (
    <div className="shop-gallery-item" onClick={() => handleClickItem(item)}>
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <h5>{item.subtitle}</h5>
      <h5>{item.price}</h5>
    </div>
  );
};

export default ShopItem;
