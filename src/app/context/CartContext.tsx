'use client';

import { ProductDetailsType } from '@/app/types/product';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';

type CartContextType = {
  cart: ProductDetailsType[];
  addToCart: (product: ProductDetailsType, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalPrice: number;
  cartCount: number;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductDetailsType[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: ProductDetailsType, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];

      const existingProductIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const existingProduct = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + quantity,
        };
      } else {
        updatedCart.push({ ...product, quantity });
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }, [cart]);

  const cartCount = useMemo(() => {
    const distinctItems = new Set(cart.map((item) => item.id));
    return distinctItems.size;
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
