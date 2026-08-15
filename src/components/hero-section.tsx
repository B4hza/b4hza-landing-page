import Button from "./ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-2 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl px-6 md:px-12 py-10 sm:py-20 shadow-[0_1px_2px_rgba(0,0,0,0.04)] mt-9 sm:mt-0 overflow-hidden">
            {/* Blob decorativo atrás da imagem */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl hidden lg:block" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                  </span>
                  Em breve
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance">
                  Chega de lutar por táxi todo dia
                </h1>

                <p className="text-base md:text-lg text-gray-500 leading-relaxed text-balance">
                  O Baza é uma plataforma de transporte partilhado por assinatura em Angola. Reserva o
                  teu lugar com antecedência, escolhe um plano semanal ou mensal, e viaja todos os dias
                  com conforto, pontualidade e sem stress — sem filas, sem empurrões.
                </p>

                <div className="space-y-3">
                  <Link
                    href="/waitlist"
                    className="group w-full bg-black text-white hover:bg-gray-800 rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 font-medium transition-colors"
                  >
                    Entrar na lista de espera
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Button
                    className="w-full bg-white text-gray-700 hover:bg-gray-50 border border-black/[0.08] rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 font-medium transition-colors"
                    onClick={() => {
                      const target = document.getElementById("como-funciona")
                      target?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Saiba como funciona
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-gray-400">Fica entre os primeiros a saber quando lançarmos</p>
              </div>

              {/* Right Column - Responsive Image */}
              <div className="hidden lg:flex justify-center">
                <Image
                  src="/iMockup.svg"
                  alt="Mockup do Baza"
                  width={600}
                  height={600}
                  className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl max-h-[480px] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}