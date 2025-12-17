import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { useFeaturedArticles } from "@/hooks/useArticles";

export function FeaturedGuides() {
  const { data: articles, isLoading } = useFeaturedArticles(3);

  if (isLoading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="mb-2 text-heading">Featured Guides</h2>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <div>
            <h2 className="mb-2 text-heading">Featured Guides</h2>
            <p className="text-muted-foreground">Start here for the most essential credit education.</p>
          </div>
          <Link
            to="/guides"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:text-link-hover no-underline"
          >
            View all guides <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/${article.slug}`} className="block p-6 md:p-8 no-underline">
                <span className="inline-block text-xs font-medium text-primary bg-accent px-2.5 py-1 rounded-full mb-4">
                  {article.tags?.[0] || "Guide"}
                </span>
                <h3 className="text-lg font-semibold text-heading mb-3 group-hover:text-primary transition-colors">
                  {article.content.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {article.content.summary}
                </p>
                <div className="flex items-center gap-4 text-xs text-caption">
                  {article.author && (
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {article.author.name}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {article.content.readTime}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-link-hover no-underline"
          >
            View all guides <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
