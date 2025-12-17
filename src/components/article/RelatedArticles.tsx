import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  slug: string;
  title: string;
  summary: string;
  tag: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-divider">
      <h2 className="text-2xl font-semibold text-heading mb-6">
        Continue Reading
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.slice(0, 6).map((article) => (
          <Link
            key={article.slug}
            to={`/${article.slug}`}
            className="group block p-5 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-300 no-underline"
          >
            <span className="inline-block text-xs font-medium text-primary mb-2">
              {article.tag}
            </span>
            <h3 className="text-base font-semibold text-heading group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {article.summary}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
              Read more <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
