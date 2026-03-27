# Guia de Deployment

Instruções para fazer deploy da aplicação IMPOSTORES em produção.

## Deploying para Vercel (Recomendado)

A forma mais simples e rápida de fazer deploy é usando Vercel, que é otimizada para Next.js.

### Pré-requisitos

1. Conta no GitHub com o repositório
2. Conta na Vercel (vercel.com)

### Passo 1: Conectar Repositório

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New..." → "Project"
3. Selecione o repositório `Clebin0/impostores`
4. Vercel detectará automaticamente que é um projeto Next.js

### Passo 2: Configurar Variáveis de Ambiente

Na página do projeto no Vercel:

1. Vá para **Settings** → **Environment Variables**
2. Adicione as variáveis necessárias:

```
NEXT_PUBLIC_API_URL=https://impostores.example.com
```

### Passo 3: Deploy

1. Clique em **Deploy**
2. Aguarde a build ser concluída
3. Seu site estará disponível em um URL Vercel (`*.vercel.app`)

### Configurar Domínio Customizado

1. Em **Settings** → **Domains**
2. Clique em "Add Domain"
3. Digite seu domínio (ex: `impostores.unifeb.edu.br`)
4. Configure os DNS records conforme instruções

## Deploy Manual (Outras Plataformas)

### Build Local

```bash
npm run build
```

A build será criada em `.next/`

### Node.js (Exemplo: Railway, Render)

```bash
npm run build
npm start
```

### Docker

Crie um `Dockerfile` na raiz:

```dockerfile
FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
```

Build e deploy:

```bash
docker build -t impostores .
docker run -p 3000:3000 impostores
```

## Otimizações de Produção

### Build Optimization

```bash
# Analise o tamanho do bundle
npm run build
npm run analyze
```

### Performance

1. **Image Optimization**: Todas as imagens devem usar `next/image`
2. **Dynamic Imports**: Componentes pesados importados dinamicamente
3. **ISR**: Páginas revalidadas incrementalmente

### Security

- [ ] Remova variáveis sensíveis do código
- [ ] Use `.env.local` para secrets locais
- [ ] Configure CORS se necessário
- [ ] Adicione rate limiting em APIs

## Monitoramento em Produção

### Vercel Analytics

Habilitado automaticamente:

1. Vá para **Analytics** no projeto Vercel
2. Veja Core Web Vitals, performance, etc.

### Logs

```bash
# Ver logs de deploy
vercel logs

# Ver logs em tempo real
vercel logs --follow
```

### Alertas

Configure alertas em **Settings** → **Monitoring**

## Rollback

Se algo der errado:

```bash
# Ver deployments anteriores
vercel deployments list

# Redeployar uma versão anterior
vercel rollback
```

## Staging vs Production

Para testes antes de ir para produção:

### Branch Preview

1. Crie uma branch `staging`
2. Vercel criará preview automático para cada PR
3. Teste em `staging--*.vercel.app`
4. Faça merge para `main` quando aprovado

## CI/CD com GitHub Actions

Arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## Troubleshooting Deploy

### Build Fails

```bash
# Limpar cache
vercel deployments clear-cache

# Fazer build limpo
rm -rf .next
npm run build
```

### Imagens não aparecem

1. Verifique que estão em `public/`
2. Use caminhos `/images/...` não relativos
3. Confira as permissões

### Rotas não funcionam

1. Verifique nomes das pastas (`[slug]` vs `slug`)
2. Confira se `page.tsx` existe em cada rota
3. Verifique redirects em `next.config.ts`

## Relacionado

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deploy](https://nextjs.org/docs/deployment)
- [Environment Variables](https://vercel.com/docs/environment-variables)

## Suporte

Para problemas com Vercel, visite https://vercel.com/support
