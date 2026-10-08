import { BusFront, Calendar, TicketCheck, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

const diasHorarios = [
  { dia: "Seg", inicio: "08h", fim: "17h", ativo: true },
  { dia: "Ter", inicio: "08h", fim: "17h", ativo: true },
  { dia: "Qua", inicio: "08h", fim: "17h", ativo: false },
]

const eyebrow = "text-sm font-medium text-gray-600 uppercase tracking-wide"

function StepCard({
  number,
  icon: Icon,
  title,
  body,
  children,
}: {
  number: string
  icon: LucideIcon
  title: string
  body: string
  children: ReactNode
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-gray-200/70 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium tabular-nums text-gray-300">{number}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>

      <h3 className="mb-3 text-xl font-semibold text-black">{title}</h3>
      <p className="mb-8 leading-relaxed text-gray-500">{body}</p>

      <div className="mt-auto">{children}</div>
    </article>
  )
}

export default function HowItWorks() {
  return (
    <section
      className="scroll-mt-28 px-4 py-16 sm:py-20"
      id="como-funciona"
      aria-labelledby="how-title"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">

            <h2
              id="how-title"
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl"
            >
              Menos improviso,
              <br />
              mais previsibilidade.
            </h2>
          </div>

          <p className="text-balance text-lg text-gray-500">
            Procurar transporte todas as manhãs não devia fazer parte da rotina. O Baza
            organiza deslocações recorrentes com rota e horário definidos.
          </p>
        </div>

        {/* Etapas */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3">
          {/* 1 */}
          <StepCard
            number="01"
            icon={Calendar}
            title="Diz-nos quando e onde vais"
            body="Partilhas os teus horários e trajectos, entre casa, escola ou trabalho, e nós usamos isso para desenhar as rotas."
          >
            <div className="space-y-2">
              {diasHorarios.map(({ dia, inicio, fim, ativo }) => (
                <div
                  key={dia}
                  className={`flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3 transition-colors ${
                    ativo ? "border-black/10 bg-gray-50" : "border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`relative h-3 w-5 rounded-full transition-colors ${
                        ativo ? "bg-black" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-2 w-2 rounded-full bg-white transition-all ${
                          ativo ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </span>

                    <span
                      className={`text-sm ${
                        ativo ? "font-medium text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {dia}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{inicio}</span>
                    <span className="text-gray-300">–</span>
                    <span>{fim}</span>
                  </div>
                </div>
              ))}
            </div>
          </StepCard>

          {/* 2 */}
          <StepCard
            number="02"
            icon={TicketCheck}
            title="Escolhe o plano que te serve"
            body="Estão previstas opções semanais e mensais para quem viaja com frequência. Os detalhes serão comunicados antes da abertura."
          >
            <div className="space-y-3">
              <div className="rounded-xl border border-gray-100 p-4">
                <h4 className="text-sm font-semibold text-gray-900">Plano semanal</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Para quem quer experimentar durante uma semana.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 p-4">
                <h4 className="text-sm font-semibold text-gray-900">Plano mensal</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Para quem faz o mesmo percurso todos os dias úteis.
                </p>
              </div>
            </div>
          </StepCard>

          {/* 3 */}
          <StepCard
            number="03"
            icon={BusFront}
            title="Só precisas de aparecer"
            body="No dia, sabes onde embarcar e a que horas chegas. Menos espera, menos incerteza."
          >
            <div className="relative mb-2 w-full">
              <div className="absolute inset-0 z-10 translate-y-6 scale-[0.94] rounded-xl border border-gray-100 bg-white" />
              <div className="absolute inset-0 z-20 translate-y-3 scale-[0.97] rounded-xl border border-gray-200 bg-white" />

              <div className="relative z-30 flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black">
                  <BusFront className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />

                  <span className="absolute -right-1 -top-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium leading-snug text-gray-900">
                    O teu transporte chega em 3 minutos
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Sai de casa com calma, o motorista já vai a caminho.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-gray-400">Exemplo ilustrativo.</p>
          </StepCard>
        </div>
      </div>
    </section>
  )
}