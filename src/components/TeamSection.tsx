const people = [
  {
    name: "William Humbwavali",
    role: "Cofundador / CEO",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png",
    linkedinUrl: "https://www.linkedin.com/in/williamhumbwavali/",
  },
  {
    name: "Mário Coxe",
    role: "Cofundador / COO",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQFyCYuSuLrO4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721071538609?e=1757548800&v=beta&t=ZOVLyjubjwOUYaoFvpylWELHSv2HqrJwQw6TaZ6LQJk",
    linkedinUrl: "https://www.linkedin.com/in/mariocoxe/",
  },
]

export default function TeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 sm:py-32 relative" id="criadores">
      {/* Linhas ao redor */}
      <div className="absolute inset-0 z-0 pointer-events-none max-w-6xl mx-auto">
        <div className="absolute top-0 left-[10px] md:left-[-34px] w-px h-full bg-black/5" />
        <div className="absolute top-0 right-[10px] md:right-[-34px] w-px h-full bg-black/5" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-12 gap-16">
        {/* Coluna 5/12: Texto */}
        <div className="xl:col-span-5 max-w-2xl xl:max-w-none mx-auto text-center xl:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight max-w-4xl mx-auto">
            Criado por quem passa por isso todos os dias.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            A equipa por trás do Baza vive diariamente os desafios da mobilidade em Angola. Foi exatamente por isso que decidimos criar uma solução acessível, confiável e pensada para quem precisa se mover todos os dias — sem stress.
          </p>
        </div>

        {/* Coluna 7/12: Lista de pessoas */}
        <ul
          role="list"
          className="xl:col-span-7 flex flex-col gap-10 sm:gap-12"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-4 sm:gap-x-6">
                <img
                  alt={`Foto de ${person.name}`}
                  src={person.imageUrl}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-gray-500">
                    {person.role}
                  </p>
                  {person.linkedinUrl && (
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-gray-600 block mt-1 truncate max-w-[220px]"
                    >
                      {person.linkedinUrl.replace("https://", "")}
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>


  )
}
