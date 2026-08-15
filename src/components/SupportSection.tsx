import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WaitListSection() {
  return (
    <section className="overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-sm-12 py-5 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl px-6 md:px-12 py-10 sm:py-20 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Não fiques de fora
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance">
                  Chega de correria — vem com o Baza
                </h1>

                <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                  Entra na lista e descobre em primeira mão.
                </p>

                <Link
                  href="/waitlist"
                  className="group inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800 rounded-xl py-3.5 px-6 font-medium transition-colors"
                >
                  Entrar na lista de espera
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Right Column - Illustration */}
              <div className="hidden lg:flex justify-center">
                <Image
                  src="/undraw_comment-sent_8c4r.svg"
                  alt="Ilustração de comunidade online"
                  width={180}
                  height={180}
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