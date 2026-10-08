"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  House,
  CalendarBlank,
  GraduationCap,
  HandHeart,
  Vault,
  Star,
  Briefcase,
  List,
  X,
  ShoppingCart,
} from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Início", icon: House },
  { href: "/eventos", label: "Eventos", icon: CalendarBlank },
  { href: "/guia-calouro", label: "Guia do Calouro", icon: GraduationCap },
  { href: "/acao-social", label: "Ação Social", icon: HandHeart },
  { href: "/loja", label: "Loja", icon: Vault },
  { href: "/parceiros", label: "Parceiros", icon: Star },
  { href: "/diretoria", label: "Diretoria", icon: Briefcase },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-orange bg-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
          <Image
            src="/images/logo-sem-escudo.png"
            alt="Logo Impostores"
            width={140}
            height={45}
            className="h-10 w-auto transition-transform hover:scale-105 lg:h-11"
            priority
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 rounded-lg p-2 text-2xl text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {isMenuOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 xl:gap-4 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  isActive
                    ? "text-orange"
                    : "text-muted-foreground hover:text-orange"
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA + Cart */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="relative rounded-full bg-secondary p-2.5 text-foreground transition-colors hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Carrinho de compras"
          >
            <ShoppingCart size={20} weight="bold" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            href="/loja"
            className="btn-shine flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-extrabold text-background transition-all hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Vault size={18} weight="fill" />
            Acessar a Loja
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
          className={clsx(
            "absolute left-0 right-0 top-full flex max-h-[calc(100dvh-4rem)] flex-col gap-2 overflow-y-auto border-b-2 border-orange bg-card p-6 shadow-2xl transition-all duration-200 lg:hidden",
            isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-3 opacity-0"
          )}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "flex items-center gap-3 rounded-lg px-4 py-3 font-semibold transition-colors",
                  isActive
                    ? "bg-orange/10 text-orange"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon size={22} />
                {item.label}
              </Link>
            );
          })}
          <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
            <button
              onClick={() => {
                setIsOpen(true);
                setIsMenuOpen(false);
              }}
              type="button"
              aria-label={`Abrir carrinho com ${totalItems} itens`}
              className="relative flex-shrink-0 rounded-full bg-secondary p-3 text-foreground focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ShoppingCart size={22} weight="bold" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href="/loja"
              onClick={() => setIsMenuOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-extrabold text-background"
            >
              <Vault size={20} weight="fill" />
              Acessar a Loja
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
