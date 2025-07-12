import {
    ChevronRight,
    Calendar,
    TicketCheck,
    BusFront,
    Map,
} from "lucide-react"

const diasHorarios = [
    { dia: "Seg", inicio: "08h", fim: "17h", cor: "black" },
    { dia: "Ter", inicio: "08h", fim: "17h", cor: "black" },
    { dia: "Qua", inicio: "08h", fim: "17h", cor: "black" },
]



export default function HowItWorks() {
    return (
        <section className="relative bg-[#f5f5f5] overflow-hidden py-10" id="como-funciona">
            {/* Linhas de fundo */}
            <div className="absolute inset-0 z-0 pointer-events-none max-w-6xl mx-auto">
                <div className="absolute top-0 left-[10px] md:left-[-34px] w-px h-full bg-black/5" />
                <div className="absolute top-0 right-[10px] md:right-[-34px] w-px h-full bg-black/5" />
            </div>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-px bg-black/5" />
            </div>

            {/* Cabeçalho */}
            <div className="relative z-10 text-center mb-16 px-4">
                <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-4">
                    Como funciona
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight max-w-4xl mx-auto">
                    Torna os teus dias mais leves — sem stress, sem empurrões, sem espera.
                </h2>

                <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                    Tu acordas cedo, corres pra paragem, esperas no sol, empurras-te pra entrar num carro lotado.
                    Todo santo dia. E ainda pagas caro. Com o Baza, isso acaba. Tu ganhas tempo, conforto e paz.
                </p>
            </div>

            {/* Etapas */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {/* Etapa 1 */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col">
                    <div className="text-gray-400 text-sm font-medium mb-4">01</div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                        Diz-nos quando e onde vais
                    </h3>
                    <p className="text-gray-500 mb-8">
                        Partilhas os teus horários e trajetos — casa, escola ou trabalho — e cuidamos do resto.
                    </p>
                    {/* Availability Settings Visual */}
                    <div className="space-y-3">
                        {diasHorarios.map(({ dia, inicio, fim, cor }, index) => (
                            <div
                                key={index}
                                className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-lg border border-gray-200"
                            >
                                <div className="flex items-center gap-3 ">
                                    {cor === "black" ? (
                                        <div className="w-5 h-3 bg-black rounded-full relative">
                                            <div className="w-2 h-2 bg-white rounded-full absolute right-0.5 top-0.5" />
                                        </div>
                                    ) : (
                                        <div className={`w-2 h-2 bg-${cor} rounded-full`} />
                                    )}
                                    <span className="text-sm text-gray-600">{dia}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 ">
                                    <span>{inicio}</span>
                                    <span>-</span>
                                    <span>{fim}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Etapa 2 */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col">
                    <div className="text-gray-400 text-sm font-medium mb-4">02</div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                        Escolhe o teu plano e reserva o lugar
                    </h3>
                    <p className="text-gray-500 mb-8">
                        Com um plano acessível, o teu lugar já fica reservado para os dias que precisares. Sem correrias, sem filas.
                    </p>

                    <div className="space-y-4 mt-auto">
                        <div className="mt-auto grid gap-4">
                            <div className="border border-gray-200 rounded-xl p-4">
                                <h4 className="font-semibold text-sm text-gray-900">Plano Semanal</h4>
                                <p className="text-sm text-gray-600 mt-1">Viagens econômicas por 5 dias úteis.</p>
                            </div>
                            <div className="rounded-xl p-4 bg-white border border-gray-200 scale-[1.02] transition-all">
                                <h4 className="font-semibold text-sm text-gray-900">Plano Mensal</h4>
                                <p className="text-sm text-gray-600 mt-1">Deslocamentos práticos em todos os dias úteis do mês.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Etapa 3 */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col">
                    <div className="text-gray-400 text-sm font-medium mb-4">03</div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                        Só precisas aparecer e entrar
                    </h3>
                    <p className="text-gray-500 mb-8">
                        No dia certo, o teu transporte já estará no ponto. Nada de empurrões, sol ou stress.
                    </p>

                    <div className="relative mt-5 mb-5 w-full max-w-sm">
                        {/* Mensagem empilhada 3 (mais abaixo) */}
                        <div className="absolute inset-0 z-10 translate-y-6 scale-[0.94] border border-gray-200 bg-white rounded-xl"></div>

                        {/* Mensagem empilhada 2 (meio) */}
                        <div className="absolute inset-0 z-20 translate-y-3 scale-[0.97] border border-gray-300 bg-white rounded-xl"></div>

                        {/* Mensagem principal (topo visível) */}
                        <div className="relative z-30 flex items-center gap-4 border border-gray-300 bg-white p-4 rounded-xl">
                            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                                <span className="text-white">Baza</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-800 font-medium">O teu transporte chega em 3 minutos</p>
                                <p className="text-xs text-gray-500">Sai de casa e vai com calma — o motorista já está a caminho do ponto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
