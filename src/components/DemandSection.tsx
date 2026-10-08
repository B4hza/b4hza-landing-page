import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Flag,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const signals = [
  {
    icon: MapPin,
    title: "De onde sais",
    body: "Onde moras ou onde começas o teu dia.",
  },
  {
    icon: Flag,
    title: "Para onde vais",
    body: "Escola, universidade ou trabalho.",
  },
  {
    icon: Clock,
    title: "A que horas",
    body: "Hora de ida e de volta.",
  },
  {
    icon: CalendarDays,
    title: "Quantos dias",
    body: "Quantas vezes por semana fazes o percurso.",
  },
];

const eyebrow = "text-sm font-medium text-gray-600 uppercase tracking-wide";

const h2 =
  "text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance";

const lead = "text-gray-500 text-lg text-balance";

export function DemandSection() {
  return (
    <section
      className="px-4 py-16 sm:py-20"
      id="onde-faz-falta"
      aria-labelledby="demand-title"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">

            <h2 id="demand-title" className={h2}>
              As rotas vão nascer
              <br />
              onde houver procura.
            </h2>
          </div>

          <p className={lead}>
            Ainda não fechámos nenhum percurso. Primeiro queremos perceber de onde
            as pessoas saem, para onde vão e a que horas, e só depois desenhar a
            primeira rota.
          </p>
        </div>

        {/* Board */}
        <div className="mt-10 rounded-2xl border border-gray-200/70 bg-white p-6 md:mt-14 md:p-8">
          {/* Head */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-500" />
              </span>
              A recolher interesse
            </span>

            <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Rota por definir
            </span>
          </div>

          {/* Percurso esquemático */}
          <div
            className="flex flex-col items-start gap-4 py-8 md:flex-row md:items-center md:gap-6 md:py-10"
            aria-label="Percurso por definir: a tua origem até ao teu destino"
          >
            <div className="flex items-center gap-3">
              <span className="flex flex-col">
                <small className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Origem
                </small>
                <strong className="text-base font-semibold text-black">
                  A tua zona
                </strong>
              </span>
            </div>

            <span
              aria-hidden="true"
              className="ml-4 h-8 w-px border-l border-dashed border-gray-300 md:ml-0 md:h-px md:w-auto md:flex-1 md:border-l-0 md:border-t"
            />

            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600"
              >
                <Flag className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="flex flex-col">
                <small className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Destino
                </small>
                <strong className="text-base font-semibold text-black">
                  O teu destino
                </strong>
              </span>
            </div>
          </div>

          {/* Sinais */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="mb-5 text-xl font-semibold text-black">
              O que nos ajuda a decidir
            </h3>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {signals.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <strong className="text-sm font-semibold text-gray-900">
                      {title}
                    </strong>
                    <small className="mt-0.5 text-sm text-gray-500">{body}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Foot */}
          <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-400">
              Deixar o teu trajecto não reserva um lugar nem garante uma rota.
              Ajuda-nos a perceber onde faz mais falta.
            </p>

            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-black transition-colors hover:text-gray-600"
            >
              Partilhar o meu trajecto
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}