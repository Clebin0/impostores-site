import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarBlank, UsersThree, Star } from "@phosphor-icons/react/dist/ssr";

const destinations = [
  { href: "/eventos", label: "Agenda da atlética", description: "As próximas histórias começam aqui.", icon: CalendarBlank },
  { href: "/guia-calouro", label: "Chegou agora?", description: "Seu lugar na Impostores começa aqui.", icon: UsersThree },
  { href: "/loja", label: "Vista a camisa", description: "Produtos oficiais da nossa família.", icon: Star },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#101012]">
      <div className="absolute inset-0 -z-20">
        <Image src="/images/fundo-atletica.png" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-35" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101012] via-[#101012]/90 to-[#101012]/40" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#101012] to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-14 pt-20 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pb-24 lg:pt-32">
        <div>
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#F3BC55]">
            <span className="h-2 w-2 rounded-full bg-[#F16A24]" /> Atlética Impostores · UniCesumar Curitiba
          </p>
          <h1 className="font-damages max-w-4xl text-5xl leading-[1.05] text-white sm:text-7xl lg:text-8xl">
            A faculdade passa.<br /><span className="text-[#F3BC55]">As histórias ficam.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            Não é só sobre assistir de longe. É encontrar sua galera, viver os eventos e fazer parte de algo que vai além da sala de aula.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/eventos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#F16A24] px-6 py-3 font-bold text-white transition-colors hover:bg-[#d85717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explorar eventos <ArrowUpRight size={21} weight="bold" aria-hidden="true" />
            </Link>
            <Link href="/guia-calouro" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-black/30 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Conhecer a atlética
            </Link>
          </div>
        </div>
        <div className="grid gap-3" aria-label="Explore a Impostores">
          {destinations.map(({ href, label, description, icon: Icon }, index) => (
            <Link href={href} key={href} className="group flex items-center gap-4 rounded-xl border border-white/15 bg-black/50 p-4 backdrop-blur-md transition-colors hover:border-[#F16A24] hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3BC55]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F16A24]/20 text-[#F3BC55]"><Icon size={24} weight="duotone" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block font-bold text-white">{label}</span><span className="block text-sm text-zinc-300">{description}</span></span>
              <span className="text-xs font-bold text-zinc-400">0{index + 1}</span>
              <ArrowUpRight size={18} className="text-[#F3BC55] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
