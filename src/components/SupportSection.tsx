import { ArrowUpRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const notes = ["Sem custos", "Sem compromisso", "Não reserva lugar"]

export default function WaitListSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="waitlist-title">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-gray-200/70 bg-white px-6 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            {/* Esquerda */}
            <div className="space-y-6">
              <h2
                id="waitlist-title"
                className="text-balance text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl"
              >
                Menos correria.
                <br />
                Mais previsibilidade.
              </h2>

              <p className="text-balance text-lg leading-relaxed text-gray-500">
                Diz-nos qual é o teu trajecto e avisamos-te quando as primeiras
                rotas abrirem.
              </p>

              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {notes.map((note) => (
                  <li
                    key={note}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                      <Check
                        className="h-3 w-3 text-gray-600"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>
                    {note}
                  </li>
                ))}
              </ul>

              <Link
                href="/waitlist"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-black px-6 py-3.5 font-medium text-white transition-colors hover:bg-gray-800"
              >
                Quero ser dos primeiros
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Direita */}
            <div className="hidden justify-center lg:flex">
              <Image
                src="/undraw_comment-sent_8c4r.svg"
                alt=""
                width={260}
                height={260}
                className="h-auto w-full max-w-[260px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}