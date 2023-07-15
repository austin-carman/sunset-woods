/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// new context
export const CartContext = createContext();

// context provider component
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
