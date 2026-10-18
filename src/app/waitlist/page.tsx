"use client"

import { useEffect, useRef, useState } from "react"
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Check,
  CarFront,
  Loader2,
  MapPin,
  ShieldCheck,
  User,
  type LucideIcon,
} from "lucide-react"

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz2HdwAsgHKhwNJTU0F97WA-XYtHBG1OdG2zkLW7rEvVbs5xudbYNGO2EGHC2H3e3yoeg/exec"

const TOTAL_STEPS = 3
const SUBMIT_TIMEOUT_MS = 15000

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
type FieldName = keyof FormData
type Errors = Partial<Record<FieldName, string>>

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
  "h-11 w-full min-w-0 appearance-none rounded-xl border bg-gray-50 px-4 text-base text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:bg-white focus:ring-1 disabled:cursor-not-allowed disabled:opacity-60"

const fieldNormal =
  "border-gray-200/70 hover:border-gray-300 focus:border-black focus:ring-black"

const fieldInvalid =
  "border-red-400 bg-red-50/40 hover:border-red-400 focus:border-red-500 focus:ring-red-500"

const labelClass = "mb-1.5 block text-sm font-medium text-gray-700"

/* ------------------------------ Validação ------------------------------ */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Aceita "923 456 789", "+244 923 456 789", "00244923456789"
function normalizePhone(raw: string) {
  return raw.replace(/[\s\-().]/g, "").replace(/^(\+|00)?244/, "")
}

const stepFields = (step: number, role: string): FieldName[] => {
  if (step === 1) return ["name", "email", "phone"]
  if (step === 2) return ["role"]
  if (role === "passenger") {
    return ["origin", "destination", "departureTime", "returnTime", "frequency"]
  }
  if (role === "driver") {
    return [
      "driverOrigin",
      "driverDestination",
      "driverStartTime",
      "driverEndTime",
      "vehicleCapacity",
      "availability",
    ]
  }
  return []
}

function validate(d: FormData, fields: FieldName[]): Errors {
  const errors: Errors = {}
  const empty = (k: FieldName) => d[k].trim() === ""

  for (const k of fields) {
    if (empty(k)) {
      errors[k] =
        k === "role"
          ? "Escolhe uma opção para continuar."
          : k === "frequency" || k === "vehicleCapacity" || k === "availability"
            ? "Seleciona uma opção."
            : k.toLowerCase().includes("time") || k.toLowerCase().includes("starttime") || k.toLowerCase().includes("endtime")
              ? "Indica uma hora."
              : "Este campo é obrigatório."
    }
  }

  if (fields.includes("name") && !errors.name && d.name.trim().length < 2) {
    errors.name = "Escreve o teu nome."
  }

  if (fields.includes("email") && !errors.email && !EMAIL_RE.test(d.email.trim())) {
    errors.email = "Este email não parece válido. Ex.: nome@exemplo.com"
  }

  if (fields.includes("phone") && !errors.phone && !/^9\d{8}$/.test(normalizePhone(d.phone))) {
    errors.phone = "Usa 9 dígitos, a começar por 9. Ex.: 923 456 789"
  }

  return errors
}

/* ------------------------------ Componentes ------------------------------ */

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-600">
      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

function Field({
  label,
  id,
  error,
  className = "",
  ...props
}: {
  label: string
  id: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        aria-required="true"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClass} ${error ? fieldInvalid : fieldNormal} ${className}`}
        {...props}
      />
      <FieldError id={id} message={error} />
    </div>
  )
}

function SelectField({
  label,
  id,
  placeholder,
  options,
  error,
  ...props
}: {
  label: string
  id: string
  placeholder: string
  options: { value: string; label: string }[]
  error?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        aria-required="true"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldClass} ${error ? fieldInvalid : fieldNormal}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <FieldError id={id} message={error} />
    </div>
  )
}

function StepHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 tabIndex={-1} className="text-xl font-semibold text-black outline-none">
        {title}
      </h2>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  )
}

/* ------------------------------ Página ------------------------------ */

export default function WaitlistForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialData)
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const stepRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)
  const firstRender = useRef(true)

  // Ao mudar de etapa, leva o foco (e o ecrã) para o título da nova etapa
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const heading = stepRef.current?.querySelector<HTMLElement>("h2")
    heading?.focus()
    heading?.scrollIntoView({ behavior: "smooth", block: "center" })
  }, [step])

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  const fields = stepFields(step, formData.role)
  const allErrors = validate(formData, fields)

  // Só mostra o erro depois de o campo ter sido tocado ou de uma tentativa de avançar
  const errorFor = (name: FieldName) => (touched[name] ? allErrors[name] : undefined)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (error) setError("")
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as FieldName
    setTouched((t) => ({ ...t, [name]: true }))
  }

  const fieldProps = (name: FieldName) => ({
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: errorFor(name),
    disabled: isSubmitting,
  })

  const goBack = () => {
    setError("")
    setStep((s) => s - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    // Mostra todos os erros da etapa atual e leva o foco ao primeiro
    const errors = validate(formData, fields)
    const invalid = fields.filter((f) => errors[f])

    if (invalid.length > 0) {
      setTouched((t) => ({ ...t, ...Object.fromEntries(invalid.map((f) => [f, true])) }))
      document.getElementById(invalid[0])?.focus()
      return
    }

    // Enter nas etapas 1 e 2 avança em vez de enviar
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1)
      return
    }

    setIsSubmitting(true)
    setError("")

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS)

    try {
      const payload = Object.fromEntries(
        Object.entries(formData).map(([k, v]) => [k, v.trim()])
      )

      // Nota: com no-cors a resposta é opaca, por isso só detetamos falhas de rede/timeout.
      await fetch(`${ENDPOINT}?ts=${Date.now()}`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      setSubmitted(true)
    } catch (err) {
      console.error("Erro ao enviar:", err)
      setError(
        err instanceof DOMException && err.name === "AbortError"
          ? "O envio demorou demasiado. Os teus dados continuam aqui — tenta outra vez."
          : "Não conseguimos enviar o teu registo. Verifica a ligação à internet e tenta outra vez. Os teus dados continuam aqui."
      )
    } finally {
      clearTimeout(timer)
      setIsSubmitting(false)
    }
  }

  /* ------------------------------ Sucesso ------------------------------ */

  if (submitted) {
    const isDriver = formData.role === "driver"
    const from = (isDriver ? formData.driverOrigin : formData.origin).trim()
    const to = (isDriver ? formData.driverDestination : formData.destination).trim()
    const firstName = formData.name.trim().split(/\s+/)[0]

    return (
      <main className="px-4 py-16 sm:px-6 sm:py-20">
        <div
          role="status"
          className="relative z-20 mx-auto max-w-xl rounded-2xl border border-gray-200/70 bg-white px-6 py-12 md:px-12"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
            <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
          </span>

          <h1
            ref={successRef}
            tabIndex={-1}
            className="mt-6 text-3xl font-bold leading-tight tracking-tight text-black text-balance outline-none md:text-4xl"
          >
            Já estás na lista, {firstName}.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-gray-500 text-balance">
            Recebemos o teu registo como {isDriver ? "motorista" : "passageiro"}. Entrar na
            lista não reserva nem cobra um lugar.
          </p>

          <dl className="mt-8 divide-y divide-gray-100 rounded-xl border border-gray-200/70 bg-gray-50 text-sm">
            <div className="flex justify-between gap-4 px-4 py-3">
              <dt className="text-gray-500">Trajecto</dt>
              <dd className="text-right font-medium text-gray-900">
                {from} → {to}
              </dd>
            </div>
            <div className="flex justify-between gap-4 px-4 py-3">
              <dt className="text-gray-500">Vamos contactar-te em</dt>
              <dd className="break-all text-right font-medium text-gray-900">
                {formData.email.trim()}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-gray-500">
            Quando a primeira rota abrir, enviamos um aviso para este email. Se te enganaste
            em algum dado, responde a essa mensagem ou volta a preencher o formulário.
          </p>
        </div>
      </main>
    )
  }

  /* ------------------------------ Formulário ------------------------------ */

  const submitLabel =
    step < TOTAL_STEPS ? "Continuar" : isSubmitting ? "A enviar…" : "Entrar na lista"

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        {/* Esquerda */}
        <div className="space-y-6 lg:sticky lg:top-28">
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
          noValidate
          aria-busy={isSubmitting}
          className="w-full min-w-0 rounded-2xl border border-gray-200/70 bg-white p-6 md:p-8"
        >
          {/* Progresso */}
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <span className={eyebrow} aria-live="polite">
                Etapa {step} de {TOTAL_STEPS}
              </span>
            </div>

            <div
              className="grid grid-cols-3 gap-1.5"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-valuenow={step}
              aria-label="Progresso do formulário"
            >
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

          <div ref={stepRef}>
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
                  {...fieldProps("name")}
                />

                <Field
                  label="Email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="O teu email"
                  {...fieldProps("email")}
                />

                <Field
                  label="Telefone"
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Ex.: 923 456 789"
                  {...fieldProps("phone")}
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
                  id="role"
                  role="radiogroup"
                  aria-label="Perfil"
                  aria-invalid={errorFor("role") ? true : undefined}
                  aria-describedby={errorFor("role") ? "role-error" : undefined}
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
                        disabled={isSubmitting}
                        onClick={() => {
                          setFormData((c) => ({ ...c, role: value }))
                          setTouched((t) => ({ ...t, role: true }))
                        }}
                        className={`flex flex-col gap-3 rounded-2xl border p-5 text-left transition-all ${
                          selected
                            ? "border-black bg-white ring-1 ring-black"
                            : errorFor("role")
                              ? "border-red-400 bg-red-50/40"
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

                <FieldError id="role" message={errorFor("role")} />
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
                  {...fieldProps("origin")}
                />

                <Field
                  label="Para onde vais normalmente?"
                  id="destination"
                  type="text"
                  placeholder="Ex.: Universidade Gregório Semedo"
                  {...fieldProps("destination")}
                />

                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="Hora de ida"
                    id="departureTime"
                    type="time"
                    className="px-2 text-sm sm:px-4 sm:text-base"
                    {...fieldProps("departureTime")}
                  />

                  <Field
                    label="Hora de volta"
                    id="returnTime"
                    type="time"
                    className="px-2 text-sm sm:px-4 sm:text-base"
                    {...fieldProps("returnTime")}
                  />
                </div>

                <SelectField
                  label="Quantos dias por semana?"
                  id="frequency"
                  placeholder="Seleciona uma opção"
                  {...fieldProps("frequency")}
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
                  {...fieldProps("driverOrigin")}
                />

                <Field
                  label="Para onde costumas ir?"
                  id="driverDestination"
                  type="text"
                  placeholder="Ex.: Talatona"
                  {...fieldProps("driverDestination")}
                />

                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="Começas às"
                    id="driverStartTime"
                    type="time"
                    className="px-2 text-sm sm:px-4 sm:text-base"
                    {...fieldProps("driverStartTime")}
                  />

                  <Field
                    label="Terminas às"
                    id="driverEndTime"
                    type="time"
                    className="px-2 text-sm sm:px-4 sm:text-base"
                    {...fieldProps("driverEndTime")}
                  />
                </div>

                <SelectField
                  label="Quantos passageiros podes levar?"
                  id="vehicleCapacity"
                  placeholder="Seleciona a capacidade"
                  {...fieldProps("vehicleCapacity")}
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
                  {...fieldProps("availability")}
                  options={[
                    { value: "weekdays", label: "Segunda a sexta" },
                    { value: "weekends", label: "Fins de semana" },
                    { value: "both", label: "Segunda a domingo" },
                  ]}
                />
              </div>
            )}
          </div>

          {/* Erro de envio */}
          {error && (
            <div
              role="alert"
              className="mt-6 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p>{error}</p>
            </div>
          )}

          {/* Botões */}
          <div className="mt-8 flex items-center justify-between gap-3 border-t border-gray-100 pt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Voltar
              </button>
            ) : (
              <span />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-wait disabled:opacity-70"
            >
              {submitLabel}
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
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