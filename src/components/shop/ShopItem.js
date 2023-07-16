/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ShopItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClickItem = (id) => {
    navigate(`/item-details/${id}`);
  };

  return (
    <div className="shop-gallery-item" onClick={() => handleClickItem(item.id)}>
      <img src={item.images[0]} alt="" />
      <h3>{item.title}</h3>
      <h5>{item.subtitle}</h5>
      <h6>Starting at ${item.basePrice}</h6>
    </div>
  );
};

export default ShopItem;
