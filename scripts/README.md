# 📜 Scripts do Projeto

Scripts utilitários para desenvolvimento e deployment do projeto IMPOSTORES.

---

## 📋 Scripts Disponíveis

### build-check.js
**Propósito:** Verificar integridade da estrutura do projeto

**Como usar:**
```bash
npm run check
# ou
node scripts/build-check.js
```

**O que faz:**
- Verifica se todos os diretórios necessários existem
- Verifica se todos os arquivos críticos estão presentes
- Lista páginas encontradas
- Retorna status sucesso/erro

**Output esperado:**
```
✅ Verificação de estrutura completa!
✅ Todos os arquivos e diretórios necessários estão presentes!
```

**Uso típico:**
- Após clonar o repositório
- Antes de fazer deploy
- Para debugar problemas de estrutura
- Na CI/CD pipeline

---

## 🔧 Como Adicionar Novos Scripts

### 1. Criar arquivo em `/scripts/`
```bash
touch scripts/meu-script.js
```

### 2. Escrever script Node.js
```javascript
#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("📝 Meu script começou...");

// Sua lógica aqui

console.log("✅ Script concluído!");
```

### 3. Adicionar ao package.json
```json
{
  "scripts": {
    "meu-script": "node scripts/meu-script.js"
  }
}
```

### 4. Fazer executável (opcional)
```bash
chmod +x scripts/meu-script.js
```

### 5. Usar
```bash
npm run meu-script
```

---

## 📚 Exemplos de Scripts Futuros

### Seed Database
```javascript
// scripts/seed-db.js
// Popularia banco com dados iniciais
```

### Generate Sitemap
```javascript
// scripts/generate-sitemap.js
// Geraria sitemap.xml dinamicamente
```

### Optimize Images
```javascript
// scripts/optimize-images.js
// Comprimiria imagens em batch
```

### Generate Thumbnails
```javascript
// scripts/generate-thumbnails.js
// Criaria thumbnails de produtos
```

### Deploy to Production
```javascript
// scripts/deploy-prod.js
// Wrapper customizado do Vercel CLI
```

### Database Backup
```javascript
// scripts/backup-db.js
// Faria backup automático
```

---

## 🚀 Integração com CI/CD

Use scripts em seu workflow GitHub Actions:

```yaml
# .github/workflows/build.yml
name: Build
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Verificar estrutura
        run: npm run check
      
      - name: Instalar dependências
        run: npm install
      
      - name: Rodar testes
        run: npm test
      
      - name: Build
        run: npm run build
```

---

## 💡 Boas Práticas

### Script Node.js
```javascript
#!/usr/bin/env node
// Use shebang para executar sem 'node'

const fs = require("fs");
const path = require("path");

// Use console.log para output
console.log("📝 Mensagem informativa");
console.log("✅ Sucesso");
console.log("⚠️  Aviso");
console.log("❌ Erro");

// Use process.exit(code) para status
process.exit(0); // Sucesso
process.exit(1); // Erro
```

### Tratamento de Erro
```javascript
try {
  // Sua lógica
} catch (error) {
  console.error("❌ Erro:", error.message);
  process.exit(1);
}
```

### Argumentos CLI
```javascript
const args = process.argv.slice(2);
// npm run script arg1 arg2
// args = ['arg1', 'arg2']
```

---

## 📖 Documentação

Cada script deve ter:
- [ ] Descrição clara do propósito
- [ ] Instruções de uso
- [ ] Exemplos
- [ ] Output esperado
- [ ] Casos de erro

---

## 🆘 Troubleshooting

### Script não executa
```bash
# Dar permissão de execução
chmod +x scripts/meu-script.js

# Ou usar node explicitamente
node scripts/meu-script.js
```

### Module not found
```bash
# Certifique-se de usar caminhos relativos
const path = require("path");
const filePath = path.join(__dirname, "..", "arquivo");
```

### Permissão negada
```bash
# Execute como administrador ou com sudo
sudo npm run script-nome
```

---

## 📋 Checklist para Novos Scripts

- [ ] Arquivo criado em `/scripts/`
- [ ] Shebang `#!/usr/bin/env node` adicionado
- [ ] Script testado localmente
- [ ] Adicionado ao `package.json`
- [ ] Documentado neste README
- [ ] Tratamento de erros implementado
- [ ] Mensagens claras para usuário
- [ ] Exemplos fornecidos

---

## 🔐 Segurança

⚠️ **NUNCA colocque em scripts:**
- Senhas ou API keys
- Informações sensíveis
- Acesso a arquivos privados

✅ **SEMPRE use:**
- Variáveis de ambiente para secrets
- .env files (não commitadas)
- Vercel secrets para produção

---

## 📞 Suporte

Se tiver problemas com scripts:
1. Verifique a documentação aqui
2. Veja exemplos em outros scripts
3. Reporte issues no GitHub
4. Contate o time de desenvolvimento

---

*Última atualização: 27 de Março de 2024*
