"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogo,
} from "@phosphor-icons/react";
import { piadasContabeis, linksUteis } from "@/lib/data";

export default function Footer() {
  const [showJoke, setShowJoke] = useState(false);
  const [joke, setJoke] = useState("");

  const handleMascoteClick = () => {
    const randomJoke =
      piadasContabeis[Math.floor(Math.random() * piadasContabeis.length)];
    setJoke(randomJoke);
    setShowJoke(true);
    setTimeout(() => setShowJoke(false), 3000);
  };

  return (
    <footer className="border-t border-border bg-card">
      {/* Partners Marquee */}
      <div className="overflow-hidden border-b border-border py-8">
        <h3 className="font-damages mb-6 text-center text-2xl text-muted-foreground">
          Quem está com a gente
        </h3>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card to-transparent" />
          <div className="animate-marquee flex w-max gap-16 pr-16">
            {[...Array(10)].map((_, i) => (
              <Link
                key={i}
                href={linksUteis.socio}
                target="_blank"
                className="flex items-center gap-3 text-xl font-extrabold text-muted-foreground transition-colors hover:text-gold"
              >
                <Image
                  src="/images/bar-pedrao.png"
                  alt="Pedrao Bar"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                Pedrao Bar
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 text-center lg:px-8">
        {/* Mascote with Easter Egg */}
        <div className="relative mb-8 inline-block">
          <button
            onClick={handleMascoteClick}
            className="rounded-xl transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            aria-label="Clique no mascote para uma surpresa"
          >
            <Image
              src="/images/mascote.png"
              alt="Mascote Impostores"
              width={150}
              height={150}
              className="h-36 w-auto cursor-pointer"
            />
          </button>
          {showJoke && (
            <div className="absolute -top-4 left-1/2 z-20 w-64 -translate-x-1/2 -translate-y-full animate-fade-in rounded-xl border border-gold bg-card p-4 text-sm text-foreground shadow-lg">
              <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-gold bg-card" />
              {joke}
            </div>
          )}
        </div>

        {/* Social Icons */}
        <div className="mb-6 flex justify-center gap-6">
          <Link
            href={linksUteis.instagram}
            target="_blank"
            className="text-4xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-orange"
            aria-label="Instagram"
          >
            <InstagramLogo weight="fill" />
          </Link>
        </div>

        {/* Info */}
        <p className="text-lg font-extrabold">Atlética Impostores</p>
        <p className="mt-1 text-sm text-muted-foreground">
          A.A.A.C.S.A - Associação Atlética Acadêmica Ciências Sociais Aplicadas
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          UniCesumar Curitiba | #FazoQuack
        </p>

        {/* Copyright */}
        <p className="mt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Atletica Impostores. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
