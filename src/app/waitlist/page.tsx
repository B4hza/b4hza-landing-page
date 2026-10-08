"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Check,
  CarFront,
  MapPin,
  ShieldCheck,
  User,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz2HdwAsgHKhwNJTU0F97WA-XYtHBG1OdG2zkLW7rEvVbs5xudbYNGO2EGHC2H3e3yoeg/exec"

const TOTAL_STEPS = 3

const initialData = {
  name: "",
  email: "",
  phone: "",
  role: "",

  // Passageiro
  origin: "",
  destination: "",
  departureTime: "",
  returnTime: "",
  frequency: "",

  // Motorista
  driverOrigin: "",
  driverDestination: "",
  driverStartTime: "",
  driverEndTime: "",
  vehicleCapacity: "",
  availability: "",
}

type FormData = typeof initialData

const roles: { value: string; label: string; hint: string; icon: LucideIcon }[] = [
  { value: "passenger", label: "Passageiro", hint: "Faço o mesmo trajecto com frequência", icon: User },
  { value: "driver", label: "Motorista", hint: "Quero operar uma rota", icon: CarFront },
]

const benefits = [
  { icon: Bell, text: "Avisamos-te quando a primeira rota abrir" },
  { icon: MapPin, text: "O teu trajecto ajuda-nos a escolher as próximas rotas" },
  { icon: ShieldCheck, text: "Sem custos e sem compromisso" },
]

const eyebrow = "text-sm font-medium text-gray-600 uppercase tracking-wide"

const fieldClass =
  "h-11 w-full min-w-0 appearance-none rounded-xl border border-gray-200/70 bg-gray-50 px-4 text-base text-gray-900 outline-none transition-colors placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black"

const labelClass = "mb-1.5 block text-sm font-medium text-gray-700"

function Field({
  label,
  id,
  className = "",
  ...props
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input id={id} name={id} required className={`${fieldClass} ${className}`} {...props} />
    </div>
  )
}

function SelectField({
  label,
  id,
  placeholder,
  options,
  ...props
}: {
  label: string
  id: string
  placeholder: string
  options: { value: string; label: string }[]
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select id={id} name={id} required className={fieldClass} {...props}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function StepHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-black">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  )
}

export default function WaitlistForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }))
  }

  const filled = (...values: string[]) => values.every((v) => v.trim() !== "")

  const isStepValid = () => {
    const d = formData

    if (step === 1) return filled(d.name, d.email, d.phone)
    if (step === 2) return filled(d.role)

    if (d.role === "passenger") {
      return filled(d.origin, d.destination, d.departureTime, d.returnTime, d.frequency)
    }

    if (d.role === "driver") {
      return filled(
        d.driverOrigin,
        d.driverDestination,
        d.driverStartTime,
        d.driverEndTime,
        d.vehicleCapacity,
        d.availability
      )
    }

    return false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isStepValid()) return

    // Enter nas etapas 1 e 2 avança em vez de enviar
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1)
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      await fetch(`${ENDPOINT}?ts=${Date.now()}`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setSubmitted(true)
    } catch (err) {
      console.error("Erro ao enviar:", err)
      setError("Não conseguimos enviar o teu registo. Verifica a ligação e tenta outra vez.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-200/70 bg-white px-6 py-12 md:px-12">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-700">
            <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-black text-balance md:text-4xl">
            Já estás na lista.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-gray-500 text-balance">
            Recebemos o teu registo. Vamos avisar-te quando a primeira rota estiver
            pronta. Entrar na lista não reserva nem cobra um lugar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#primeira-rota"
              className="group inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 font-medium text-white transition-colors hover:bg-gray-800"
            >
              Ver a primeira rota
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-black/[0.08] px-6 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        {/* Esquerda */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-500" />
            </span>
            Lista de espera
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-black text-balance md:text-5xl">
            Sê dos primeiros a viajar com o Baza.
          </h1>

          <p className="text-lg leading-relaxed text-gray-500 text-balance">
            Deixa os teus dados e o teu trajecto. Usamos o teu registo para perceber
            onde há mais procura e avisamos-te quando a primeira rota abrir.
          </p>

          <ul className="space-y-3 pt-2">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-gray-600">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="w-full min-w-0 rounded-2xl border border-gray-200/70 bg-white p-6 md:p-8"
        >
          {/* Progresso */}
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <span className={eyebrow}>
                Etapa {step} de {TOTAL_STEPS}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5" aria-hidden="true">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-colors duration-300 ${
                    i < step ? "bg-black" : "bg-gray-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Etapa 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <StepHeader
                title="Primeiro, fala-nos sobre ti"
                description="Só precisamos de alguns dados básicos."
              />

              <Field
                label="Nome"
                id="name"
                type="text"
                autoComplete="name"
                placeholder="O teu nome"
                value={formData.name}
                onChange={handleChange}
              />

              <Field
                label="Email"
                id="email"
                type="email"
                autoComplete="email"
                placeholder="O teu email"
                value={formData.email}
                onChange={handleChange}
              />

              <Field
                label="Telefone"
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="O teu número de telefone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Etapa 2 */}
          {step === 2 && (
            <div>
              <StepHeader
                title="Como vais usar o Baza?"
                description="Escolhe a opção que melhor te descreve."
              />

              <div
                role="radiogroup"
                aria-label="Perfil"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {roles.map(({ value, label, hint, icon: Icon }) => {
                  const selected = formData.role === value

                  return (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setFormData((c) => ({ ...c, role: value }))}
                      className={`flex flex-col gap-3 rounded-2xl border p-5 text-left transition-all ${
                        selected
                          ? "border-black bg-white ring-1 ring-black"
                          : "border-gray-200/70 bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${
                            selected ? "bg-black text-white" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                        </span>

                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            selected ? "border-black bg-black" : "border-gray-300 bg-white"
                          }`}
                        >
                          {selected && (
                            <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                          )}
                        </span>
                      </div>

                      <div>
                        <strong className="block text-base font-semibold text-black">{label}</strong>
                        <small className="mt-0.5 block text-sm text-gray-500">{hint}</small>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Etapa 3 — Passageiro */}
          {step === 3 && formData.role === "passenger" && (
            <div className="space-y-5">
              <StepHeader
                title="Conta-nos sobre o teu trajecto"
                description="Ajuda-nos a perceber onde existe mais procura."
              />

              <Field
                label="Onde moras?"
                id="origin"
                type="text"
                placeholder="Ex.: Zango 0"
                value={formData.origin}
                onChange={handleChange}
              />

              <Field
                label="Para onde vais normalmente?"
                id="destination"
                type="text"
                placeholder="Ex.: Universidade Gregório Semedo"
                value={formData.destination}
                onChange={handleChange}
              />

              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Hora de ida"
                  id="departureTime"
                  type="time"
                  className="px-2 text-sm sm:px-4 sm:text-base"
                  value={formData.departureTime}
                  onChange={handleChange}
                />

                <Field
                  label="Hora de volta"
                  id="returnTime"
                  type="time"
                  className="px-2 text-sm sm:px-4 sm:text-base"
                  value={formData.returnTime}
                  onChange={handleChange}
                />
              </div>

              <SelectField
                label="Quantos dias por semana?"
                id="frequency"
                placeholder="Seleciona uma opção"
                value={formData.frequency}
                onChange={handleChange}
                options={[
                  { value: "1-2", label: "1–2 dias" },
                  { value: "3-4", label: "3–4 dias" },
                  { value: "5", label: "5 dias" },
                  { value: "6-7", label: "6–7 dias" },
                ]}
              />
            </div>
          )}

          {/* Etapa 3 — Motorista */}
          {step === 3 && formData.role === "driver" && (
            <div className="space-y-5">
              <StepHeader
                title="Conta-nos sobre as tuas viagens"
                description="Queremos perceber onde podes operar com o Baza."
              />

              <Field
                label="Onde normalmente começas?"
                id="driverOrigin"
                type="text"
                placeholder="Ex.: Zango 0"
                value={formData.driverOrigin}
                onChange={handleChange}
              />

              <Field
                label="Para onde costumas ir?"
                id="driverDestination"
                type="text"
                placeholder="Ex.: Talatona"
                value={formData.driverDestination}
                onChange={handleChange}
              />

              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Começas às"
                  id="driverStartTime"
                  type="time"
                  className="px-2 text-sm sm:px-4 sm:text-base"
                  value={formData.driverStartTime}
                  onChange={handleChange}
                />

                <Field
                  label="Terminas às"
                  id="driverEndTime"
                  type="time"
                  className="px-2 text-sm sm:px-4 sm:text-base"
                  value={formData.driverEndTime}
                  onChange={handleChange}
                />
              </div>

              <SelectField
                label="Quantos passageiros podes levar?"
                id="vehicleCapacity"
                placeholder="Seleciona a capacidade"
                value={formData.vehicleCapacity}
                onChange={handleChange}
                options={[
                  { value: "4", label: "Até 4 passageiros" },
                  { value: "7", label: "Até 7 passageiros" },
                  { value: "10", label: "Até 10 passageiros" },
                  { value: "15+", label: "Mais de 10 passageiros" },
                ]}
              />

              <SelectField
                label="Disponibilidade"
                id="availability"
                placeholder="Seleciona uma opção"
                value={formData.availability}
                onChange={handleChange}
                options={[
                  { value: "weekdays", label: "Segunda a sexta" },
                  { value: "weekends", label: "Fins de semana" },
                  { value: "both", label: "Segunda a domingo" },
                ]}
              />
            </div>
          )}

          {/* Erro */}
          {error && (
            <p
              role="alert"
              className="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          {/* Botões */}
          <div className="mt-8 flex items-center justify-between gap-3 border-t border-gray-100 pt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Voltar
              </button>
            ) : (
              <span />
            )}

            <button
              type="submit"
              disabled={isSubmitting || !isStepValid()}
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step < TOTAL_STEPS ? "Continuar" : isSubmitting ? "A enviar…" : "Entrar na lista"}
              {!isSubmitting && (
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Entrar na lista regista o teu interesse. Não reserva nem cobra um lugar.
          </p>
        </form>
      </div>
    </main>
  )
}