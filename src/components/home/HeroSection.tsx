"use client";

import Link from "next/link";
import { HandHeart, CalendarBlank, ArrowRight } from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      {/* Background glow effect */}
      <div className="absolute left-1/2 top-0 h-[2px] w-[300px] -translate-x-1/2 bg-orange opacity-50 blur-[40px]" />
      
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8 lg:py-24">
        {/* Badge */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-2 text-sm font-bold text-orange">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange" />
          IMPOSTORES
        </span>

        {/* Main Title */}
        <h1 className="font-damages mb-6 text-4xl leading-tight sm:text-5xl text-foreground md:text-6xl lg:text-7xl">
          A Atlética Mais{" "}
          <span className="text-gold">Impostora</span>
          <br />
          da Unicesumar
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
          Comunidade, eventos e amizades que transformam a experiência universitária.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            href="/acao-social"
            className="btn-shine group flex items-center justify-center gap-2 rounded-xl bg-orange px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-orange-hover hover:shadow-lg hover:shadow-orange/30"
          >
            <HandHeart size={24} weight="fill" />
            Conhecer ações sociais
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/eventos"
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-8 py-4 text-lg font-extrabold text-foreground transition-all hover:bg-secondary"
          >
            <CalendarBlank size={24} />
            Ver Eventos
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-border bg-background/50 p-6">
            <p className="font-damages text-4xl text-gold lg:text-5xl">1.130+</p>
            <p className="mt-1 text-sm text-muted-foreground">Seguidores</p>
          </div>
          <div className="rounded-2xl border border-border bg-background/50 p-6">
            <p className="font-damages text-4xl text-gold lg:text-5xl">150+</p>
            <p className="mt-1 text-sm text-muted-foreground">Vidas Impactadas</p>
          </div>
          <div className="rounded-2xl border border-border bg-background/50 p-6">
            <p className="font-damages text-4xl text-gold lg:text-5xl">50+</p>
            <p className="mt-1 text-sm text-muted-foreground">Eventos</p>
          </div>
          <div className="rounded-2xl border border-border bg-background/50 p-6">
            <p className="font-damages text-4xl text-gold lg:text-5xl">#1</p>
            <p className="mt-1 text-sm text-muted-foreground">Atletica de Contabeis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
