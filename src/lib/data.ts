import {
  CalendarDays,
  CarFront,
  Compass,
  MapPin,
  Route,
  Search,
  Ticket,
  ShieldCheck,
  CreditCard,
  Clock3,
  Users,
  CircleHelp,
  type LucideIcon,
} from "lucide-react";

export type CategoryId =
  | "about"
  | "first-route"
  | "routes"
  | "reservations"
  | "plans"
  | "use"
  | "drivers"
  | "payments"
  | "safety";

export type Category = {
  id: CategoryId;
  label: string;
  description: string;
  icon: LucideIcon;
};

export type Article = {
  slug: string;
  category: CategoryId;
  question: string;
  answer: string;
  popular?: boolean;
};

export const categories: Category[] = [
  {
    id: "about",
    label: "Sobre o Baza",
    description: "O que é, como funciona e para quem foi criado.",
    icon: Compass,
  },
  {
    id: "first-route",
    label: "Primeira rota",
    description: "Paragens, horários, percurso e funcionamento da primeira rota.",
    icon: MapPin,
  },
  {
    id: "routes",
    label: "Rotas",
    description: "Rotas disponíveis, novas rotas e como sugerir um trajecto.",
    icon: Route,
  },
  {
    id: "reservations",
    label: "Reservas",
    description: "Lugares, reservas, lista de espera e cancelamentos.",
    icon: CalendarDays,
  },
  {
    id: "plans",
    label: "Planos",
    description: "Planos semanais, mensais e utilização recorrente.",
    icon: Ticket,
  },
  {
    id: "use",
    label: "Utilização",
    description: "Como usar o Baza antes, durante e depois de uma viagem.",
    icon: Search,
  },
  {
    id: "drivers",
    label: "Motoristas",
    description: "Informações para motoristas interessados em operar no Baza.",
    icon: CarFront,
  },
  {
    id: "payments",
    label: "Pagamentos",
    description: "Preços, pagamentos, cobranças e reembolsos.",
    icon: CreditCard,
  },
  {
    id: "safety",
    label: "Segurança",
    description: "Segurança, confiança e boas práticas durante as viagens.",
    icon: ShieldCheck,
  },
];

export const articles: Article[] = [
  /*
   * SOBRE O BAZA
   */

  {
    slug: "o-que-e-o-baza",
    category: "about",
    popular: true,
    question: "O que é o Baza?",
    answer:
      "O Baza é uma solução de mobilidade criada para tornar as deslocações recorrentes mais previsíveis. Em vez de depender todos os dias de encontrar transporte no momento, o passageiro pode utilizar rotas definidas, horários previstos e lugares reservados com antecedência. O serviço foi pensado para pessoas que fazem trajectos semelhantes com frequência, como estudantes e trabalhadores. O Baza não funciona como um serviço de transporte porta-a-porta: o passageiro desloca-se até uma das paragens definidas da rota e embarca no horário previsto.",
  },

  {
    slug: "porque-existe-o-baza",
    category: "about",
    question: "Porque foi criado o Baza?",
    answer:
      "O Baza nasceu de um problema real: muitas pessoas em Angola precisam de enfrentar diariamente a incerteza do transporte. Horários imprevisíveis, veículos lotados, longas esperas e dificuldade em saber se haverá lugar tornam uma deslocação simples numa parte stressante do dia. A proposta do Baza é organizar uma parte desse processo através de rotas recorrentes, horários definidos e reservas antecipadas. A ideia é simples: menos correria e mais previsibilidade.",
  },

  {
    slug: "como-funciona",
    category: "about",
    popular: true,
    question: "Como funciona o Baza?",
    answer:
      "O Baza junta passageiros que fazem o mesmo trajecto e têm horários semelhantes. O passageiro indica quando pretende viajar, encontra pessoas com horários próximos e segue para a paragem definida. Assim, a viagem fica mais organizada e previsível, sem funcionar como um táxi ou transporte por chamada.",
  },

  {
    slug: "baza-e-taxi",
    category: "about",
    question: "O Baza é um táxi ou serviço de transporte por chamada?",
    answer:
      "Não. O Baza funciona de forma diferente de um táxi ou de uma aplicação de transporte individual. Não precisas de chamar um motorista sempre que quiseres viajar. O serviço é organizado através de rotas, paragens e horários previamente definidos. Isto permite que várias pessoas com trajectos semelhantes utilizem o mesmo transporte de forma recorrente.",
  },

  {
    slug: "baza-e-porta-a-porta",
    category: "about",
    question: "O Baza faz transporte porta-a-porta?",
    answer:
      "Não. O Baza utiliza pontos de embarque e desembarque definidos em cada rota. O passageiro deve dirigir-se à paragem indicada e estar no local dentro do horário previsto. Este modelo permite manter as rotas organizadas e tornar os horários mais previsíveis.",
  },

  {
    slug: "para-quem-e-o-baza",
    category: "about",
    question: "Para quem é o Baza?",
    answer:
      "O Baza foi pensado principalmente para pessoas que fazem deslocações recorrentes e previsíveis. Estudantes que precisam de chegar regularmente à universidade, trabalhadores que fazem o mesmo percurso durante a semana e outras pessoas com rotinas semelhantes podem beneficiar do serviço. O modelo também permite que motoristas interessados manifestem disponibilidade para operar determinadas rotas.",
  },

  {
    slug: "qual-e-a-vantagem-do-baza",
    category: "about",
    question: "Qual é a principal vantagem do Baza?",
    answer:
      "A principal vantagem é a previsibilidade. Em vez de começar todos os dias a procurar transporte sem saber exactamente quando irá viajar ou se encontrará lugar, o passageiro passa a contar com uma rota e um horário previamente definidos. O objectivo é reduzir a incerteza da deslocação diária e tornar o transporte mais organizado.",
  },

  {
    slug: "baza-ja-esta-disponivel",
    category: "about",
    popular: true,
    question: "O Baza já está disponível?",
    answer:
      "Ainda não como serviço aberto ao público. O Baza encontra-se em fase de preparação e validação da primeira rota. Durante esta fase estamos a testar o produto, compreender a procura, validar os trajectos e preparar a operação antes de abrir o serviço. Entrar na lista de espera é uma forma de demonstrar interesse e ajudar-nos a perceber onde existe maior procura.",
  },

  {
    slug: "o-que-significa-pre-lancamento",
    category: "about",
    question: "O que significa o pré-lançamento?",
    answer:
      "O pré-lançamento é a fase anterior à abertura oficial do serviço. Nesta etapa o Baza já está a ser preparado como produto, mas as rotas ainda precisam de ser validadas operacionalmente. Estamos a recolher interesse, analisar trajectos, preparar motoristas e garantir que a experiência de utilização esteja pronta antes da abertura. Por isso, um registo no pré-lançamento não deve ser interpretado como uma reserva ou compra de uma viagem.",
  },

  {
    slug: "o-baza-e-uma-startup",
    category: "about",
    question: "O Baza é uma startup?",
    answer:
      "O Baza está a ser construído como um projecto de mobilidade com ambição de se tornar uma operação de transporte recorrente em escala. Neste momento, o foco principal está em validar a primeira operação, aprender com os primeiros passageiros e construir uma base sólida antes de expandir para outras rotas.",
  },

  /*
 * ROTAS EM PREPARAÇÃO
 */

  {
    slug: "como-estao-a-ser-definidas-as-rotas",
    category: "first-route",
    popular: true,
    question: "Como estão a ser definidas as rotas do Baza?",
    answer:
      "As rotas do Baza estão a ser definidas com base nos trajectos, horários e necessidades de deslocação dos passageiros. Estamos a avaliar os percursos que podem ser mais úteis e viáveis para a operação, antes de os disponibilizar no serviço.",
  },
  {
    slug: "quando-serao-anunciadas-as-rotas",
    category: "first-route",
    question: "Quando serão anunciadas as rotas?",
    answer:
      "As rotas serão anunciadas à medida que forem validadas e estiverem prontas para operação. Como ainda estamos a preparar o serviço, os percursos, paragens e horários podem ser ajustados antes da confirmação de cada rota.",
  },
  {
    slug: "onde-embarcar",
    category: "first-route",
    question: "Onde devo embarcar?",
    answer:
      "Cada rota terá paragens definidas para embarque e desembarque. Quando uma rota estiver disponível, o Baza apresentará as informações necessárias, incluindo as paragens e os horários previstos para a viagem.",
  },
  {
    slug: "o-passageiro-escolhe-o-horario",
    category: "first-route",
    question: "Posso indicar o horário em que quero viajar?",
    answer:
      "Sim. O Baza foi pensado para aproximar passageiros que fazem o mesmo trajecto em horários semelhantes. O passageiro indica quando pretende viajar e o serviço procura encontrar uma opção compatível com a sua necessidade e com a operação disponível.",
  },
  {
    slug: "as-rotas-podem-mudar",
    category: "first-route",
    question: "As rotas podem mudar?",
    answer:
      "Sim. Durante a fase de preparação e validação, podemos ajustar percursos, paragens e horários para encontrar uma configuração que funcione melhor para os passageiros e para a operação. Quando uma alteração afectar uma rota já disponível, a informação deverá ser comunicada através dos canais do Baza.",
  },
  {
    slug: "quanto-tempo-dura-a-viagem",
    category: "first-route",
    question: "Quanto tempo dura uma viagem?",
    answer:
      "A duração depende do percurso, das paragens e das condições do trânsito. Por isso, o Baza trabalha com horários previstos e não com uma duração exacta garantida. A operação será organizada para tornar os horários o mais previsíveis possível.",
  },
  {
    slug: "o-que-acontece-com-o-transito",
    category: "first-route",
    question: "E se houver trânsito ou atraso?",
    answer:
      "O trânsito pode afectar qualquer deslocação rodoviária. O Baza não controla as condições da estrada, mas procura definir horários realistas e organizar as rotas de forma a tornar a viagem mais previsível. Quando existir uma alteração relevante na operação, a informação deverá ser comunicada aos passageiros.",
  },

  /*
   * ROTAS
   */

  {
    slug: "havera-outras-rotas",
    category: "routes",
    popular: true,
    question: "Haverá outras rotas?",
    answer:
      "Sim, essa é uma das principais metas do Baza. No entanto, a expansão deve acontecer de forma progressiva. Primeiro precisamos validar a primeira rota, compreender a procura, testar a operação e aprender com os primeiros passageiros. Depois disso, poderemos avaliar novas rotas com base nos trajectos que apresentam maior procura.",
  },

  {
    slug: "como-sao-criadas-novas-rotas",
    category: "routes",
    question: "Como são escolhidas as novas rotas?",
    answer:
      "As novas rotas são avaliadas principalmente com base na procura, concentração de passageiros, distância, horários, disponibilidade de motoristas e viabilidade operacional. Uma grande quantidade de pessoas interessadas num determinado trajecto pode aumentar a possibilidade de esse percurso ser analisado, mas o interesse por si só não garante a criação de uma rota.",
  },

  {
    slug: "posso-sugerir-uma-rota",
    category: "routes",
    popular: true,
    question: "Posso sugerir uma nova rota?",
    answer:
      "Sim. A lista de espera também serve para recolher informação sobre os trajectos que as pessoas fazem diariamente. Podes indicar a tua zona de partida, destino, horários habituais e outros detalhes relevantes. Essas informações ajudam-nos a perceber onde existe procura e quais os percursos que podem fazer sentido para futuras operações.",
  },

  {
    slug: "rota-serve-o-meu-trajecto",
    category: "routes",
    question: "Como sei se uma rota serve o meu trajecto?",
    answer:
      "Compara as paragens disponíveis com o teu percurso habitual. O Baza não precisa necessariamente de começar ou terminar exactamente na tua porta. Se uma das paragens estiver convenientemente localizada para ti, podes utilizá-la como ponto de embarque ou desembarque. Na lista de espera também podes indicar o teu trajecto para que possamos compreender melhor a procura.",
  },

  {
    slug: "posso-pedir-uma-paragem",
    category: "routes",
    question: "Posso pedir uma nova paragem numa rota existente?",
    answer:
      "Podes sugerir uma nova paragem. A inclusão de um ponto adicional depende de vários factores, como a procura naquela zona, segurança, tempo adicional de percurso, acessibilidade e impacto nos restantes passageiros. Nem todas as sugestões poderão ser implementadas.",
  },

  {
    slug: "uma-rota-pode-ser-cancelada",
    category: "routes",
    question: "Uma rota pode ser cancelada?",
    answer:
      "Uma rota pode ser suspensa ou cancelada caso deixe de ser operacionalmente viável, tenha procura insuficiente ou exista outro motivo relevante. Se uma rota activa sofrer uma alteração deste tipo, os passageiros afectados deverão ser informados através dos canais disponíveis e serão aplicadas as regras de compensação ou reembolso correspondentes.",
  },

  /*
   * RESERVAS
   */

  {
    slug: "como-entrar-na-lista-de-espera",
    category: "reservations",
    popular: true,
    question: "Como entro na lista de espera?",
    answer:
      "Podes entrar na lista de espera através do formulário disponibilizado pelo Baza. Durante o registo, podes indicar o teu perfil, zona de partida, destino e outras informações relacionadas com a tua rotina de transporte. Estes dados ajudam-nos a medir a procura e a preparar as primeiras rotas. O registo é gratuito e não significa que tenhas comprado ou reservado uma viagem.",
  },

  {
    slug: "lista-de-espera-e-reserva",
    category: "reservations",
    question: "Entrar na lista de espera já reserva o meu lugar?",
    answer:
      "Não. A lista de espera serve apenas para registar interesse. Ela não cria uma reserva, não garante um lugar e não representa uma cobrança. Quando o serviço estiver pronto para abrir, os próximos passos serão comunicados aos utilizadores elegíveis ou interessados.",
  },

  {
    slug: "posso-reservar-agora",
    category: "reservations",
    popular: true,
    question: "Posso reservar um lugar agora?",
    answer:
      "Ainda não. A primeira operação encontra-se em preparação. Neste momento podes apenas demonstrar interesse através da lista de espera. Quando as reservas forem abertas, o Baza deverá apresentar claramente a rota, horários, disponibilidade, preço e condições antes de qualquer pagamento.",
  },

  {
    slug: "como-funciona-uma-reserva",
    category: "reservations",
    question: "Como funcionará uma reserva?",
    answer:
      "Quando as reservas estiverem disponíveis, o passageiro deverá seleccionar uma rota ou plano elegível, consultar as condições e confirmar a utilização do serviço. Dependendo do modelo da rota, a reserva poderá estar associada a uma viagem específica ou a um plano recorrente. Todas as condições aplicáveis serão apresentadas antes da confirmação.",
  },

  {
    slug: "posso-cancelar-uma-reserva",
    category: "reservations",
    question: "Posso cancelar uma reserva?",
    answer:
      "As condições de cancelamento dependem do tipo de reserva e do plano utilizado. Quando o sistema de reservas estiver aberto, as regras aplicáveis serão apresentadas ao utilizador antes da confirmação. É importante verificar essas condições porque alguns períodos ou reservas podem ter regras específicas.",
  },

  {
    slug: "posso-reservar-para-outra-pessoa",
    category: "reservations",
    question: "Posso reservar para outra pessoa?",
    answer:
      "As reservas destinam-se ao utilizador associado à conta, salvo indicação diferente nas regras do serviço. Caso o Baza permita reservas para terceiros, essa opção será indicada claramente no processo de reserva. Não deves partilhar credenciais da tua conta para permitir que outra pessoa utilize o teu perfil.",
  },

  {
    slug: "posso-escolher-o-lugar",
    category: "reservations",
    question: "Posso escolher o meu lugar no veículo?",
    answer:
      "As regras de escolha de lugares ainda serão definidas para a operação. O facto de teres uma reserva garante o acesso ao serviço dentro das condições aplicáveis, mas não significa necessariamente que possas escolher uma posição específica dentro do veículo.",
  },

  {
    slug: "cheguei-depois-do-horario",
    category: "reservations",
    question: "O que acontece se eu chegar atrasado à paragem?",
    answer:
      "O transporte segue um horário para conseguir atender os restantes passageiros. Por isso, deves chegar à paragem com antecedência. Se chegares depois de o veículo ter partido, a viagem poderá ser considerada perdida, dependendo das condições da reserva ou do plano utilizado.",
  },

  /*
   * PLANOS
   */

  {
    slug: "que-planos-estao-previstos",
    category: "plans",
    popular: true,
    question: "Que planos estão previstos?",
    answer:
      "O Baza está a ser preparado para suportar opções adequadas a deslocações recorrentes, incluindo planos semanais e mensais. A disponibilidade exacta de cada plano dependerá da rota e da operação. Os preços, quantidade de viagens, validade e restantes condições serão apresentados antes da abertura comercial.",
  },

  {
    slug: "porque-planos-semanais-e-mensais",
    category: "plans",
    question: "Porque existem planos semanais e mensais?",
    answer:
      "O Baza foi pensado principalmente para pessoas que fazem o mesmo tipo de deslocação com frequência. Em vez de tratar cada viagem como uma deslocação completamente independente, os planos permitem organizar o transporte de acordo com uma rotina. Um plano semanal pode ser adequado para quem precisa do serviço durante alguns dias, enquanto um plano mensal pode fazer mais sentido para uma utilização recorrente.",
  },

  {
    slug: "ja-posso-escolher-um-plano",
    category: "plans",
    popular: true,
    question: "Já posso escolher um plano?",
    answer:
      "Ainda não. Os planos serão disponibilizados quando a primeira operação estiver pronta para receber passageiros. Antes disso, o Baza deverá comunicar os preços, duração, número de viagens incluídas, regras de utilização, cancelamento e outras condições importantes.",
  },

  {
    slug: "posso-mudar-de-plano",
    category: "plans",
    question: "Posso mudar de plano?",
    answer:
      "A possibilidade de alterar um plano dependerá das regras comerciais definidas pelo Baza. Quando os planos forem disponibilizados, serão apresentadas as condições para alteração, renovação, cancelamento ou mudança de rota.",
  },

  /*
   * UTILIZAÇÃO
   */

  {
    slug: "onde-encontro-o-baza",
    category: "use",
    popular: true,
    question: "Onde encontro o Baza?",
    answer:
      "Durante o pré-lançamento, podes acompanhar o Baza através do site oficial em bazaja.com. É por lá que serão disponibilizadas informações sobre o serviço, rotas, lista de espera e futuras actualizações. Quando o serviço estiver disponível, as aplicações e canais oficiais também serão comunicados.",
  },

  {
    slug: "como-criar-uma-conta",
    category: "use",
    question: "Como crio uma conta no Baza?",
    answer:
      "Quando o serviço estiver aberto, poderás criar uma conta através dos canais oficiais do Baza. O processo deverá solicitar apenas as informações necessárias para identificar a conta e permitir a utilização do serviço. Nunca deves fornecer a tua palavra-passe ou códigos de autenticação a outra pessoa.",
  },

  {
    slug: "como-acompanhar-a-viagem",
    category: "use",
    popular: true,
    question: "Como acompanho a minha viagem?",
    answer:
      "A primeira rota ainda está a ser preparada. A experiência de acompanhamento será disponibilizada juntamente com o serviço. A ideia é permitir que o passageiro tenha acesso às informações importantes da viagem, como a rota, horário, estado da viagem e dados relevantes do motorista ou veículo, quando aplicável.",
  },

  {
    slug: "como-sei-que-o-motorista-chegou",
    category: "use",
    question: "Como sei quando o veículo está a chegar?",
    answer:
      "Quando a funcionalidade estiver disponível, o Baza poderá apresentar informações sobre o estado da viagem e a localização do veículo. Durante a fase de preparação ainda estamos a definir a experiência final. O passageiro deverá continuar a considerar o horário oficial da rota como principal referência.",
  },

  {
    slug: "o-que-devo-fazer-antes-da-viagem",
    category: "use",
    question: "O que devo fazer antes de uma viagem?",
    answer:
      "Consulta a rota e confirma a tua paragem, horário e condições da reserva ou plano. Planeia chegar à paragem com antecedência e mantém o telemóvel disponível para receber eventuais comunicações importantes. Se houver alguma alteração relevante na viagem, verifica as informações apresentadas pelo Baza antes de te deslocares.",
  },

  {
    slug: "posso-usar-o-baza-sem-telemovel",
    category: "use",
    question: "Preciso de um telemóvel para usar o Baza?",
    answer:
      "O Baza está a ser desenvolvido como um serviço digital, por isso algumas funcionalidades dependem de acesso ao site ou aplicação. Informações como conta, reservas e estado da viagem serão disponibilizadas digitalmente. Os requisitos exactos serão comunicados quando o serviço estiver disponível.",
  },

  {
    slug: "tenho-um-problema",
    category: "use",
    popular: true,
    question: "O que faço se tiver um problema?",
    answer:
      "Se tiveres um problema durante o pré-lançamento, podes contactar a equipa através do email geral@bazaja.com ou dos canais oficiais apresentados no site. Quando o serviço estiver activo, haverá orientações específicas para situações relacionadas com reservas, pagamentos, viagens e outros problemas. Sempre que entrares em contacto, descreve o problema com o máximo de detalhe possível para facilitar o atendimento.",
  },

  {
    slug: "perdi-um-objecto",
    category: "use",
    question: "O que faço se me esquecer de um objecto no veículo?",
    answer:
      "Se esqueceres um objecto durante uma viagem, contacta o suporte do Baza assim que possível e informa a data, horário, rota e, se possível, o veículo utilizado. A equipa poderá tentar localizar o objecto junto do motorista. A recuperação não é garantida, por isso recomendamos que mantenhas contigo os teus objectos pessoais e de valor.",
  },

  /*
   * MOTORISTAS
   */

  {
    slug: "como-ser-motorista-baza",
    category: "drivers",
    popular: true,
    question: "Como posso ser motorista do Baza?",
    answer:
      "Se tens interesse em operar uma rota do Baza, podes manifestar esse interesse através do formulário disponibilizado pela equipa. Deves indicar informações como a tua zona de operação, trajecto habitual, horários, capacidade do veículo e disponibilidade. O registo permite-nos conhecer motoristas interessados, mas não representa automaticamente uma aprovação.",
  },

  {
    slug: "que-informacoes-motorista-deve-fornecer",
    category: "drivers",
    question: "Que informações são necessárias para manifestar interesse como motorista?",
    answer:
      "O formulário poderá solicitar informações relacionadas com a tua identificação, experiência, zona de operação, disponibilidade, trajecto habitual e veículo. Os dados necessários podem variar de acordo com a fase de avaliação. Informações adicionais poderão ser solicitadas posteriormente durante o processo de validação.",
  },

  {
    slug: "motorista-pode-escolher-rota",
    category: "drivers",
    question: "O motorista pode escolher a rota que quer operar?",
    answer:
      "O interesse do motorista pode incluir a rota ou zona onde prefere operar. No entanto, a atribuição de uma operação depende da procura existente, disponibilidade, características do veículo, horários e outros critérios operacionais. Manifestar interesse numa rota não garante a sua atribuição.",
  },

  {
    slug: "registo-garante-uma-rota",
    category: "drivers",
    popular: true,
    question: "O registo garante que vou operar uma rota?",
    answer:
      "Não. O formulário de motorista é uma manifestação de interesse e serve para ajudar o Baza a conhecer a disponibilidade de operadores. Depois do registo podem existir etapas de validação, análise de documentação e avaliação da compatibilidade com uma determinada operação. Apenas uma confirmação oficial representa um acordo para operar uma rota.",
  },

  {
    slug: "motorista-recebe-pagamento",
    category: "drivers",
    question: "Como funciona o pagamento ao motorista?",
    answer:
      "As condições de remuneração do motorista dependem do acordo operacional estabelecido para cada serviço. Antes de iniciar uma operação, os valores, periodicidade, responsabilidades e restantes condições deverão ser apresentados ao motorista e formalizados de acordo com o modelo utilizado pelo Baza.",
  },

  {
    slug: "motorista-pode-operar-varias-rotas",
    category: "drivers",
    question: "Um motorista pode operar mais de uma rota?",
    answer:
      "Isso pode ser possível quando os horários e condições operacionais forem compatíveis. A atribuição de múltiplas rotas depende da disponibilidade do motorista, capacidade operacional, horários e necessidades do Baza.",
  },

  /*
   * PAGAMENTOS
   */

  {
    slug: "quanto-custa-o-baza",
    category: "payments",
    popular: true,
    question: "Quanto custa utilizar o Baza?",
    answer:
      "Os preços ainda não foram definidos publicamente para a primeira operação. O valor dependerá da rota, frequência de utilização, tipo de plano e estrutura da operação. Antes da abertura das reservas, o preço e todas as condições relevantes deverão ser apresentados de forma clara.",
  },

  {
    slug: "como-posso-pagar",
    category: "payments",
    question: "Como poderei pagar pelo Baza?",
    answer:
      "Os métodos de pagamento serão apresentados quando os planos e reservas forem disponibilizados. O objectivo é oferecer uma experiência de pagamento simples e adequada aos utilizadores em Angola. Antes de qualquer cobrança, o utilizador deverá conseguir consultar o valor e as condições da operação.",
  },

  {
    slug: "o-pagamento-e-recorrente",
    category: "payments",
    question: "Os pagamentos são recorrentes?",
    answer:
      "Isso depende do tipo de plano. Um plano mensal, por exemplo, poderá ter regras próprias de renovação, enquanto uma reserva individual funciona de forma diferente. As condições de renovação e cobrança serão apresentadas claramente no momento da compra.",
  },

  {
    slug: "recebo-comprovativo-pagamento",
    category: "payments",
    question: "Vou receber um comprovativo do pagamento?",
    answer:
      "As informações e comprovativos associados ao pagamento serão disponibilizados através dos canais definidos pelo Baza. Os detalhes exactos dependerão do método de pagamento e da implementação final do serviço.",
  },

  {
    slug: "posso-pedir-reembolso",
    category: "payments",
    question: "Posso pedir um reembolso?",
    answer:
      "A possibilidade de reembolso depende do motivo, tipo de pagamento, reserva ou plano e das condições aplicáveis. Quando o serviço estiver aberto, as regras de reembolso serão apresentadas nos termos de utilização. Se precisares de assistência com um pagamento, contacta o suporte e fornece os dados da transacção.",
  },

  {
    slug: "pagamento-falhou",
    category: "payments",
    question: "O que faço se o meu pagamento falhar?",
    answer:
      "Primeiro confirma se o valor não foi efectivamente debitado. Se o pagamento falhou e não houve cobrança, podes tentar novamente através do método disponível. Se o valor foi debitado mas a reserva ou plano não apareceu na tua conta, evita efectuar vários pagamentos consecutivos e contacta o suporte com os detalhes da transacção para que a equipa possa verificar o estado.",
  },

  /*
   * SEGURANÇA
   */

  {
    slug: "o-baza-e-seguro",
    category: "safety",
    popular: true,
    question: "O Baza é seguro?",
    answer:
      "A segurança é uma parte importante da operação do Baza. O serviço está a ser preparado para trabalhar com motoristas e veículos avaliados de acordo com os requisitos definidos para a operação. Também estamos a desenvolver ferramentas para permitir uma experiência mais organizada antes e durante as viagens. No entanto, nenhum serviço de transporte consegue eliminar completamente todos os riscos, por isso passageiros e motoristas devem seguir as regras de segurança aplicáveis.",
  },

  {
    slug: "como-os-motoristas-sao-avaliados",
    category: "safety",
    question: "Como os motoristas são avaliados?",
    answer:
      "Antes de um motorista operar uma rota, podem ser solicitadas informações e documentação necessárias para verificar a sua elegibilidade. A avaliação pode incluir dados pessoais, informações sobre o veículo, experiência e outros requisitos definidos pelo Baza. Os critérios exactos poderão variar de acordo com a operação e serão aplicados antes da confirmação do motorista.",
  },

  {
    slug: "como-sao-verificados-os-veiculos",
    category: "safety",
    question: "Os veículos são verificados?",
    answer:
      "A operação deverá trabalhar apenas com veículos que cumpram os requisitos definidos pelo Baza e pelas regras aplicáveis ao serviço. Durante o processo de entrada de um motorista, podem ser solicitadas informações e documentação relacionadas com o veículo. A aprovação depende do cumprimento dos critérios estabelecidos.",
  },

  {
    slug: "o-que-fazer-em-emergencia",
    category: "safety",
    question: "O que faço em caso de emergência?",
    answer:
      "Em caso de emergência ou perigo imediato, deves contactar primeiro os serviços de emergência competentes. Depois, assim que estiveres em segurança, informa o Baza através do canal de suporte disponível para que a equipa possa registar e analisar a ocorrência. Não coloques a tua segurança em risco para tentar resolver uma situação através da aplicação.",
  },

  {
    slug: "posso-levar-outra-pessoa",
    category: "safety",
    question: "Posso levar outra pessoa comigo?",
    answer:
      "A utilização de um lugar está associada às condições da reserva ou plano. Não deves assumir que outra pessoa pode utilizar o teu lugar sem uma reserva ou autorização válida. As regras específicas para acompanhantes serão comunicadas quando o serviço estiver disponível.",
  },

  {
    slug: "regras-durante-a-viagem",
    category: "safety",
    question: "Existem regras durante a viagem?",
    answer:
      "Sim. Passageiros e motoristas devem respeitar as regras de segurança e convivência aplicáveis ao serviço. Isso inclui respeitar o motorista e os restantes passageiros, não danificar o veículo, cumprir as orientações de segurança e não adoptar comportamentos que possam colocar outras pessoas em risco. Regras adicionais poderão ser apresentadas antes da utilização do serviço.",
  },

  /*
   * GERAL / SUPORTE
   */

  {
    slug: "como-contactar-o-baza",
    category: "use",
    question: "Como posso contactar o Baza?",
    answer:
      "Durante o pré-lançamento, podes contactar a equipa através do email geral@bazaja.com. Também podes utilizar os canais oficiais indicados no site bazaja.com. Quando o serviço estiver activo, serão disponibilizados canais específicos para suporte relacionado com viagens, reservas e pagamentos.",
  },

  {
    slug: "onde-ver-novidades",
    category: "use",
    question: "Onde posso acompanhar as novidades do Baza?",
    answer:
      "As principais novidades serão comunicadas através do site oficial e dos canais oficiais do Baza. Durante o pré-lançamento, acompanha bazaja.com para saber quando a primeira rota estiver pronta, quando as reservas forem abertas e quando novas rotas forem anunciadas.",
  },

  {
    slug: "como-posso-ajudar-o-baza",
    category: "about",
    question: "Como posso ajudar o Baza nesta fase?",
    answer:
      "A melhor forma de ajudar nesta fase é demonstrar interesse e partilhar informação sobre o teu trajecto. Se conheces outras pessoas que fazem deslocações semelhantes, podes também mostrar-lhes o Baza. Quanto melhor compreendermos onde estão as pessoas, para onde precisam de ir e em que horários, mais informação teremos para decidir quais operações fazem sentido.",
  },

  {
    slug: "o-meu-registo-tem-custo",
    category: "reservations",
    question: "Entrar na lista de espera tem algum custo?",
    answer:
      "Não. O registo na lista de espera é uma manifestação de interesse e não representa uma compra ou reserva. Não deves efectuar qualquer pagamento apenas para entrar na lista de espera.",
  },

  {
    slug: "os-meus-dados-sao-partilhados",
    category: "use",
    question: "O que acontece aos meus dados quando entro na lista de espera?",
    answer:
      "Os dados fornecidos através do formulário são utilizados para compreender a procura, preparar rotas e entrar em contacto contigo quando existirem informações relevantes sobre o serviço. O Baza deve tratar os dados de acordo com a sua política de privacidade e as regras aplicáveis. Evita fornecer informações que não sejam solicitadas pelo formulário oficial.",
  },

  {
    slug: "posso-sair-da-lista-de-espera",
    category: "reservations",
    question: "Posso sair da lista de espera?",
    answer:
      "Sim. Se já não tiveres interesse em utilizar o Baza, podes solicitar a remoção do teu registo através dos canais de contacto disponíveis. A equipa poderá pedir informações suficientes para identificar correctamente o registo antes de efectuar a alteração.",
  },
];

export const getCategory = (id: string) =>
  categories.find((c) => c.id === id);

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const articlesIn = (id: CategoryId) =>
  articles.filter((a) => a.category === id);