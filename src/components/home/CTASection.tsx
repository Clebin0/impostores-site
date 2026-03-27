"use client";

import Link from "next/link";
import Image from "next/image";
import { Vault, HandHeart, ArrowRight } from "@phosphor-icons/react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Loja CTA */}
        <div className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-card to-[#1a1400] p-8 lg:p-12">
          <div className="absolute -right-10 -top-10 opacity-10">
            <Image
              src="/images/pato.png"
              alt=""
              width={200}
              height={200}
              className="rotate-12"
            />
          </div>
          <div className="relative z-10">
            <Vault
              size={64}
              weight="duotone"
              className="mb-6 text-gold"
            />
            <h3 className="font-damages mb-4 text-3xl text-gold lg:text-4xl">
              Acesse a Loja
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Confira nossos produtos exclusivos: moletons, camisetas, copos e
              muito mais. Vista a camisa e faca parte da familia.
            </p>
            <Link
              href="/loja"
              className="btn-shine group inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 font-extrabold text-background transition-all hover:bg-gold-hover"
            >
              Ver Produtos
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Acao Social CTA */}
        <div className="group relative overflow-hidden rounded-3xl border border-green/30 bg-gradient-to-br from-card to-[#001a0a] p-8 lg:p-12">
          <div className="absolute -right-10 -top-10 opacity-10">
            <Image
              src="/images/mascote.png"
              alt=""
              width={200}
              height={200}
              className="-rotate-12"
            />
          </div>
          <div className="relative z-10">
            <HandHeart
              size={64}
              weight="duotone"
              className="mb-6 text-green"
            />
            <h3 className="font-damages mb-4 text-3xl text-green lg:text-4xl">
              Acao Social
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Participe das nossas acoes solidarias, ajude quem precisa e ainda
              garanta suas horas complementares.
            </p>
            <Link
              href="/acao-social"
              className="btn-shine group inline-flex items-center gap-2 rounded-xl bg-green px-6 py-3 font-extrabold text-background transition-all hover:opacity-90"
            >
              Participar
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
