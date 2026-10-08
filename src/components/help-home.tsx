"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CircleHelp, Search } from "lucide-react";
import { ArticleList } from "./article-list";
import { articles, articlesIn, categories } from "@/lib/data";

export default function HelpHome() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLocaleLowerCase("pt-AO");

  const results = useMemo(
    () =>
      term
        ? articles.filter((a) =>
            `${a.question} ${a.answer}`.toLocaleLowerCase("pt-AO").includes(term)
          )
        : [],
    [term]
  );

  const popular = articles.filter((a) => a.popular);

  return (
    <main className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-black"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Voltar ao início
        </Link>

        {/* Heading + pesquisa */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-black text-balance md:text-5xl">
            Central de Ajuda
          </h1>
          <p className="text-lg text-gray-500 text-balance">
            Informação clara sobre o serviço, as rotas e as reservas.
          </p>

          <label className="mt-4 flex items-center gap-3 rounded-2xl border border-gray-200/70 bg-white px-5 py-4 text-left transition-colors focus-within:border-black/20">
            <Search size={18} aria-hidden="true" className="shrink-0 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pesquisar artigos"
              aria-label="Pesquisar artigos de ajuda"
              className="w-full bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400"
            />
          </label>
        </div>

        <div className="mt-12 md:mt-16" aria-live="polite">
          {term ? (
            /* Resultados da pesquisa */
            results.length ? (
              <div className="mx-auto max-w-3xl space-y-4">
                <p className="text-sm text-gray-500">
                  {results.length} {results.length === 1 ? "resultado" : "resultados"}
                </p>
                <ArticleList items={results} showCategory />
              </div>
            ) : (
              <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-gray-200/70 bg-white px-6 py-12 text-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <CircleHelp className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </span>
                <p className="text-gray-500">Não encontrámos um artigo com esses termos.</p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-sm font-medium text-black transition-colors hover:text-gray-600"
                >
                  Ver todos os temas
                </button>
              </div>
            )
          ) : (
            <>
              {/* Cards de temas */}
              <h2 className="mb-5 text-xl font-semibold text-black">Explorar por tema</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map(({ id, label, description, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`/help/c/${id}`}
                    className="group flex flex-col rounded-2xl border border-gray-200/70 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                        <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium tabular-nums text-gray-300">
                        {articlesIn(id).length}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-black">{label}</h3>
                    <p className="leading-relaxed text-gray-500">{description}</p>
                  </Link>
                ))}
              </div>

              {/* Artigos populares */}
              <h2 className="mb-5 mt-16 text-xl font-semibold text-black">
                Artigos populares
              </h2>
              <ArticleList items={popular} showCategory />
            </>
          )}
        </div>
      </div>
    </main>
  );
}