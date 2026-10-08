"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#muro-do-amor", label: "Depoimentos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/help", label: "Ajuda" },
]

const sectionIds = navLinks
  .filter((l) => l.href.startsWith("/#"))
  .map((l) => l.href.slice(2))

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  // Fecha o menu ao mudar de página
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Escape + bloqueio de scroll com o menu aberto
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const previous = document.body.style.overflow

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  // Destaca o link da secção visível (só na landing)
  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          } else {
            setActiveId((current) => (current === entry.target.id ? null : current))
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  const isActive = (href: string) =>
    href.startsWith("/#")
      ? pathname === "/" && activeId === href.slice(2)
      : pathname.startsWith(href)

  return (
    <header className="sticky top-4 z-20 px-4 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-6 rounded-3xl border border-gray-200/70 bg-white/80 py-3 pl-6 pr-3 backdrop-blur-md">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-inter-tight text-xl font-semibold text-black md:text-2xl"
          >
            <Image
              src="/baza.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              priority
            />
            Baza
          </Link>

          {/* Navegação (desktop) */}
          <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href)

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-gray-100 text-black"
                      : "text-gray-500 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-2">
            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-black py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 active:scale-[0.97]"
            >
              Quero Baza
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex h-10 w-10 items-center justify-center rounded-2xl text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu (mobile) */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-3xl border border-gray-200/70 bg-white p-2 transition-all duration-200 md:hidden ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <nav aria-label="Principal (mobile)" className="flex flex-col">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href)

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors ${
                    active
                      ? "bg-gray-100 text-black"
                      : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  {label}
                  <ArrowUpRight className="h-4 w-4 text-gray-300" aria-hidden="true" />
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}