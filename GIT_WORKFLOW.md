# 🌳 Git Workflow - Guia de Controle de Versão

Guia prático para trabalhar com Git e GitHub no projeto IMPOSTORES.

---

## 📋 Setup Inicial

### 1. Clonar o Repositório
```bash
git clone https://github.com/Clebin0/impostores.git
cd impostores
```

### 2. Configurar Git Localmente
```bash
# Configurar usuário (primeira vez)
git config user.name "Seu Nome"
git config user.email "seu.email@example.com"

# Ou global
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

### 3. Verificar Remotes
```bash
git remote -v
# Deve mostrar origin apontando para o repo
```

---

## 🔄 Workflow de Desenvolvimento

### 1. Antes de Começar a Trabalhar
```bash
# Atualizar branch local
git fetch origin
git pull origin main
```

### 2. Criar Feature Branch
```bash
# Nomenclatura: feature/nome-da-feature
git checkout -b feature/adicionar-comentarios-produtos

# Ou bugfix
git checkout -b bugfix/corrigir-scroll-navbar

# Ou hotfix
git checkout -b hotfix/erro-checkout
```

### 3. Fazer Mudanças
```bash
# Editar arquivos...

# Ver status
git status

# Adicionar mudanças
git add .                    # Tudo
git add src/components/      # Diretório específico
git add arquivo.tsx          # Arquivo específico
```

### 4. Fazer Commit
```bash
# Commit com mensagem descritiva
git commit -m "feat: adicionar formulário de comentários"

# Mensagens devem seguir o padrão:
# feat:     nova feature
# fix:      correção de bug
# docs:     documentação
# style:    formatação (sem mudança lógica)
# refactor: refatoração
# perf:     melhoria de performance
# test:     adição de testes
# chore:    tarefas administrativas
```

### 5. Push da Branch
```bash
git push origin feature/adicionar-comentarios-produtos
```

### 6. Criar Pull Request
```bash
# No GitHub:
# 1. Vá para https://github.com/Clebin0/impostores
# 2. Clique em "Create Pull Request"
# 3. Preencha título e descrição
# 4. Selecione reviewers
# 5. Clique em "Create Pull Request"
```

### 7. Após Aprovação
```bash
# Fazer merge no GitHub (interface web) ou:
git checkout main
git pull origin main
git merge feature/adicionar-comentarios-produtos
git push origin main

# Deletar branch local
git branch -d feature/adicionar-comentarios-produtos

# Deletar branch remoto
git push origin --delete feature/adicionar-comentarios-produtos
```

---

## 📝 Padrões de Commit

### Bons Exemplos
```bash
git commit -m "feat: adicionar carrinho persistente com localStorage"
git commit -m "fix: corrigir menu mobile que não fecha"
git commit -m "docs: adicionar guia de deployment"
git commit -m "style: formatar código com prettier"
git commit -m "refactor: simplificar lógica do contexto de carrinho"
git commit -m "perf: otimizar imagens de produtos"
git commit -m "test: adicionar testes para utils"
```

### Maus Exemplos ❌
```bash
git commit -m "atualizações"
git commit -m "fix"
git commit -m "mudanças aleatórias"
git commit -m "WIP"
```

---

## 🔍 Verificar Histórico

### Ver Commits Locais
```bash
# Últimos 5 commits
git log --oneline -5

# Com mais detalhes
git log --oneline --decorate --graph

# Commits de um arquivo específico
git log -- src/components/Navbar.tsx

# Commits de um autor
git log --author="Seu Nome"
```

### Ver Diferenças
```bash
# Mudanças não staged
git diff

# Mudanças staged
git diff --staged

# Diferença entre branches
git diff main feature/seu-branch

# Diferença em um arquivo
git diff -- arquivo.tsx
```

---

## 🔧 Situações Comuns

### Erro: Commit em Branch Errada
```bash
# Solução 1: Reverter e fazer em outra branch
git reset HEAD~1              # Desfaz último commit
git checkout -b feature/nova-branch
git commit -m "sua mensagem"  # Refazer commit

# Solução 2: Cherry-pick
git log main..seu-branch      # Ver commits
git checkout main
git cherry-pick abc123        # Copiar commit para main
```

### Erro: Uncommitted Changes Antes de Switch
```bash
# Opção 1: Fazer commit
git add .
git commit -m "WIP: trabalho em progresso"
git checkout outra-branch

# Opção 2: Stash (guardar temporariamente)
git stash                     # Guardar mudanças
git checkout outra-branch
# Depois...
git checkout seu-branch
git stash pop                 # Recuperar mudanças
```

### Erro: Push Rejeitado
```bash
# Branch remota está à frente
git pull origin seu-branch    # Atualizar local
# Resolver conflitos se houver
git push origin seu-branch
```

### Merge Conflict
```bash
# Ver arquivos com conflito
git status

# Editar arquivos (procure por <<<<<<< >>>>>>>>)
# Remover marcadores de conflito

# Depois de resolver
git add .
git commit -m "fix: resolver conflitos de merge"
git push
```

---

## 🔐 Segurança

### Nunca Commitar
```bash
# ❌ NUNCA commitar:
.env.local          # Variáveis sensíveis
node_modules/       # Dependências (use npm install)
.next/              # Cache de build (regenera)
dist/               # Arquivos compilados
*.log               # Arquivos de log
```

### Check Antes de Push
```bash
# Verificar o que será enviado
git log origin/main..HEAD

# Confirmar não há .env.local
git ls-files | grep ".env"  # Não deve mostrar .env.local
```

---

## 🔄 Sincronizar Fork (se aplicável)

```bash
# 1. Adicionar upstream remoto
git remote add upstream https://github.com/Clebin0/impostores.git

# 2. Atualizar seu fork
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# 3. Atualizar branch de feature
git checkout feature/sua-feature
git merge main
```

---

## 📊 Branches Importantes

```
main (produção)
  ↑
  ├── feature/nova-funcionalidade
  ├── bugfix/corrigir-bug
  ├── hotfix/emergência
  └── docs/documentação
```

### Regras
- `main`: Sempre pronta para deploy
- `feature/*`: Novas funcionalidades
- `bugfix/*`: Correções não-urgentes
- `hotfix/*`: Correções urgentes
- `docs/*`: Apenas documentação

---

## 🚀 Deploy via Git

### Vercel Auto-Deploy
```
Ao fazer push para main:
1. GitHub webhook → Vercel
2. Vercel clona repo
3. Vercel roda: npm install && npm run build
4. Deploy automático
5. Status no PR

Simples! Nenhum comando necessário.
```

### Ver Status do Deploy
1. Vá para https://vercel.com/dashboard
2. Selecione projeto IMPOSTORES
3. Veja deployments na aba "Deployments"
4. Clique em deployment para ver logs

---

## 🆘 Desfazer Mudanças

### Desfazer Arquivo Específico
```bash
# Antes de commitar
git restore arquivo.tsx

# Ou (sintaxe antiga)
git checkout arquivo.tsx
```

### Desfazer Múltiplos Arquivos
```bash
# Todos os arquivos
git restore .

# Ou toda a branch (CUIDADO!)
git reset --hard origin/main
```

### Revert de Commit Já Enviado
```bash
# Ver hash do commit
git log --oneline main -5

# Revert (cria novo commit)
git revert abc123
git push

# Evite reset/force push em main!
```

---

## 📚 Recursos

```bash
# Ajuda do git
git help commit
git help push
git help log

# Cheat sheet visual
Procure por "git cheat sheet" no Google

# GitHub Guides
https://guides.github.com
```

---

## ✅ Checklist Antes de Push

- [ ] Commits descritivos
- [ ] Sem .env.local nos commits
- [ ] Sem console.log em produção
- [ ] Testes passam
- [ ] Build sem erro
- [ ] Branch atualizada com main
- [ ] PR descritivo e bem formatado

---

## 🔗 Links Úteis

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Git Conventions](https://www.conventionalcommits.org)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## 💬 Dúvidas Frequentes

### P: Como desfaço um push?
R: `git revert` para revert seguro ou contate um admin para force push

### P: Posso fazer rebase de main?
R: Sim, para manter histórico limpo: `git rebase main`

### P: Quanto tempo posso deixar um branch aberto?
R: Mantenha PRs abertas por no máximo 3 dias sem atividade

### P: Quantos commits deve ter um PR?
R: De 1 a 5 commits idealmente, bem lógicos

### P: Posso commitar em main direto?
R: NÃO - use branches e PRs sempre

---

**Última atualização:** 27 de Março de 2024
**Versão:** 1.0
**Status:** Produção

