'use client'

import React, { useState } from 'react'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

export default function WaitlistForm() {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',

    // Passageiro
    origin: '',
    destination: '',
    departureTime: '',
    returnTime: '',
    frequency: '',

    // Motorista
    driverOrigin: '',
    driverDestination: '',
    driverStartTime: '',
    driverEndTime: '',
    vehicleCapacity: '',
    availability: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 3

  const inputClass =
    'w-full h-11 bg-black/5 rounded-xl px-4 border-2 border-transparent text-base transition-all duration-300 ease-[cubic-bezier(0.25,0.01,0.25,1)] focus:outline-none focus:border-black hover:border-black/20'

  const labelClass =
    'block mb-1.5 text-sm font-semibold text-black/60 transition-colors duration-300 ease-[cubic-bezier(0.25,0.01,0.25,1)] peer-focus:text-black/75 group-hover:text-black/75'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep((current) => current + 1)
    }
  }

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1)
    }
  }

  const isStepValid = () => {
    if (step === 1) {
      return (
        formData.name &&
        formData.email &&
        formData.phone
      )
    }

    if (step === 2) {
      return !!formData.role
    }

    if (step === 3) {
      if (formData.role === 'passenger') {
        return (
          formData.origin &&
          formData.destination &&
          formData.departureTime &&
          formData.returnTime &&
          formData.frequency
        )
      }

      if (formData.role === 'driver') {
        return (
          formData.driverOrigin &&
          formData.driverDestination &&
          formData.driverStartTime &&
          formData.driverEndTime &&
          formData.vehicleCapacity &&
          formData.availability
        )
      }
    }

    return false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isStepValid()) return

    setIsSubmitting(true)

    try {
      await fetch(
        `https://script.google.com/macros/s/AKfycbz2HdwAsgHKhwNJTU0F97WA-XYtHBG1OdG2zkLW7rEvVbs5xudbYNGO2EGHC2H3e3yoeg/exec?ts=${Date.now()}`,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      setSubmitted(true)
    } catch (error) {
      console.error('Erro ao enviar:', error)
    }

    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <section className="relative overflow-hidden">
        <div className="relative z-10 px-4 sm:px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl px-6 md:px-12 py-16 sm:py-24 border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="text-center space-y-6 max-w-xl mx-auto">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                  <Check className="h-6 w-6" strokeWidth={2.5} />
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance">
                  Obrigado por te juntares ao Baza!
                </h1>

                <p className="text-base md:text-lg text-gray-500 leading-relaxed text-balance">
                  Recebemos os teus dados. Em breve vais receber um e-mail de
                  confirmação e serás dos primeiros a saber quando o Baza
                  estiver disponível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const roles = [
    {
      value: 'passenger',
      label: 'Passageiro',
    },
    {
      value: 'driver',
      label: 'Motorista',
    },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl px-6 md:px-12 py-10 sm:py-16 border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LADO ESQUERDO */}
              <div className="space-y-6">

                <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                  </span>

                  Lista de espera
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight tracking-tight text-balance">
                  Garante o teu lugar no Baza
                </h1>

                <p className="text-base md:text-lg text-gray-500 leading-relaxed text-balance">
                  Entra na lista de espera e sê um dos primeiros a experimentar
                  o Baza. Recebe acesso exclusivo, novidades e ofertas únicas.
                </p>

              </div>

              {/* FORMULÁRIO */}
              <form onSubmit={handleSubmit} className="w-full">

                {/* BARRA DE PROGRESSO */}
                <div className="mb-8">

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-black">
                      Etapa {step} de {totalSteps}
                    </span>

                    <span className="text-sm text-gray-400">
                      {Math.round((step / totalSteps) * 100)}%
                    </span>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-black/5 overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${(step / totalSteps) * 100}%`,
                      }}
                    />
                  </div>

                </div>

                {/* ================================= */}
                {/* ETAPA 1 — DADOS PESSOAIS */}
                {/* ================================= */}

                {step === 1 && (
                  <div className="space-y-5">

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-black">
                        Primeiro, fala-nos sobre ti
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Precisamos apenas de alguns dados básicos.
                      </p>
                    </div>

                    <div className="input-group group w-full">
                      <label htmlFor="name" className={`${labelClass} peer`}>
                        Nome
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className={`${inputClass} peer`}
                        placeholder="Seu nome"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>

                    <div className="input-group group w-full">
                      <label htmlFor="email" className={`${labelClass} peer`}>
                        Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className={`${inputClass} peer`}
                        placeholder="Seu email"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>

                    <div className="input-group group w-full">
                      <label htmlFor="phone" className={`${labelClass} peer`}>
                        Telefone
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        className={`${inputClass} peer`}
                        placeholder="Seu número de telefone"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>

                  </div>
                )}

                {/* ================================= */}
                {/* ETAPA 2 — PERFIL */}
                {/* ================================= */}

                {step === 2 && (
                  <div className="space-y-5">

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-black">
                        Como vais usar o Baza?
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Escolhe a opção que melhor descreve o teu objetivo.
                      </p>
                    </div>

                    <div className="w-full">

                      <span className={labelClass}>
                        Quero ser
                      </span>

                      <div className="grid grid-cols-2 gap-3">

                        {roles.map(({ value, label }) => {

                          const isSelected = formData.role === value

                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  role: value,
                                })
                              }
                              className={`flex items-center gap-2.5 rounded-xl border-2 py-3 px-4 text-sm font-medium transition-all duration-200 ${
                                isSelected
                                  ? 'border-black bg-white text-black'
                                  : 'border-transparent bg-black/5 text-gray-600 hover:border-black/20'
                              }`}
                            >

                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                                  isSelected
                                    ? 'border-black'
                                    : 'border-gray-300'
                                }`}
                              >
                                {isSelected && (
                                  <span className="h-2 w-2 rounded-full bg-black" />
                                )}
                              </span>

                              {label}

                            </button>
                          )
                        })}

                      </div>

                    </div>

                  </div>
                )}

                {/* ================================= */}
                {/* ETAPA 3 — PASSAGEIRO */}
                {/* ================================= */}

                {step === 3 && formData.role === 'passenger' && (
                  <div className="space-y-5">

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-black">
                        Conta-nos sobre a tua rota
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Isto ajuda-nos a perceber onde existe maior procura.
                      </p>
                    </div>

                    <div className="input-group group w-full">
                      <label
                        htmlFor="origin"
                        className={`${labelClass} peer`}
                      >
                        Onde moras?
                      </label>

                      <input
                        id="origin"
                        type="text"
                        name="origin"
                        required
                        className={`${inputClass} peer`}
                        placeholder="Ex.: Kilamba"
                        onChange={handleChange}
                        value={formData.origin}
                      />
                    </div>

                    <div className="input-group group w-full">
                      <label
                        htmlFor="destination"
                        className={`${labelClass} peer`}
                      >
                        Para onde vais normalmente?
                      </label>

                      <input
                        id="destination"
                        type="text"
                        name="destination"
                        required
                        className={`${inputClass} peer`}
                        placeholder="Ex.: Universidade Gregório Semedo"
                        onChange={handleChange}
                        value={formData.destination}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">

                      <div className="input-group group w-full">
                        <label
                          htmlFor="departureTime"
                          className={`${labelClass} peer`}
                        >
                          Hora de ida
                        </label>

                        <input
                          id="departureTime"
                          type="time"
                          name="departureTime"
                          required
                          className={`${inputClass} peer`}
                          onChange={handleChange}
                          value={formData.departureTime}
                        />
                      </div>

                      <div className="input-group group w-full">
                        <label
                          htmlFor="returnTime"
                          className={`${labelClass} peer`}
                        >
                          Hora de volta
                        </label>

                        <input
                          id="returnTime"
                          type="time"
                          name="returnTime"
                          required
                          className={`${inputClass} peer`}
                          onChange={handleChange}
                          value={formData.returnTime}
                        />
                      </div>

                    </div>

                    <div className="input-group group w-full">
                      <label
                        htmlFor="frequency"
                        className={`${labelClass} peer`}
                      >
                        Quantos dias por semana?
                      </label>

                      <select
                        id="frequency"
                        name="frequency"
                        required
                        className={`${inputClass} peer`}
                        onChange={handleChange}
                        value={formData.frequency}
                      >
                        <option value="">Seleciona uma opção</option>
                        <option value="1-2">1–2 dias</option>
                        <option value="3-4">3–4 dias</option>
                        <option value="5">5 dias</option>
                        <option value="6-7">6–7 dias</option>
                      </select>
                    </div>

                  </div>
                )}

                {/* ================================= */}
                {/* ETAPA 3 — MOTORISTA */}
                {/* ================================= */}

                {step === 3 && formData.role === 'driver' && (
                  <div className="space-y-5">

                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-black">
                        Conta-nos sobre as tuas viagens
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Queremos perceber onde podes operar com o Baza.
                      </p>
                    </div>

                    <div className="input-group group w-full">
                      <label
                        htmlFor="driverOrigin"
                        className={`${labelClass} peer`}
                      >
                        Onde normalmente começas?
                      </label>

                      <input
                        id="driverOrigin"
                        type="text"
                        name="driverOrigin"
                        required
                        className={`${inputClass} peer`}
                        placeholder="Ex.: Kilamba"
                        onChange={handleChange}
                        value={formData.driverOrigin}
                      />
                    </div>

                    <div className="input-group group w-full">
                      <label
                        htmlFor="driverDestination"
                        className={`${labelClass} peer`}
                      >
                        Para onde costumas ir?
                      </label>

                      <input
                        id="driverDestination"
                        type="text"
                        name="driverDestination"
                        required
                        className={`${inputClass} peer`}
                        placeholder="Ex.: Talatona"
                        onChange={handleChange}
                        value={formData.driverDestination}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">

                      <div className="input-group group w-full">
                        <label
                          htmlFor="driverStartTime"
                          className={`${labelClass} peer`}
                        >
                          Começa às
                        </label>

                        <input
                          id="driverStartTime"
                          type="time"
                          name="driverStartTime"
                          required
                          className={`${inputClass} peer`}
                          onChange={handleChange}
                          value={formData.driverStartTime}
                        />
                      </div>

                      <div className="input-group group w-full">
                        <label
                          htmlFor="driverEndTime"
                          className={`${labelClass} peer`}
                        >
                          Termina às
                        </label>

                        <input
                          id="driverEndTime"
                          type="time"
                          name="driverEndTime"
                          required
                          className={`${inputClass} peer`}
                          onChange={handleChange}
                          value={formData.driverEndTime}
                        />
                      </div>

                    </div>

                    <div className="input-group group w-full">
                      <label
                        htmlFor="vehicleCapacity"
                        className={`${labelClass} peer`}
                      >
                        Quantos passageiros podes levar?
                      </label>

                      <select
                        id="vehicleCapacity"
                        name="vehicleCapacity"
                        required
                        className={`${inputClass} peer`}
                        onChange={handleChange}
                        value={formData.vehicleCapacity}
                      >
                        <option value="">
                          Seleciona a capacidade
                        </option>

                        <option value="4">
                          Até 4 passageiros
                        </option>

                        <option value="7">
                          Até 7 passageiros
                        </option>

                        <option value="10">
                          Até 10 passageiros
                        </option>

                        <option value="15+">
                          Mais de 10 passageiros
                        </option>
                      </select>
                    </div>

                    <div className="input-group group w-full">
                      <label
                        htmlFor="availability"
                        className={`${labelClass} peer`}
                      >
                        Disponibilidade
                      </label>

                      <select
                        id="availability"
                        name="availability"
                        required
                        className={`${inputClass} peer`}
                        onChange={handleChange}
                        value={formData.availability}
                      >
                        <option value="">
                          Seleciona uma opção
                        </option>

                        <option value="weekdays">
                          Segunda a sexta
                        </option>

                        <option value="weekends">
                          Fins de semana
                        </option>

                        <option value="both">
                          Segunda a domingo
                        </option>
                      </select>
                    </div>

                  </div>
                )}

                {/* ================================= */}
                {/* BOTÕES */}
                {/* ================================= */}

                <div className="flex items-center justify-between gap-3 pt-8">

                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="flex items-center justify-center gap-2 rounded-xl py-3.5 px-5 text-sm font-medium text-gray-600 hover:bg-black/5 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Voltar
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className="group bg-black text-white hover:bg-gray-800 rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continuar

                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={
                        isSubmitting || !isStepValid()
                      }
                      className="group bg-black text-white hover:bg-gray-800 rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'A processar…'
                      ) : (
                        <>
                          Entrar na lista
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  )}

                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}