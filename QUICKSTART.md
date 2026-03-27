# Quick Start - IMPOSTORES

Bem-vindo ao projeto IMPOSTORES! Este guia rápido vai te colocar rodando em minutos.

## 🚀 Início Rápido (5 minutos)

### 1. Clonar o repositório
```bash
git clone https://github.com/Clebin0/impostores.git
cd impostores
```

### 2. Instalar dependências
```bash
npm install
# ou
pnpm install
# ou
yarn install
```

### 3. Configurar ambiente
```bash
cp .env.example .env.local
```

### 4. Iniciar servidor de desenvolvimento
```bash
npm run dev
# ou
pnpm dev
```

### 5. Abrir no navegador
Acesse [http://localhost:3000](http://localhost:3000)

## 📝 Primeiros Passos

### Explorar a Aplicação

1. **Home** - Veja a página inicial com o manifesto da atlética
2. **Eventos** - Veja o calendário de eventos
3. **Guia do Calouro** - Informações para novos membros
4. **Ação Social** - Projetos sociais
5. **Loja** - Veja os produtos e teste o carrinho
6. **Parceiros** - Conheça os parceiros
7. **Diretoria** - Veja a equipe

### Testar o Carrinho

1. Vá para **Loja**
2. Clique em **Adicionar ao Carrinho** em qualquer produto
3. Abra o **Carrinho** (ícone no topo)
4. Vá para **Checkout**
5. Customize o produto e veja o código PIX

## 🛠️ Desenvolvimento

### Criar uma Nova Página

```bash
# 1. Crie a pasta
mkdir -p src/app/minha-pagina

# 2. Crie o arquivo page.tsx
touch src/app/minha-pagina/page.tsx
```

```tsx
// src/app/minha-pagina/page.tsx
export const metadata = {
  title: 'Minha Página',
};

export default function MinhaPage() {
  return <main>Conteúdo aqui</main>;
}
```

### Criar um Novo Componente

```bash
touch src/components/MeuComponente.tsx
```

```tsx
// src/components/MeuComponente.tsx
'use client'; // Se usar hooks

import { useState } from 'react';

export default function MeuComponente() {
  const [estado, setEstado] = useState(false);
  
  return (
    <div className="p-4 rounded-lg bg-card">
      <button 
        onClick={() => setEstado(!estado)}
        className="px-4 py-2 bg-primary text-white rounded"
      >
        Clique aqui
      </button>
    </div>
  );
}
```

### Adicionar um Novo Produto

```tsx
// src/lib/data.ts
export const PRODUTOS = [
  {
    id: '9',
    nome: 'Novo Produto',
    descricao: 'Descrição',
    preco: 29.90,
    imagem: '/images/novo-produto.png',
    categoria: 'Loja',
    customizavel: true,
  },
  // ... outros produtos
];
```

## 🎨 Customização

### Cores

Edite `src/app/globals.css`:

```css
:root {
  --primary: 21 90% 48%;        /* Laranja */
  --secondary: 240 4% 16%;      /* Cinza */
  --accent: 45 93% 56%;         /* Amarelo */
  /* ... outras cores */
}
```

### Fontes

A fonte "Damages" já está configurada. Para usar:

```tsx
<h1 className="font-damages text-4xl">Título</h1>
```

### Tema

Adicione tema claro/escuro em `globals.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    /* ... */
  }
}
```

## 📦 Dependências Principais

- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utilitários CSS
- **Phosphor Icons** - Ícones

## 🔗 Links Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## ⚡ Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor dev
npm run build            # Build para produção
npm start                # Inicia servidor prod
npm run lint             # Verifica erros

# Análise
npm run build -- --analyze  # Analisa bundle size

# Limpeza
rm -rf .next            # Remove cache build
rm -rf node_modules     # Remove dependências
npm install             # Reinstala dependências
```

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
# Verifique tsconfig.json paths
# Reinicie o servidor dev
npm run dev
```

### Estilos não aplicam
```bash
# Limpe o cache
rm -rf .next
npm run dev

# Limpe o cache do navegador: Ctrl+Shift+Delete
```

### Porta 3000 em uso
```bash
# Use outra porta
npm run dev -- -p 3001
```

### Build falha
```bash
# Verifique erros de tipo
npm run lint

# Build com verbose
npm run build -- --verbose
```

## 📚 Próximas Leituras

- [DEVELOPMENT.md](./DEVELOPMENT.md) - Padrões de desenvolvimento
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Como fazer deploy
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitetura do projeto

## 🚢 Deploy em 5 Minutos

### Vercel (Recomendado)

1. Faça push para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique "Add New" → "Project"
4. Selecione seu repositório
5. Clique "Deploy"

Pronto! Seu site está em produção!

## 📞 Suporte

Dúvidas? Abra uma issue no repositório:
https://github.com/Clebin0/impostores/issues

## 📄 Licença

Copyright © 2024 IMPOSTORES. Todos os direitos reservados.

---

**Aproveite e bom desenvolvimento!** 🦆✨
