import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

interface Guide {
  slug: string;
  title: string;
  summary: string;
  author: string;
  readTime: string;
  tag: string;
}

const featuredGuides: Guide[] = [
  {
    slug: "how-credit-scores-calculated",
    title: "How Credit Scores Are Actually Calculated",
    summary: "A comprehensive breakdown of the five factors that determine your FICO score and how to optimize each one.",
    author: "Sarah Mitchell",
    readTime: "8 min read",
    tag: "Credit Scores",
  },
  {
    slug: "credit-score-vs-credit-report",
    title: "Credit Score vs Credit Report: What's the Difference?",
    summary: "Many people confuse these two concepts. Learn the distinction and why both matter for your financial health.",
    author: "Michael Chen",
    readTime: "5 min read",
    tag: "Credit Reports",
  },
  {
    slug: "improve-credit-score-no-cards",
    title: "How to Improve Your Credit Score Without Opening New Cards",
    summary: "Practical strategies to boost your credit score using your existing accounts and financial habits.",
    author: "Sarah Mitchell",
    readTime: "6 min read",
    tag: "Credit Scores",
  },
];

export function FeaturedGuides() {
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
          {featuredGuides.map((guide, index) => (
            <article
              key={guide.slug}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/${guide.slug}`} className="block p-6 md:p-8 no-underline">
                <span className="inline-block text-xs font-medium text-primary bg-accent px-2.5 py-1 rounded-full mb-4">
                  {guide.tag}
                </span>
                <h3 className="text-lg font-semibold text-heading mb-3 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {guide.summary}
                </p>
                <div className="flex items-center gap-4 text-xs text-caption">
                  <span className="flex items-center gap-1.5">
                    <User size={12} />
                    {guide.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {guide.readTime}
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
