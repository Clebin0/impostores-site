'use client';

import { useState, useEffect } from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Buscar...' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <MagnifyingGlass 
          size={20} 
          className="absolute left-3 text-muted-foreground pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 text-muted-foreground hover:text-foreground transition"
            aria-label="Limpar busca"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
