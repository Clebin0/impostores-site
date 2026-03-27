#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🔍 Verificando estrutura do projeto IMPOSTORES...\n");

const requiredFiles = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/globals.css",
  "src/components/Navbar.tsx",
  "src/components/Footer.tsx",
  "package.json",
  "tsconfig.json",
  "next.config.ts",
];

const requiredDirs = [
  "src/app",
  "src/components",
  "src/lib",
  "public/images",
  "public/fonts",
];

let allOk = true;

console.log("📁 Verificando diretórios...");
requiredDirs.forEach((dir) => {
  const dirPath = path.join(__dirname, "..", dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}`);
  } else {
    console.log(`❌ ${dir} - NÃO ENCONTRADO`);
    allOk = false;
  }
});

console.log("\n📄 Verificando arquivos...");
requiredFiles.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - NÃO ENCONTRADO`);
    allOk = false;
  }
});

console.log("\n📊 Verificando páginas da aplicação...");
const pagesDir = path.join(__dirname, "..", "src/app");
const pages = fs
  .readdirSync(pagesDir, { withFileTypes: true })
  .filter((f) => f.isDirectory())
  .map((f) => f.name);

console.log(`Encontradas ${pages.length} páginas: ${pages.join(", ")}`);

console.log("\n✨ Verificação de estrutura completa!");
if (allOk) {
  console.log("✅ Todos os arquivos e diretórios necessários estão presentes!");
  process.exit(0);
} else {
  console.log("⚠️  Alguns arquivos ou diretórios estão faltando!");
  process.exit(1);
}
