import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { articles, articlesIn, getArticle, getCategory } from "@/lib/data";
import { ArticleList } from "@/components/article-list";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  return {
    title: article ? `${article.question} | Central de ajuda | Baza` : "Central de ajuda",
    description: article?.answer,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const category = getCategory(article.category)!;
  const related = articlesIn(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-1.5 text-sm text-gray-500"
        >
          <Link href="/help" className="transition-colors hover:text-black">
            Central de ajuda
          </Link>
          <ChevronRight size={14} aria-hidden="true" className="text-gray-300" />
          <Link href={`/help/c/${category.id}`} className="transition-colors hover:text-black">
            {category.label}
          </Link>
        </nav>

        <article>
          <span className="text-sm font-medium uppercase tracking-wide text-gray-600">
            {category.label}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black text-balance md:text-5xl">
            {article.question}
          </h1>

          <div className="mt-8 border-t border-gray-200/70 pt-8">
            <p className="text-lg leading-relaxed text-gray-600">{article.answer}</p>
          </div>
        </article>

        {/* Contacto */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200/70 bg-gray-50 px-6 py-5">
          <span className="text-sm font-medium text-gray-900">Ainda precisas de ajuda?</span>
          <a
            href="mailto:geral@bazaja.com"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors hover:text-gray-600"
          >
            Fala com a equipa
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Relacionados */}
        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="related-title">
            <h2 id="related-title" className="mb-5 text-xl font-semibold text-black">
              Artigos relacionados
            </h2>
            <ArticleList items={related} />
          </section>
        )}
      </div>
    </main>
  );
}