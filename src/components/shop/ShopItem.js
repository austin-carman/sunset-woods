import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShopItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClickItem = (item) => {
    navigate(`/item-details/${item.id}`, { state: item });
  };

  return (
    <div className="shop-gallery-item" onClick={() => handleClickItem(item)}>
      <img src={item.images[0]} alt="" />
      <h3>{item.title}</h3>
      <h5>{item.subtitle}</h5>
      <h5>{item.price}</h5>
    </div>
  );
};

export default ShopItem;
