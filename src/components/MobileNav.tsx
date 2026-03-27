'use client';

import { useState } from 'react';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Guia do Calouro', href: '/guia-calouro' },
  { label: 'Ação Social', href: '/acao-social' },
  { label: 'Loja', href: '/loja' },
  { label: 'Parceiros', href: '/parceiros' },
  { label: 'Diretoria', href: '/diretoria' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition"
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg lg:hidden">
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg hover:bg-secondary transition text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
