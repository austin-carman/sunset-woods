import { useLocation } from "react-router-dom";
import ImageSlides from "./ImageSlides";
import OrderOptions from "./OrderOptions";

const ItemDetails = () => {
  const location = useLocation();
  const item = location.state;

  return (
    <>
      <div className="item-order-container">
        <ImageSlides item={item} />
        <div className="order-container">
          <div className="item-title-container">
            <h2>{item.title}</h2>
            <h4>{item.subtitle}</h4>
          </div>
          <OrderOptions item={item} />
          <div>
            <div>Payment Options</div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="item-description-container">
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </>
  );
};

export default ItemDetails;
