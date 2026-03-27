# Guia de Desenvolvimento

Documentação para desenvolvedores que querem contribuir ou estender o projeto IMPOSTORES.

## Padrões e Convenções

### Componentes

Todos os componentes devem seguir os padrões React 19:

```typescript
// ✅ Bom - Componente funcional com tipos claros
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export default function MyComponent({ title, onAction }: MyComponentProps) {
  return <div>{title}</div>;
}

// ❌ Evitar - Props soltas ou desestruturação incorreta
export default function MyComponent(props) {
  return <div>{props.title}</div>;
}
```

### Naming Conventions

- **Componentes**: PascalCase (`MyComponent.tsx`)
- **Arquivos utilitários**: camelCase (`cartUtils.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`FEATURED_PRODUCTS`)
- **Variáveis**: camelCase (`userName`)

### Estrutura de Pastas

Mantenha componentes organizados por feature:

```
src/components/
├── home/          # Componentes da home
├── eventos/       # Componentes de eventos
├── loja/          # Componentes da loja
└── shared/        # Componentes reutilizáveis globais
```

## Estilo e Design

### Tailwind CSS

Use as classes de design tokens do projeto:

```tsx
// ✅ Bom
<div className="bg-primary text-primary-foreground rounded-lg p-4">
  Conteúdo
</div>

// ❌ Evitar - Cores hardcoded
<div className="bg-orange-600 text-white">
  Conteúdo
</div>
```

### Cores do Projeto

As cores estão definidas em `globals.css`:

- **Primary**: Laranja (identidade IMPOSTORES)
- **Secondary**: Cinza claro (backgrounds)
- **Accent**: Destaque (CTAs)
- **Background/Foreground**: Tema claro

### Responsividade

Use breakpoints Tailwind padrão:

```tsx
// Mobile-first (padrão)
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsivo
</div>
```

## Estado e Contexto

### Usando CartContext

O contexto do carrinho está disponível em toda a app:

```tsx
'use client';

import { useCart } from '@/lib/cart-context';

export default function MyComponent() {
  const { items, addItem, removeItem } = useCart();
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

## Adicionando Novas Páginas

### 1. Criar a pasta de rota

```bash
mkdir -p src/app/minha-rota
```

### 2. Adicionar `page.tsx`

```typescript
// src/app/minha-rota/page.tsx
export const metadata = {
  title: 'Minha Página | IMPOSTORES',
  description: 'Descrição da página',
};

export default function MinhaRotaPage() {
  return (
    <main className="min-h-screen">
      {/* Conteúdo */}
    </main>
  );
}
```

### 3. Atualizar navegação

Adicione em `src/components/Navbar.tsx`:

```typescript
const navItems = [
  // ... items existentes
  { label: 'Minha Página', href: '/minha-rota' },
];
```

## Adicionando Novos Produtos

Edite `src/lib/data.ts`:

```typescript
export const PRODUTOS = [
  {
    id: '1',
    nome: 'Novo Produto',
    descricao: 'Descrição',
    preco: 29.90,
    imagem: '/images/produto.png',
    categoria: 'Loja',
    customizavel: true,
  },
  // ...
];
```

## Integrando APIs

### Exemplo: Buscar Eventos Externos

```typescript
// src/lib/api.ts
export async function fetchEventos() {
  try {
    const res = await fetch('https://api-cheers.com/eventos', {
      next: { revalidate: 3600 } // ISR - revalidar a cada hora
    });
    
    if (!res.ok) throw new Error('Falha ao buscar eventos');
    return res.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}
```

```typescript
// src/app/eventos/page.tsx
import { fetchEventos } from '@/lib/api';

export default async function EventosPage() {
  const eventos = await fetchEventos();
  
  return (
    <div>
      {eventos.map(evento => (
        <EventoCard key={evento.id} evento={evento} />
      ))}
    </div>
  );
}
```

## Performance

### Code Splitting

Use `dynamic()` para importações lazy:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Carregando...</div>,
});
```

### Image Optimization

Sempre use o componente `Image` do Next.js:

```typescript
import Image from 'next/image';

<Image
  src="/images/logo.png"
  alt="Logo IMPOSTORES"
  width={300}
  height={300}
  priority // Para imagens acima da dobra
/>
```

### Metadata e SEO

```typescript
export const metadata = {
  title: 'Página | IMPOSTORES',
  description: 'Descrição curta',
  openGraph: {
    title: 'Página | IMPOSTORES',
    description: 'Descrição',
    url: 'https://impostores.example.com/pagina',
    siteName: 'IMPOSTORES',
  },
};
```

## Testing

### Estrutura de Testes (Futura)

```typescript
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Deploy

### Vercel

1. Conectar repositório GitHub
2. Vercel detecta Next.js automaticamente
3. Variáveis de ambiente em Project Settings > Environment Variables
4. Deploy automático a cada push em `main`

### Build Otimizado

```bash
npm run build
npm run analyze # Analisar bundle size
```

## Troubleshooting

### Erro: "Module not found"

Verifique o caminho absoluto em `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Componente não renderiza

Verifique se não está usando hooks (useState, useEffect) em Server Components. Se precisa, adicione `'use client'`.

### Estilos não aplicam

1. Certifique-se de usar classes Tailwind válidas
2. Execute `npm run dev` para reconstruir
3. Limpe cache do navegador (Ctrl+Shift+Delete)

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Phosphor Icons](https://phosphoricons.com)
- [TypeScript](https://typescriptlang.org)

## Contato

Dúvidas? Abra uma issue no repositório.
