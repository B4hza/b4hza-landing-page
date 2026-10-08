import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { articlesIn, categories, getCategory } from "@/lib/data";
import { ArticleList } from "@/components/article-list";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).id);
  return { title: category ? `${category.label} | Central de ajuda | Baza` : "Central de ajuda" };
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).id);
  if (!category) notFound();

  const Icon = category.icon;
  const items = articlesIn(category.id);

  return (
    <main className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-1.5 text-sm text-gray-500">
          <Link href="/help" className="transition-colors hover:text-black">
            Central de ajuda
          </Link>
          <ChevronRight size={14} aria-hidden="true" className="text-gray-300" />
          <span className="text-gray-900">{category.label}</span>
        </nav>

        <div className="mb-10 space-y-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">
            {category.label}
          </h1>
          <p className="text-lg text-gray-500">{category.description}</p>
        </div>

        <ArticleList items={items} />
      </div>
    </main>
  );
}