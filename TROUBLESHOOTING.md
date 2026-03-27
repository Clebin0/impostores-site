# 🔧 Troubleshooting - Guia de Resolução de Problemas

Aqui estão soluções para problemas comuns ao desenvolver ou fazer deploy da aplicação IMPOSTORES.

---

## 🏗️ Problemas de Build

### "Error: ENOENT: no such file or directory"
**Causa:** Arquivo ou pasta não encontrada

**Solução:**
```bash
# Limpe node_modules e reinstale
rm -rf node_modules package-lock.json
npm install

# Verifique se .env.local existe
cp .env.example .env.local
```

### "Cannot find module 'next/font/google'"
**Causa:** Versão incompatível do Next.js

**Solução:**
```bash
# Atualize Next.js
npm install next@latest

# Limpe build cache
rm -rf .next
npm run build
```

### "PostCSS error: Unknown word"
**Causa:** Tailwind CSS v4 incompatível

**Solução:**
```bash
# Verifique versão do Tailwind
npm list tailwindcss

# Reinstale corretamente
npm install tailwindcss@^4.0.0 --save-dev
```

---

## 🎨 Problemas de Estilo

### Styles não estão sendo aplicados
**Causa:** Tailwind CSS não foi processado

**Solução:**
1. Verifique se `src/app/globals.css` existe
2. Confirme que `@import "tailwindcss"` está no topo
3. Limpe Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```

### Cores não aparecem no site
**Causa:** Design tokens não carregados

**Solução:**
1. Verifique se `globals.css` está sendo importado em `layout.tsx`
2. Confirme que variáveis CSS estão definidas em `:root`
3. Reinicie o servidor de desenvolvimento

### Fonte "Damages" não está carregando
**Causa:** Arquivo de fonte ausente ou caminho incorreto

**Solução:**
```bash
# Verifique se arquivos existem
ls -la public/fonts/

# Deve conter:
# - Damages.ttf
# - Damages-Italic.ttf

# Reinicie o servidor
npm run dev
```

---

## 🛍️ Problemas da Loja

### Carrinho não persiste após reload
**Causa:** localStorage não está salvando

**Solução:**
1. Verifique se JavaScript está habilitado
2. Limpe localStorage:
   ```javascript
   localStorage.clear()
   ```
3. Reinicie a página

### Imagens de produtos não carregam
**Causa:** Caminho de imagem incorreto

**Solução:**
```bash
# Verifique se imagens existem
ls public/images/

# Se faltam imagens, recopie ou regenere:
npm run build
```

### Checkout não funciona
**Causa:** PIX mockado não está implementado

**Solução:**
- Este é comportamento esperado em desenvolvimento
- PIX real será integrado em v1.2.0
- Para testes, use valores mockados

---

## 📱 Problemas de Responsividade

### Layout quebrado no mobile
**Causa:** Breakpoints do Tailwind incorretos

**Solução:**
1. Use `sm:`, `md:`, `lg:` prefix
2. Mobile-first: estilos base → desktop
3. Teste com DevTools (F12)

### Navbar não fica responsiva
**Causa:** Menu não tem versão mobile

**Solução:**
- Atualize `src/components/Navbar.tsx`
- Use `hidden md:block` para desktop
- Use `block md:hidden` para mobile

---

## 🔐 Problemas de Variáveis de Ambiente

### "undefined" em console
**Causa:** Variável de ambiente não definida

**Solução:**
```bash
# Copie o template
cp .env.example .env.local

# Preencha os valores
nano .env.local

# Reinicie servidor
npm run dev
```

### NEXT_PUBLIC_ não funciona
**Causa:** Variável sem prefixo NEXT_PUBLIC_

**Solução:**
- Use `NEXT_PUBLIC_` para variáveis públicas (client-side)
- Sem prefixo para variáveis privadas (server-side)

---

## 📊 Problemas de Performance

### Site lento
**Causa:** Imagens não otimizadas ou bundle grande

**Solução:**
```bash
# Analize bundle
npm run build

# Comprima imagens
# Use next/image para otimização automática

# Habilite React Compiler
# next.config.ts: reactCompiler: true
```

### Build demora muito
**Causa:** Muitos arquivos ou dependências pesadas

**Solução:**
```bash
# Use Turbopack (já habilitado)
npm run dev

# Para build otimizado
npm run build
```

---

## 🐛 Problemas de Compilação TypeScript

### "Type 'X' is not assignable to type 'Y'"
**Causa:** Erro de tipo TypeScript

**Solução:**
1. Verifique a interface:
   ```typescript
   // Correto
   interface Props {
     name: string;
   }
   
   // Uso
   <Component name="string" />
   ```

2. Use `as` com cuidado:
   ```typescript
   (data as string)
   ```

### Import não encontrado
**Causa:** Path alias incorreto

**Solução:**
```bash
# Verifique tsconfig.json
# Deve ter:
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

---

## 🚀 Problemas de Deploy

### Vercel build falha
**Causa:** Variáveis de ambiente não configuradas

**Solução:**
1. Acesse Vercel Dashboard
2. Settings → Environment Variables
3. Adicione todas as variáveis de `.env.local`

### "404 Not Found" após deploy
**Causa:** Página não foi gerada

**Solução:**
```bash
# Verifique se página existe
ls src/app/*/page.tsx

# Rebuilde
npm run build

# Redeploy
vercel deploy --prod
```

### Imagens não aparecem em produção
**Causa:** Imagens não foram copiadas

**Solução:**
1. Verifique que estão em `public/images/`
2. Use caminhos relativos: `/images/nome.jpg`
3. Não use require ou import para imagens

---

## 📧 Problemas de Email/Notificações

### Emails não são enviados
**Causa:** Serviço de email não configurado

**Solução:**
- V1.2.0 incluirá integração de email
- Por enquanto, use console.log para debug

---

## 🆘 Ainda tendo problemas?

### 1. Verifique o Checklist
```bash
npm run check
```

### 2. Limpe tudo
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### 3. Reporte um Issue
- GitHub: [Issues](https://github.com/Clebin0/impostores/issues)
- Inclua:
  - Descrição do problema
  - Passos para reproduzir
  - Versão do Node.js
  - Mensagem de erro completa
  - Screenshot se aplicável

### 4. Contate o Suporte
- Instagram: @impostoresa
- Email: contato@impostores.com
- WhatsApp: +5541999999999

---

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Vercel Docs](https://vercel.com/docs)

---

## ✅ Checklist de Debug

Quando algo não funciona:
- [ ] Feche e reabra o servidor (`Ctrl+C`, `npm run dev`)
- [ ] Limpe cache do navegador (`Ctrl+Shift+R`)
- [ ] Verifique console do navegador (F12)
- [ ] Verifique terminal para erros
- [ ] Confirme variáveis de ambiente
- [ ] Verifique permissões de arquivo
- [ ] Reinicie npm (`rm node_modules`, `npm install`)

---

*Última atualização: 27 de março de 2024*
