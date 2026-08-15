import { Calendar, TicketCheck, BusFront, Map } from "lucide-react"

const diasHorarios = [
  { dia: "Seg", inicio: "08h", fim: "17h", ativo: true },
  { dia: "Ter", inicio: "08h", fim: "17h", ativo: false },
  { dia: "Qua", inicio: "08h", fim: "17h", ativo: false },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20" id="como-funciona">
      {/* Cabeçalho */}
      <div className="relative z-10 text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-600 mb-4">
          <Map className="h-3.5 w-3.5 text-orange-500" strokeWidth={2.5} />
          Como funciona
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight max-w-4xl mx-auto text-balance">
          Torna os teus dias mais leves — sem stress, sem empurrões, sem espera.
        </h2>

        <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto text-balance">
          O Baza é um serviço de transporte partilhado por assinatura que te permite reservar o teu
          lugar com antecedência. Escolhes os teus horários e trajetos, subscreves um plano semanal
          ou mensal, e tens transporte garantido todos os dias — com pontualidade, conforto e preço
          justo.
        </p>
      </div>

      {/* Etapas */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
        {/* Etapa 1 */}
        <div className="group relative bg-white rounded-2xl p-8  transition-all duration-200 hover:-translate-y-0.5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300 text-sm font-medium tabular-nums">01</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <Calendar className="h-4 w-4" strokeWidth={2} />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-black mb-3">Diz-nos quando e onde vais</h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Partilhas os teus horários e trajetos — casa, escola ou trabalho — e cuidamos do resto.
          </p>

          {/* Availability Settings Visual */}
          <div className="space-y-2 mt-auto">
            {diasHorarios.map(({ dia, inicio, fim, ativo }, index) => (
              <div
                key={index}
                className={`flex flex-wrap items-center justify-between gap-2 p-3 rounded-lg border transition-colors ${
                  ativo ? "border-black/10 bg-gray-50" : "border-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-3 rounded-full relative transition-colors ${
                      ativo ? "bg-black" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 bg-white rounded-full absolute top-0.5 transition-all ${
                        ativo ? "right-0.5" : "left-0.5"
                      }`}
                    />
                  </div>
                  <span className={`text-sm ${ativo ? "text-gray-900 font-medium" : "text-gray-500"}`}>
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
        </div>

        {/* Etapa 2 */}
        <div className="group relative bg-white rounded-2xl p-8  transition-all duration-200 hover:-translate-y-0.5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300 text-sm font-medium tabular-nums">02</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <TicketCheck className="h-4 w-4" strokeWidth={2} />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-black mb-3">Escolhe o teu plano e reserva o lugar</h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Com um plano acessível, o teu lugar já fica reservado para os dias que precisares. Sem
            correrias, sem filas.
          </p>

          <div className="space-y-3 mt-auto">
            <div className="border border-gray-100 rounded-xl p-4">
              <h4 className="font-semibold text-sm text-gray-900">Plano Semanal</h4>
              <p className="text-sm text-gray-500 mt-1">Viagens económicas por 5 dias úteis.</p>
            </div>
            <div className="relative rounded-xl p-4 bg-white border-2 border-black">
              <span className="absolute -top-2.5 right-4 rounded-full bg-black px-2.5 py-0.5 text-[11px] font-medium text-white">
                Mais escolhido
              </span>
              <h4 className="font-semibold text-sm text-gray-900">Plano Mensal</h4>
              <p className="text-sm text-gray-500 mt-1">Deslocamentos práticos em todos os dias úteis do mês.</p>
            </div>
          </div>
        </div>

        {/* Etapa 3 */}
        <div className="group relative bg-white rounded-2xl p-8  transition-all duration-200 hover:-translate-y-0.5  flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300 text-sm font-medium tabular-nums">03</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <BusFront className="h-4 w-4" strokeWidth={2} />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-black mb-3">Só precisas aparecer e entrar</h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            No dia certo, o teu transporte já estará no ponto. Nada de empurrões, sol ou stress.
          </p>

          <div className="relative mt-auto mb-2 w-full">
            {/* Mensagem empilhada 3 (mais abaixo) */}
            <div className="absolute inset-0 z-10 translate-y-6 scale-[0.94] border border-gray-100 bg-white rounded-xl" />

            {/* Mensagem empilhada 2 (meio) */}
            <div className="absolute inset-0 z-20 translate-y-3 scale-[0.97] border border-gray-200 bg-white rounded-xl" />

            {/* Mensagem principal (topo visível) */}
            <div className="relative z-30 flex items-center gap-4 border border-gray-200 bg-white p-4 rounded-xl">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black">
                <BusFront className="h-5 w-5 text-white" strokeWidth={2} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-medium leading-snug">
                  O teu transporte chega em 3 minutos
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Sai de casa e vai com calma — o motorista já está a caminho do ponto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}