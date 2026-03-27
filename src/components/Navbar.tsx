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
  { href: "/", label: "Home", icon: House },
  { href: "/eventos", label: "Eventos", icon: CalendarBlank },
  { href: "/guia-calouro", label: "Guia do Calouro", icon: GraduationCap },
  { href: "/acao-social", label: "Acao Social", icon: HandHeart },
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
        <Link href="/" className="relative z-50 flex items-center">
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
          className="relative z-50 text-2xl text-foreground lg:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-1.5 px-2 py-1 text-sm font-semibold transition-colors",
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
            className="relative rounded-full bg-secondary p-2.5 text-foreground transition-colors hover:bg-border"
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
            className="btn-shine flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-extrabold text-background transition-all hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/30"
          >
            <Vault size={18} weight="fill" />
            Acessar a Loja
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "absolute left-0 right-0 top-full flex flex-col gap-2 border-b-2 border-orange bg-card p-6 transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
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
              className="relative flex-shrink-0 rounded-full bg-secondary p-3 text-foreground"
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
