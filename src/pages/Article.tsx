import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/article/Breadcrumb";
import { AuthorBox } from "@/components/article/AuthorBox";
import { FAQSection } from "@/components/article/FAQSection";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { FinancialDisclaimer } from "@/components/article/FinancialDisclaimer";
import { Clock, Calendar } from "lucide-react";
import { useArticleBySlug, useRelatedArticles } from "@/hooks/useArticles";

const Article = () => {
  const { slug } = useParams();
  const { data: article, isLoading, error } = useArticleBySlug(slug);
  const { data: relatedArticles } = useRelatedArticles(
    slug,
    article?.tags,
    3
  );

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <div className="container-editorial">
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !article) {
    return <Navigate to="/404" replace />;
  }

  const relatedForCards = relatedArticles?.map((a) => ({
    slug: a.slug,
    title: a.content.title,
    summary: a.content.summary,
    tag: a.tags?.[0] || "Guide",
  })) || [];

  return (
    <Layout>
      {/* Dynamic SEO meta */}
      <title>{article.content.seo?.metaTitle || article.content.title}</title>
      <meta
        name="description"
        content={article.content.seo?.metaDescription || article.content.summary}
      />
      {article.canonical_url && <link rel="canonical" href={article.canonical_url} />}

      <article className="py-8 md:py-12">
        <div className="container-editorial">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: article.tags?.[0] || "Guide", href: `/#${(article.tags?.[0] || "guide").toLowerCase().replace(" ", "-")}` },
              { label: article.content.title },
            ]}
          />

          {/* Article Header */}
          <header className="mb-8">
            <span className="inline-block text-xs font-medium text-primary bg-accent px-2.5 py-1 rounded-full mb-4">
              {article.tags?.[0] || "Guide"}
            </span>
            <h1 className="text-heading mb-4">{article.content.title}</h1>
            <p className="text-xl text-body leading-relaxed mb-6">
              {article.content.summary}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                Published {formatDate(article.published_at)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.content.readTime}
              </span>
            </div>

            {/* Author box */}
            {article.author && (
              <AuthorBox
                name={article.author.name}
                credentials={article.author.credentials || undefined}
                bio={article.author.bio || undefined}
                avatarUrl={article.author.avatar_url || undefined}
              />
            )}

            {/* Last updated */}
            <p className="mt-4 text-xs text-caption">
              Last updated: {formatDate(article.updated_at)}
            </p>
          </header>

          {/* Featured image */}
          {article.content.featuredImage && (
            <figure className="mb-10">
              <img
                src={article.content.featuredImage}
                alt={article.content.title}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </figure>
          )}

          {/* Article content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content.html }}
          />

          {/* FAQ Section */}
          {article.content.faq && article.content.faq.length > 0 && (
            <FAQSection items={article.content.faq} />
          )}

          {/* Related Articles */}
          {relatedForCards.length > 0 && (
            <RelatedArticles articles={relatedForCards} />
          )}

          {/* Financial Disclaimer */}
          <FinancialDisclaimer />
        </div>
      </article>
    </Layout>
  );
};

export default Article;
