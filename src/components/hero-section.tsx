import Button from "./ui/button"
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-2 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-3xl border border-gray-200/70 px-6 md:px-12 py-10 sm:py-20 mt-5 sm:mt-0 overflow-hidden">
            {/* Blob decorativo atrás da imagem */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gray-100/50 blur-3xl hidden lg:block" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-500" />
                  </span>

                  Em breve
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance">
                  Chega de lutar por táxi todos os dias
                </h1>

                <p className="text-base md:text-lg text-gray-500 leading-relaxed text-balance">
                  O Baza é um serviço de transporte por assinatura, pensado para estudantes e trabalhadores em Angola. Viaja em percursos e horários definidos, com um transporte mais organizado e previsível para o teu dia a dia — sem filas nem empurrões.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/waitlist"
                    className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 font-medium text-white transition-colors hover:bg-gray-800"
                  >
                    Entrar na lista

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Button
                    className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-transparent px-6 py-3.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    onClick={() => {
                      const target = document.getElementById("audience")
                      target?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Descobre o que muda

                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </div>

                <p className="text-sm text-gray-400">
                  Fica entre os primeiros a saber quando lançarmos
                </p>
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