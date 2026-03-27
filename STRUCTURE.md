# 📁 Estrutura do Projeto IMPOSTORES

Guia visual completo de todos os diretórios e arquivos.

---

## Árvore de Diretórios Completa

```
impostores/
├── 📁 .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md
│
├── 📁 .next/ (gerado em build)
│
├── 📁 node_modules/ (dependências)
│
├── 📁 public/
│   ├── 📁 fonts/
│   │   ├── Damages.ttf
│   │   └── Damages-Italic.ttf
│   ├── 📁 images/
│   │   ├── logo.png
│   │   ├── logo-sem-escudo.png
│   │   ├── mascote.png
│   │   ├── pato.png
│   │   ├── pato-uni.png
│   │   ├── tio-patinhas.png
│   │   ├── bar-pedrao.png
│   │   ├── caneca.png
│   │   ├── copo.png
│   │   ├── og-image.png
│   │   ├── camiseta.jpg
│   │   ├── moletom.jpg
│   │   ├── bone.jpg
│   │   ├── mochila.jpg
│   │   ├── acessorios.jpg
│   │   ├── garrafa-termica.jpg
│   │   ├── chinelo.jpg
│   │   ├── pulseira.jpg
│   │   ├── parceiro-1.jpg
│   │   ├── parceiro-2.jpg
│   │   ├── parceiro-3.jpg
│   │   ├── parceiro-4.jpg
│   │   ├── parceiro-5.jpg
│   │   ├── parceiro-6.jpg
│   │   ├── presidente-1.jpg
│   │   ├── presidente-2.jpg
│   │   ├── diretor-1.jpg
│   │   ├── diretor-2.jpg
│   │   ├── diretor-3.jpg
│   │   └── diretor-4.jpg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
│
├── 📁 scripts/
│   ├── build-check.js
│   └── [Pode adicionar mais scripts aqui]
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 acao-social/
│   │   │   └── page.tsx
│   │   ├── 📁 diretoria/
│   │   │   └── page.tsx
│   │   ├── 📁 eventos/
│   │   │   └── page.tsx
│   │   ├── 📁 guia-calouro/
│   │   │   └── page.tsx
│   │   ├── 📁 loja/
│   │   │   ├── 📁 checkout/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── 📁 parceiros/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── 📁 components/
│   │   ├── CartDrawer.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── 📁 eventos/
│   │   │   ├── CalendarioEventos.tsx
│   │   │   └── EventoCard.tsx
│   │   ├── 📁 home/
│   │   │   ├── CTASection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── InstagramSection.tsx
│   │   │   ├── ManifestoSection.tsx
│   │   │   ├── UniSection.tsx
│   │   │   └── WhyJoinSection.tsx
│   │   └── 📁 loja/
│   │       └── ProdutoCard.tsx
│   │
│   ├── 📁 hooks/
│   │   └── useEventos.ts
│   │
│   └── 📁 lib/
│       ├── 📁 __tests__/
│       │   └── utils.test.ts
│       ├── cart-context.tsx
│       ├── cart-utils.ts
│       ├── constants.ts
│       ├── data.ts
│       ├── types.ts
│       └── utils.ts
│
├── 📄 .editorconfig
├── 📄 .env.example
├── 📄 .env.local
├── 📄 .eslintrc.json
├── 📄 .gitignore
├── 📄 ARCHITECTURE.md
├── 📄 CHANGELOG.md
├── 📄 CHECKLIST.md
├── 📄 COMPLETION_SUMMARY.md
├── 📄 CONTRIBUTING.md
├── 📄 DEPENDENCIES.md
├── 📄 DEPLOYMENT.md
├── 📄 DEVELOPMENT.md
├── 📄 FINAL_STATUS.md
├── 📄 INDEX.md
├── 📄 jest.config.ts
├── 📄 jest.setup.ts
├── 📄 LICENSE
├── 📄 next.config.ts
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 postcss.config.mjs
├── 📄 PROJECT_MAP.txt
├── 📄 PROJECT_SUMMARY.md
├── 📄 QUICKSTART.md
├── 📄 README.md
├── 📄 STRUCTURE.md (este arquivo)
├── 📄 tailwind.config.ts
├── 📄 TROUBLESHOOTING.md
├── 📄 tsconfig.json
└── 📄 vercel.json
```

---

## 📊 Estatísticas de Estrutura

### Diretórios
- App Pages: 8 (`/`, `/eventos`, `/guia-calouro`, etc)
- Components: 3 principais + 8 especializados
- Lib Utilities: 7 arquivos
- Hooks: 1 customizado
- Tests: 1+ para expandir
- Public Assets: 30+ imagens

### Arquivos
- TypeScript (.tsx): 28 arquivos
- CSS: 1 global
- JSON Config: 5 arquivos
- Markdown Docs: 13 arquivos
- Setup: 5 arquivos
- Total: 120+ arquivos

---

## 🎯 Hierarquia de Componentes

```
RootLayout
├── Navbar
│   └── CartDrawer
├── main
│   ├── Home Page
│   │   ├── HeroSection
│   │   ├── ManifestoSection
│   │   ├── WhyJoinSection
│   │   ├── UniSection
│   │   ├── InstagramSection
│   │   └── CTASection
│   ├── Eventos Page
│   │   ├── CalendarioEventos
│   │   └── EventoCard[] (dinâmico)
│   ├── Loja Page
│   │   └── ProdutoCard[] (8 itens)
│   ├── Checkout Page
│   │   └── [Formulário e PIX]
│   ├── [Outras Páginas]
│   └── [Navegação entre páginas]
└── Footer
```

---

## 📦 Camadas da Aplicação

```
┌─────────────────────────────────┐
│      Pages (8)                  │
│  - Layout responsivo            │
│  - Conteúdo específico          │
└──────────────┬──────────────────┘
               │
┌──────────────┴──────────────────┐
│     Components (25+)            │
│  - Reutilizáveis               │
│  - Com lógica encapsulada      │
└──────────────┬──────────────────┘
               │
┌──────────────┴──────────────────┐
│    Lib Layer                    │
│  - Context (State)             │
│  - Utils (Helpers)             │
│  - Types (Interfaces)          │
│  - Data (Statics)              │
└──────────────┬──────────────────┘
               │
┌──────────────┴──────────────────┐
│    Browser APIs                 │
│  - localStorage                │
│  - fetch                       │
│  - DOM APIs                    │
└─────────────────────────────────┘
```

---

## 🔀 Fluxo de Dados

```
User Interaction
       ↓
Component Event
       ↓
Cart Context (State)
       ↓
localStorage (Persist)
       ↓
Re-render
       ↓
UI Update
```

---

## 📂 Organização por Feature

### Home Feature
```
src/
├── app/page.tsx
└── components/home/
    ├── HeroSection.tsx
    ├── ManifestoSection.tsx
    ├── WhyJoinSection.tsx
    ├── UniSection.tsx
    ├── InstagramSection.tsx
    └── CTASection.tsx
```

### Eventos Feature
```
src/
├── app/eventos/page.tsx
├── components/eventos/
│   ├── CalendarioEventos.tsx
│   └── EventoCard.tsx
└── hooks/useEventos.ts
```

### Loja Feature
```
src/
├── app/loja/
│   ├── page.tsx
│   └── checkout/page.tsx
├── components/loja/
│   └── ProdutoCard.tsx
├── lib/
│   └── cart-context.tsx
└── [CartDrawer no Navbar]
```

---

## 🎨 Assets por Tipo

### Logos & Brand (4)
- `logo.png` - Logo completo
- `logo-sem-escudo.png` - Logo simplificado
- `mascote.png` - Mascote principal
- `pato.png` - Pato secundário

### Promotionais (4)
- `tio-patinhas.png`
- `bar-pedrao.png`
- `pato-uni.png`
- `caneca.png` / `copo.png`

### Produtos (8)
- camiseta.jpg
- moletom.jpg
- bone.jpg
- mochila.jpg
- acessorios.jpg
- garrafa-termica.jpg
- chinelo.jpg
- pulseira.jpg

### Parceiros (6)
- parceiro-1.jpg até parceiro-6.jpg

### Diretoria (6)
- presidente-1.jpg, presidente-2.jpg
- diretor-1.jpg até diretor-4.jpg

### SEO/Web
- og-image.png (1200x630)
- favicon (pato.png)

### Fontes (2)
- Damages.ttf
- Damages-Italic.ttf

---

## 🔧 Configuração de Arquivos

### Raiz (`/`)
- `next.config.ts` - Configuração Next.js
- `tailwind.config.ts` - Configuração Tailwind
- `tsconfig.json` - Configuração TypeScript
- `postcss.config.mjs` - Configuração PostCSS
- `jest.config.ts` - Configuração Jest
- `jest.setup.ts` - Setup Jest
- `package.json` - Dependências
- `vercel.json` - Configuração Vercel
- `.eslintrc.json` - Regras ESLint
- `.env.local` - Variáveis locais
- `.env.example` - Template de variáveis
- `.editorconfig` - Padrões do editor

### Documentação
- `README.md` - Visão geral
- `QUICKSTART.md` - Setup rápido
- `DEVELOPMENT.md` - Guidelines
- `DEPLOYMENT.md` - Deploy guide
- `ARCHITECTURE.md` - Arquitetura
- `FINAL_STATUS.md` - Status final
- `CHANGELOG.md` - Histórico
- `CONTRIBUTING.md` - Contribuição
- `DEPENDENCIES.md` - Dependências
- `TROUBLESHOOTING.md` - Problemas
- `STRUCTURE.md` - Este arquivo
- `INDEX.md` - Navegação
- `LICENSE` - MIT License

---

## 🧪 Testes

```
src/lib/__tests__/
└── utils.test.ts

Jest config:
- jest.config.ts
- jest.setup.ts
```

---

## 📱 Responsividade

Todos os componentes seguem mobile-first:

```
Base (mobile) → sm: → md: → lg: → xl:
  320px      640px   768px   1024px  1280px
```

---

## 🔐 Segurança

- TypeScript strict mode
- No hardcoded secrets
- Variáveis de ambiente
- CORS pronto para APIs
- XSS protection via React

---

## 📈 Expansão Futura

Pronto para adicionar:
- `/api/` - API Routes
- `/lib/db/` - Database layer
- `/lib/auth/` - Auth utilities
- `/middleware.ts` - Custom middleware
- More hooks em `/hooks/`
- More utilities em `/lib/`

---

## 🗂️ Navegação Rápida

| Preciso de | Local |
|-----------|-------|
| Adicionar página | `src/app/[nome]/page.tsx` |
| Novo componente | `src/components/[Nome].tsx` |
| Adicionar hook | `src/hooks/use[Name].ts` |
| Utilitário função | `src/lib/utils.ts` |
| Tipos TypeScript | `src/lib/types.ts` |
| Dados estáticos | `src/lib/data.ts` |
| Constantes | `src/lib/constants.ts` |
| Estilo global | `src/app/globals.css` |
| Imagem | `public/images/` |
| Documentação | `/` root |

---

## ✅ Checklist de Integridade

```bash
# Validar estrutura
npm run check

# Compilar
npm run build

# Linting
npm run lint

# Testes
npm run test

# Development
npm run dev
```

---

*Última atualização: 27 de março de 2024*
