import { Layout } from "@/components/layout/Layout";

const FinancialDisclaimer = () => {
  return (
    <Layout>
      <article className="py-12 md:py-16">
        <div className="container-editorial">
          <header className="mb-12">
            <h1 className="text-heading mb-4">Financial Disclaimer</h1>
            <p className="text-xl text-body leading-relaxed">
              Important information about the educational content on CreditExplained.us.
            </p>
          </header>

          <div className="article-content">
            <section className="mb-10">
              <h2>Educational Purpose Only</h2>
              <p>
                The information provided on CreditExplained.us is for general educational and informational purposes only. It is not intended to be, and should not be construed as, financial, legal, tax, or investment advice.
              </p>
              <p>
                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
              </p>
            </section>

            <section className="mb-10">
              <h2>Not a Substitute for Professional Advice</h2>
              <p>
                The content on this website is not a substitute for professional financial advice. Before making any financial decisions, you should:
              </p>
              <ul>
                <li>Consult with a qualified financial advisor, accountant, or other appropriate professional</li>
                <li>Consider your individual circumstances, financial situation, and goals</li>
                <li>Conduct your own research and due diligence</li>
                <li>Review the most current terms, rates, and conditions from financial institutions</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>No Guarantee of Results</h2>
              <p>
                Individual results may vary. Credit scores, financial outcomes, and the effectiveness of any strategy depend on numerous factors unique to each individual's situation. We cannot guarantee any specific results from following the information or strategies discussed on this website.
              </p>
            </section>

            <section className="mb-10">
              <h2>Third-Party Links and Information</h2>
              <p>
                This website may contain links to third-party websites or reference third-party products and services. These links and references are provided for convenience only. CreditExplained.us:
              </p>
              <ul>
                <li>Does not endorse or guarantee any third-party products, services, or information</li>
                <li>Is not responsible for the content, accuracy, or practices of linked websites</li>
                <li>Is not liable for any damages or losses arising from use of third-party sites or services</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, CreditExplained.us and its owners, operators, employees, and contributors shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from:
              </p>
              <ul>
                <li>Your use of or reliance on information provided on this website</li>
                <li>Any errors, omissions, or inaccuracies in our content</li>
                <li>Any decision made or action taken based on information on this website</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2>Changes to Information</h2>
              <p>
                Financial regulations, credit scoring models, and industry practices change frequently. While we make efforts to keep our content current, information may become outdated. Always verify current terms, rates, and regulations with relevant institutions and regulatory bodies.
              </p>
            </section>

            <section>
              <h2>Questions</h2>
              <p>
                If you have questions about this disclaimer or our content, please <a href="/contact">contact us</a>.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2024
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default FinancialDisclaimer;
