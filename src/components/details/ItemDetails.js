import { useParams } from "react-router-dom";
import ImageSlides from "./ImageSlides";
import { useState, useEffect, useContext } from "react";
import ItemQuantity from "./ItemQuantity";
import ItemPricing from "./ItemPricing";
import { CartContext } from "../../context/CartContext";
import { shopItems } from "../../data/data";
import ItemOptions from "./ItemOptions";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { showConfirmation } from "../../helper-functions/helper-functions";

const ItemDetails = () => {
  const { id } = useParams();
  const item = shopItems.find((shopItem) => shopItem.id === parseInt(id));
  // shared state -> See CartContext.js
  const { cart, setCart } = useContext(CartContext);

  // Sets the structure and default values for item options
  const getItemOptions = () => {
    const options = {};
    for (const key in item.options) {
      options[key] = item.options[key][0];
    }
    return options;
  };

  // added cost from base price based on selected options
  const [addOnCost, setAddOnCost] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [itemOptions, setItemOptions] = useState(getItemOptions());
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Add item to cart with information for checkout and order fulfillment
  const handleAddToCart = () => {
    setCart([
      ...cart,
      {
        id: item.id,
        name: item.title,
        image: item.images[0],
        options: itemOptions,
        quantity: quantity,
        unitPrice: item.basePrice + addOnCost,
        totalPrice: (item.basePrice + addOnCost) * quantity,
      },
    ]);
    showConfirmation(setIsConfirmationOpen);
  };

  // Totals all the added costs from selected options
  const calculateAddedCost = () => {
    let total = 0;
    for (const key in itemOptions) {
      if (itemOptions[key]?.addedCost) {
        total += itemOptions[key]["addedCost"];
      }
    }
    return total;
  };

  useEffect(() => {
    const addedCost = calculateAddedCost();
    setAddOnCost(addedCost);
  }, [itemOptions]);

  return (
    <>
      <div className="item-order-container">
        {/* Item Images */}
        <div className="item-images">
          <ImageSlides item={item} />
        </div>
        <div className="order-container">
          <div className="item-title-container">
            <h2>{item.title}</h2>
            <h4>{item.subtitle}</h4>
          </div>
          {/* Customizable Options */}
          <ItemOptions
            item={item}
            itemOptions={itemOptions}
            setItemOptions={setItemOptions}
          />
          {/* Quantity */}
          <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
          {/* Pricing */}
          <ItemPricing
            basePrice={item.basePrice}
            addOnCost={addOnCost}
            quantity={quantity}
          />
          <div className="add-to-cart-container">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          {/* Added to Cart Confirmation message */}
          {isConfirmationOpen && (
            <span className="added-to-cart-confirmation">
              <CheckCircleOutlinedIcon sx={{ color: "green" }} /> Added to cart
            </span>
          )}
        </div>
      </div>
      {/* Item Description */}
      <div className="item-description-container">
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </>
  );
};

export default ItemDetails;
