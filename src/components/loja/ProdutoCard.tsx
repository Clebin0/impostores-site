"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Check, X, TShirt, TextT } from "@phosphor-icons/react";
import type { Produto } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import clsx from "clsx";

interface ProdutoCardProps {
  produto: Produto;
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  const { addItem } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedTamanho, setSelectedTamanho] = useState<string>("");
  const [selectedCor, setSelectedCor] = useState<string>("");
  const [nomePersonalizado, setNomePersonalizado] = useState("");
  const [added, setAdded] = useState(false);

  const isAvailable = produto.estoque > 0;

  const handleAddToCart = () => {
    if (!isAvailable) return;
    
    if (produto.tamanhos || produto.cores || produto.personalizavel) {
      setShowModal(true);
    } else {
      addItem(produto, 1);
      showAddedFeedback();
    }
  };

  const handleConfirmAdd = () => {
    addItem(produto, 1, selectedTamanho, selectedCor, nomePersonalizado || undefined);
    setShowModal(false);
    setSelectedTamanho("");
    setSelectedCor("");
    setNomePersonalizado("");
    showAddedFeedback();
  };

  const showAddedFeedback = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const canConfirm = () => {
    if (produto.tamanhos && !selectedTamanho) return false;
    if (produto.cores && !selectedCor) return false;
    return true;
  };

  return (
    <>
      <div
        className={clsx(
          "card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
          !isAvailable && "opacity-60"
        )}
      >
        {/* Badge */}
        <div
          className={clsx(
            "absolute right-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-bold",
            isAvailable
              ? "border border-green/30 bg-green/10 text-green"
              : "border border-destructive/30 bg-destructive/10 text-destructive"
          )}
        >
          {isAvailable ? `${produto.estoque} em estoque` : "ESGOTADO"}
        </div>

        {/* Image */}
        <div className="relative flex h-48 items-center justify-center bg-secondary p-4">
          {produto.imagem.includes("/images/") ? (
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={160}
              height={160}
              className={clsx(
                "product-img-hover h-40 w-auto object-contain",
                !isAvailable && "grayscale"
              )}
            />
          ) : (
            <TShirt
              size={100}
              weight="duotone"
              className={clsx("text-muted-foreground", !isAvailable && "grayscale")}
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-lg font-bold">{produto.nome}</h3>
          <p className="mb-4 flex-1 text-sm text-muted-foreground">{produto.descricao}</p>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {produto.tamanhos && (
              <span className="rounded-full bg-secondary px-2 py-1 text-xs text-muted-foreground">
                {produto.tamanhos.join(", ")}
              </span>
            )}
            {produto.personalizavel && (
              <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-1 text-xs text-gold">
                Personalizavel
              </span>
            )}
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-gold">
              R$ {produto.preco.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={!isAvailable || added}
              className={clsx(
                "flex items-center gap-2 rounded-xl px-4 py-2 font-bold transition-all",
                isAvailable
                  ? added
                    ? "bg-green text-white"
                    : "bg-orange text-white hover:bg-orange-hover"
                  : "cursor-not-allowed bg-secondary text-muted-foreground"
              )}
            >
              {added ? (
                <>
                  <Check size={20} weight="bold" />
                  Adicionado
                </>
              ) : (
                <>
                  <ShoppingCart size={20} weight="bold" />
                  Comprar
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for customization */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-fade-in rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Personalizar Produto</h3>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-secondary"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Tamanho */}
              {produto.tamanhos && (
                <div>
                  <label className="mb-2 block font-semibold">Tamanho *</label>
                  <div className="flex flex-wrap gap-2">
                    {produto.tamanhos.map((tam) => (
                      <button
                        key={tam}
                        onClick={() => setSelectedTamanho(tam)}
                        className={clsx(
                          "rounded-lg border px-4 py-2 font-semibold transition-colors",
                          selectedTamanho === tam
                            ? "border-orange bg-orange/10 text-orange"
                            : "border-border hover:border-orange"
                        )}
                      >
                        {tam}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cor */}
              {produto.cores && (
                <div>
                  <label className="mb-2 block font-semibold">Cor *</label>
                  <div className="flex flex-wrap gap-2">
                    {produto.cores.map((cor) => (
                      <button
                        key={cor}
                        onClick={() => setSelectedCor(cor)}
                        className={clsx(
                          "rounded-lg border px-4 py-2 font-semibold transition-colors",
                          selectedCor === cor
                            ? "border-orange bg-orange/10 text-orange"
                            : "border-border hover:border-orange"
                        )}
                      >
                        {cor}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Personalizacao */}
              {produto.personalizavel && (
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <TextT size={20} className="text-gold" />
                    Nome nas Costas (opcional)
                  </label>
                  <input
                    type="text"
                    value={nomePersonalizado}
                    onChange={(e) => setNomePersonalizado(e.target.value.toUpperCase())}
                    placeholder="Ex: JOAO"
                    maxLength={15}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-bold uppercase text-foreground placeholder:font-normal placeholder:normal-case placeholder:text-muted-foreground focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Maximo 15 caracteres. Letras maiusculas apenas.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 rounded-xl border border-border py-3 font-bold transition-colors hover:bg-secondary"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmAdd}
                disabled={!canConfirm()}
                className={clsx(
                  "flex-1 rounded-xl py-3 font-bold text-white transition-colors",
                  canConfirm()
                    ? "bg-orange hover:bg-orange-hover"
                    : "cursor-not-allowed bg-secondary text-muted-foreground"
                )}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
