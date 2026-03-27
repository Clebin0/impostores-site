"use client";

import Link from "next/link";
import Image from "next/image";
import { InstagramLogo, ArrowRight } from "@phosphor-icons/react";
import { linksUteis } from "@/lib/data";

const instagramPosts = [
  { id: 1, label: "Calouros", color: "from-orange to-gold" },
  { id: 2, label: "Produtos", color: "from-gold to-orange" },
  { id: 3, label: "Churras DUCK", color: "from-orange-hover to-orange" },
  { id: 4, label: "Impostinder", color: "from-gold to-gold-hover" },
];

export default function InstagramSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
            <InstagramLogo size={24} weight="fill" className="text-orange" />
            <span className="font-bold">@impostoresuc</span>
          </div>
          <h2 className="font-damages mb-4 text-4xl lg:text-5xl">
            Siga a gente no Instagram
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Acompanhe todas as novidades, eventos, memes contabeis e muito mais
            no nosso perfil oficial.
          </p>
        </div>

        {/* Instagram Stats */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
          <div className="text-center">
            <p className="font-damages text-4xl text-gold">5+</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <p className="font-damages text-4xl text-gold">1.130+</p>
            <p className="text-sm text-muted-foreground">Seguidores</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <p className="font-damages text-4xl text-gold">221</p>
            <p className="text-sm text-muted-foreground">Seguindo</p>
          </div>
        </div>

        {/* Post Grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={linksUteis.instagram}
              target="_blank"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-80`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Impostores"
                  width={80}
                  height={80}
                  className="opacity-30"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                <p className="font-bold text-foreground">{post.label}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                <InstagramLogo size={48} className="text-orange" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={linksUteis.instagram}
            target="_blank"
            className="btn-shine group inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-4 text-lg font-extrabold text-white transition-all hover:bg-orange-hover"
          >
            <InstagramLogo size={24} weight="fill" />
            Seguir @impostoresuc
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
