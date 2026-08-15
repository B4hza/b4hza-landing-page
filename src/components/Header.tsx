"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#muro-do-amor", label: "Depoimentos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#criadores", label: "Fundadores" },
  { href: "/waitlist", label: "Lista de espera" },
]

export default function Header() {
  return (
    <header className="sticky top-4 z-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 rounded-3xl bg-white/80 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.04)] pl-6 pr-3 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-semibold text-black font-inter-tight">
          Baza
        </Link>

        {/* Navegação (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium text-gray-600 hover:text-black transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Botão */}
        <Link
          href="/waitlist"
          className="group inline-flex items-center gap-1.5 bg-black text-white hover:bg-gray-800 rounded-full pl-4 pr-3.5 py-2.5 text-sm font-medium transition-colors"
        >
          Quero o Baza
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  )
}