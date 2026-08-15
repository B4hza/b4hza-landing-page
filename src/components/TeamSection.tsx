import { Linkedin } from "lucide-react"

const people = [
  {
    name: "William Humbwavali",
    role: "Cofundador / CEO",
    imageUrl:
      "/user.png",
    linkedinUrl: "https://www.linkedin.com/in/williamhumbwavali/",
  },
  {
    name: "Mário Coxe",
    role: "Cofundador / COO",
    imageUrl:
      "/user.png",
    linkedinUrl: "https://www.linkedin.com/in/mariocoxe/",
  },
]

export default function TeamSection() {
  return (
    <section className="py-10 sm:py-20 overflow-hidden" id="criadores">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-12 gap-16">
        {/* Coluna 5/12: Texto */}
        <div className="xl:col-span-5 max-w-2xl xl:max-w-none mx-auto text-center xl:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-600 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Quem está por trás
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance">
            Criado por quem passa por isso todos os dias.
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed text-balance">
            A equipa por trás do Baza vive diariamente os desafios da mobilidade em Angola. Foi
            exatamente por isso que decidimos criar uma solução acessível, confiável e pensada
            para quem precisa se mover todos os dias — sem stress.
          </p>
        </div>

        {/* Coluna 7/12: Lista de pessoas */}
        <ul role="list" className="xl:col-span-7 flex flex-col gap-4 mt-10 mt-sm-0">
          {people.map((person) => (
            <li key={person.name}>
              <div className="group relative z-index flex items-center gap-4 sm:gap-5 bg-white rounded-2xl p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5">
                <img
                  alt={`Foto de ${person.name}`}
                  src={person.imageUrl}
                  className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full object-cover ring-4 ring-gray-50"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-black truncate">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-0.5 truncate">{person.role}</p>
                </div>

                {person.linkedinUrl && (
                  <a
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${person.name}`}
                    className="shrink-0 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 border border-black/[0.06] transition-colors hover:bg-black hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={2} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}