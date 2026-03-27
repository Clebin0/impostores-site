# Guia de Contribuição

Obrigado por considerar contribuir para a Atletica IMPOSTORES! Este documento fornece diretrizes e instruções para colaboradores.

## Código de Conduta

- Seja respeitoso com todos os membros
- Colaboração construtiva é bem-vinda
- Rejeite comportamentos discriminatórios ou abusivos

## Como Contribuir

### 1. Reportar Bugs
Se encontrar um bug, abra uma issue no GitHub com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado
- Imagens/screenshots se aplicável
- Versão do Node.js e navegador

### 2. Sugerir Melhorias
Para sugerir features:
- Use a template de feature request
- Explique o caso de uso
- Mostre exemplos de como funcionaria
- Liste benefícios potenciais

### 3. Submeter Pull Requests

#### Setup do Desenvolvimento
```bash
# Clone o repositório
git clone https://github.com/Clebin0/impostores.git
cd impostores

# Instale dependências
npm install

# Inicie o desenvolvimento
npm run dev
```

#### Processo de PR
1. Crie uma branch feature (`git checkout -b feature/AmazingFeature`)
2. Faça seus commits com mensagens claras
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request
5. Descreva suas mudanças claramente

#### Padrões de Código
- Use TypeScript para novos componentes
- Siga a estrutura de componentes existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário
- Use semantic commits:
  - `feat:` para novas features
  - `fix:` para bug fixes
  - `docs:` para documentação
  - `style:` para formatação
  - `refactor:` para refatoração
  - `test:` para testes

#### Checklist de PR
- [ ] Código segue o padrão do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Sem console.log ou debugger
- [ ] Commit messages são claras
- [ ] Branch está atualizada com main

### 4. Melhorar Documentação
Documentação é tão importante quanto código:
- Corrija erros de digitação
- Melhore clareza das instruções
- Adicione exemplos
- Traduza para português/inglês

## Estrutura do Projeto

```
impostores/
├── src/
│   ├── app/           # Pages e layouts
│   ├── components/    # React components
│   ├── lib/          # Utilities e contextos
│   └── hooks/        # Custom hooks
├── public/           # Assets estáticos
├── scripts/          # Scripts de desenvolvimento
└── docs/            # Documentação
```

## Convenções

### Componentes React
- Nomeação: PascalCase (ex: `HeroSection.tsx`)
- Localização: `src/components/` ou subdiretórios
- Sempre com TypeScript
- Props interfaces bem definidas
- Componentes funcionais com hooks

### Arquivos TypeScript
- Arquivos de utilidade: camelCase (ex: `utils.ts`)
- Tipos: `types.ts`
- Constantes: `constants.ts`
- Contextos: `*-context.tsx`

### CSS/Tailwind
- Use classes do Tailwind quando possível
- Use design tokens para cores
- Mantenha especificidade baixa
- Responsive-first (mobile → desktop)

## Testando Localmente

```bash
# Verificar estrutura
npm run check

# Rodar linter
npm run lint

# Rodar testes
npm run test

# Build produção
npm run build

# Verificar produção
npm run start
```

## Processo de Review

- Code review por pelo menos 1 membro
- CI/CD checks devem passar
- Sem conflitos com main branch
- Documentação atualizada

## Publicação de Releases

Releases são feitas automaticamente na Vercel ao fazer merge em main.
Mantenha o CHANGELOG.md atualizado.

## Perguntas?

- Abra uma discussion no GitHub
- Envie um DM no Instagram: @impostoresa
- Email: contato@impostores.com

## Licença

Ao contribuir, você aceita que suas contribuições sejam licenciadas sob a mesma licença do projeto.

---

Obrigado por melhorar a Atletica IMPOSTORES! 🦆
