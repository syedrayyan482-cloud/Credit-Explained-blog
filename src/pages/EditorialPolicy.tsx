import { Layout } from "@/components/layout/Layout";

const EditorialPolicy = () => {
  return (
    <Layout>
      <article className="py-12 md:py-16">
        <div className="container-editorial">
          <header className="mb-12">
            <h1 className="text-heading mb-4">Editorial Policy</h1>
            <p className="text-xl text-body leading-relaxed">
              Our commitment to accuracy, independence, and trust in financial education.
            </p>
          </header>

          <div className="article-content">
            <section className="mb-10">
              <h2>Editorial Independence</h2>
              <p>
                CreditExplained.us maintains complete editorial independence. Our content decisions are made solely by our editorial team, without influence from advertisers, sponsors, or commercial partners. We never accept payment for favorable coverage or recommendations.
              </p>
            </section>

            <section className="mb-10">
              <h2>Content Standards</h2>
              <p>
                All content published on CreditExplained.us adheres to the following standards:
              </p>
              <ul>
                <li><strong>Accuracy:</strong> Information is fact-checked and verified against authoritative sources including government agencies, regulatory bodies, and industry research.</li>
                <li><strong>Currency:</strong> Content is regularly reviewed and updated to reflect current regulations, rates, and best practices. Each article displays a "Last Updated" date.</li>
                <li><strong>Clarity:</strong> We write in plain language, avoiding unnecessary jargon while maintaining precision in technical explanations.</li>
                <li><strong>Completeness:</strong> We aim to provide comprehensive coverage of topics, including limitations, exceptions, and potential drawbacks.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>Expert Review Process</h2>
              <p>
                Content covering financial concepts, strategies, or recommendations undergoes review by qualified professionals before publication. Our reviewers include:
              </p>
              <ul>
                <li>Certified Financial Planners (CFP®)</li>
                <li>Financial educators with relevant credentials</li>
                <li>Industry professionals with subject matter expertise</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>Corrections Policy</h2>
              <p>
                We are committed to correcting errors promptly and transparently. If you identify an error in our content:
              </p>
              <ul>
                <li>Contact us through our <a href="/contact">contact page</a></li>
                <li>Minor errors (typos, broken links) are corrected without notation</li>
                <li>Substantive corrections include a note indicating the nature and date of the correction</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>Advertising and Monetization</h2>
              <p>
                CreditExplained.us may display advertising or participate in affiliate programs to support our operations. We maintain clear boundaries:
              </p>
              <ul>
                <li>Advertising is clearly distinguished from editorial content</li>
                <li>Advertising relationships never influence our editorial recommendations</li>
                <li>Affiliate relationships are disclosed when applicable</li>
              </ul>
            </section>

            <section>
              <h2>Questions or Concerns</h2>
              <p>
                If you have questions about our editorial policies or wish to report a concern, please <a href="/contact">contact us</a>. We take all feedback seriously and respond to inquiries promptly.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default EditorialPolicy;
