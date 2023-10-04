import { useState } from "react";


// Custom hook to manage the cart state and operations
export const useCart = () => { 

  const [cart, setCart] = useState([]); 

  /* 1- Add an item to the cart */
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }; 

  /* 2- Delete an item from the cart */
  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id))
    } else {
        const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCart(updatedCart);
    }
  };

  /* 3- Delete item from the cart completely */
  const removeCompletely = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id))
  };


  // Return the cart state and operations 
  return { cart, setCart, addToCart, removeFromCart, removeCompletely };

};