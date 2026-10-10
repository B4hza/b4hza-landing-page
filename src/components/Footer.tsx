import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const exploreLinks = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#onde-faz-falta", label: "Primeira rota" },
  { href: "/#faq", label: "FAQ" },
  { href: "/help", label: "Central de ajuda" },
]

const socials = [
  { href: "https://www.linkedin.com/company/bazaja/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/bazaja_/", label: "Instagram", icon: Instagram },
]

const linkClass =
  "text-sm font-medium text-gray-500 transition-colors hover:text-black"

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-16 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-6xl border-t border-gray-200/70 pt-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,3fr)_minmax(0,3fr)] md:gap-12">
          {/* Marca */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/baza-removebg-preview.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-semibold tracking-tight text-black">
                Baza
              </span>
            </Link>

            <p className="mt-4 leading-relaxed text-gray-500">
              Serviço de transporte por assinatura, pensado para estudantes e trabalhadores em Angola. Viaja em percursos e horários definidos, com um transporte mais organizado e previsível para o teu dia a dia — sem filas nem empurrões.
            </p>

            <Link
              href="/waitlist"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors hover:text-gray-600"
            >
              Quero ser dos primeiros
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Explorar */}
          <nav aria-label="Rodapé">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-400">
              Explorar
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-400">
              Contacto
            </h3>

            <a
              href="mailto:geral@bazaja.com"
              className={`${linkClass} inline-flex items-center gap-2`}
            >
              <Mail size={16} aria-hidden="true" className="text-gray-400" />
              geral@bazaja.com
            </a>

            <div className="mt-5 flex gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-black hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-2 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Baza. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">Feito em Angola</p>
        </div>
      </div>
    </footer>
  )
}