import { Metadata } from "next";
import {
  ClockUser,
  Laptop,
  Calculator,
  Books,
  GraduationCap,
  Student,
  ChartLineUp,
  WhatsappLogo,
  InstagramLogo,
  Lightbulb,
  Warning,
  CheckCircle,
  Coffee,
  Briefcase,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import { linksUteis } from "@/lib/data";

export const metadata: Metadata = {
  title: "Guia do Calouro",
  description: "Tudo o que voce precisa saber para sobreviver (e dominar) o curso de Ciencias Contabeis na Unicesumar.",
};

const dicasPrincipais = [
  {
    icon: ClockUser,
    title: "Horas Complementares",
    description: "Fique de olho nas Acoes Sociais e eventos da Atletica. Voce vai precisar dessas horas para conseguir se formar sem desespero no ultimo ano! A Unicesumar exige um minimo de horas para a formatura.",
    color: "text-green",
    bgColor: "bg-green/10",
    borderColor: "border-green/30",
  },
  {
    icon: Laptop,
    title: "Portal Studeo",
    description: "Acompanhe o portal diariamente. Prazos de provas, atividades (MAPA) e boletos nao costumam ter perdao. Organizacao e tudo. Configure alertas no seu celular!",
    color: "text-green",
    bgColor: "bg-green/10",
    borderColor: "border-green/30",
  },
  {
    icon: Calculator,
    title: "Calculadora HP12C",
    description: "Sua nova melhor amiga de jornada. Quanto mais cedo voce aprender a mexer nela, mais facil sera a sua vida na matematica financeira. Baixe o emulador no celular e pratique!",
    color: "text-green",
    bgColor: "bg-green/10",
    borderColor: "border-green/30",
  },
];

const dicasExtras = [
  {
    icon: Books,
    title: "Biblioteca Virtual",
    description: "A Unicesumar oferece acesso a milhares de livros digitais. Use e abuse desse recurso para estudar e complementar o conteudo das aulas.",
  },
  {
    icon: Coffee,
    title: "Intervalo Estrategico",
    description: "Use os intervalos para networking. Conheca pessoas de outros periodos, troque experiencias e faca amizades que vao durar a vida toda.",
  },
  {
    icon: ChartLineUp,
    title: "Bolsa de Estudos",
    description: "Fique atento aos programas de bolsa e descontos. A universidade oferece diversas opcoes para quem tem bom desempenho academico.",
  },
  {
    icon: Briefcase,
    title: "Estagios",
    description: "Comece a buscar estagios a partir do 3o periodo. A experiencia pratica faz toda diferenca no mercado de trabalho contabil.",
  },
  {
    icon: Users,
    title: "Grupos de Estudo",
    description: "Forme grupos de estudo com colegas. Estudar em grupo ajuda na fixacao do conteudo e torna a jornada mais leve e divertida.",
  },
  {
    icon: Lightbulb,
    title: "Monitoria",
    description: "Se tiver dificuldade em alguma materia, procure os monitores. Eles estao la para ajudar e tirar duvidas especificas.",
  },
];

const sobrevivencia = [
  {
    titulo: "Primeira Semana",
    itens: [
      "Conheca o campus e saiba onde ficam os principais locais",
      "Adicione colegas de turma no WhatsApp",
      "Baixe o app do Portal Studeo no celular",
      "Anote todas as datas importantes no calendario",
    ],
  },
  {
    titulo: "Primeiro Mes",
    itens: [
      "Crie uma rotina de estudos (pelo menos 2h por dia)",
      "Participe de pelo menos um evento da atletica",
      "Conheca os veteranos e peca dicas",
      "Comece a praticar com a HP12C",
    ],
  },
  {
    titulo: "Primeiro Semestre",
    itens: [
      "Acumule pelo menos 20 horas complementares",
      "Faca todas as atividades MAPA sem atrasar",
      "Construa sua rede de contatos",
      "Avalie seu desempenho e ajuste a estrategia",
    ],
  },
];

export default function GuiaCalouroPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute left-1/2 top-0 h-[2px] w-[300px] -translate-x-1/2 bg-green opacity-50 blur-[40px]" />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h1 className="font-damages mb-4 text-5xl lg:text-6xl">
            Guia do <span className="text-green">Calouro</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tudo o que voce precisa saber para sobreviver (e dominar) o curso de Ciencias Contabeis na Unicesumar. Seja bem-vindo ao time!
          </p>
        </div>
      </section>

      {/* Main Tips */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <div className="flex flex-col gap-6">
          {dicasPrincipais.map((dica, index) => {
            const Icon = dica.icon;
            return (
              <div
                key={index}
                className={`card-hover flex flex-col items-center rounded-2xl border ${dica.borderColor} bg-card p-8 text-center md:flex-row md:text-left`}
              >
                <div className={`mb-4 rounded-2xl ${dica.bgColor} p-4 md:mb-0 md:mr-6`}>
                  <Icon size={56} weight="duotone" className={dica.color} />
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold">{dica.title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {dica.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Survival Guide */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-damages mb-12 text-center text-4xl">
            <GraduationCap className="mb-2 inline text-green" size={48} weight="duotone" />
            <br />
            Checklist de Sobrevivencia
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {sobrevivencia.map((periodo, index) => (
              <div
                key={index}
                className="rounded-2xl border border-green/30 bg-background p-6"
              >
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-green">
                  <CheckCircle size={24} weight="fill" />
                  {periodo.titulo}
                </h3>
                <ul className="space-y-3">
                  {periodo.itens.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Tips Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-damages mb-8 text-center text-4xl">Dicas Extras</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dicasExtras.map((dica, index) => {
            const Icon = dica.icon;
            return (
              <div
                key={index}
                className="card-hover rounded-2xl border border-border bg-card p-6"
              >
                <Icon size={40} weight="duotone" className="mb-4 text-gold" />
                <h3 className="mb-2 text-lg font-bold">{dica.title}</h3>
                <p className="text-muted-foreground">{dica.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gradient-green mx-auto mb-16 max-w-4xl rounded-3xl border border-green/30 px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <Student size={80} weight="duotone" className="mx-auto mb-6 text-green md:mx-0" />
          </div>
          <div className="flex-[2]">
            <h2 className="font-damages mb-4 text-3xl">Ainda esta perdido?</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              A faculdade pode parecer um labirinto no inicio. Qual materia e mais dificil? Como conseguir aquele estagio bom? Onde e a melhor festa pos-prova?
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              O Conselho da Impostores esta aqui para te ajudar. Somos veteranos que ja passaram pelos mesmos perrengues que voce. Manda uma mensagem pra gente!
            </p>
            <Link
              href={linksUteis.instagram}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-green px-6 py-3 font-bold text-white transition-all hover:opacity-90"
            >
              <InstagramLogo size={24} weight="fill" />
              Chamar no Direct
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="mx-auto max-w-4xl px-4 pb-20 lg:px-8">
        <div className="rounded-2xl border border-orange/30 bg-orange/5 p-6">
          <div className="flex items-start gap-4">
            <Warning size={32} weight="fill" className="flex-shrink-0 text-orange" />
            <div>
              <h3 className="mb-2 text-lg font-bold text-orange">Dica de Ouro</h3>
              <p className="text-muted-foreground">
                Nao deixe para fazer as coisas na ultima hora. O acumulo de atividades e provas pode ser avassalador. Crie uma rotina desde o inicio e siga ela religiosamente. Seu eu do futuro vai agradecer!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
