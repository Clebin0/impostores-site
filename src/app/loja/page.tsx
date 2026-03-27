import { Metadata } from "next";
import ProdutoCard from "@/components/loja/ProdutoCard";
import { produtos } from "@/lib/data";
import { Vault, TShirt, Package, Sparkle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loja",
  description: "Loja oficial da Atletica Impostores. Moletons, camisetas, copos e acessorios exclusivos.",
};

export default function LojaPage() {
  const vestuario = produtos.filter((p) => p.categoria === "vestuario");
  const acessorios = produtos.filter((p) => p.categoria === "acessorios");
  const kits = produtos.filter((p) => p.categoria === "kit");

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute left-1/2 top-0 h-[2px] w-[300px] -translate-x-1/2 bg-gold opacity-50 blur-[40px]" />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h1 className="font-damages mb-4 text-5xl lg:text-6xl">
            A <span className="text-gold">Loja</span> Impostores
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Vista a camisa e faca parte da familia. Produtos exclusivos com a qualidade que voce merece.
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm">
            <div className="rounded-full bg-green/10 p-2 text-green">
              <Package size={20} weight="fill" />
            </div>
            <span className="text-muted-foreground">Entrega na Faculdade</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="rounded-full bg-gold/10 p-2 text-gold">
              <Sparkle size={20} weight="fill" />
            </div>
            <span className="text-muted-foreground">Personalizacao Disponivel</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="rounded-full bg-orange/10 p-2 text-orange">
              <Vault size={20} weight="fill" />
            </div>
            <span className="text-muted-foreground">PIX: impostoresunicesumar@gmail.com</span>
          </div>
        </div>
      </section>

      {/* Kits Section */}
      {kits.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Sparkle size={32} weight="duotone" className="text-gold" />
            <h2 className="font-damages text-3xl">Kits Especiais</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kits.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      )}

      {/* Vestuario Section */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <TShirt size={32} weight="duotone" className="text-orange" />
            <h2 className="font-damages text-3xl">Vestuario</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vestuario.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </section>

      {/* Acessorios Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Package size={32} weight="duotone" className="text-blue" />
          <h2 className="font-damages text-3xl">Acessorios</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {acessorios.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      {/* Restock Notice */}
      <section className="mx-auto max-w-4xl px-4 pb-20 lg:px-8">
        <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
          <Vault size={48} className="mx-auto mb-4 text-muted-foreground/30" />
          <h3 className="mb-2 text-lg font-bold">Quer ser avisado sobre reposicao?</h3>
          <p className="mb-6 text-muted-foreground">
            Entre em contato com a Diretoria de Produtos pelo nosso Instagram.
          </p>
          <Link
            href="https://www.instagram.com/impostoresuc/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3 font-bold text-white transition-colors hover:bg-orange-hover"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}
