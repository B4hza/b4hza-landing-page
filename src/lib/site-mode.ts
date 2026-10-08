export type SiteMode = "prelaunch" | "validation" | "live";

const modes: readonly SiteMode[] = ["prelaunch", "validation", "live"];
const requestedMode = process.env.NEXT_PUBLIC_BAZA_SITE_MODE;

export const siteMode: SiteMode = modes.includes(requestedMode as SiteMode)
  ? (requestedMode as SiteMode)
  : "prelaunch";

export const siteCopy = {
  prelaunch: {
    navCta: "Lista de espera",
    heroEyebrow: "PARA QUEM FAZ O MESMO CAMINHO TODOS OS DIAS",
    heroDescription:
      "Procurar transporte todas as manhãs não devia fazer parte da rotina. O Baza organiza deslocações recorrentes com rota, horário e lugar reservado. Estamos a preparar a primeira rota em Luanda.",
    heroStatus: "Primeira rota · em preparação",
    heroPrimaryCta: "Entrar na lista de espera",
    routeStatus: "EM PREPARAÇÃO",
    routeDescription:
      "Um percurso definido entre pontos de recolha e destino. Estamos a preparar esta rota antes de abrir novas ligações.",
    waitlistEyebrow: "ABERTURA DE INTERESSE",
    waitlistTitle: "A primeira rota começa contigo.",
    waitlistDescription:
      "Conta-nos como te deslocas. A tua resposta ajuda-nos a perceber a procura e a preparar melhor o arranque.",
    waitlistButton: "Entrar na lista",
    footerStatus: "Pré-lançamento · Primeira rota em preparação",
  },
  validation: {
    navCta: "Participar no teste",
    heroEyebrow: "A PRIMEIRA ROTA ESTÁ EM TESTE",
    heroDescription:
      "Estamos a testar uma forma mais previsível de fazer o teu percurso diário. O Baza organiza a viagem com rota, horário e lugar reservado. Ajuda-nos a validar a primeira operação em Luanda.",
    heroStatus: "Primeira rota · em teste",
    heroPrimaryCta: "Participar na validação",
    routeStatus: "EM TESTE",
    routeDescription:
      "Esta é a rota que estamos a testar com pessoas que fazem este percurso. A primeira operação vai ajudar-nos a perceber o que funciona melhor.",
    waitlistEyebrow: "VALIDAÇÃO COM UTILIZADORES",
    waitlistTitle: "Ajuda-nos a testar esta rota.",
    waitlistDescription:
      "Partilha o teu percurso e disponibilidade. Estamos a reunir pessoas interessadas para aprender com a primeira operação.",
    waitlistButton: "Manifestar interesse",
    footerStatus: "Validação · Primeira rota em teste",
  },
  live: {
    navCta: "Receber novidades",
    heroEyebrow: "ROTAS ORGANIZADAS PARA O TEU DIA A DIA",
    heroDescription:
      "O Baza organiza deslocações recorrentes com rota, horário e lugar reservado. Consulta a primeira rota e deixa o teu contacto para receber informação sobre a operação.",
    heroStatus: "Primeira rota · operação disponível",
    heroPrimaryCta: "Receber informação",
    routeStatus: "OPERAÇÃO DISPONÍVEL",
    routeDescription:
      "A primeira operação do Baza liga estas paragens e horários. Consulta o percurso e deixa o teu contacto para receber informação sobre disponibilidade.",
    waitlistEyebrow: "INFORMAÇÃO SOBRE A OPERAÇÃO",
    waitlistTitle: "Recebe novidades do Baza.",
    waitlistDescription:
      "Deixa os teus dados e o teu percurso. A equipa Baza poderá partilhar informação sobre rotas e disponibilidade.",
    waitlistButton: "Enviar interesse",
    footerStatus: "Baza · Rotas e horários",
  },
} as const;

export const currentSiteCopy = siteCopy[siteMode];
