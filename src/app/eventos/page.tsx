import { Metadata } from "next";
import CalendarioEventos from "@/components/eventos/CalendarioEventos";
import EventoCard from "@/components/eventos/EventoCard";
import { Crown, Ticket, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import { linksUteis } from "@/lib/data";
import type { Evento } from "@/lib/types";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Calendario de eventos e festas da Atletica Impostores. Confira as proximas datas e garanta seu ingresso!",
};

// Load events from JSON file
async function getEventos(): Promise<Evento[]> {
  try {
    const eventos = await import("@/../eventos.json");
    return eventos.default as Evento[];
  } catch {
    // Fallback events if JSON not found
    return [
      {
        data: "2026-09-27",
        tipo: "INTEGRACAO",
        titulo: "Supertenda",
        desc: "A integracao maxima das atleticas. A Impostores em peso no campo!",
        link: "",
      },
      {
        data: "2026-10-25",
        tipo: "FESTA EXTERNA",
        titulo: "UFPR: Circo dos Horrores",
        desc: "Garanta seu ingresso na Cheers com o cupom IMPOSTORES.",
        link: "https://cheers.com.br/evento/ufpr-in-rio-circo-dos-horrores-25594",
      },
      {
        data: "2026-11-20",
        tipo: "MEGA EVENTO",
        titulo: "POUPA UNI 2K26 (Inicio)",
        desc: "O maior evento do ano comecou! Florianopolis vai ficar pequena.",
        link: linksUteis.uni2026Form,
      },
      {
        data: "2026-04-12",
        tipo: "ACAO SOCIAL",
        titulo: "Pascoa Solidaria - Arrecadacao",
        desc: "Ultimo dia para comprar rifas e garantir horas complementares.",
        link: linksUteis.whatsapp,
      },
    ];
  }
}

export default async function EventosPage() {
  const eventos = await getEventos();

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute left-1/2 top-0 h-[2px] w-[300px] -translate-x-1/2 bg-blue opacity-50 blur-[40px]" />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h1 className="font-damages mb-4 text-5xl lg:text-6xl">
            Calendario <span className="text-blue">Eventos</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Os maiores eventos do ano voce so encontra aqui! Confira a agenda oficial e garanta sua presenca.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-8 rounded-2xl border border-blue/30 bg-card p-6 lg:p-8">
          <h2 className="font-damages mb-8 text-center text-3xl text-blue lg:text-4xl">
            Agenda Oficial
          </h2>
          <CalendarioEventos eventos={eventos} />
        </div>
      </section>

      {/* UNI 2K26 Highlight */}
      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
        <div className="bg-gradient-gold overflow-hidden rounded-3xl border border-gold/30">
          <div className="flex flex-col gap-8 p-8 lg:flex-row lg:p-12">
            <div className="flex-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-extrabold text-background">
                <MapPin size={18} weight="fill" />
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

              {/* Pricing */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-gold/30 bg-background/50">
                <div className="border-b border-gold/30 bg-gold/10 px-6 py-4">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-gold">
                    <Crown size={24} weight="fill" />
                    Dividendos e Custos
                  </h3>
                </div>
                <div className="divide-y divide-border">
                  <div className="flex items-center justify-between px-6 py-4">
                    <span>1 Lote (Completo)</span>
                    <span className="text-xl font-extrabold text-gold">R$ 1.400,00</span>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4">
                    <span>2 Lote (Completo)</span>
                    <span className="text-xl font-extrabold text-gold">R$ 1.440,00</span>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4">
                    <span>3 Lote (Completo)</span>
                    <span className="text-xl font-extrabold text-gold">R$ 1.470,00</span>
                  </div>
                </div>
                <div className="border-t border-gold/30 bg-background px-6 py-4">
                  <p className="text-sm text-muted-foreground">
                    Pagamento via PIX: <strong className="text-foreground">{linksUteis.pix}</strong>
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

            <div className="flex flex-1 flex-col items-center justify-center gap-6">
              <Image
                src="/images/pato-uni.png"
                alt="Pato UNI 2026"
                width={280}
                height={280}
                className="glow-gold animate-float"
              />
              <div className="w-full rounded-2xl border border-border bg-background p-6">
                <h4 className="mb-4 flex items-center gap-2 font-bold">
                  <Phone size={20} weight="fill" className="text-gold" />
                  Suporte UNI:
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Aline Santos</strong> (Pres.): (41) 99510-8205</p>
                  <p><strong className="text-foreground">Bruno Rafael</strong> (Vice): (41) 99573-7930</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Events */}
      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <h2 className="font-damages mb-8 text-center text-4xl">Eventos Parceiros</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <EventoCard
            mes="SET"
            dia="27"
            titulo="Supertenda"
            descricao="A integracao maxima das atleticas. A Impostores em peso no campo!"
            color="orange"
            icone="tent"
            linkText="Em Breve"
          />
          <EventoCard
            mes="OUT"
            dia="25"
            titulo="UFPR: Circo dos Horrores"
            descricao="Garanta seu ingresso na Cheers com o cupom da maior de contabeis."
            cupom="IMPOSTORES"
            color="blue"
            icone="mask"
            link="https://cheers.com.br/evento/ufpr-in-rio-circo-dos-horrores-25594"
            linkText="Comprar na Cheers"
          />
        </div>
      </section>
    </div>
  );
}
