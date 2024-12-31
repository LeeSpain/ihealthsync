import React, { createContext, useContext, useState } from "react";

// Create the CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const calculateTotals = () => {
    return cartItems.reduce(
      (totals, item) => ({
        subtotal: totals.subtotal + parseFloat(item.price || 0) * item.quantity,
        monthly: totals.monthly + parseFloat(item.monthlyFee) * item.quantity,
      }),
      { subtotal: 0, monthly: 0 }
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        calculateTotals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
