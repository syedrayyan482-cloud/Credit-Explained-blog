import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/article/Breadcrumb";
import { AuthorBox } from "@/components/article/AuthorBox";
import { FAQSection } from "@/components/article/FAQSection";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { FinancialDisclaimer } from "@/components/article/FinancialDisclaimer";
import { Clock, Calendar } from "lucide-react";

// Sample article data - in production this would come from Supabase
const sampleArticle = {
  slug: "how-credit-scores-calculated",
  title: "How Credit Scores Are Actually Calculated",
  summary: "A comprehensive breakdown of the five factors that determine your FICO score and how to optimize each one.",
  tag: "Credit Scores",
  featuredImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
  author: {
    name: "Sarah Mitchell",
    credentials: "CFP®",
    bio: "Sarah is a Certified Financial Planner with over 10 years of experience in consumer credit education.",
  },
  publishedAt: "2024-11-15",
  updatedAt: "2024-12-10",
  readTime: "8 min read",
  content: `
    <p>Your credit score is one of the most important numbers in your financial life. It affects your ability to get loans, the interest rates you pay, and even your chances of renting an apartment or getting certain jobs. But how exactly is this three-digit number calculated?</p>
    
    <h2>The Five Factors of Your Credit Score</h2>
    <p>FICO scores, the most widely used credit scoring model, are calculated based on five main categories of information from your credit report. Understanding these factors is the first step to improving your score.</p>
    
    <h3>1. Payment History (35%)</h3>
    <p>Your payment history is the single most important factor in your credit score. Lenders want to know: Have you paid your bills on time? This category includes:</p>
    <ul>
      <li>Payment information on credit cards, retail accounts, installment loans, and mortgages</li>
      <li>Public records like bankruptcies, foreclosures, and judgments</li>
      <li>Details on late or missed payments, including how late they were and how recently they occurred</li>
    </ul>
    
    <h3>2. Amounts Owed (30%)</h3>
    <p>Also known as credit utilization, this factor looks at how much of your available credit you're using. Key considerations include:</p>
    <ul>
      <li>The amount owed on all accounts</li>
      <li>The amount owed on different types of accounts</li>
      <li>The proportion of credit lines being used (your credit utilization ratio)</li>
      <li>The proportion of installment loan amounts still owed compared to the original loan amounts</li>
    </ul>
    
    <h3>3. Length of Credit History (15%)</h3>
    <p>Generally, a longer credit history will increase your score. This factor considers:</p>
    <ul>
      <li>How long your credit accounts have been open</li>
      <li>The age of your oldest and newest accounts</li>
      <li>The average age of all your accounts</li>
      <li>How long specific account types have been established</li>
    </ul>
    
    <h3>4. Credit Mix (10%)</h3>
    <p>FICO scores consider the variety of credit accounts you have, including:</p>
    <ul>
      <li>Credit cards</li>
      <li>Retail accounts</li>
      <li>Installment loans</li>
      <li>Mortgage loans</li>
    </ul>
    <p>You don't need to have all types—and you shouldn't open accounts you don't need just to have a mix.</p>
    
    <h3>5. New Credit (10%)</h3>
    <p>Opening several credit accounts in a short period can represent greater risk. This factor examines:</p>
    <ul>
      <li>How many new accounts you have</li>
      <li>How long since you opened a new account</li>
      <li>How many recent credit inquiries you have</li>
      <li>How long since your last credit inquiry</li>
    </ul>
    
    <h2>What's NOT in Your Credit Score</h2>
    <p>It's equally important to understand what factors are not considered in your credit score:</p>
    <ul>
      <li>Your race, color, religion, national origin, sex, or marital status</li>
      <li>Your age</li>
      <li>Your salary, occupation, or employment history</li>
      <li>Where you live</li>
      <li>Interest rates on your current accounts</li>
      <li>Child/family support obligations</li>
    </ul>
    
    <h2>How to Improve Your Score</h2>
    <p>Now that you understand the factors, here are practical steps to improve your score:</p>
    <ul>
      <li><strong>Pay all bills on time</strong> – Set up automatic payments or reminders</li>
      <li><strong>Keep credit utilization low</strong> – Aim for below 30%, ideally below 10%</li>
      <li><strong>Don't close old accounts</strong> – They help your average age of credit</li>
      <li><strong>Limit new credit applications</strong> – Only apply when you truly need credit</li>
      <li><strong>Check your credit reports</strong> – Dispute any errors you find</li>
    </ul>
  `,
  faq: [
    {
      question: "How often is my credit score updated?",
      answer: "Credit scores can be updated whenever your credit report changes, which can happen monthly or even weekly as creditors report your activity. However, most creditors report to the bureaus once per month.",
    },
    {
      question: "Do all credit bureaus calculate scores the same way?",
      answer: "While all three major bureaus (Equifax, Experian, TransUnion) use similar models, your score may vary between them because each bureau may have slightly different information in your credit file.",
    },
    {
      question: "Will checking my own credit score hurt it?",
      answer: "No. Checking your own credit is considered a 'soft inquiry' and has no impact on your score. Only 'hard inquiries' from creditors when you apply for credit can affect your score.",
    },
  ],
  relatedArticles: [
    {
      slug: "credit-score-myths",
      title: "7 Credit Score Myths That Could Cost You",
      summary: "Common misconceptions about credit scores and the truth behind them.",
      tag: "Credit Scores",
    },
    {
      slug: "improve-credit-score-no-cards",
      title: "How to Improve Your Credit Score Without Opening New Cards",
      summary: "Practical strategies using your existing accounts.",
      tag: "Credit Scores",
    },
    {
      slug: "credit-score-vs-credit-report",
      title: "Credit Score vs Credit Report: What's the Difference?",
      summary: "Understanding these two related but distinct concepts.",
      tag: "Credit Reports",
    },
  ],
};

const Article = () => {
  const { slug } = useParams();
  
  // In production, fetch article by slug from Supabase
  const article = sampleArticle;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <article className="py-8 md:py-12">
        <div className="container-editorial">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: article.tag, href: `/#${article.tag.toLowerCase().replace(" ", "-")}` },
              { label: article.title },
            ]}
          />

          {/* Article Header */}
          <header className="mb-8">
            <span className="inline-block text-xs font-medium text-primary bg-accent px-2.5 py-1 rounded-full mb-4">
              {article.tag}
            </span>
            <h1 className="text-heading mb-4">{article.title}</h1>
            <p className="text-xl text-body leading-relaxed mb-6">
              {article.summary}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                Published {formatDate(article.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>

            {/* Author box */}
            <AuthorBox
              name={article.author.name}
              credentials={article.author.credentials}
              bio={article.author.bio}
            />

            {/* Last updated */}
            <p className="mt-4 text-xs text-caption">
              Last updated: {formatDate(article.updatedAt)}
            </p>
          </header>

          {/* Featured image */}
          {article.featuredImage && (
            <figure className="mb-10">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </figure>
          )}

          {/* Article content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* FAQ Section */}
          <FAQSection items={article.faq} />

          {/* Related Articles */}
          <RelatedArticles articles={article.relatedArticles} />

          {/* Financial Disclaimer */}
          <FinancialDisclaimer />
        </div>
      </article>
    </Layout>
  );
};

export default Article;
