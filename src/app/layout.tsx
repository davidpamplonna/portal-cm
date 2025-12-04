import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { Header } from "../layout/Header";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Footer } from "../layout/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portal Câmara Municipal de Libertália",
  description: "Portal modelo de uma câmara municipal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
       className={`${roboto.variable} antialiased`}
      >
      <Header />
       <main>
           {children}
       </main>
        {/* Footer */}
      <Footer />
      </body>
    </html>
  );
}
