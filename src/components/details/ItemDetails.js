import { useLocation } from "react-router-dom";
import ImageSlides from "./ImageSlides";
// import OrderOptions from "./OrderOptions";
import TableOptions from "./TableOptions";
import ItemUnavailable from "./ItemUnavailable";
import { useState, useEffect, useContext } from "react";
// import { useState } from "react";
import ItemQuantity from "./ItemQuantity";
import ItemPricing from "./ItemPricing";
import { CartContext } from "../../context/CartContext";

const ItemDetails = () => {
  const { cart, setCart } = useContext(CartContext);
  const furnitureOptions = {
    length: { inches: 48, addedCost: 0 },
    width: { inches: 30, addedCost: 0 },
    woodType: { type: "Pine", addedCost: 0 },
    finish: { type: "Natural (clear coat)", addedCost: 0 },
    leafExtension: { inches: 0, addedCost: 0 },
  };

  const location = useLocation();
  const item = location.state;
  const getItemOptions = () => {
    switch (item.category) {
      case "Furniture":
        return furnitureOptions;
      default:
        return {};
    }
  };
  const [addOnCost, setAddOnCost] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [orderForm, setOrderForm] = useState(getItemOptions());

  const getOrderOptions = (category) => {
    switch (category) {
      case "Furniture":
        return (
          <TableOptions
            item={item}
            orderForm={orderForm}
            setOrderForm={setOrderForm}
          />
        );
      default:
        return <ItemUnavailable />;
    }
  };

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
  };

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    setAddOnCost(orderForm.length.addedCost + orderForm.width.addedCost + orderForm.woodType.addedCost + orderForm.finish.addedCost + orderForm.leafExtension.addedCost
    );
  }, [orderForm]);

  return (
    <>
      {/* item, options form, quantity, addOnCost */}
      {/* Images -> item */}
      <ImageSlides item={item} />
      {/* Title -> item */}
      <div className="item-title-container">
        <h2>{item.title}</h2>
        <h4>{item.subtitle}</h4>
      </div>
      {/* Options -> item, form */}
      {getOrderOptions(item.category)}
      {/* Quantity - combine with options? */}
      <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
      {/* Pricing */}
      <ItemPricing
        basePrice={item.basePrice}
        addOnCost={addOnCost}
        quantity={quantity}
      />

      {/* Add to Cart -> item, optionsForm */}
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {/* Description -> item */}
      <div className="item-description-container">
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </>
  );
};

export default ItemDetails;

// import { useLocation } from "react-router-dom";
// import ImageSlides from "./ImageSlides";
// import OrderOptions from "./OrderOptions";

// const ItemDetails = () => {
//   const location = useLocation();
//   const item = location.state;

//   const handleAddToCart = () => {
//     console.log("click");
//   };

//   return (
//     <>
//       <div className="item-order-container">
//         <ImageSlides item={item} />
//         <div className="order-container">
//           <div className="item-title-container">
//             <h2>{item.title}</h2>
//             <h4>{item.subtitle}</h4>
//           </div>
//           <OrderOptions item={item} />
//           <div>
//             <button className="add-to-cart-button" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="item-description-container">
//         <h2>Description</h2>
//         <p>{item.description}</p>
//       </div>
//     </>
//   );
// };

// export default ItemDetails;
