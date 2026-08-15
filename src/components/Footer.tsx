"use client"

import { Linkedin, Instagram } from "lucide-react"

const navLinks = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#faq", label: "FAQ" },
]

const socials = [
  { href: "https://www.linkedin.com/company/bazaja/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/bazaja_/", label: "Instagram", icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto rounded-2xl px-6 md:px-12 py-10">
        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Coluna esquerda */}
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold text-black tracking-tight">Baza</h2>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">
              O Baza transforma o transporte diário numa experiência mais simples e previsível, conectando estudantes e trabalhadores a motoristas de confiança em rotas seguras, fixas e acessíveis.
            </p>
          </div>

          {/* Navegação + Redes */}
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center text-sm">
            {/* Navegação */}
            <div className="flex flex-col sm:flex-row gap-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:geral@bazaja.com"
                className="font-medium text-gray-600 hover:text-black transition-colors"
              >
                geral@bazaja.com
              </a>
            </div>

            {/* Redes sociais */}
            <div className="flex gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors hover:bg-black hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Baza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}