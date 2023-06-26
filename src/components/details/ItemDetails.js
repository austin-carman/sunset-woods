import { useParams } from "react-router-dom";
import ImageSlides from "./ImageSlides";
import { useState, useEffect, useContext } from "react";
import ItemQuantity from "./ItemQuantity";
import ItemPricing from "./ItemPricing";
import { CartContext } from "../../context/CartContext";
import { shopItems } from "../../data/data";
import ItemOptions from "./ItemOptions";

const ItemDetails = () => {
  const { id } = useParams();
  const item = shopItems.find((shopItem) => shopItem.id === parseInt(id));
  const { cart, setCart } = useContext(CartContext);

  const getItemOptions = () => {
    const options = {};
    for (const key in item.options) {
      options[key] = item.options[key][0];
    }
    return options;
  };

  const [addOnCost, setAddOnCost] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [orderForm, setOrderForm] = useState(getItemOptions());
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleAddToCart = () => {
    setCart([
      ...cart,
      {
        id: item.id,
        name: item.title,
        image: item.images[0],
        options: orderForm,
        quantity: quantity,
        unitPrice: item.basePrice + addOnCost,
        totalPrice: (item.basePrice + addOnCost) * quantity,
      },
    ]);
    setIsConfirmationOpen(true);
    setTimeout(() => {
      setIsConfirmationOpen(false);
    }, 1000);
  };

  const calculateAddedCost = () => {
    let total = 0;
    for (const key in orderForm) {
      if (orderForm[key]?.addedCost) {
        total += orderForm[key]["addedCost"];
      }
    }
    return total;
  };

  useEffect(() => {
    const addedCost = calculateAddedCost();
    setAddOnCost(addedCost);
  }, [orderForm]);

  return (
    <>
      <div className="item-order-container">
        {/* Images */}
        <ImageSlides item={item} />
        <div className="order-container">
          {/* Title */}
          <div className="item-title-container">
            <h2>{item.title}</h2>
            <h4>{item.subtitle}</h4>
          </div>
          {/* Customizable Options */}
          <ItemOptions
            item={item}
            orderForm={orderForm}
            setOrderForm={setOrderForm}
          />
          {/* Quantity */}
          <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
          {/* Pricing */}
          <ItemPricing
            basePrice={item.basePrice}
            addOnCost={addOnCost}
            quantity={quantity}
          />
          {/* Add to Cart */}
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        {isConfirmationOpen && (
          <div className="added-to-cart-confirmation">ADDED TO CART</div>
        )}
      </div>
      {/* Description */}
      <div className="item-description-container">
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </>
  );
};

export default ItemDetails;
