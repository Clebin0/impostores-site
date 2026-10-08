import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"; // 1. Importamos a ferramenta de fonte local
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

// Fonte padrão para textos corridos
const inter = Inter({ subsets: ["latin"] });

// 2. Configurando a fonte personalizada da Atlética (Damages)
const damages = localFont({
  src: [
    {
      path: "../../public/fonts/Damages.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Damages-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-damages", // Isso cria uma variável CSS para usarmos no site todo
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Impostores | O Maior Cofre da Contabilidade",
    template: "%s | Impostores",
  },
  description:
    "A Atletica impostora da Unicesumar. Integracao, festas epicas, networking e a melhor delegacao do UNI 2026.",
  keywords: [
    "atletica",
    "impostores",
    "unicesumar",
    "ciencias contabeis",
    "curitiba",
    "uni 2026",
    "estudantes",
  ],
  authors: [{ name: "A.A.A.C.S.A IMPOSTORES" }],
  creator: "Atletica Impostores",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://impostores.vercel.app",
    siteName: "Atletica Impostores",
    title: "Impostores | O Maior Cofre da Contabilidade",
    description:
      "A Atletica impostora da Unicesumar. Integracao, festas epicas, networking e a melhor delegacao do UNI 2026.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atletica Impostores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impostores | O Maior Cofre da Contabilidade",
    description: "A Atletica impostora da Unicesumar.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/pato.png",
    shortcut: "/images/pato.png",
    apple: "/images/pato.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* 3. Injetamos a variável da Damages no body do site */}
      <body className={`${inter.className} ${damages.variable}`}>
        <CartProvider>
          <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-3 focus:font-bold focus:text-black">Pular para o conteúdo</a>
          <Navbar />
          <main id="conteudo-principal" className="min-h-screen" tabIndex={-1}>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}