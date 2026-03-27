"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { ItemCarrinho, Produto } from "./types";

interface CartContextType {
  items: ItemCarrinho[];
  addItem: (produto: Produto, quantidade: number, tamanho?: string, cor?: string, nomePersonalizado?: string) => void;
  removeItem: (produtoId: string) => void;
  updateQuantity: (produtoId: string, quantidade: number) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrinho[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("impostores-cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("impostores-cart", JSON.stringify(items));
    }
  }, [items, mounted]);

  const addItem = (
    produto: Produto,
    quantidade: number,
    tamanho?: string,
    cor?: string,
    nomePersonalizado?: string
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.produto.id === produto.id &&
          item.tamanho === tamanho &&
          item.cor === cor &&
          item.nomePersonalizado === nomePersonalizado
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantidade += quantidade;
        return updated;
      }

      return [...prev, { produto, quantidade, tamanho, cor, nomePersonalizado }];
    });
    setIsOpen(true);
  };

  const removeItem = (produtoId: string) => {
    setItems((prev) => prev.filter((item) => item.produto.id !== produtoId));
  };

  const updateQuantity = (produtoId: string, quantidade: number) => {
    if (quantidade <= 0) {
      removeItem(produtoId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.produto.id === produtoId ? { ...item, quantidade } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setIsOpen(false);
  };

  const total = items.reduce(
    (sum, item) => sum + item.produto.preco * item.quantidade,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        totalItems,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
