import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShopItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClickItem = (id) => {
    console.log("click item");
    navigate(`/item-details/${id}`);
  };

  return (
    <div className="shop-gallery-item" onClick={() => handleClickItem(item.id)}>
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <h5>{item.subtitle}</h5>
      <h5>{item.price}</h5>
    </div>
  );
};

export default ShopItem;
