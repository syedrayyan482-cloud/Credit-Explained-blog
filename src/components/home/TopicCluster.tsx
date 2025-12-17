import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Topic {
  title: string;
  description: string;
  articles: { title: string; slug: string }[];
}

const topics: Topic[] = [
  {
    title: "Credit Scores",
    description: "Everything you need to know about how credit scores work in the United States.",
    articles: [
      { title: "How Credit Scores Are Calculated", slug: "how-credit-scores-calculated" },
      { title: "Credit Score Myths Debunked", slug: "credit-score-myths" },
      { title: "Improve Your Score Without New Cards", slug: "improve-credit-score-no-cards" },
    ],
  },
  {
    title: "Credit Reports",
    description: "Learn to read, understand, and dispute errors on your credit reports.",
    articles: [
      { title: "Credit Score vs Credit Report", slug: "credit-score-vs-credit-report" },
      { title: "How to Get Free Credit Reports", slug: "free-credit-reports" },
      { title: "Disputing Errors on Your Report", slug: "dispute-credit-report-errors" },
    ],
  },
  {
    title: "Banking Basics",
    description: "Foundational knowledge about banking, savings, and managing your money.",
    articles: [
      { title: "Checking vs Savings Accounts", slug: "checking-vs-savings" },
      { title: "How to Choose Your First Bank", slug: "choose-first-bank" },
      { title: "Understanding Banking Fees", slug: "understanding-banking-fees" },
    ],
  },
];

export function TopicCluster() {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4 text-heading">Explore Our Guides</h2>
          <p className="text-body max-w-xl mx-auto">
            In-depth educational content organized by topic to help you master personal finance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-card rounded-lg border border-border p-6 md:p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-heading mb-3">{topic.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{topic.description}</p>
              <ul className="space-y-3">
                {topic.articles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      to={`/${article.slug}`}
                      className="group flex items-center gap-2 text-sm text-body hover:text-primary no-underline transition-colors"
                    >
                      <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
