"use client";

import { Tent, MaskHappy, Ticket } from "@phosphor-icons/react";
import Link from "next/link";

interface EventoCardProps {
  mes: string;
  dia: string;
  titulo: string;
  descricao: string;
  cupom?: string;
  link?: string;
  linkText?: string;
  color: "orange" | "blue" | "gold" | "green";
  icone: "tent" | "mask" | "ticket";
}

const iconMap = {
  tent: Tent,
  mask: MaskHappy,
  ticket: Ticket,
};

const colorMap = {
  orange: {
    border: "border-orange",
    bg: "from-[#1a0f0a] to-orange",
    text: "text-orange",
    btn: "border-orange text-orange hover:bg-orange/10",
  },
  blue: {
    border: "border-blue",
    bg: "from-[#0f172a] to-blue",
    text: "text-blue",
    btn: "bg-blue text-white hover:bg-blue/80",
  },
  gold: {
    border: "border-gold",
    bg: "from-[#1a1400] to-gold",
    text: "text-gold",
    btn: "bg-gold text-background hover:bg-gold-hover",
  },
  green: {
    border: "border-green",
    bg: "from-[#001a0a] to-green",
    text: "text-green",
    btn: "bg-green text-white hover:opacity-90",
  },
};

export default function EventoCard({
  mes,
  dia,
  titulo,
  descricao,
  cupom,
  link,
  linkText = "Em Breve",
  color,
  icone,
}: EventoCardProps) {
  const Icon = iconMap[icone];
  const colors = colorMap[color];

  return (
    <div
      className={`card-hover flex flex-col overflow-hidden rounded-2xl border ${colors.border} bg-card`}
    >
      {/* Header with icon */}
      <div
        className={`flex h-36 items-center justify-center bg-gradient-to-br ${colors.bg}`}
      >
        <Icon size={80} weight="fill" className="text-white/60" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Date and Title */}
        <div className="mb-4 flex items-center gap-4 border-b border-border pb-4">
          <div
            className={`rounded-lg border ${colors.border} bg-background p-3 text-center`}
          >
            <span
              className={`block text-xs font-bold uppercase ${colors.text}`}
            >
              {mes}
            </span>
            <span className="block text-2xl font-black text-foreground">
              {dia}
            </span>
          </div>
          <h3 className="flex-1 text-xl font-bold text-foreground">{titulo}</h3>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-muted-foreground">{descricao}</p>

        {/* Cupom */}
        {cupom && (
          <p className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gold">
            <Ticket size={20} weight="fill" />
            CUPOM: {cupom}
          </p>
        )}

        {/* Link/Button */}
        {link ? (
          <Link
            href={link}
            target="_blank"
            className={`rounded-xl px-4 py-3 text-center font-bold transition-colors ${colors.btn}`}
          >
            {linkText}
          </Link>
        ) : (
          <button
            disabled
            className="rounded-xl border border-border bg-secondary px-4 py-3 font-bold text-muted-foreground"
          >
            {linkText}
          </button>
        )}
      </div>
    </div>
  );
}
