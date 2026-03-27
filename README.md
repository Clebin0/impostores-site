# IMPOSTORES - Website Profissional

Site oficial da atlética IMPOSTORES desenvolvido com Next.js 16, React 19, TypeScript e Tailwind CSS.

## Características Principais

- **Home Expandida**: Seções completas sobre a atlética com call-to-action estratégicos
- **Calendário de Eventos**: Visualização interativa com integração de dados do Cheers
- **Guia do Calouro**: Informações essenciais para novos membros
- **Ação Social**: Registro de horas complementares e atividades sociais
- **Loja Profissional**: E-commerce com carrinho, customização de produtos e checkout PIX
- **Diretoria**: Apresentação destacada dos presidentes e equipe
- **Parceiros**: Exposição de parceiros e patrocinadores

## Tecnologias

- **Framework**: Next.js 16 com App Router
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS v4
- **Ícones**: Phosphor Icons
- **Fontes**: Geist, Damages

## Estrutura do Projeto

```
src/
├── app/                    # Rotas da aplicação
│   ├── page.tsx           # Home
│   ├── eventos/           # Página de eventos
│   ├── guia-calouro/      # Guia do calouro
│   ├── acao-social/       # Ação social
│   ├── loja/              # Loja e checkout
│   ├── parceiros/         # Parceiros
│   ├── diretoria/         # Diretoria
│   ├── layout.tsx         # Layout base
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── home/             # Componentes da home
│   ├── eventos/          # Componentes de eventos
│   ├── loja/             # Componentes da loja
│   ├── Navbar.tsx        # Barra de navegação
│   ├── Footer.tsx        # Rodapé
│   └── CartDrawer.tsx    # Drawer do carrinho
├── lib/                  # Utilidades e contextos
│   ├── types.ts         # Tipos TypeScript
│   ├── data.ts          # Dados estáticos
│   ├── cart-context.tsx # Contexto do carrinho
│   └── cart-utils.ts    # Funções utilitárias
└── public/              # Assets estáticos
    ├── images/          # Imagens e logos
    └── fonts/           # Fontes customizadas
```

## Como Rodar Localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/Clebin0/impostores.git
   cd impostores
   ```

2. **Instalar dependências**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Rodar o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

4. **Acessar a aplicação**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador

## Variáveis de Ambiente

Se precisar integrar com APIs externas, crie um arquivo `.env.local`:

```bash
# Exemplo (ajuste conforme necessário)
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Build para Produção

```bash
npm run build
npm start
# ou
pnpm build
pnpm start
```

## Customizações

### Cores e Tema

As cores são definidas em `src/app/globals.css` usando variáveis CSS:

- `--background`: Cor de fundo
- `--foreground`: Cor do texto
- `--primary`: Cor principal (laranja dos Impostores)
- `--secondary`: Cor secundária
- `--accent`: Cor de destaque

### Fonte Damages

A fonte Damages está disponível em `public/fonts/` e pode ser usada com a classe `font-damages`.

## Funcionalidades do E-commerce

- Catálogo de produtos com imagens
- Carrinho persistente via localStorage
- Customização de produtos (ex: nome nas costas)
- Checkout com PIX (mockado)
- Resumo de pedido

## Integrações Futuras

- API de eventos do Cheers
- Sistema de autenticação
- Banco de dados para gerenciar produtos
- Pagamento real via PIX/Stripe
- Sistema de administração

## Deploy

O projeto está pronto para deploy na Vercel:

```bash
npm run build
vercel deploy
```

## Contribuindo

1. Crie uma branch (`git checkout -b feature/sua-feature`)
2. Commit suas mudanças (`git commit -m 'Adiciona sua feature'`)
3. Push para a branch (`git push origin feature/sua-feature`)
4. Abra um Pull Request

## Licença

Copyright © 2024 IMPOSTORES. Todos os direitos reservados.

## Contato

- Instagram: [@impostoresunifeb](https://instagram.com/impostoresunifeb)
- Email: impostores@unifeb.edu.br
