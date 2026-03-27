import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Ticket,
  Crown,
  CheckCircle,
  ArrowRight,
  BeerStein,
  Users,
  MusicNotes,
} from "@phosphor-icons/react/dist/ssr";
import { linksUteis } from "@/lib/data";

export const metadata: Metadata = {
  title: "Parceiros",
  description: "Parcerias estrategicas da Atletica Impostores. Conheca nosso socio oficial e seus beneficios.",
};

const beneficios = [
  {
    icon: Ticket,
    titulo: "Entrada VIP",
    descricao: "Catraca livre em todos os eventos do Pedrao Bar",
  },
  {
    icon: BeerStein,
    titulo: "Precos Exclusivos",
    descricao: "Descontos especiais em bebidas e produtos",
  },
  {
    icon: Users,
    titulo: "Acesso Prioritario",
    descricao: "Prioridade em eventos lotados e festas especiais",
  },
  {
    icon: MusicNotes,
    titulo: "Eventos Exclusivos",
    descricao: "Convites para festas privadas e shows especiais",
  },
];

export default function ParceirosPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute left-1/2 top-0 h-[2px] w-[300px] -translate-x-1/2 bg-blue opacity-50 blur-[40px]" />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h1 className="font-damages mb-4 text-5xl lg:text-6xl">
            Clube de <span className="text-blue">Vantagens</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Parcerias estrategicas para o seu balanco social. Beneficios exclusivos para membros da Impostores.
          </p>
        </div>
      </section>

      {/* Main Partner Card */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="bg-gradient-blue overflow-hidden rounded-3xl border border-blue/30">
          <div className="flex flex-col gap-8 p-8 lg:flex-row lg:p-12">
            {/* Content */}
            <div className="flex-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue px-4 py-2 text-sm font-extrabold text-white">
                <Star size={18} weight="fill" />
                PARCEIRO OFICIAL
              </div>

              <h2 className="font-damages mb-4 text-4xl lg:text-5xl">
                Socio <span className="text-blue">Pedrao Bar</span>
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Assine o plano semestral da Impostores e garanta acesso VIP ao
                Pedrao Bar, o point oficial das atleticas de Curitiba. Entrada
                garantida, sem filas, sem estresse.
              </p>

              {/* Price */}
              <div className="mb-8 flex items-end gap-2">
                <span className="font-damages text-5xl text-gold lg:text-6xl">
                  R$ 30
                </span>
                <span className="mb-2 text-xl text-muted-foreground">,00</span>
                <span className="mb-2 text-lg text-muted-foreground">
                  /semestre
                </span>
              </div>

              {/* CTA */}
              <Link
                href={linksUteis.socio}
                target="_blank"
                className="btn-shine group inline-flex items-center gap-2 rounded-xl bg-blue px-8 py-4 text-lg font-extrabold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-blue/30"
              >
                <Crown size={24} weight="fill" />
                Assinar Agora
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Image */}
            <div className="flex flex-1 items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/bar-pedrao.png"
                  alt="Pedrao Bar"
                  width={400}
                  height={400}
                  className="glow-blue rounded-2xl border-2 border-blue"
                />
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-gold/30 bg-card px-4 py-2">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} weight="fill" className="text-gold" />
                    <span className="font-bold">Curitiba, PR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-damages mb-12 text-center text-4xl">
            O Que Voce Ganha
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <div
                  key={index}
                  className="card-hover rounded-2xl border border-border bg-background p-6 text-center"
                >
                  <div className="mx-auto mb-4 inline-flex rounded-2xl bg-blue/10 p-4 text-blue">
                    <Icon size={40} weight="duotone" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground">{beneficio.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-damages mb-12 text-center text-4xl">
          Como Funciona
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Faca sua Assinatura",
              desc: "Acesse o link da Cheers e complete o cadastro com seus dados.",
            },
            {
              step: "2",
              title: "Receba seu Acesso",
              desc: "Voce recebera a confirmacao e seu carteirinha digital de socio.",
            },
            {
              step: "3",
              title: "Aproveite os Beneficios",
              desc: "Apresente sua carteirinha na entrada e aproveite!",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-2 font-black text-background">
                {item.step}
              </div>
              <h3 className="mb-3 mt-4 text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-damages mb-12 text-center text-4xl">
            Duvidas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                pergunta: "Quanto tempo dura a assinatura?",
                resposta:
                  "A assinatura tem validade de 6 meses (1 semestre letivo).",
              },
              {
                pergunta: "Posso cancelar a qualquer momento?",
                resposta:
                  "A assinatura nao e reembolsavel, mas voce pode optar por nao renovar ao final do periodo.",
              },
              {
                pergunta: "Como funciona a entrada VIP?",
                resposta:
                  "Basta apresentar sua carteirinha digital na entrada do Pedrao Bar. Voce tera acesso prioritario sem pagar entrada.",
              },
              {
                pergunta: "Preciso ser aluno da Unicesumar?",
                resposta:
                  "Sim, o plano Socio Impostores e exclusivo para alunos e ex-alunos do curso de Ciencias Contabeis da Unicesumar.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="mb-2 flex items-center gap-2 font-bold">
                  <CheckCircle size={20} className="text-blue" />
                  {faq.pergunta}
                </h3>
                <p className="pl-7 text-muted-foreground">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center lg:px-8">
        <Crown size={64} weight="duotone" className="mx-auto mb-6 text-gold" />
        <h2 className="font-damages mb-4 text-4xl">
          Pronto para Virar Socio?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Garanta sua assinatura agora e aproveite todos os beneficios exclusivos.
        </p>
        <Link
          href={linksUteis.socio}
          target="_blank"
          className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-lg font-extrabold text-background transition-all hover:bg-gold-hover"
        >
          <Crown size={24} weight="fill" />
          Assinar por R$ 30,00
        </Link>
      </section>
    </div>
  );
}
