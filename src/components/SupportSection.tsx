import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WaitListSection() {
  return (
    <section className="overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-12 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl border border-gray-200/70 px-6 md:px-12 py-10 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-6">

                <h2 className="text-2xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance">
                  Menos correria. Mais Baza.
                </h2>

                <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                  Fica na primeira fila para experimentar o Baza.
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