"use client";

import { useCart } from "@/lib/cart-context";
import { X, Plus, Minus, Trash, ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, total, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <ShoppingCart size={24} weight="bold" className="text-gold" />
            Seu Carrinho
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Fechar carrinho"
          >
            <X size={24} weight="bold" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingCart size={64} className="mb-4 text-muted-foreground/30" />
              <p className="text-lg font-semibold text-muted-foreground">
                Seu carrinho esta vazio
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore nossa loja e encontre produtos incriveis!
              </p>
              <Link
                href="/loja"
                onClick={() => setIsOpen(false)}
                className="mt-6 rounded-xl bg-orange px-6 py-3 font-bold text-white transition-colors hover:bg-orange-hover"
              >
                Ir para a Loja
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={`${item.produto.id}-${index}`}
                  className="flex gap-4 rounded-xl border border-border bg-background p-4"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
                    <Image
                      src={item.produto.imagem}
                      alt={item.produto.nome}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-semibold">{item.produto.nome}</h3>
                    {item.tamanho && (
                      <p className="text-sm text-muted-foreground">
                        Tamanho: {item.tamanho}
                      </p>
                    )}
                    {item.cor && (
                      <p className="text-sm text-muted-foreground">
                        Cor: {item.cor}
                      </p>
                    )}
                    {item.nomePersonalizado && (
                      <p className="text-sm text-gold">
                        Nome: {item.nomePersonalizado}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.produto.id, item.quantidade - 1)
                          }
                          className="rounded-lg bg-secondary p-1.5 text-foreground transition-colors hover:bg-border"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={14} weight="bold" />
                        </button>
                        <span className="w-6 text-center font-semibold">
                          {item.quantidade}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.produto.id, item.quantidade + 1)
                          }
                          className="rounded-lg bg-secondary p-1.5 text-foreground transition-colors hover:bg-border"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={14} weight="bold" />
                        </button>
                      </div>
                      <span className="font-bold text-gold">
                        R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.produto.id)}
                    className="self-start rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Remover item"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-gold">
                R$ {total.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="flex-1 rounded-xl border border-border bg-transparent py-3 font-bold text-foreground transition-colors hover:bg-secondary"
              >
                Limpar
              </button>
              <Link
                href="/loja/checkout"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl bg-orange py-3 text-center font-bold text-white transition-colors hover:bg-orange-hover"
              >
                Finalizar Pedido
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
