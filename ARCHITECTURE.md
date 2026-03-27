# Arquitetura do Projeto IMPOSTORES

## Visão Geral

```
┌─────────────────────────────────────────────────────────────┐
│                    IMPOSTORES Website                        │
│                 Next.js 16 + React 19 + TypeScript            │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
           ┌────▼───┐    ┌────▼───┐    ┌──▼──────┐
           │Frontend │    │Styling │    │  Build  │
           │(React)  │    │(Tailw) │    │(Next.js)│
           └────────┘    └────────┘    └─────────┘
```

## Stack Técnico

### Frontend
```
React 19
├── Server Components (RSC)
├── Client Components ('use client')
├── Hooks (useState, useContext, etc)
└── Context API (CartContext)

TypeScript
├── Strict Mode
├── Type Safety
└── Interface Definitions

Next.js 16
├── App Router
├── File-based Routing
├── Image Optimization
├── ISR & SSG
└── Middleware Ready
```

### Styling
```
Tailwind CSS v4
├── Utility-first
├── Design Tokens
├── Custom Animations
├── Responsive Prefixes
└── Dark Mode Ready

CSS Custom Properties
├── Cores
├── Tipografia
├── Spacing
└── Borderradius
```

### Componentes e Páginas

```
┌─────────────────────────────────────────────────────────────┐
│                        app/layout.tsx                        │
│                    (Root Layout + Navbar)                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              main (min-h-screen)                     │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │                                                │  │  │
│  │  │  App Routes:                                 │  │  │
│  │  │  ├─ /              → Home                    │  │  │
│  │  │  ├─ /eventos       → Eventos                 │  │  │
│  │  │  ├─ /guia-calouro → Guia                     │  │  │
│  │  │  ├─ /acao-social   → Ação Social             │  │  │
│  │  │  ├─ /loja          → Loja                    │  │  │
│  │  │  ├─ /loja/checkout → Checkout                │  │  │
│  │  │  ├─ /parceiros     → Parceiros               │  │  │
│  │  │  └─ /diretoria     → Diretoria               │  │  │
│  │  │                                                │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │         Footer (outside main)                 │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
           │
    ┌──────┴──────┐
    │             │
┌───▼───┐  ┌─────▼─────┐
│Navbar │  │CartDrawer │
└───────┘  └───────────┘
```

## Estrutura de Pastas

```
impostores/
│
├── src/
│   ├── app/                          ← Next.js Routes (App Router)
│   │   ├── layout.tsx                ← Root layout + providers
│   │   ├── page.tsx                  ← Home page
│   │   ├── globals.css               ← Design tokens + global styles
│   │   │
│   │   ├── eventos/page.tsx          ← Eventos page
│   │   ├── guia-calouro/page.tsx     ← Guia page
│   │   ├── acao-social/page.tsx      ← Ação social page
│   │   ├── loja/page.tsx             ← Loja page
│   │   ├── loja/checkout/page.tsx    ← Checkout page
│   │   ├── parceiros/page.tsx        ← Parceiros page
│   │   └── diretoria/page.tsx        ← Diretoria page
│   │
│   ├── components/                   ← Reusable React components
│   │   ├── Navbar.tsx                ← Navigation (desktop + mobile)
│   │   ├── Footer.tsx                ← Footer with links
│   │   ├── CartDrawer.tsx            ← Cart sidebar
│   │   ├── MobileNav.tsx             ← Mobile menu
│   │   ├── SearchBar.tsx             ← Search functionality
│   │   ├── Button.tsx                ← Reusable button
│   │   ├── Badge.tsx                 ← Category badge
│   │   │
│   │   ├── home/                     ← Home page components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ManifestoSection.tsx
│   │   │   ├── WhyJoinSection.tsx
│   │   │   ├── UniSection.tsx
│   │   │   ├── InstagramSection.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── eventos/                  ← Eventos page components
│   │   │   ├── CalendarioEventos.tsx
│   │   │   └── EventoCard.tsx
│   │   │
│   │   └── loja/                     ← Loja page components
│   │       └── ProdutoCard.tsx
│   │
│   ├── lib/                          ← Utilities & business logic
│   │   ├── types.ts                  ← TypeScript interfaces
│   │   ├── data.ts                   ← Static data (products, events, etc)
│   │   ├── cart-context.tsx          ← Context API for cart
│   │   ├── cart-utils.ts             ← Helper functions
│   │
│   └── hooks/                        ← Custom React hooks
│       └── useEventos.ts             ← Hook para eventos
│
├── public/                           ← Static files
│   ├── images/                       ← Imagens otimizadas
│   │   ├── logo.png
│   │   ├── logo-sem-escudo.png
│   │   ├── mascote.png
│   │   ├── pato.png
│   │   ├── pato-uni.png
│   │   ├── tio-patinhas.png
│   │   ├── bar-pedrao.png
│   │   ├── caneca.png
│   │   └── copo.png
│   │
│   ├── fonts/                        ← Custom fonts
│   │   ├── Damages.ttf
│   │   └── Damages-Italic.ttf
│   │
│   ├── data/                         ← JSON data
│   │   └── eventos.json              ← Event data
│   │
│   ├── manifest.json                 ← PWA manifest
│   ├── robots.txt                    ← SEO robots
│   └── sitemap.xml                   ← SEO sitemap
│
├── .github/                          ← GitHub configuration
│   ├── workflows/
│   │   └── main.yml                  ← CI/CD pipeline
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md
│
├── Configuration Files
│   ├── package.json                  ← Dependencies
│   ├── tsconfig.json                 ← TypeScript config
│   ├── tailwind.config.ts            ← Tailwind config
│   ├── next.config.ts                ← Next.js config
│   ├── postcss.config.mjs            ← PostCSS config
│   ├── vercel.json                   ← Vercel deploy config
│   ├── .editorconfig                 ← Editor config
│   ├── .gitignore                    ← Git ignore rules
│   ├── .env.example                  ← Env template
│   └── .env.local                    ← Local env variables
│
├── Documentation
│   ├── README.md                     ← Project overview
│   ├── DEVELOPMENT.md                ← Development guide
│   ├── DEPLOYMENT.md                 ← Deploy guide
│   ├── ARCHITECTURE.md               ← This file
│   ├── PROJECT_SUMMARY.md            ← Project summary
│   └── CHECKLIST.md                  ← Completion checklist
│
└── Root
    ├── .git/                         ← Git history
    ├── node_modules/                 ← Dependencies (gitignored)
    ├── .next/                        ← Build output (gitignored)
    └── eventos.json                  ← Original eventos data
```

## Fluxo de Dados

```
┌──────────────────────────────────────────────┐
│         Componentes Clientes (CSR)           │
│                                              │
│  App Layout ──────────────────────┐          │
│       │                           │          │
│       ├─ Navbar ('use client')    │          │
│       │  ├─ useCart Hook         │          │
│       │  └─ usePathname Hook     │          │
│       │                           │          │
│       ├─ Main (RSC)              │          │
│       │  └─ Page Components      │          │
│       │                           │          │
│       ├─ CartDrawer ('use client')│          │
│       │  ├─ useCart Hook         │          │
│       │  └─ formatCurrency Util  │          │
│       │                           │          │
│       └─ Footer ('use client')   │          │
│          └─ useCart Hook         │          │
│                                  │          │
│  Context: CartProvider           │          │
│     ├─ items: CartItem[]         │          │
│     ├─ addItem()                 │          │
│     ├─ removeItem()              │          │
│     ├─ updateQuantity()          │          │
│     └─ clearCart()               │          │
│                                  │          │
│  localStorage: 'cart'            │          │
└──────────────────────────────────────────────┘
        │                          │
        │           ┌─────────────┘
        │           │
    ┌───▼───────────▼──────┐
    │    Static Data        │
    │   (src/lib/data.ts)   │
    │                       │
    │  ├─ PRODUTOS[]        │
    │  ├─ DIRETORES[]       │
    │  ├─ PARCEIROS[]       │
    │  ├─ LINKS_UTEIS{}     │
    │  └─ PIADAS[]          │
    │                       │
    │    /public/data/      │
    │   eventos.json        │
    └───────────────────────┘
```

## Fluxo de Roteamento

```
URL Request
    │
    ▼
Next.js App Router
    │
    ├─ / ──────────────────► app/page.tsx
    │                            ▼
    │                    HeroSection + 5 Components
    │
    ├─ /eventos ───────────► app/eventos/page.tsx
    │                            ▼
    │                    CalendarioEventos + EventoCards
    │
    ├─ /guia-calouro ──────► app/guia-calouro/page.tsx
    │
    ├─ /acao-social ───────► app/acao-social/page.tsx
    │
    ├─ /loja ──────────────► app/loja/page.tsx
    │
    ├─ /loja/checkout ─────► app/loja/checkout/page.tsx
    │
    ├─ /parceiros ─────────► app/parceiros/page.tsx
    │
    └─ /diretoria ─────────► app/diretoria/page.tsx
```

## State Management

```
Context API (CartContext)
├── Provider: CartProvider (wraps app in layout.tsx)
├── Hook: useCart() - used by client components
│
├── State:
│   ├── items: CartItem[]
│   ├── totalItems: number
│   ├── isOpen: boolean
│   └── (persisted to localStorage)
│
└── Actions:
    ├── addItem(product, quantity, customization)
    ├── removeItem(productId)
    ├── updateQuantity(productId, quantity)
    ├── clearCart()
    └── setIsOpen(boolean)
```

## Fluxo de Checkout

```
1. Add Item to Cart
   └─ CartContext.addItem()
      └─ localStorage.setItem('cart', JSON.stringify(items))

2. View Cart
   └─ CartDrawer.tsx
      └─ useCart().items

3. Go to Checkout
   └─ /loja/checkout
      └─ Review items + customize

4. Generate PIX Code
   └─ generatePixCode() utility
      └─ Display QR Code + manual key

5. Confirm Payment
   └─ generateOrderId()
      └─ localStorage.removeItem('cart')
      └─ Show success message

6. Download/Share Receipt
   └─ Email or WhatsApp
```

## Performance Optimization

```
Image Optimization
├─ next/image component
├─ Automatic format conversion (WebP)
├─ Responsive sizes
├─ Lazy loading
└─ Caching headers

Code Splitting
├─ Automatic per-route
├─ Dynamic imports for heavy components
└─ Suspense boundaries

Static Generation
├─ SSG for all pages
├─ ISR for eventos
└─ Revalidation on-demand

Caching Strategy
├─ Browser cache (public assets: max-age=31536000)
├─ Next.js server cache (ISR)
├─ localStorage (cart data)
└─ Vercel edge caching
```

## SEO & Metadata

```
Root Metadata (layout.tsx)
├─ Title + Description
├─ Keywords
├─ Open Graph
├─ Twitter Card
├─ Icons + Manifest
└─ Viewport settings

Per-Page Metadata
├─ Dynamic titles
├─ Dynamic descriptions
├─ Canonical URLs (automatic)
└─ Open Graph per page

Static Files
├─ robots.txt (crawling rules)
├─ sitemap.xml (site structure)
├─ manifest.json (PWA)
└─ favicon + apple-touch-icon
```

## Deployment Architecture

```
GitHub Repository
    │
    ├─ Branch: main
    │  └─ Trigger: push
    │     └─ GitHub Actions
    │        └─ Run tests/build
    │           └─ Success → Deploy to Vercel
    │
    └─ Branch: PR
       └─ Trigger: PR created
          └─ Vercel Preview
             └─ Deploy to staging URL

Vercel Edge Network
├─ Global distribution
├─ Automatic SSL/TLS
├─ Serverless functions (if needed)
├─ Image optimization
└─ Analytics
```

## Integração Futura

```
Banco de Dados (Supabase/Neon)
├─ products
├─ orders
├─ users
└─ eventos (from Cheers API)

Authentication (NextAuth)
├─ Email/Password
├─ Google OAuth
└─ Protected routes

Payments (Real PIX)
├─ Qvapay API
└─ Order status tracking

Email Service (SendGrid)
├─ Order confirmation
├─ Newsletter
└─ Contact form

Analytics
├─ Vercel Analytics
├─ Google Analytics
└─ Custom events tracking

CMS (Contentful/Sanity)
├─ Blog posts
├─ Events
└─ Partners
```

---

Esta arquitetura foi projetada para:
- **Escalabilidade**: Fácil adicionar novos componentes e páginas
- **Manutenibilidade**: Código organizado e bem documentado
- **Performance**: Otimizado para produção
- **Segurança**: TypeScript strict, validação de entrada
- **SEO**: Pronto para SEO com SSG e metadados
