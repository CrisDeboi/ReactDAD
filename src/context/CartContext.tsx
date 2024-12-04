import React, { createContext, useState, useContext, ReactNode } from "react";


export interface CartItem {
  id: string; 
  cardImg: string;
  cardDescription?: string;
  cardPrice: number;
  count: number;
}


interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);


interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        
        return prev.map((i) =>
          i.id === item.id ? { ...i, count: i.count + item.count } : i
        );
      }
     
      return [...prev, item];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
