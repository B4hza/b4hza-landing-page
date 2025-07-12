import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
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

export const metadata = {
  title: "Baza - Transporte confiável e recorrente em Angola",
  description:
    "Chega de lutar por táxi todo dia. Com o Baza, tu tens transporte garantido todos os dias com rotas fixas e seguras.",
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
    "Cacuaco",
  ],
  openGraph: {
    title: "Baza - Transporte recorrente em Angola",
    description:
      "Chega de lutar por táxi todo dia. Com o Baza, tu tens transporte garantido todos os dias com rotas fixas e seguras.",
    url: "https://bazaja.com",
    siteName: "Baza",
    images: [
      {
        url: "https://bazaja.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "Baza - Transporte urbano em Angola",
      },
    ],
    locale: "pt_AO",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter_tight.variable}>
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
