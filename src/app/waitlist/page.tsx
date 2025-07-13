'use client'

import React, { useState } from 'react'

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const inputClass =
    'w-full h-11 bg-black/5 rounded-lg px-4 border-2 border-transparent text-base transition-all duration-300 ease-[cubic-bezier(0.25,0.01,0.25,1)] focus:outline-none focus:border-black hover:border-black'

  const labelClass =
    'block mb-1 text-sm font-semibold text-black/60 transition-colors duration-300 ease-[cubic-bezier(0.25,0.01,0.25,1)] peer-focus:text-black/75 group-hover:text-black/75'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch(`https://script.google.com/macros/s/AKfycbyqMMvhGZjT-nk8lu6j3k_Xm5lHwM4WGBAy2n5bXh4vZZR3dJNdRnXlAK8DMaycDNtBgw/exec?ts=${Date.now()}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      setSubmitted(true)
    } catch (error) {
      console.error('Erro ao enviar:', error)
    }

    setIsSubmitting(false)
  }

  // ---------- Mensagem de sucesso ----------
  if (submitted) {
    return (
      <section className="relative bg-[#f5f5f5] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-[3%] sm:left-[18%] w-px h-full bg-black/5" />
          <div className="absolute top-0 right-[3%] sm:right-[18%] w-px h-full bg-black/5" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl px-6 md:px-12 py-10 sm:py-20 border border-gray-200 mt-9 sm:mt-0">
              <div className="text-center space-y-8">
                <h1 className="text-3xl mb-2 md:text-5xl font-bold text-black leading-tight">
                  Obrigado por te juntares ao Baza!
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Recebemos os teus dados. Em breve vais receber um e‑mail de confirmação e serás dos primeiros a saber quando o Baza estiver disponível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ---------- Formulário ----------
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[3%] sm:left-[18%] w-px h-full bg-black/5" />
        <div className="absolute top-0 right-[3%] sm:right-[18%] w-px h-full bg-black/5" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl px-6 md:px-12 py-10 sm:py-20 border border-gray-200 mt-9 sm:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* texto introdutório */}
              <div className="space-y-8">
                <h1 className="text-3xl mb-2 md:text-5xl font-bold text-black leading-tight">
                  Garante o teu lugar no Baza
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Entra na lista de espera e sê um dos primeiros a experimentar o Baza. Recebe acesso exclusivo, novidades e ofertas únicas.
                </p>
              </div>

              {/* formulário */}
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="space-y-4">
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
                      className={`${inputClass} peer`}
                      placeholder="Seu número de telefone"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white hover:bg-gray-800 rounded-2xl py-3 px-5 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? 'A processar…' : 'Entrar na lista'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
