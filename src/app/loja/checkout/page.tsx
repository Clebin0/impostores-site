"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Warning } from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, total, isHydrated } = useCart();

  if (!isHydrated) return null;

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <ShoppingCart size={80} className="mb-6 text-muted-foreground/30" />
        <h1 className="mb-4 text-2xl font-bold">Seu carrinho está vazio</h1>
        <p className="mb-8 text-muted-foreground">
          Adicione produtos antes de consultar as opções de compra.
        </p>
        <Link
          href="/loja"
          className="rounded-xl bg-orange px-6 py-3 font-bold text-white transition-colors hover:bg-orange-hover"
        >
          Ir para a Loja
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <Link
        href="/loja"
        className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={20} />
        Voltar para a Loja
      </Link>

      <h1 className="mb-3 text-3xl font-bold">Resumo do carrinho</h1>
      <p className="mb-8 text-muted-foreground">
        A finalização de compras está temporariamente desativada.
      </p>

      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={`${item.produto.id}-${item.tamanho ?? ""}-${item.cor ?? ""}-${item.nomePersonalizado ?? ""}`}
              className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={item.produto.imagem}
                  alt={item.produto.nome}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold">{item.produto.nome}</h2>
                <p className="text-sm text-muted-foreground">
                  {item.quantidade}x R$ {item.produto.preco.toFixed(2)}
                  {item.tamanho && ` | ${item.tamanho}`}
                  {item.cor && ` | ${item.cor}`}
                </p>
              </div>
              <div className="font-bold text-gold">
                R$ {(item.produto.preco * item.quantidade).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-border pt-6">
          <div className="flex items-center justify-between text-xl font-bold">
            <span>Total estimado:</span>
            <span className="text-gold">R$ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div
        role="status"
        className="mt-8 flex items-start gap-3 rounded-xl border border-orange/30 bg-orange/5 p-4"
      >
        <Warning size={24} className="flex-shrink-0 text-orange" />
        <p className="text-sm text-muted-foreground">
          Nenhum pedido foi enviado e nenhum pagamento foi solicitado. Não informe dados pessoais ou
          faça transferências por links ou chaves compartilhados fora dos canais oficiais. A compra
          será habilitada quando houver um fluxo de pedidos, política de privacidade e provedor de
          pagamento devidamente configurados.
        </p>
      </div>
    </div>
  );
}
