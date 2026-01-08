import React, { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ ADD TO CART (FIXED)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // ✅ If product exists, ADD quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      }

      // ✅ If new product, use passed qty
      return [...prevItems, { ...product }];
    });
  };

  // ✅ REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // ✅ UPDATE QUANTITY (OPTIONAL – future use)
  const updateQuantity = (id, qty) => {
    if (qty < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  // ✅ TOTAL AMOUNT (FIXED)
  const totalAmount = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }, [cartItems]);

  // ✅ TOTAL ITEMS (FOR CART ICON BADGE)
  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalAmount,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
