'use client'

import { useState } from 'react'
import { CircleHelp, Plus } from 'lucide-react'

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'O que é o Baza e como funciona?',
            answer:
                'O Baza é um app de transporte por assinatura pensado para estudantes e trabalhadores. Escolhes um plano semanal ou mensal, informas os teus horários e garantimos o teu transporte com lugar reservado todos os dias.',
        },
        {
            question: 'Preciso marcar a corrida todos os dias?',
            answer:
                'Não! Com o Baza, informas os teus horários uma vez e o teu transporte fica garantido para os dias escolhidos. Simples assim.',
        },
        {
            question: 'E se os meus horários mudarem?',
            answer:
                'Podes atualizar os teus horários no app.',
        },
        {
            question: 'Quais são os planos que vão estar disponíveis?',
            answer:
                'O Baza vai oferecer planos semanais e mensais, acessíveis e pensados para quem tem rotinas fixas, como ir para a universidade ou trabalho.',
        },
        {
            question: 'O Baza vai ser caro?',
            answer:
                'Não. O Baza foi criado para ser uma solução económica e acessível, especialmente para estudantes e trabalhadores. Os planos são ajustados à realidade do dia a dia.',
        },
        {
            question: 'E os motoristas? Como funciona para eles?',
            answer:
                'Os motoristas parceiros do Baza recebem as rotas organizadas com antecedência, com passageiros confirmados. Isso significa menos tempo à espera de corridas e mais ganhos estáveis, com viagens planejadas e rotas fixas.',
        },
        {
            question: 'Quero ser motorista do Baza. Como funciona?',
            answer:
                'Se tens um carro em boas condições e queres garantir corridas fixas todos os dias, o Baza pode ser para ti. Terás acesso a um painel com as tuas rotas, horários e passageiros definidos. O processo de candidatura será feito pelo app, com envio de documentos, verificação do veículo e uma pequena formação sobre como funciona o serviço. Em breve vamos abrir as inscrições!',
        },
        {
            question: 'O Baza é seguro para passageiros e motoristas?',
            answer:
                'Sim. A segurança é uma das nossas maiores prioridades. Todos os motoristas passam por verificação de documentos, análise do veículo e uma formação obrigatória. As rotas são definidas com antecedência, o que significa que motoristas e passageiros já sabem quem vai na viagem e para onde. Além disso, todas as corridas são monitoradas pela nossa equipa, e temos suporte disponível para qualquer emergência. Assim, garantimos tranquilidade para todos os lados.',
        },
        {
            question: 'O Baza vai ter plano compartilhado e plano privado?',
            answer:
                'Sim. O Baza vai oferecer duas opções: o plano compartilhado, onde divides o transporte com outras pessoas que fazem rotas semelhantes (sem precisares conhecê-las), e o plano privado, onde o carro é só para ti. O plano compartilhado é mais económico, ideal para quem quer poupar e ainda ter um transporte confortável e garantido. Já o plano privado tem um custo mais elevado, mas oferece exclusividade e flexibilidade total. Assim, podes escolher o que se encaixa melhor no teu bolso e na tua rotina.',
        },
    ]

    return (
        <section className="py-10 overflow-hidden" id="faq">
            {/* Cabeçalho */}
            <div className="relative z-10 text-center mb-16 px-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-600 mb-4">
                    <CircleHelp className="h-3.5 w-3.5 text-orange-500" strokeWidth={2.5} />
                    Perguntas frequentes
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight max-w-4xl mx-auto text-balance">
                    Tudo o que precisas saber <br /> sobre o Baza
                </h2>

                <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto text-balance">
                    Respostas diretas às dúvidas mais comuns da nossa comunidade.
                </p>
            </div>

            {/* Conteúdo principal */}
            <div className="relative z-10 px-4">
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border bg-white transition-colors ${
                                    isOpen ? 'border-black/15' : 'border-black/[0.06]'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`text-base sm:text-lg font-medium transition-colors ${
                                            isOpen ? 'text-black' : 'text-gray-900'
                                        }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                                            isOpen ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
                                        }`}
                                    >
                                        <Plus
                                            className={`h-4 w-4 transition-transform duration-300 ${
                                                isOpen ? 'rotate-45' : 'rotate-0'
                                            }`}
                                            strokeWidth={2.5}
                                        />
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-500 leading-relaxed px-5 sm:px-6 pb-5 pr-10">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}