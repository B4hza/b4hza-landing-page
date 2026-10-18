import Button from "./ui/button"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-2 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white px-6 py-10 mt-5 sm:mt-0 sm:px-10 sm:py-16 md:px-12 lg:py-20">
            {/* Blob decorativo atrás da imagem */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gray-100/50 blur-3xl hidden lg:block" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">

                <h1 className="max-w-xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-black text-balance sm:text-5xl lg:text-[3.5rem]">
                  Chega de lutar por táxi todos os dias
                </h1>

                <p className="max-w-xl text-base leading-7 text-gray-600 text-balance sm:text-lg sm:leading-8">
                  O Baza é um serviço de transporte por assinatura para estudantes e trabalhadores em Angola. Estamos a preparar as primeiras rotas e horários definidos para tornar as deslocações diárias mais organizadas e previsíveis.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/waitlist"
                    className="group flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 font-medium text-white transition-all hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 active:scale-[0.98]"
                  >
                    Tenho interesse

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Button
                    className="group flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                    onClick={() => {
                      const target = document.getElementById("audience")
                      target?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Descobre o Baza

                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Button>
                </div>

                <p className="text-sm text-gray-400">
                  Partilhar o teu trajecto ajuda-nos a perceber onde faz mais falta.
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