import Button from "./ui/button"
import { ChevronRight} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 z-0 pointer-events-none max-w-6xl mx-auto">
        <div className="absolute top-0 left-[10px] md:left-[-34px] w-px h-full bg-black/5" />
        <div className="absolute top-0 right-[10px] md:right-[-34px] w-px h-full bg-black/5" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl px-6 md:px-12 py-10 sm:py-20 border border-gray-200 mt-9 sm:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Em breve</span>
                  <ChevronRight className="w-4 h-4" />
                </div>

                <h1 className="text-3xl mb-2 md:text-5xl font-bold text-black leading-tight">
                  Chega de lutar por táxi todo dia
                </h1>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  O Baza é uma plataforma de transporte partilhado por assinatura em Angola. Reserva o teu lugar com antecedência, escolhe um plano semanal ou mensal, e viaja todos os dias com conforto, pontualidade e sem stress — sem filas, sem empurrões.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/waitlist"
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 flex items-center justify-center space-x-3"
                  >
                    Entrar na lista de espera
                  </Link>

                  <Button
                    className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200 rounded-lg py-3 flex items-center justify-center space-x-2"
                    onClick={() => {
                      const target = document.getElementById("como-funciona")
                      target?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span>Saiba como funciona</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-gray-500">Fica entre os primeiros a saber quando lançarmos</p>
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
