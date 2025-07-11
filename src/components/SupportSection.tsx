import Button from "./ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function WaitListSection() {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[3%] md:left-[18%] w-px h-full bg-black/5" />
        <div className="absolute top-0 right-[3%] md:right-[18%] w-px h-full bg-black/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-black/5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl px-6 md:px-12 py-10 sm:py-20 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              {/* Left Column */}
              <div className="space-y-8">
                <h1 className="text-3xl mb-2 md:text-5xl font-bold text-black leading-tight">
                  Chega de correria — vem com o Baza
                </h1>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Entra na lista e descobre em primeira mão.
                </p>

                <a
                  href="#"
                  className="text-sm underline underline-offset-2 text-black hover:text-gray-800 space-x-2"
                >
                  <span>Entrar na lista de espera </span>
                </a>
              </div>

              {/* Right Column - Illustration */}
              <div className="hidden lg:flex justify-center">
                <Image
                  src="/undraw_fingerprint_kdwq.svg"
                  alt="Ilustração de comunidade online"
                  width={400}
                  height={400}
                  className="w-full max-w-sm h-auto"
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
