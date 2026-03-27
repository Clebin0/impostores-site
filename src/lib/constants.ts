export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "IMPOSTORES",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description: "A Atletica impostora da Unicesumar. Integracao, festas epicas, networking e a melhor delegacao do UNI 2026.",
  logo: "/images/logo.png",
  logoWithoutShield: "/images/logo-sem-escudo.png",
  mascot: "/images/mascote.png",
};

export const SOCIAL_MEDIA = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "impostoresa",
  instagramUrl: `https://instagram.com/impostoresa`,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+5541999999999",
  whatsappUrl: `https://wa.me/5541999999999`,
  email: "contato@impostores.com",
};

export const PIX_CONFIG = {
  key: process.env.NEXT_PUBLIC_PIX_KEY || "00020126580014br.gov.bcb.pix",
  cpf: "12345678901",
  accountHolder: "ATLETICA IMPOSTORES",
};

export const NAVIGATION_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Eventos", href: "/eventos" },
  { label: "Guia Calouro", href: "/guia-calouro" },
  { label: "Ação Social", href: "/acao-social" },
  { label: "Loja", href: "/loja" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Diretoria", href: "/diretoria" },
];

export const PRODUCT_CATEGORIES = {
  roupas: "Roupas",
  acessorios: "Acessórios",
  drinkware: "Bebidas",
};

export const COLORS = {
  primary: "#ea580c", // Orange
  secondary: "#2a2a2a", // Dark gray
  accent: "#fbbf24", // Gold
  background: "#000000",
  foreground: "#ffffff",
};

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
};
