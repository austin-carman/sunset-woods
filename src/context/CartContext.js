/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create new context
export const CartContext = createContext();

// Create context provider component
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // state to share
  const sharedState = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={sharedState}>{children}</CartContext.Provider>
  );
};
