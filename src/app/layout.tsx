import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

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
        {children}
      </body>
    </html>
  );
}
