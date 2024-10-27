import { createContext, useState } from "react";
import { getCartQuantities } from "../units/storage";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartQuantities, setCartQuantities] = useState(getCartQuantities());

  return (
    <CartContext.Provider value={{ cartQuantities, setCartQuantities }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
