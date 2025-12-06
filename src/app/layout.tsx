import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import Link from "next/link";

// NÃO importar Swiper CSS aqui — mover para componentes específicos

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Metadata SEM viewport
export const metadata: Metadata = {
  title: "Portal Câmara Municipal de Libertália",
  description:
    "Portal da Câmara Municipal com notícias, vereadores, atividades legislativas e publicações oficiais",
  keywords: "câmara, vereadores, legislação, Libertália",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://cmlibertalia.gov.br",
    title: "Portal Câmara Municipal de Libertália",
    description:
      "Portal da Câmara Municipal com notícias, vereadores e informações oficiais",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Câmara Municipal de Libertália",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// Viewport exportado separadamente
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Skip Link para Acessibilidade */}
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-light px-4 py-2 rounded font-semibold"
        >
          Ir para o conteúdo principal
        </Link>

        <Header />

        <main id="main-content" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
