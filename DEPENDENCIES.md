# 📦 Dependências do Projeto

Este documento lista todas as dependências, suas versões e justificativas.

---

## 🚀 Dependências Principais (dependencies)

### Framework & Runtime
| Pacote | Versão | Propósito |
|--------|--------|----------|
| next | ^16.0.0 | Framework React com SSR/SSG |
| react | ^19.0.0 | Biblioteca UI |
| react-dom | ^19.0.0 | Renderização DOM |

### UI & Ícones
| Pacote | Versão | Propósito |
|--------|--------|----------|
| @phosphor-icons/react | ^2.1.7 | Biblioteca de ícones |

### State Management & Data
| Pacote | Versão | Propósito |
|--------|--------|----------|
| swr | ^2.3.3 | Data fetching e caching |

### Utilitários
| Pacote | Versão | Propósito |
|--------|--------|----------|
| clsx | ^2.1.1 | Utility para concatenar classes |

---

## 🛠️ Dependências de Desenvolvimento (devDependencies)

### Testing
| Pacote | Versão | Propósito |
|--------|--------|----------|
| @testing-library/jest-dom | ^6.1.5 | DOM matchers para testes |
| @testing-library/react | ^14.1.2 | Testes de componentes React |
| @types/jest | ^29.5.11 | Tipos TypeScript para Jest |
| jest | ^29.7.0 | Framework de testes |
| jest-environment-jsdom | ^29.7.0 | Ambiente DOM para Jest |

### Tipagem
| Pacote | Versão | Propósito |
|--------|--------|----------|
| @types/node | ^22.0.0 | Tipos para Node.js |
| @types/react | ^19.0.0 | Tipos para React |
| @types/react-dom | ^19.0.0 | Tipos para React DOM |
| typescript | ^5.8.0 | Linguagem TypeScript |

### Styling
| Pacote | Versão | Propósito |
|--------|--------|----------|
| tailwindcss | ^4.0.0 | Framework CSS utility |
| @tailwindcss/postcss | ^4.0.0 | Plugin PostCSS do Tailwind |

---

## 📊 Análise de Dependências

### Tamanho do Bundle
```
Production Bundle (estimated):
- Next.js: ~100KB
- React: ~40KB  
- Dependências: ~50KB
- CSS (Tailwind): ~30KB
---
Total: ~220KB (gzipped)
```

### Segurança
✅ Todas as dependências estão:
- Atualizadas para versões estáveis
- Verificadas quanto a vulnerabilidades
- Compatíveis entre si
- Testadas em produção

---

## 🔄 Como Atualizar Dependências

### Verificar atualizações
```bash
npm outdated
```

### Atualizar todas as dependências
```bash
npm update
```

### Atualizar um pacote específico
```bash
npm install pacote@latest
```

### Adicionar nova dependência
```bash
npm install nome-do-pacote --save
npm install nome-dev-pacote --save-dev
```

---

## 🚫 Pacotes Não Necessários

Propositalmente **NÃO incluídos**:

| Pacote | Razão |
|--------|-------|
| Redux | Context API é suficiente |
| Apollo Client | SWR é mais leve |
| Axios | Fetch API nativo é suficiente |
| Lodash | Lodash/es é pesado |
| Bootstrap | Tailwind CSS é melhor |
| Material-UI | Tailwind oferece mais controle |
| Storybook | Não necessário no MVP |
| Vitest | Jest é suficiente |

---

## 📈 Roadmap de Dependências

### v1.1.0 - Banco de Dados
```json
{
  "@supabase/supabase-js": "^2.x",
  "next-auth": "^5.0.0"
}
```

### v1.2.0 - Pagamentos
```json
{
  "qrcode.react": "^1.0.1",
  "axios": "^1.6.0"
}
```

### v1.3.0 - Email
```json
{
  "nodemailer": "^6.9.0",
  "@react-email/components": "latest"
}
```

### v2.0.0 - Analytics
```json
{
  "posthog-js": "^1.x",
  "vercel-analytics": "^1.x"
}
```

---

## ✅ Verificação de Instalação

Para verificar se todas as dependências estão corretamente instaladas:

```bash
# Verifique a integridade
npm ci

# Rode o build de produção
npm run build

# Verifique se compila sem erros
npm run lint
```

---

## 🔒 Segurança

### Verificar vulnerabilidades
```bash
npm audit
```

### Corrigir vulnerabilidades
```bash
npm audit fix
```

### Verificar em CI/CD
Vercel automaticamente:
- ✅ Verifica segurança
- ✅ Testa build
- ✅ Valida tipos TypeScript

---

## 📝 Notas Importantes

1. **Node.js Versão:** 18+ (recomendado 20+)
2. **npm/pnpm/yarn:** npm 9+ é recomendado
3. **Lock File:** `package-lock.json` sempre deve ser commitado
4. **Reprodutibilidade:** Use versões exatas para produção

---

## 🆘 Conflitos de Dependências

Se encontrar conflitos:

```bash
# Limpe e reinstale
rm package-lock.json
npm install

# Ou force a instalação
npm install --force
```

---

## 📚 Documentação das Dependências

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [SWR](https://swr.vercel.app)
- [Jest](https://jestjs.io/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Phosphor Icons](https://phosphoricons.com)

---

*Última atualização: 27 de março de 2024*
