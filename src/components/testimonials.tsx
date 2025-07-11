import { ChevronRight, Heart } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden py-10" id="muro-do-amor">
      {/* Linhas de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[3%] md:left-[18%] w-px h-full bg-black/5" />
        <div className="absolute top-0 right-[3%] md:right-[18%] w-px h-full bg-black/5" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/5" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-0 pb-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600">
            Muro do amor
          </div>
        </div>

        {/* Título e descrição */}
        <div className="text-center px-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight max-w-4xl mx-auto">
            Por que as pessoas estão entusiasmadas com o Baza
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Lê o que os nossos primeiros apoiadores dizem sobre como o Baza pode facilitar o seu dia a dia.
          </p>
        </div>

        {/* Lista de testemunhos */}
        <ul className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {[
            {
              nome: "Edmara Humbwavali",
              username: "@edmarahumbwavali",
              texto: "O Baza vai facilitar a minha vida porque eu vivo numa zona longe da universidade e a minha universidade é na cidade então com o Baza já não terei transtorno e nem dificuldades em chegar sempre na hora e voltar em segurança",
            },
            {
              nome: "Dulce Monteiro",
              username: "@dulcemonteiro",
              texto: "Vai facilitar e muito, chegar cedo no trabalho, evitar transtorno e até mesmo uma taxa única das passagens.",
            },
            {
              nome: "Bráulio Ralha",
              username: "@braulio_ralha15",
              texto: "O que mais espero do Baza é confiabilidade. Saber que vou ter um transporte à hora certa, todos os dias, sem ter que lutar por um táxi ou ficar muito tempo na paragem, já seria uma grande melhoria.",
            },
            {
              nome: "Gracieth Solunga",
              username: "@graciethsolunga",
              texto: "Estou ansiosa pela app. Ela vai me ajudar muito a ir para a universidade. E depois com a subida do táxi, tem sido um problema para mim, mas com o Baza espero que isso seja coisa do passado.",
            },
            {
              nome: "Joelma Domingos",
              username: "@joelmad",
              texto: "Achei genial a ideia do Baza. Saber que vou ter transporte certo todos os dias dá uma paz enorme.",
            },
            {
              nome: "Carlos Vemba",
              username: "@vemcarlos",
              texto: "Me inscrevi no Baza porque quero deixar de depender de sorte pra chegar no trabalho a tempo.",
            },
          ].map(({ nome, username, texto }, index) => (
            <li key={index} className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <div className="font-semibold text-black">{nome}</div>
                  <div className="text-gray-500 text-sm">{username}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
