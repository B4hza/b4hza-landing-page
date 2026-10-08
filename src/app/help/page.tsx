import HelpHome from "@/components/help-home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Central de ajuda | Baza",
  description: "Informação clara sobre o serviço, as rotas e as reservas do Baza.",
};

export default function HelpPage() {
  return <HelpHome />;
}