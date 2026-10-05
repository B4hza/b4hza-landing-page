import { Quote } from "lucide-react"

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

// Paleta de avatares — tons neutros
const avatarStyles = [
  "bg-gray-100 text-gray-900",
  "bg-gray-200 text-gray-900",
  "bg-slate-100 text-slate-900",
  "bg-zinc-100 text-zinc-900",
  "bg-neutral-100 text-neutral-900",
  "bg-stone-100 text-stone-900",
]

function getIniciais(nome: string) {
  const partes = nome.trim().split(" ")
  const primeira = partes[0]?.[0] ?? ""
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : ""

  return (primeira + ultima).toUpperCase()
}

export default function TestimonialsPage() {
  return (
    <section
      className="relative overflow-hidden py-8 sm:py-20"
      id="muro-do-amor"
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="pb-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 uppercase tracking-wide">
            Muro do amor
          </div>
        </div>

        {/* Título e descrição */}
        <div className="text-center px-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight max-w-4xl mx-auto text-balance">
            Por que as pessoas estão entusiasmadas com o Baza
          </h2>

          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto text-balance">
            Lê o que os nossos primeiros apoiadores dizem sobre como o Baza pode
            facilitar o seu dia a dia.
          </p>
        </div>

        {/* Lista de testemunhos */}
        <ul className="max-w-6xl mx-auto px-4 columns-1 md:columns-2 lg:columns-3 gap-5 list-none [column-fill:_balance]">
          {testemunhos.map(({ nome, username, texto }, index) => (
            <li
              key={index}
              className="group relative mb-5 break-inside-avoid rounded-2xl border border-gray-200/70 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Quote
                className="absolute top-5 right-5 h-8 w-8 text-gray-900/[0.05] transition-colors group-hover:text-gray-500/10"
                strokeWidth={1.5}
                fill="currentColor"
              />

              <div className="relative flex items-center gap-3 mb-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    avatarStyles[index % avatarStyles.length]
                  }`}
                >
                  {getIniciais(nome)}
                </div>

                <div>
                  <div className="font-semibold text-black leading-tight">
                    {nome}
                  </div>

                  <div className="text-gray-400 text-sm">
                    {username}
                  </div>
                </div>
              </div>

              <p className="relative text-gray-700 leading-relaxed">
                {texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}