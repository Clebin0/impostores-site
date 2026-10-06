<div align="center">

# IMPOSTORES

**Website da Atlética IMPOSTORES**

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind-000000?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />

</div>

---

Aplicação web desenvolvida para centralizar comunicação, eventos, conteúdo institucional e experiências digitais da Atlética IMPOSTORES.

## Funcionalidades

- home institucional;
- calendário de eventos;
- guia do calouro;
- área de ação social;
- apresentação da diretoria;
- parceiros e patrocinadores;
- catálogo de produtos;
- carrinho persistente;
- customização de produtos;
- fluxo de checkout Pix em modo demonstrativo.

## Stack

~~~text
Next.js 16
React 19
TypeScript
Tailwind CSS
App Router
~~~

## Estrutura principal

~~~text
src/
├── app/          rotas e páginas
├── components/   componentes reutilizáveis
└── lib/          tipos, dados e utilidades

public/
├── images/
└── fonts/
~~~

## Executar localmente

~~~bash
git clone https://github.com/Clebin0/impostores-site.git
cd impostores-site
npm install
npm run dev
~~~

Abra <code>http://localhost:3000</code>.

## Build

~~~bash
npm run build
npm start
~~~

## Estado do projeto

O checkout existente é demonstrativo. Pagamentos reais, autenticação e integrações externas exigem configuração e validação adicionais antes de qualquer uso em produção.

## Arquitetura

A aplicação utiliza componentes reutilizáveis no frontend e mantém a separação entre conteúdo, estado do carrinho e apresentação. A base foi estruturada para permitir integração futura com APIs, autenticação e persistência.

---

<div align="center">

Projeto web desenvolvido por Cledson Santos.

</div>
