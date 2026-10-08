"use client"

import { useState } from "react"
import { ArrowUpRight, Plus } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "O que é o Baza e como funciona?",
    answer:
      "O Baza é transporte partilhado para quem faz o mesmo caminho todos os dias, como estudantes e trabalhadores. Funciona com rotas, paragens e horários definidos, em vez de procurares transporte a cada saída.",
  },
  {
    question: "O Baza já está disponível?",
    answer:
      "Ainda não. Estamos a recolher interesse para perceber onde há mais procura e só depois desenhar a primeira rota.",
  },
  {
    question: "Como entro na lista de espera?",
    answer:
      "Preenches o formulário com os teus dados e o teu trajecto. Entrar na lista regista o teu interesse, mas não reserva nem cobra um lugar.",
  },
  {
    question: "Como vão escolher as rotas?",
    answer:
      "Pela procura. Os trajectos que as pessoas partilham (origem, destino, horários e dias por semana) ajudam-nos a decidir onde faz mais falta. Partilhar o teu trajecto não garante que a rota seja criada.",
  },
  {
    question: "Que planos estão previstos?",
    answer:
      "Estão previstas opções semanais e mensais para quem viaja com frequência. Os detalhes serão comunicados antes da abertura do serviço.",
  },
  {
    question: "Quanto vai custar?",
    answer:
      "Ainda não definimos os preços. Vamos comunicá-los antes da abertura, a quem estiver na lista de espera.",
  },
  {
    question: "O serviço é porta-a-porta?",
    answer:
      "Não. O Baza funciona com rotas e paragens definidas, para que saibas sempre onde embarcar e a que horas está prevista a chegada.",
  },
  {
    question: "Sou motorista. Posso participar?",
    answer:
      "Podes manifestar interesse. Escolhe “Motorista” no formulário da lista de espera e indica a tua rota habitual, horários e capacidade. O registo não confirma uma rota nem um acordo de operação.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      className="scroll-mt-28 px-4 py-16 sm:py-20"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Heading */}
        <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <h2
            id="faq-title"
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl"
          >
            Tudo o que precisas
            <br />
            saber sobre o Baza.
          </h2>

          <p className="text-balance text-lg text-gray-500">
            Respostas diretas às dúvidas mais comuns antes do arranque.
          </p>

          <Link
            href="/help"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors hover:text-gray-600"
          >
            Ver a central de ajuda
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Perguntas */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200/70 bg-white transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-gray-900">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-black text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Plus
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        strokeWidth={2.5}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pr-12 leading-relaxed text-gray-500">
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