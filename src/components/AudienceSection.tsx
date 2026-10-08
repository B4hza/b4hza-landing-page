import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Hourglass,
  Minus,
} from "lucide-react";
import { currentSiteCopy, siteMode } from "@/lib/site-mode";

const eyebrow = "text-sm font-medium text-gray-600 uppercase tracking-wide";

const h2 =
  "text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance";

const lead = "text-gray-500 text-lg text-balance";

function Step({
  number,
  title,
  description,
  current,
  last,
}: {
  number: string;
  title: string;
  description: string;
  current?: boolean;
  last?: boolean;
}) {
  return (
    <li className="relative flex gap-5 pb-8 last:pb-0">
      {/* Linha vertical da timeline */}
      {!last && (
        <span
          aria-hidden="true"
          className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-gray-200"
        />
      )}

      {/* Número */}
      <span
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium tabular-nums ${current
            ? "bg-black text-white"
            : "border border-gray-200 bg-white text-gray-500"
          }`}
      >
        {number}
      </span>

      {/* Texto */}
      <div className="flex min-w-0 flex-1 items-start justify-between gap-3 pt-0.5">
        <div className="flex min-w-0 flex-col">
          <strong
            className={`text-base font-semibold ${current ? "text-black" : "text-gray-900"
              }`}
          >
            {title}
          </strong>
          <small className="mt-0.5 text-sm text-gray-500">{description}</small>
        </div>

        {current && (
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-500" />
            </span>
            Agora
          </span>
        )}
      </div>
    </li>
  );
}

export function ExpansionSection() {
  const routeLabel =
    currentSiteCopy.routeStatus === "EM PREPARAÇÃO"
      ? "Em preparação"
      : currentSiteCopy.routeStatus === "EM TESTE"
        ? "Em validação"
        : "Em operação";

  return (
    <section className="px-4 py-16 sm:py-20" aria-labelledby="expansion-title">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        {/* Intro */}
        <div className="space-y-4">
          <span className={eyebrow}>Uma rota de cada vez</span>

          <h2 id="expansion-title" className={h2}>
            Começamos por
            <br />
            <span className="text-gray-400">um caminho.</span>
          </h2>

          <p className={lead}>
            Vamos validar a primeira rota com cuidado. Depois, com base no que
            aprendermos e na procura, chegamos a mais pessoas, destinos e rotas.
          </p>

          <a
            href="#lista-de-espera"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors hover:text-gray-600"
          >
            Acompanha o arranque
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Growth path */}
        <ol>
          <Step
            number="01"
            title="Primeira rota"
            description={routeLabel}
            current={siteMode === "prelaunch"}
          />
          <Step
            number="02"
            title="Validar o serviço"
            description="Aprender com quem viaja"
            current={siteMode === "validation"}
          />
          <Step
            number="03"
            title="Novas ligações"
            description="Mais rotas, guiadas pela procura"
            current={siteMode === "live"}
          />
          <Step
            number="04"
            title="Mais pessoas"
            description="Crescer com responsabilidade"
            last
          />
        </ol>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="px-4 py-16 sm:py-20" aria-labelledby="audience-title" id="audience">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 id="audience-title" className={h2}>
            A tua manhã não
            <br />
            tem de começar à procura.
          </h2>

          <p className={lead}>
            Feito para estudantes e trabalhadores que fazem o mesmo caminho todos
            os dias.
          </p>
        </div>

        {/* Compare */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch"
          aria-label="Comparação entre uma deslocação sem plano e uma viagem organizada pelo Baza"
        >
          {/* Sem plano */}
          <article className="flex flex-col rounded-2xl border border-gray-200/70 bg-gray-50 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Sem plano
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <Hourglass className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
            </div>

            <div className="my-5 h-px w-full bg-gray-100" />

            <strong className="mb-4 text-xl font-semibold text-gray-700">
              A correria começa cedo.
            </strong>

            <ul className="space-y-3 text-gray-500">
              {[
                "Procurar transporte",
                "Enfrentar a lotação",
                "Não saber quando chegas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <Minus
                      className="h-3 w-3 text-gray-400"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Conector */}
          <span
            aria-hidden="true"
            className="flex items-center justify-center md:px-1"
          >
            <span className="flex h-9 w-9 rotate-90 items-center justify-center rounded-full border border-gray-200/70 bg-white text-gray-400 md:rotate-0">
              <ArrowRight className="h-4 w-4" />
            </span>
          </span>

          {/* Com Baza */}
          <article className="flex flex-col rounded-2xl border border-gray-200/70 bg-white p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Com Baza
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                <CalendarCheck
                  className="h-4 w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
            </div>

            <div className="my-5 h-px w-full bg-gray-100" />

            <strong className="mb-4 text-xl font-semibold text-black">
              A viagem já está organizada.
            </strong>

            <ul className="space-y-3 text-gray-600">
              {[
                "Rota e paragens definidas",
                "Horário de chegada previsto",
                "Um dia mais previsível",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <Check
                      className="h-3 w-3 text-gray-600"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}