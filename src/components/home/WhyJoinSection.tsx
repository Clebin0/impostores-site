"use client";

import {
  TrendUp,
  UsersThree,
  Handshake,
  Trophy,
  GraduationCap,
  Heart,
} from "@phosphor-icons/react";

const benefits = [
  {
    icon: TrendUp,
    title: "Ativo de Carreira",
    description:
      "Sua participacao na atletica conta como experiencia de gestao e trabalho em equipe em processos seletivos. Grandes empresas valorizam isso!",
    color: "text-gold",
  },
  {
    icon: UsersThree,
    title: "Balanco Social",
    description:
      "Conecte-se com alunos de todos os periodos e crie uma rede de contatos poderosa para o futuro. Networking e tudo!",
    color: "text-gold",
  },
  {
    icon: Handshake,
    title: "Compliance Esportivo",
    description:
      "Represente o curso em competicoes e treine sua resiliencia e foco nos resultados dentro e fora de quadra.",
    color: "text-gold",
  },
  {
    icon: Trophy,
    title: "Conquistas e Trofeus",
    description:
      "Faca parte de uma equipe vencedora. Nossas delegacoes sempre se destacam em jogos universitarios e interatleticas.",
    color: "text-orange",
  },
  {
    icon: GraduationCap,
    title: "Horas Complementares",
    description:
      "Participe de eventos e acoes sociais para acumular horas que voce vai precisar para se formar. Util e divertido!",
    color: "text-orange",
  },
  {
    icon: Heart,
    title: "Amizades para a Vida",
    description:
      "As melhores amizades sao feitas nos corredores da faculdade. Na atletica, voce encontra sua galera.",
    color: "text-orange",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-damages mb-4 text-center text-4xl lg:text-5xl">
          Por que investir tempo nos Impostores?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          Ser parte da atletica e muito mais do que participar de festas. E
          construir seu futuro enquanto se diverte.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card-hover group rounded-2xl border border-border bg-background p-8 text-center"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-secondary p-4 ${benefit.color}`}
                >
                  <Icon size={48} weight="duotone" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
