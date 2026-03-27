# ✅ Checklist Pré-Deploy

Use este checklist antes de fazer deploy em produção.

---

## 🏗️ Verificação Técnica

### Build & Compilation
- [ ] `npm install` executa sem erros
- [ ] `npm run build` executa com sucesso
- [ ] Build size é menor que 500MB
- [ ] Não há warnings no build
- [ ] Não há erros de TypeScript
- [ ] `npm run lint` passa sem erros

### Code Quality
- [ ] Sem `console.log()` em produção
- [ ] Sem `debugger` statements
- [ ] Sem variáveis não utilizadas
- [ ] Sem imports não utilizados
- [ ] Sem hardcoded secrets
- [ ] Sem TODOs importantes

### Performance
- [ ] Lighthouse score > 90
- [ ] Time to First Byte (TTFB) < 200ms
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] First Input Delay (FID) < 100ms

### Testing
- [ ] `npm run test` passa
- [ ] Todos os componentes principais testados
- [ ] Não há console errors em test
- [ ] Coverage > 80% (ideal)

---

## 🌐 Funcionalidades Críticas

### Navegação
- [ ] Homepage carrega corretamente
- [ ] Navbar aparece em todos as páginas
- [ ] Footer aparece em todas as páginas
- [ ] Links internos funcionam
- [ ] Botão "voltar" funciona
- [ ] Menu mobile funciona

### Responsividade
- [ ] Mobile: 320px (iPhone 5)
- [ ] Tablet: 768px (iPad)
- [ ] Desktop: 1024px+
- [ ] Sem scroll horizontal
- [ ] Imagens responsivas
- [ ] Texto legível em todos tamanhos

### Formulários & Interações
- [ ] Carrinho adiciona produtos
- [ ] Carrinho remove produtos
- [ ] Carrinho persiste no refresh
- [ ] Checkout carrega PIX
- [ ] Filtros funcionam
- [ ] Busca funciona (se aplicável)

### Imagens & Assets
- [ ] Todas as imagens carregam
- [ ] Imagens não têm quebra
- [ ] Fonts carregam corretamente
- [ ] Ícones aparecem corretamente
- [ ] OG image válida
- [ ] Favicon aparece

### Links Externos
- [ ] Links Instagram funcionam
- [ ] Links WhatsApp funcionam
- [ ] Links de parceiros funcionam
- [ ] Links de redes sociais funcionam

---

## 📱 Teste em Browsers

### Desktop
- [ ] Chrome (última versão)
- [ ] Firefox (última versão)
- [ ] Safari (última versão)
- [ ] Edge (última versão)

### Mobile
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Safari em iPad
- [ ] Chrome em tablet

### Resoluções Testadas
- [ ] 320px (mobile pequeno)
- [ ] 375px (iPhone padrão)
- [ ] 768px (tablet)
- [ ] 1024px (desktop pequeno)
- [ ] 1440px (desktop padrão)
- [ ] 2560px (4K)

---

## 🔒 Segurança

### Environment
- [ ] .env.local NÃO está commitado
- [ ] Variáveis sensíveis em Vercel
- [ ] API keys não estão no código
- [ ] Secrets bem configurados

### Code
- [ ] Sem eval() ou similar
- [ ] Sem innerHTML com user input
- [ ] SQL injection prevention (se houver SQL)
- [ ] XSS prevention ok
- [ ] CORS configurado

### HTTPS
- [ ] Site usa HTTPS
- [ ] Certificado válido
- [ ] Sem mixed content warnings
- [ ] Headers de segurança ok

---

## 📊 SEO & Metadata

### Meta Tags
- [ ] Title tag único por página
- [ ] Description tag ok
- [ ] Keywords relevantes
- [ ] OG tags completas
- [ ] Twitter card tags
- [ ] Canonical URLs

### Indexing
- [ ] robots.txt existe
- [ ] sitemap.xml gerado
- [ ] Google Search Console configurado
- [ ] Bing Webmaster Tools configurado
- [ ] No noindex tags acidentais

### Structure
- [ ] H1 em cada página
- [ ] H2-H6 hierarquia correta
- [ ] Alt text em imagens
- [ ] Semantic HTML usado

---

## 🚀 Deployment Checks

### Vercel Configuration
- [ ] vercel.json está correto
- [ ] Build command ok
- [ ] Start command ok
- [ ] Output directory correto
- [ ] Environment variables setadas

### Domain & DNS
- [ ] Domínio apontando para Vercel
- [ ] DNS propagado globalmente
- [ ] SSL ativo
- [ ] WWW redirect configurado

### Monitoring
- [ ] Analytics configurado
- [ ] Error tracking ativo
- [ ] Performance monitoring ok
- [ ] Uptime monitoring ativo

---

## 📧 Email & Notificações

### Fallback Systems
- [ ] Sistema de notificação funciona
- [ ] Emails não buggados (se houver)
- [ ] Confirmações de pedido ok
- [ ] Alertas de erro funcionam

---

## 💾 Backup & Recovery

### Data Protection
- [ ] Backups configurados
- [ ] Disaster recovery plan
- [ ] Database backup (se houver)
- [ ] Code repository remoto
- [ ] Documentação de recuperação

---

## 🎯 Performance Final Checks

### Bundle Analysis
- [ ] `npm run build` analise
- [ ] Sem dependências duplicadas
- [ ] Tree-shaking funcionando
- [ ] Code splitting ok

### Optimization
- [ ] Images otimizadas
- [ ] CSS minificado
- [ ] JavaScript minificado
- [ ] Gzip compression ativo

---

## 📋 Documentation Verification

### README.md
- [ ] Instruções de setup claras
- [ ] Comandos todos testados
- [ ] Links funcionam
- [ ] Screenshots atualizadas

### DEPLOYMENT.md
- [ ] Instruções de deploy completas
- [ ] Variáveis listadas
- [ ] Comandos funcionam
- [ ] Troubleshooting incluído

### API Documentation (se houver)
- [ ] Endpoints documentados
- [ ] Exemplos funcionam
- [ ] Rate limits definidos
- [ ] Error responses claros

---

## 🧪 Final Testing Routine

### Run This Before Deploy
```bash
# 1. Limpar build anterior
rm -rf .next

# 2. Instalar dependências
npm install

# 3. Rodar linter
npm run lint

# 4. Rodar testes
npm run test

# 5. Build
npm run build

# 6. Verificar output
npm run start

# 7. Teste local com staging URL
# Acesse http://localhost:3000
```

### Manual Testing Checklist
```
Homepage:
- [ ] Carrega sem erros
- [ ] Todas seções visíveis
- [ ] Imagens carregam
- [ ] Links funcionam

Eventos:
- [ ] Calendário mostra
- [ ] Filtros funcionam
- [ ] Eventos carregam

Loja:
- [ ] Produtos listam
- [ ] Carrinho funciona
- [ ] Checkout ok

Outras páginas:
- [ ] Conteúdo correto
- [ ] Formulários funcionam
- [ ] Navegação ok

Mobile:
- [ ] Menu funciona
- [ ] Responsivo ok
- [ ] Touch eventos ok
```

---

## ⏰ Timeline de Deploy

### T-1 Dia Antes
- [ ] Executar checklist inteiro
- [ ] Correções finais
- [ ] Review do código
- [ ] Reunião com stakeholders

### T-0 (Dia do Deploy)
- [ ] Último build teste
- [ ] Variáveis de ambiente checadas
- [ ] Backup de código
- [ ] Anúncio preparado

### T+0 (Deploy)
- [ ] Fazer deploy
- [ ] Verificar logs
- [ ] Testar site ao vivo
- [ ] Monitorar errors

### T+1 Hora Depois
- [ ] Verificar métricas
- [ ] Rodar full QA
- [ ] Anunciar aos usuários
- [ ] Monitorar feedback

### T+24 Horas
- [ ] Análise completa
- [ ] Ajustes se necessário
- [ ] Documentação de sucesso

---

## 🆘 Rollback Plan

Se algo der errado:

```bash
# 1. Reverter para versão anterior
git revert [commit-hash]
git push

# 2. Vercel automaticamente faz redeploy
# (Vercel mantém histórico)

# 3. Notificar stakeholders
# 4. Investigar causa
# 5. Fazer hotfix
# 6. Redeploy com segurança
```

---

## ✅ Approval Sign-Off

| Role | Responsável | Status |
|------|------------|--------|
| Developer | [Nome] | [ ] |
| QA/Tester | [Nome] | [ ] |
| Product | [Nome] | [ ] |
| Manager | [Nome] | [ ] |

**Observações:**
```
_________________________________
_________________________________
_________________________________
```

---

## 📞 Emergency Contacts

**Durante Deploy:**
- Dev Lead: [Contato]
- DevOps: [Contato]
- Manager: [Contato]

**Pós-Deploy:**
- Suporte: support@impostores.com
- Emergência: +55 41 999999999

---

## 📝 Deploy Notes

Escreva aqui notas sobre este deploy:

```
Data: ___/___/____
Hora: ____:____ UTC

Alterações principais:
- ___________________________________________
- ___________________________________________

Issues resolvidas:
- ___________________________________________

Notas especiais:
- ___________________________________________

Rollback necessário? [ ] Sim [ ] Não
```

---

## ✨ Post-Deploy Verification

### 24 Horas Após Deploy
- [ ] Site está online
- [ ] Sem erros em logs
- [ ] Métricas normais
- [ ] Usuários reportam ok

### 1 Semana Após Deploy
- [ ] Performance estável
- [ ] Sem degradação
- [ ] Usuários satisfeitos
- [ ] Issues resolvidos

### 1 Mês Após Deploy
- [ ] Métricas positivas
- [ ] Feedback coletado
- [ ] Análise completa
- [ ] Próximas melhorias planejadas

---

## 🎉 Celebração de Sucesso!

Quando tudo estiver ok:

```
✨ DEPLOY BEM-SUCEDIDO! ✨

Site ao vivo: https://impostores.vercel.app
Status: 🟢 ONLINE
Performance: ⚡ OTIMIZADO

Parabéns ao time! 🎊
```

---

**Última atualização:** 27 de Março de 2024  
**Mantido por:** Time de Desenvolvimento  
**Próxima revisão:** Antes de cada deploy
