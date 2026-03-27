"use client";

import Image from "next/image";
import Link from "next/link";
import { Crown, Ticket, Phone, MapPin, Calendar } from "@phosphor-icons/react";
import { linksUteis } from "@/lib/data";

export default function UniSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="bg-gradient-gold overflow-hidden rounded-3xl border border-gold/30">
        <div className="flex flex-col gap-8 p-8 lg:flex-row lg:p-12">
          {/* Content */}
          <div className="flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-extrabold text-background">
              <Calendar size={18} weight="fill" />
              20, 21 E 22 DE NOVEMBRO | FLORIANOPOLIS
            </div>

            <h2 className="font-damages mb-4 text-5xl text-gold lg:text-6xl">
              POUPA UNI 2K26
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Fala, Patinhos! O Patao esta de volta. Pacote completo: transporte
              (Curitiba-Florianopolis), hospedagem, festas e o Kit Impostores
              exclusivo.
            </p>

            {/* Pricing Table */}
            <div className="mb-8 overflow-hidden rounded-2xl border border-gold/30 bg-background/50">
              <div className="border-b border-gold/30 bg-gold/10 px-6 py-4">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gold">
                  <Crown size={24} weight="fill" />
                  Dividendos e Custos
                </h3>
              </div>
              <div className="divide-y divide-border">
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-foreground">1 Lote (Completo)</span>
                  <span className="text-xl font-extrabold text-gold">
                    R$ 1.400,00
                  </span>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-foreground">2 Lote (Completo)</span>
                  <span className="text-xl font-extrabold text-gold">
                    R$ 1.440,00
                  </span>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-foreground">3 Lote (Completo)</span>
                  <span className="text-xl font-extrabold text-gold">
                    R$ 1.470,00
                  </span>
                </div>
              </div>
              <div className="border-t border-gold/30 bg-background px-6 py-4">
                <p className="text-sm text-muted-foreground">
                  Pagamento via PIX:{" "}
                  <strong className="text-foreground">{linksUteis.pix}</strong>
                </p>
              </div>
            </div>

            <Link
              href={linksUteis.uni2026Form}
              target="_blank"
              className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-extrabold text-background transition-all hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/30"
            >
              <Ticket size={24} weight="fill" />
              Inscricao UNI 2K26
            </Link>
          </div>

          {/* Right side */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            <Image
              src="/images/pato-uni.png"
              alt="Pato UNI 2026"
              width={300}
              height={300}
              className="glow-gold animate-float"
            />

            {/* Support Card */}
            <div className="w-full rounded-2xl border border-border bg-background p-6">
              <h4 className="mb-4 flex items-center gap-2 font-bold text-foreground">
                <Phone size={20} weight="fill" className="text-gold" />
                Suporte UNI:
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Aline Santos</strong>{" "}
                  (Pres.): (41) 99510-8205
                </p>
                <p>
                  <strong className="text-foreground">Bruno Rafael</strong>{" "}
                  (Vice): (41) 99573-7930
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-gold">
                <MapPin size={16} weight="fill" />
                Florianopolis, SC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
