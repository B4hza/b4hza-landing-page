import type { Metadata } from "next";
import { Inter, Inter_Tight, Archivo } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const inter_tight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
})

export const metadata = {
  title: "Baza — Menos correria. Mais previsibilidade.",
  description:
    "O Baza prepara rotas e horários definidos para tornar as deslocações diárias em Angola mais organizadas e previsíveis.",
  keywords: [
    "Baza",
    "Transporte Angola",
    "App de transporte",
    "Mobilidade Angola",
    "Estudantes",
    "Motoristas",
    "Rotas fixas",
    "Mobilidade urbana",
    "Luanda",
  ],
  openGraph: {
    title: "Baza — Menos correria. Mais previsibilidade.",
    description:
      "O Baza prepara rotas e horários definidos para tornar as deslocações diárias em Angola mais organizadas e previsíveis.",
    url: "https://bazaja.com",
    siteName: "Baza",
    images: [
      {
        url: "https://bazaja.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Baza - Transporte urbano em Angola",
      },
    ],
    locale: "pt_AO",
    type: "website",
  },
}

function GuideGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.005) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.005) 1px, transparent 1px)
        `,
        backgroundSize: "calc(100% / 30) 80px",
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={archivo.variable}>
      <body
        className={`${archivo.variable} ${inter.variable} ${inter_tight.variable} antialiased relative`}
      >
        <GuideGrid />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
