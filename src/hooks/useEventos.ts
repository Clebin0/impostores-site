'use client';

import { useState, useEffect } from 'react';
import { Evento } from '@/lib/types';

export function useEventos() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEventos() {
      try {
        setLoading(true);
        const response = await fetch('/data/eventos.json');
        if (!response.ok) {
          throw new Error('Falha ao carregar eventos');
        }
        const data = await response.json();
        setEventos(data.eventos || []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        setEventos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEventos();
  }, []);

  const getEventosDoMes = (data: Date) => {
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    return eventos.filter((evento) => {
      const eventData = new Date(evento.data);
      return (
        eventData.getMonth() + 1 === mes && eventData.getFullYear() === ano
      );
    });
  };

  const getProximosEventos = (quantidade = 5) => {
    const agora = new Date();
    return eventos
      .filter((evento) => new Date(evento.data) >= agora)
      .sort(
        (a, b) =>
          new Date(a.data).getTime() - new Date(b.data).getTime()
      )
      .slice(0, quantidade);
  };

  const getEventoPorId = (id: string) => {
    return eventos.find((evento) => evento.id === id);
  };

  return {
    eventos,
    loading,
    error,
    getEventosDoMes,
    getProximosEventos,
    getEventoPorId,
  };
}
