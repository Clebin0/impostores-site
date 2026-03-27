"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Copy,
  Check,
  WhatsappLogo,
  ShoppingCart,
  QrCode,
  Warning,
  CheckCircle,
} from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";
import { linksUteis } from "@/lib/data";
import clsx from "clsx";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<"review" | "payment" | "success">("review");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    observacoes: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(linksUteis.pix);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handleConfirmPayment = () => {
    setStep("success");
    clearCart();
  };

  const formatWhatsAppMessage = () => {
    const itemsList = items
      .map(
        (item) =>
          `- ${item.produto.nome} (${item.quantidade}x R$${item.produto.preco.toFixed(2)})${
            item.tamanho ? ` | Tam: ${item.tamanho}` : ""
          }${item.cor ? ` | Cor: ${item.cor}` : ""}${
            item.nomePersonalizado ? ` | Nome: ${item.nomePersonalizado}` : ""
          }`
      )
      .join("%0A");

    return `Ola! Gostaria de finalizar meu pedido:%0A%0A${itemsList}%0A%0A*Total: R$ ${total.toFixed(
      2
    )}*%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${
      formData.telefone
    }%0A${formData.observacoes ? `Obs: ${formData.observacoes}` : ""}`;
  };

  if (!mounted) {
    return null;
  }

  if (items.length === 0 && step !== "success") {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <ShoppingCart size={80} className="mb-6 text-muted-foreground/30" />
        <h1 className="mb-4 text-2xl font-bold">Seu carrinho esta vazio</h1>
        <p className="mb-8 text-muted-foreground">
          Adicione produtos antes de finalizar o pedido.
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
      {/* Back Button */}
      {step !== "success" && (
        <Link
          href="/loja"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={20} />
          Voltar para a Loja
        </Link>
      )}

      {/* Progress Steps */}
      {step !== "success" && (
        <div className="mb-12 flex items-center justify-center gap-4">
          {["review", "payment"].map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <div
                className={clsx(
                  "flex h-10 w-10 items-center justify-center rounded-full font-bold",
                  step === s
                    ? "bg-orange text-white"
                    : step === "payment" && s === "review"
                    ? "bg-green text-white"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {step === "payment" && s === "review" ? (
                  <Check size={20} weight="bold" />
                ) : (
                  i + 1
                )}
              </div>
              {i < 1 && <div className="h-0.5 w-12 bg-border" />}
            </div>
          ))}
        </div>
      )}

      {/* Review Step */}
      {step === "review" && (
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h1 className="mb-6 text-2xl font-bold">Informacoes de Contato</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block font-semibold">Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold">Telefone (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                  placeholder="(41) 99999-9999"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold">Observacoes</label>
                <textarea
                  value={formData.observacoes}
                  onChange={(e) =>
                    setFormData({ ...formData, observacoes: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                  placeholder="Alguma observacao sobre o pedido?"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-orange py-4 font-extrabold text-white transition-colors hover:bg-orange-hover"
              >
                Continuar para Pagamento
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Resumo do Pedido</h2>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.produto.id}-${index}`}
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
                      <h4 className="font-semibold">{item.produto.nome}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.quantidade}x R$ {item.produto.preco.toFixed(2)}
                        {item.tamanho && ` | ${item.tamanho}`}
                        {item.cor && ` | ${item.cor}`}
                      </p>
                      {item.nomePersonalizado && (
                        <p className="text-sm text-gold">
                          Nome: {item.nomePersonalizado}
                        </p>
                      )}
                    </div>
                    <div className="font-bold text-gold">
                      R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-gold">R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Step */}
      {step === "payment" && (
        <div className="mx-auto max-w-lg text-center">
          <QrCode size={64} className="mx-auto mb-6 text-gold" />
          <h1 className="mb-4 text-2xl font-bold">Pagamento via PIX</h1>
          <p className="mb-8 text-muted-foreground">
            Faca o pagamento via PIX e envie o comprovante pelo WhatsApp.
          </p>

          {/* PIX Key */}
          <div className="mb-8 rounded-2xl border border-gold/30 bg-gold/5 p-6">
            <p className="mb-2 text-sm font-semibold text-gold">Chave PIX (Email)</p>
            <div className="flex items-center justify-center gap-3">
              <code className="text-lg font-bold">{linksUteis.pix}</code>
              <button
                onClick={handleCopyPix}
                className={clsx(
                  "rounded-lg p-2 transition-colors",
                  copied ? "bg-green text-white" : "bg-secondary hover:bg-border"
                )}
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="mb-8 rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Valor a Pagar</p>
            <p className="font-damages text-5xl text-gold">R$ {total.toFixed(2)}</p>
          </div>

          {/* Warning */}
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-orange/30 bg-orange/5 p-4 text-left">
            <Warning size={24} className="flex-shrink-0 text-orange" />
            <p className="text-sm text-muted-foreground">
              Apos o pagamento, envie o comprovante pelo WhatsApp junto com os detalhes do seu pedido para confirmacao.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <a
              href={`https://wa.me/5541995108205?text=${formatWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green py-4 font-extrabold text-white transition-colors hover:opacity-90"
            >
              <WhatsappLogo size={24} weight="fill" />
              Enviar Comprovante via WhatsApp
            </a>
            <button
              onClick={handleConfirmPayment}
              className="rounded-xl border border-border py-4 font-bold transition-colors hover:bg-secondary"
            >
              Ja Enviei o Comprovante
            </button>
          </div>
        </div>
      )}

      {/* Success Step */}
      {step === "success" && (
        <div className="mx-auto max-w-lg py-12 text-center">
          <CheckCircle size={80} weight="fill" className="mx-auto mb-6 text-green" />
          <h1 className="mb-4 text-3xl font-bold">Pedido Realizado!</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Seu pedido foi registrado com sucesso. Aguarde o contato da nossa equipe para confirmacao e entrega.
          </p>
          <div className="rounded-2xl border border-green/30 bg-green/5 p-6 text-left">
            <h3 className="mb-3 font-bold text-green">Proximos Passos:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check size={20} className="mt-0.5 flex-shrink-0 text-green" />
                Envie o comprovante do PIX pelo WhatsApp (se ainda nao enviou)
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="mt-0.5 flex-shrink-0 text-green" />
                Aguarde a confirmacao do pagamento
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="mt-0.5 flex-shrink-0 text-green" />
                Combine a retirada na faculdade
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-orange px-8 py-4 font-bold text-white transition-colors hover:bg-orange-hover"
          >
            Voltar para o Inicio
          </Link>
        </div>
      )}
    </div>
  );
}
