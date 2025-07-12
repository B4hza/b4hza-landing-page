"use client"

import { FaLinkedin, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="relative bg-[#f5f5f5] border-t border-gray-200 py-10 px-6 sm:px-8">
      {/* Linhas de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none max-w-6xl mx-auto">
        <div className="absolute top-0 left-[10px] md:left-[-34px] w-px h-full bg-black/5" />
        <div className="absolute top-0 right-[10px] md:right-[-34px] w-px h-full bg-black/5" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
        {/* Coluna esquerda */}
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Baza</h2>
          <p className="text-base text-gray-600 mt-2 leading-relaxed">
            O Baza é o app que facilita a tua rotina diária de transporte, conectando estudantes e trabalhadores a motoristas de confiança com rotas fixas, seguras e acessíveis.
          </p>
        </div>

        {/* Navegação + Redes */}
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center text-base text-gray-600">
          {/* Navegação */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#como-funciona" className="hover:text-black transition-colors">
              Como funciona
            </a>
            <a href="/#muro-do-amor" className="hover:text-black transition-colors">
              Depoimentos
            </a>
            <a href="/#faq" className="hover:text-black transition-colors">
              FAQ
            </a>
          </div>

          {/* Redes sociais */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/bazaja/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-gray-500"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/bazaja_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-gray-500"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-10 mx-0 md:mx-auto border-t border-gray-200 pt-4 w-full md:w-[40%] text-left md:text-center">
        © {new Date().getFullYear()} Baza. Todos os direitos reservados.
      </p>
    </footer>
  )
}
