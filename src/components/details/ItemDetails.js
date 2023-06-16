import { useLocation } from "react-router-dom";
import ImageSlides from "./ImageSlides";

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
          <div className="order-options-container">
            <div>Length</div>
            <div>Width</div>
            <div>Wood Type</div>
            <div>Leaf Extension</div>
            <div>Quantity</div>
            <h3>Base Price: ${item.price}</h3>
            <h3>Total Price: &#40;Base + Customizations&#41;</h3>
          </div>
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
