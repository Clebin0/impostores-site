import { Metadata } from "next";
import { Crown, Briefcase, Star, Users } from "@phosphor-icons/react/dist/ssr";
import { diretoria } from "@/lib/data";

export const metadata: Metadata = {
  title: "Diretoria",
  description: "Conheca o Conselho Executivo da Atletica Impostores. As mentes por tras da maior atletica de contabeis.",
};

function DiretoriaCard({
  nome,
  cargo,
  inicial,
  destaque = false,
}: {
  nome: string;
  cargo: string;
  inicial: string;
  destaque?: boolean;
}) {
  return (
    <div
      className={`card-hover group relative overflow-hidden rounded-2xl border bg-card p-8 text-center ${
        destaque
          ? "border-gold/50 bg-gradient-to-b from-card to-gold/5"
          : "border-border"
      }`}
    >
      {/* Crown for presidents */}
      {destaque && (
        <Crown
          size={28}
          weight="fill"
          className="absolute right-4 top-4 text-gold"
        />
      )}

      {/* Avatar */}
      <div
        className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 text-4xl font-black ${
          destaque
            ? "border-gold bg-gold/10 text-gold"
            : "border-border bg-secondary text-muted-foreground"
        }`}
      >
        {inicial}
      </div>

      {/* Info */}
      <h3 className="mb-2 text-xl font-bold">{nome}</h3>
      <p
        className={`inline-flex items-center gap-1 rounded-full px-4 py-1 text-sm font-bold ${
          destaque
            ? "bg-gold/10 text-gold"
            : "bg-orange/10 text-orange"
        }`}
      >
        {destaque && <Star size={14} weight="fill" />}
        {cargo}
      </p>
    </div>
  );
}

export default function DiretoriaPage() {
  const presidentes = diretoria.filter((m) => m.destaque);
  const restante = diretoria.filter((m) => !m.destaque);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute left-1/2 top-0 h-[2px] w-[300px] -translate-x-1/2 bg-gold opacity-50 blur-[40px]" />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h1 className="font-damages mb-4 text-5xl lg:text-6xl">
            O Conselho <span className="text-gold">Executivo</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            As mentes por tras da maior atletica impostora. Conheca quem faz a
            magia acontecer.
          </p>
        </div>
      </section>

      {/* Presidents - Highlighted */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Crown size={32} weight="duotone" className="text-gold" />
          <h2 className="font-damages text-3xl">Presidencia</h2>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {presidentes.map((membro) => (
            <DiretoriaCard
              key={membro.nome}
              nome={membro.nome}
              cargo={membro.cargo}
              inicial={membro.inicial}
              destaque={true}
            />
          ))}
        </div>
      </section>

      {/* Rest of the team */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center justify-center gap-3">
            <Briefcase size={32} weight="duotone" className="text-orange" />
            <h2 className="font-damages text-3xl">Diretoria</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {restante.map((membro) => (
              <DiretoriaCard
                key={membro.nome}
                nome={membro.nome}
                cargo={membro.cargo}
                inicial={membro.inicial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Users size={48} weight="duotone" className="mx-auto mb-4 text-gold" />
            <p className="font-damages text-5xl text-gold">{diretoria.length}</p>
            <p className="mt-2 text-muted-foreground">Membros da Diretoria</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Star size={48} weight="duotone" className="mx-auto mb-4 text-gold" />
            <p className="font-damages text-5xl text-gold">2026</p>
            <p className="mt-2 text-muted-foreground">Gestao Atual</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Crown size={48} weight="duotone" className="mx-auto mb-4 text-gold" />
            <p className="font-damages text-5xl text-gold">#1</p>
            <p className="mt-2 text-muted-foreground">Atletica de Contabeis</p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-gradient-gold mx-auto mb-16 max-w-4xl rounded-3xl border border-gold/30 px-4 py-12 text-center lg:px-8">
        <Briefcase size={64} weight="duotone" className="mx-auto mb-6 text-gold" />
        <h2 className="font-damages mb-4 text-4xl">Quer fazer parte?</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Novas oportunidades para ingressar na diretoria sao abertas a cada
          inicio de gestao. Fique de olho no nosso Instagram para nao perder!
        </p>
        <a
          href="https://www.instagram.com/impostoresuc/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 font-extrabold text-background transition-all hover:bg-gold-hover"
        >
          Seguir @impostoresuc
        </a>
      </section>
    </div>
  );
}
