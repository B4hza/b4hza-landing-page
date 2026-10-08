import { ArrowUpRight, Quote } from "lucide-react"
import Link from "next/link"

const testemunhos = [
  {
    nome: "Edmara Humbwavali",
    username: "@edmarahumbwavali",
    texto:
      "O Baza vai facilitar a minha vida porque eu vivo numa zona longe da universidade e a minha universidade é na cidade então com o Baza já não terei transtorno e nem dificuldades em chegar sempre na hora e voltar em segurança",
  },
  {
    nome: "Emeliano Coxe",
    username: "@emeliano",
    texto:
      "Vai facilitar e muito, chegar cedo no trabalho, evitar transtorno. Todos os dias perco muito tempo à espera de transporte e ainda chego stressado. Com o Baza, já sei que terei o meu lugar garantido e posso planear melhor o meu dia.",
  },
  {
    nome: "Bráulio Ralha",
    username: "@braulio_ralha15",
    texto:
      "O que mais espero do Baza é confiabilidade. Saber que vou ter um transporte à hora certa, todos os dias, sem ter que lutar por um táxi ou ficar muito tempo na paragem, já seria uma grande melhoria.",
  },
  {
    nome: "Milton Caluaco",
    username: "@miltoncaluaco",
    texto:
      "Espero que o Baza ofereça pontualidade, segurança, conforto e uma mobilidade mais prática, com menos tempo de espera e mais garantia no transporte.",
  },
  {
    nome: "Carlos Vemba",
    username: "@vemcarlos",
    texto:
      "Me inscrevi no Baza porque quero deixar de depender de sorte pra chegar no trabalho a tempo.",
  },
]

const eyebrow = "text-sm font-medium text-gray-600 uppercase tracking-wide"

function getIniciais(nome: string) {
  const partes = nome.trim().split(" ")
  const primeira = partes[0]?.[0] ?? ""
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : ""

  return (primeira + ultima).toUpperCase()
}

export default function TestimonialsPage() {
  return (
    <section
      className="scroll-mt-28 px-4 py-16 sm:py-20"
      id="muro-do-amor"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">

            <h2
              id="testimonials-title"
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl"
            >
              O que esperam
              <br />
              do Baza.
            </h2>
          </div>

          <p className="text-balance text-lg text-gray-500">
            Opiniões de quem partilhou connosco, antes do lançamento, o que
            gostaria de mudar na forma como se desloca todos os dias.
          </p>
        </div>

        {/* Testemunhos */}
        <ul className="mt-10 list-none columns-1 gap-5 md:mt-14 md:columns-2 lg:columns-3">
          {testemunhos.map(({ nome, username, texto }) => (
            <li key={username} className="mb-5 break-inside-avoid">
              <figure className="flex flex-col rounded-2xl border border-gray-200/70 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 md:p-8">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <Quote className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </span>

                <blockquote className="leading-relaxed text-gray-600">
                  {texto}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700"
                  >
                    {getIniciais(nome)}
                  </span>

                  <span className="flex min-w-0 flex-col">
                    <strong className="truncate text-sm font-semibold text-gray-900">
                      {nome}
                    </strong>
                    <small className="truncate text-sm text-gray-400">
                      {username}
                    </small>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}