import { useLocation } from "react-router-dom";
import ImageSlides from "./ImageSlides";
import OrderOptions from "./OrderOptions";
import { useState } from "react";

const ItemDetails = () => {
  const [price, setPrice] = useState(0);
  const location = useLocation();
  const item = location.state;

  const handlePrice = (addedCost) => {
    setPrice(price + addedCost);
  };

  return (
    <>
      <div className="item-order-container">
        <ImageSlides item={item} />
        <div className="order-container">
          <div className="item-title-container">
            <h2>{item.title}</h2>
            <h4>{item.subtitle}</h4>
          </div>
          <OrderOptions item={item} price={price} handlePrice={handlePrice} />
          <div>
            <div>Payment Options</div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="item-details-container">Details Container</div>
    </>
  );
};

export default ItemDetails;
