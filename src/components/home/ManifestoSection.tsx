import Image from "next/image";

export default function ManifestoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="bg-gradient-orange overflow-hidden rounded-3xl border border-orange/30">
        <div className="flex flex-col items-center gap-12 p-8 lg:flex-row lg:p-12">
          {/* Content */}
          <div className="flex-1">
            <h2 className="font-damages mb-6 text-4xl text-gold lg:text-5xl">
              O Nosso Manifesto
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              A Associacao Atletica Impostores nasceu com um unico objetivo:{" "}
              <strong className="text-foreground">dominar.</strong> Representamos
              os estudantes de Ciencias Contabeis com uma gestao que aplica no
              dia a dia o que aprendemos nas aulas.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Seja organizando as melhores festas, montando equipes esportivas
              imbativeis ou gerando impacto social atraves da nossa loja,
              garantimos que quem veste a nossa camisa faz parte de uma{" "}
              <strong className="text-foreground">
                rede de contatos de alto nivel.
              </strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-2">
                <span className="font-bold text-gold">#FazoQuack</span>
              </div>
              <div className="rounded-xl border border-orange/30 bg-orange/10 px-4 py-2">
                <span className="font-bold text-orange">Contabeis na Veia</span>
              </div>
              <div className="rounded-xl border border-border bg-secondary px-4 py-2">
                <span className="font-bold text-foreground">UniCesumar</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 text-center">
            <Image
              src="/images/tio-patinhas.png"
              alt="Tio Patinhas Bombado - Mascote Impostores"
              width={400}
              height={400}
              className="glow-orange mx-auto h-auto w-full max-w-sm animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
