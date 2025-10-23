"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/lib/storage";
import { loadCart, saveCart } from "@/lib/storage";
import type { Product } from "@/lib/products";

type CartCtx = {
  items: CartItem[];
  addItem: (p: Product) => void;
  removeItem: (id: string) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => { setItems(loadCart()); }, []);
  useEffect(() => { saveCart(items); }, [items]);

  const addItem = (p: Product) => {
    setItems(prev => {
      const found = prev.find(i => i.id === p.id);
      if (found) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));
  const inc = (id: string) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  const dec = (id: string) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((a, i) => a + i.price * i.qty, 0), [items]);

  const value: CartCtx = { items, addItem, removeItem, inc, dec, clear, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
