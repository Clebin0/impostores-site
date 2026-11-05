"use client";

import Link from "next/link";
import { HandHeart, InstagramLogo, UsersThree } from "@phosphor-icons/react";
import { linksUteis } from "@/lib/data";

export default function AcaoSocialPage() {
  return (
    <div className="animate-fade-in">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#101012]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F16A24]/10 via-transparent to-[#101012]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <h1 className="font-damages mb-6 max-w-4xl text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Ações <span className="text-gold">sociais</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Este espaço reúne informações sobre iniciativas comunitárias, voluntariado e campanhas
            da Atlética Impostores.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-border bg-card p-8">
          <HandHeart size={40} weight="duotone" className="mb-5 text-orange" />
          <h2 className="mb-3 text-2xl font-bold">Campanhas e arrecadações</h2>
          <p className="text-muted-foreground">
            Não há campanha de arrecadação ou pagamento habilitada nesta página neste momento.
            Regras, responsáveis, destino dos recursos e período de participação devem ser
            publicados antes da abertura de qualquer campanha.
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-8">
          <UsersThree size={40} weight="duotone" className="mb-5 text-orange" />
          <h2 className="mb-3 text-2xl font-bold">Voluntariado</h2>
          <p className="text-muted-foreground">
            Informações sobre participação em ações presenciais e iniciativas comunitárias serão
            divulgadas pelos canais institucionais.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 text-center lg:px-8">
        <h2 className="font-damages mb-4 text-4xl">Acompanhe os canais oficiais</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Consulte as publicações oficiais para confirmar se uma iniciativa está ativa e conhecer
          suas regras. Não faça transferências com base em chaves ou links compartilhados fora
          desses canais.
        </p>
        <Link
          href={linksUteis.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-orange-hover"
        >
          <InstagramLogo size={24} weight="fill" />
          Instagram da Atlética
        </Link>
      </section>
    </div>
  );
}
