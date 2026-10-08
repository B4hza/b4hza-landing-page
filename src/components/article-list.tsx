import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategory, type Article } from "@/lib/data";

export function ArticleList({
  items,
  showCategory = false,
}: {
  items: Article[];
  showCategory?: boolean;
}) {
  return (
    <ul className="overflow-hidden rounded-2xl border border-gray-200/70 bg-white">
      {items.map((article) => (
        <li key={article.slug} className="border-b border-gray-100 last:border-b-0">
          <Link
            href={`/help/${article.slug}`}
            className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-gray-50"
          >
            <div className="min-w-0 flex-1">
              {showCategory && (
                <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-400">
                  {getCategory(article.category)?.label}
                </span>
              )}
              <h3 className="text-base font-semibold text-gray-900">{article.question}</h3>
              <p className="mt-1 line-clamp-1 text-sm text-gray-500">{article.answer}</p>
            </div>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-black"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}