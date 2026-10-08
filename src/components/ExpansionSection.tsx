import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import { currentSiteCopy, siteMode } from "@/lib/site-mode";

const eyebrow = "text-sm font-medium text-gray-600 uppercase tracking-wide";

const h2 =
  "text-3xl md:text-4xl font-bold text-black leading-tight tracking-tight text-balance";

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
    <li className="min-w-0">
      {/* Círculo + linha de ligação */}
      <div className="flex items-center gap-2">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-medium tabular-nums ${
            current
              ? "bg-black text-white"
              : "border border-gray-200 text-gray-500"
          }`}
        >
          {number}
        </span>

        <div
          aria-hidden="true"
          className="hidden flex-1 items-center gap-2 md:flex"
        >
          <span className="h-px flex-1 bg-gray-200" />
          {!last && (
            <ArrowRight
              size={16}
              className={`shrink-0 ${current ? "text-gray-700" : "text-gray-300"}`}
            />
          )}
        </div>
      </div>

      <strong className="mt-5 block text-sm font-semibold text-gray-900">
        {title}
      </strong>
      <small className="mt-1 block max-w-[10rem] text-sm text-gray-500">
        {description}
      </small>
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Intro */}
        <div className="space-y-4">

          <h2 id="expansion-title" className='text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight max-w-4xl mx-auto text-balance'>
            Começamos por
            <br />
            um caminho.
          </h2>

          <p className={lead}>
            Queremos validar a primeira rota com cuidado. A partir daí, o objectivo é
            chegar a mais pessoas, destinos e rotas — à medida que o serviço cresce.
          </p>

          <a
            href="/waitlist"
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
        <ol className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-4">
          <Step
            number="01"
            title="Primeira rota"
            description={routeLabel}
            current={siteMode === "prelaunch"}
          />
          <Step
            number="02"
            title="Validar o serviço"
            description="Aprender com a operação"
            current={siteMode === "validation"}
          />
          <Step
            number="03"
            title="Novas ligações"
            description="Mais rotas, com base na procura"
            current={siteMode === "live"}
          />
          <Step
            number="04"
            title="Mais pessoas"
            description="Expandir de forma responsável"
            last
          />
        </ol>
      </div>
    </section>
  );
}