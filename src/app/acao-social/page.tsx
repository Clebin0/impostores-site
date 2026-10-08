"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HandHeart,
  UsersThree,
  Camera,
  WhatsappLogo,
  CheckCircle,
  ClockUser,
  Gift,
  Heart,
  Trophy,
} from "@phosphor-icons/react";
import { linksUteis } from "@/lib/data";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 15);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AcaoSocialPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#101012]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F16A24]/10 via-transparent to-[#101012]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 text-left sm:px-8 sm:py-24 lg:py-28">
          <h1 className="font-damages mb-6 max-w-4xl text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Pascoa <span className="text-gold">Solidaria</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            O valor arrecadado sera destinado a compra de produtos de higiene para doacao comunitaria.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Objetivo Card */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              <HandHeart size={32} weight="fill" className="text-orange" />
              O Objetivo
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Estamos arrecadando rifas para a acao social de Pascoa. Contamos com o apoio de todos! A campanha beneficia familias em situacao de vulnerabilidade.
            </p>

            <h3 className="mb-4 text-lg font-bold text-gold">
              Incentivo (Unicesumar):
            </h3>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center gap-3 text-lg font-semibold">
                <CheckCircle size={24} weight="fill" className="text-green" />
                2 numeros: <span className="text-gold">5 horas complementares</span>
              </li>
              <li className="flex items-center gap-3 text-lg font-semibold">
                <CheckCircle size={24} weight="fill" className="text-green" />
                4 numeros: <span className="text-gold">10 horas complementares</span>
              </li>
            </ul>

            <p className="border-t border-border pt-4 text-sm text-muted-foreground italic">
              * As horas complementares sao validas apenas para alunos do Campus Unicesumar.
            </p>
          </div>

          {/* Rifa Card */}
          <div className="flex flex-col justify-center rounded-2xl border-0 bg-gradient-to-br from-orange to-orange-hover p-8 text-center text-white">
            <Gift size={64} weight="duotone" className="mx-auto mb-4" />
            <h2 className="mb-4 text-3xl font-bold">Rifa de Pascoa</h2>
            <div className="mb-6">
              <span className="text-6xl font-black text-gold">R$ 5</span>
              <span className="text-2xl opacity-80">,00</span>
            </div>
            <p className="mb-8 text-lg opacity-90">
              PIX: <strong>{linksUteis.pix}</strong>
            </p>
            <Link
              href={linksUteis.whatsapp}
              target="_blank"
              className="mx-auto inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-extrabold text-orange transition-all hover:scale-105"
            >
              <WhatsappLogo size={24} weight="fill" />
              Garantir Numeros
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-damages mb-12 text-center text-4xl">O Nosso Impacto</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-hover rounded-2xl border border-border bg-background p-8 text-center">
              <UsersThree size={48} weight="duotone" className="mx-auto mb-4 text-gold" />
              <h3 className="font-damages text-5xl text-gold">
                {mounted ? <AnimatedCounter target={150} suffix="+" /> : "0+"}
              </h3>
              <p className="mt-2 text-muted-foreground">Vidas Impactadas</p>
            </div>

            <div className="card-hover rounded-2xl border border-border bg-background p-8 text-center">
              <Trophy size={48} weight="duotone" className="mx-auto mb-4 text-gold" />
              <h3 className="font-damages text-5xl text-gold">
                {mounted ? <AnimatedCounter target={5} suffix="+" /> : "0+"}
              </h3>
              <p className="mt-2 text-muted-foreground">Acoes Realizadas</p>
            </div>

            <div className="card-hover rounded-2xl border border-border bg-background p-8 text-center">
              <Heart size={48} weight="duotone" className="mx-auto mb-4 text-gold" />
              <h3 className="font-damages text-5xl text-gold">
                {mounted ? <AnimatedCounter target={50} suffix="+" /> : "0+"}
              </h3>
              <p className="mt-2 text-muted-foreground">Voluntarios</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-damages mb-12 text-center text-4xl">Como Participar</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { step: "1", title: "Compre a Rifa", desc: "Adquira seus numeros via PIX" },
            { step: "2", title: "Envie o Comprovante", desc: "Mande pelo WhatsApp" },
            { step: "3", title: "Participe do Sorteio", desc: "Concorra a premios incriveis" },
            { step: "4", title: "Ganhe Horas", desc: "Receba suas horas complementares" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange text-3xl font-black text-white">
                {item.step}
              </div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hours Calculation */}
      <section className="mx-auto max-w-4xl px-4 pb-16 lg:px-8">
        <div className="rounded-2xl border border-gold/30 bg-card p-8">
          <div className="flex items-center gap-4 border-b border-border pb-6">
            <ClockUser size={48} weight="duotone" className="text-gold" />
            <div>
              <h2 className="text-2xl font-bold">Calculadora de Horas</h2>
              <p className="text-muted-foreground">Veja quantas horas voce pode acumular</p>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Quantidade de Rifas</th>
                  <th className="px-6 py-4 text-left font-bold">Valor</th>
                  <th className="px-6 py-4 text-left font-bold text-gold">Horas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-4">2 numeros</td>
                  <td className="px-6 py-4">R$ 10,00</td>
                  <td className="px-6 py-4 font-bold text-gold">5 horas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">4 numeros</td>
                  <td className="px-6 py-4">R$ 20,00</td>
                  <td className="px-6 py-4 font-bold text-gold">10 horas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">6 numeros</td>
                  <td className="px-6 py-4">R$ 30,00</td>
                  <td className="px-6 py-4 font-bold text-gold">15 horas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">8 numeros</td>
                  <td className="px-6 py-4">R$ 40,00</td>
                  <td className="px-6 py-4 font-bold text-gold">20 horas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <Camera size={64} className="mx-auto mb-4 text-muted-foreground/30" />
          <h3 className="text-2xl font-bold text-muted-foreground">Albuns em Breve</h3>
          <p className="mt-2 text-muted-foreground">
            Fotos das acoes sociais serao adicionadas em breve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-8">
        <h2 className="font-damages mb-4 text-4xl">Faca a Diferenca</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Cada rifa comprada e uma vida impactada. Participe da nossa acao solidaria e ajude quem mais precisa.
        </p>
        <Link
          href={linksUteis.whatsapp}
          target="_blank"
          className="btn-shine inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-orange-hover"
        >
          <WhatsappLogo size={28} weight="fill" />
          Comprar Rifa Agora
        </Link>
      </section>
    </div>
  );
}
