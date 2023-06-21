/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create a new context
export const CartContext = createContext();

// Create a context provider component
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Define any functions or state you want to share

  const sharedState = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={sharedState}>{children}</CartContext.Provider>
  );
};
