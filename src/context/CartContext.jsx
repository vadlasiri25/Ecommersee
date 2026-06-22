import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = useCallback((product, size, color) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size && item.color === color);
      if (existing) {
        return prev.map(item => item.id === product.id && item.size === size && item.color === color ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, size, color, quantity: 1, cartId: Date.now() + Math.random() }];
    });
  }, []);
  
  const removeFromCart = useCallback((cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  }, []);

  const updateQuantity = useCallback((cartId, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev => prev.map(item => item.cartId === cartId ? { ...item, quantity } : item));
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);
  
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
