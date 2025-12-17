-- Create articles table for storing editorial content
CREATE TABLE public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  canonical_url TEXT,
  author_id UUID,
  tags TEXT[] DEFAULT '{}',
  content JSONB NOT NULL DEFAULT '{}',
  published_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create authors table for E-E-A-T compliance
CREATE TABLE public.authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  credentials TEXT,
  bio TEXT,
  expertise_tags TEXT[] DEFAULT '{}',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add foreign key constraint
ALTER TABLE public.articles 
ADD CONSTRAINT fk_author 
FOREIGN KEY (author_id) REFERENCES public.authors(id) ON DELETE SET NULL;

-- Create indexes for SEO queries
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_articles_status ON public.articles(status);
CREATE INDEX idx_articles_published_at ON public.articles(published_at DESC);
CREATE INDEX idx_articles_tags ON public.articles USING GIN(tags);
CREATE INDEX idx_authors_slug ON public.authors(slug);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;

-- Public read access for published articles
CREATE POLICY "Published articles are publicly readable"
ON public.articles FOR SELECT
USING (status = 'published');

-- Public read access for authors
CREATE POLICY "Authors are publicly readable"
ON public.authors FOR SELECT
USING (true);

-- Insert sample authors
INSERT INTO public.authors (slug, name, credentials, bio, expertise_tags) VALUES
('sarah-mitchell', 'Sarah Mitchell', 'CFP®', 'Sarah is a Certified Financial Planner with over 10 years of experience in consumer credit education. She specializes in helping everyday Americans understand and improve their credit.', ARRAY['Credit Scores', 'Personal Finance', 'Financial Planning']),
('michael-chen', 'Michael Chen', 'Financial Educator', 'Michael has spent his career making complex financial concepts accessible. He holds a degree in Economics and has written for major financial publications.', ARRAY['Credit Reports', 'Banking', 'Consumer Finance']);

-- Insert sample article
INSERT INTO public.articles (slug, status, canonical_url, author_id, tags, content, published_at) VALUES
(
  'how-credit-scores-calculated',
  'published',
  'https://creditexplained.us/how-credit-scores-calculated',
  (SELECT id FROM public.authors WHERE slug = 'sarah-mitchell'),
  ARRAY['Credit Scores', 'FICO', 'Credit Basics'],
  '{
    "title": "How Credit Scores Are Actually Calculated",
    "seo": {
      "metaTitle": "How Credit Scores Are Calculated - Complete FICO Breakdown | CreditExplained",
      "metaDescription": "Learn exactly how FICO credit scores are calculated. Understand the five factors that determine your credit score and how to optimize each one.",
      "ogImage": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"
    },
    "summary": "A comprehensive breakdown of the five factors that determine your FICO score and how to optimize each one.",
    "featuredImage": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    "readTime": "8 min read",
    "html": "<p>Your credit score is one of the most important numbers in your financial life. It affects your ability to get loans, the interest rates you pay, and even your chances of renting an apartment or getting certain jobs. But how exactly is this three-digit number calculated?</p><h2>The Five Factors of Your Credit Score</h2><p>FICO scores, the most widely used credit scoring model, are calculated based on five main categories of information from your credit report. Understanding these factors is the first step to improving your score.</p><h3>1. Payment History (35%)</h3><p>Your payment history is the single most important factor in your credit score. Lenders want to know: Have you paid your bills on time? This category includes:</p><ul><li>Payment information on credit cards, retail accounts, installment loans, and mortgages</li><li>Public records like bankruptcies, foreclosures, and judgments</li><li>Details on late or missed payments, including how late they were and how recently they occurred</li></ul><h3>2. Amounts Owed (30%)</h3><p>Also known as credit utilization, this factor looks at how much of your available credit you are using. Key considerations include:</p><ul><li>The amount owed on all accounts</li><li>The amount owed on different types of accounts</li><li>The proportion of credit lines being used (your credit utilization ratio)</li><li>The proportion of installment loan amounts still owed compared to the original loan amounts</li></ul><h3>3. Length of Credit History (15%)</h3><p>Generally, a longer credit history will increase your score. This factor considers:</p><ul><li>How long your credit accounts have been open</li><li>The age of your oldest and newest accounts</li><li>The average age of all your accounts</li><li>How long specific account types have been established</li></ul><h3>4. Credit Mix (10%)</h3><p>FICO scores consider the variety of credit accounts you have, including:</p><ul><li>Credit cards</li><li>Retail accounts</li><li>Installment loans</li><li>Mortgage loans</li></ul><p>You don''t need to have all types—and you shouldn''t open accounts you don''t need just to have a mix.</p><h3>5. New Credit (10%)</h3><p>Opening several credit accounts in a short period can represent greater risk. This factor examines:</p><ul><li>How many new accounts you have</li><li>How long since you opened a new account</li><li>How many recent credit inquiries you have</li><li>How long since your last credit inquiry</li></ul><h2>What''s NOT in Your Credit Score</h2><p>It''s equally important to understand what factors are not considered in your credit score:</p><ul><li>Your race, color, religion, national origin, sex, or marital status</li><li>Your age</li><li>Your salary, occupation, or employment history</li><li>Where you live</li><li>Interest rates on your current accounts</li><li>Child/family support obligations</li></ul><h2>How to Improve Your Score</h2><p>Now that you understand the factors, here are practical steps to improve your score:</p><ul><li><strong>Pay all bills on time</strong> – Set up automatic payments or reminders</li><li><strong>Keep credit utilization low</strong> – Aim for below 30%, ideally below 10%</li><li><strong>Don''t close old accounts</strong> – They help your average age of credit</li><li><strong>Limit new credit applications</strong> – Only apply when you truly need credit</li><li><strong>Check your credit reports</strong> – Dispute any errors you find</li></ul>",
    "faq": [
      {"question": "How often is my credit score updated?", "answer": "Credit scores can be updated whenever your credit report changes, which can happen monthly or even weekly as creditors report your activity. However, most creditors report to the bureaus once per month."},
      {"question": "Do all credit bureaus calculate scores the same way?", "answer": "While all three major bureaus (Equifax, Experian, TransUnion) use similar models, your score may vary between them because each bureau may have slightly different information in your credit file."},
      {"question": "Will checking my own credit score hurt it?", "answer": "No. Checking your own credit is considered a soft inquiry and has no impact on your score. Only hard inquiries from creditors when you apply for credit can affect your score."}
    ]
  }'::jsonb,
  now()
),
(
  'credit-score-vs-credit-report',
  'published',
  'https://creditexplained.us/credit-score-vs-credit-report',
  (SELECT id FROM public.authors WHERE slug = 'michael-chen'),
  ARRAY['Credit Reports', 'Credit Scores', 'Credit Basics'],
  '{
    "title": "Credit Score vs Credit Report: What''s the Difference?",
    "seo": {
      "metaTitle": "Credit Score vs Credit Report - Key Differences Explained | CreditExplained",
      "metaDescription": "Understand the crucial difference between your credit score and credit report. Learn how they relate and why both matter for your financial health.",
      "ogImage": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop"
    },
    "summary": "Many people confuse these two concepts. Learn the distinction and why both matter for your financial health.",
    "featuredImage": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    "readTime": "5 min read",
    "html": "<p>When it comes to your financial health, you''ve probably heard both \"credit score\" and \"credit report\" mentioned. While these terms are related, they refer to different things. Understanding the distinction is crucial for managing your finances effectively.</p><h2>What is a Credit Report?</h2><p>Think of your credit report as your financial resume. It''s a detailed record of your credit history, compiled by credit bureaus (Equifax, Experian, and TransUnion). Your credit report includes:</p><ul><li>Personal information (name, address, Social Security number)</li><li>Credit accounts (credit cards, loans, mortgages)</li><li>Payment history on those accounts</li><li>Credit inquiries (who has checked your credit)</li><li>Public records (bankruptcies, tax liens)</li><li>Collection accounts</li></ul><h2>What is a Credit Score?</h2><p>Your credit score is a three-digit number calculated from the information in your credit report. It''s essentially a summary of your creditworthiness. FICO scores, the most commonly used, range from 300 to 850.</p><p>The score gives lenders a quick way to assess the risk of lending to you. Higher scores indicate lower risk.</p><h2>Key Differences</h2><table><tr><th>Credit Report</th><th>Credit Score</th></tr><tr><td>Detailed record</td><td>Single number</td></tr><tr><td>Shows history</td><td>Summarizes risk</td></tr><tr><td>Free annually</td><td>May cost money</td></tr><tr><td>Multiple pages</td><td>300-850 range</td></tr></table><h2>Why Both Matter</h2><p>Your credit report is the source data—it''s where you can see exactly what''s affecting your credit. Your credit score is how lenders quickly evaluate you. To improve your score, you need to understand what''s in your report.</p>",
    "faq": [
      {"question": "Can I have different credit scores?", "answer": "Yes, you can have multiple credit scores. Different scoring models (FICO, VantageScore) and different credit bureaus may produce different scores based on their specific calculations and the data they have."},
      {"question": "How do I get my free credit report?", "answer": "You can get free credit reports from all three bureaus at AnnualCreditReport.com. This is the only federally authorized source for free annual credit reports."}
    ]
  }'::jsonb,
  now()
),
(
  'improve-credit-score-no-cards',
  'published',
  'https://creditexplained.us/improve-credit-score-no-cards',
  (SELECT id FROM public.authors WHERE slug = 'sarah-mitchell'),
  ARRAY['Credit Scores', 'Credit Building', 'Personal Finance'],
  '{
    "title": "How to Improve Your Credit Score Without Opening New Cards",
    "seo": {
      "metaTitle": "Improve Credit Score Without New Cards - 7 Proven Methods | CreditExplained",
      "metaDescription": "Learn practical strategies to boost your credit score using your existing accounts. No new credit cards required.",
      "ogImage": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=630&fit=crop"
    },
    "summary": "Practical strategies to boost your credit score using your existing accounts and financial habits.",
    "featuredImage": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop",
    "readTime": "6 min read",
    "html": "<p>Many people assume that improving their credit score requires opening new credit cards. But there are effective strategies to boost your score using your existing accounts and financial habits.</p><h2>1. Pay Down Existing Balances</h2><p>Your credit utilization ratio—the amount of credit you''re using compared to your limits—makes up 30% of your FICO score. Paying down balances can have an immediate positive impact.</p><ul><li>Aim to use less than 30% of your available credit</li><li>For the best scores, keep utilization below 10%</li><li>Pay down highest utilization cards first</li></ul><h2>2. Request Credit Limit Increases</h2><p>If you can''t pay down balances immediately, ask your existing card issuers for higher limits. This lowers your utilization ratio without reducing your debt.</p><h2>3. Become an Authorized User</h2><p>Ask a family member with good credit to add you as an authorized user on their card. Their positive payment history can boost your score.</p><h2>4. Pay Bills Twice a Month</h2><p>Credit card companies typically report your balance once per month. By paying twice monthly, you can ensure a lower balance is reported.</p><h2>5. Dispute Credit Report Errors</h2><p>Review your credit reports for errors. Disputing and removing inaccurate negative information can improve your score.</p><h2>6. Keep Old Accounts Open</h2><p>Length of credit history matters. Don''t close old credit cards, even if you don''t use them often.</p><h2>7. Use Rent and Utility Reporting</h2><p>Services like Experian Boost can add your rent and utility payments to your credit report, potentially increasing your score.</p>",
    "faq": [
      {"question": "How long does it take to see improvement?", "answer": "Some changes, like paying down balances, can impact your score within 30-60 days. Other factors, like building payment history, take longer to show improvement."},
      {"question": "Will closing unused cards hurt my score?", "answer": "Yes, closing cards can hurt your score by increasing your utilization ratio and potentially decreasing your average account age."}
    ]
  }'::jsonb,
  now()
);