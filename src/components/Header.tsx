"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <>
      {/* Header principal (desktop + mobile top) */}
      <header className="relative z-10 bg-[#f5f5f5] px-6 py-4">
        <div className="absolute inset-0 z-0 pointer-events-none max-w-6xl mx-auto">
          <div className="absolute top-0 left-[10px] md:left-[-34px] w-px h-full bg-black/5" />
          <div className="absolute top-0 right-[10px] md:right-[-34px] w-px h-full bg-black/5" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo (aparece só no desktop) */}
          <Link href="/" className="text-3xl md:text-4xl font-semibold text-black font-inter-tight hidden md:block">
            Baza
          </Link>

          {/* Navegação (só no desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#como-funciona" className="text-gray-700 hover:text-black">Como funciona</a>
            <a href="/#muro-do-amor" className="text-gray-700 hover:text-black">Depoimentos</a>
            <a href="/#faq" className="text-gray-700 hover:text-black">FAQ</a>
            <a href="/#criadores" className="text-gray-700 hover:text-black">Fundadores</a>
          </nav>

          {/* Botão (link) - só desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/waitlist" className="bg-black text-white hover:bg-gray-800 rounded-xl px-4 py-2 flex items-center space-x-2">
              <span>Quero o Baza</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Botão fixo no topo - só mobile */}
      <div className="fixed top-0 inset-x-0 z-20 md:hidden bg-white border-b border-gray-200 px-6 py-4 mb-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-semibold text-black font-inter-tight md:hidden">
            Baza
          </Link>
          <Link href="/waitlist" className="bg-black text-white hover:bg-gray-800 rounded-2xl px-5 py-3 flex items-center">
            <span className="text-sm">Quero o Baza</span>
            <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />
          </Link>
        </div>
      </div>
    </>
  )
}
