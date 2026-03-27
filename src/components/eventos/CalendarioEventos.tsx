"use client";

import { useState, useEffect } from "react";
import { CaretLeft, CaretRight, CalendarCheck, Link as LinkIcon } from "@phosphor-icons/react";
import type { Evento } from "@/lib/types";
import clsx from "clsx";

interface CalendarioEventosProps {
  eventos: Evento[];
}

const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const DAY_NAMES = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export default function CalendarioEventos({ eventos }: CalendarioEventosProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedEvent(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedEvent(null);
  };

  const getEventForDay = (day: number): Evento | undefined => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return eventos.find((e) => e.data === dateStr);
  };

  const handleDayClick = (day: number) => {
    const event = getEventForDay(day);
    if (event) {
      setSelectedEvent(event);
    }
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Calendar */}
      <div className="rounded-2xl border border-border bg-card p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={prevMonth}
            className="rounded-lg border border-border bg-background p-2 text-foreground transition-colors hover:bg-secondary"
            aria-label="Mes anterior"
          >
            <CaretLeft size={20} weight="bold" />
          </button>
          <h3 className="text-xl font-extrabold text-foreground">
            {MONTH_NAMES[month]} {year}
          </h3>
          <button
            onClick={nextMonth}
            className="rounded-lg border border-border bg-background p-2 text-foreground transition-colors hover:bg-secondary"
            aria-label="Proximo mes"
          >
            <CaretRight size={20} weight="bold" />
          </button>
        </div>

        {/* Day names */}
        <div className="mb-2 grid grid-cols-7 text-center">
          {DAY_NAMES.map((day) => (
            <div key={day} className="py-2 text-sm font-bold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before month start */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const event = getEventForDay(day);
            const hasEvent = !!event;
            const isTodayDay = isToday(day);
            const isSelected = selectedEvent && event && selectedEvent.data === event.data;

            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                disabled={!hasEvent}
                className={clsx(
                  "relative aspect-square rounded-lg border text-center font-semibold transition-all",
                  hasEvent
                    ? "cursor-pointer border-gold text-gold hover:bg-gold/10"
                    : "cursor-default border-border text-foreground",
                  isTodayDay && "bg-orange text-white border-orange",
                  isSelected && "bg-gold/20 ring-2 ring-gold"
                )}
              >
                {day}
                {hasEvent && (
                  <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Event Details */}
      <div className="flex min-h-[300px] flex-col justify-center rounded-2xl border-l-4 border-blue bg-background p-6 lg:p-8">
        {selectedEvent ? (
          <div className="animate-fade-in">
            <span className="mb-3 inline-block rounded-md bg-blue px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {selectedEvent.tipo}
            </span>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              {selectedEvent.titulo}
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {selectedEvent.desc}
            </p>
            {selectedEvent.link && (
              <a
                href={selectedEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue px-6 py-3 font-bold text-white transition-colors hover:bg-blue/80"
              >
                <LinkIcon size={20} weight="bold" />
                Acessar Link
              </a>
            )}
          </div>
        ) : (
          <div className="text-center text-muted-foreground opacity-50">
            <CalendarCheck size={64} className="mx-auto mb-4" />
            <p>Selecione um dia destacado no calendario para ver os detalhes.</p>
          </div>
        )}
      </div>
    </div>
  );
}
