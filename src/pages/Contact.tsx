import { Layout } from "@/components/layout/Layout";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <article className="py-12 md:py-16">
        <div className="container-editorial">
          <header className="mb-12">
            <h1 className="text-heading mb-4">Contact Us</h1>
            <p className="text-xl text-body leading-relaxed">
              Have questions, feedback, or corrections? We'd love to hear from you.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-secondary/50 rounded-lg border border-border">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                <Mail size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">General Inquiries</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For general questions about our content or website.
              </p>
              <a
                href="mailto:hello@creditexplained.us"
                className="text-sm font-medium text-link hover:text-link-hover"
              >
                hello@creditexplained.us
              </a>
            </div>

            <div className="p-6 bg-secondary/50 rounded-lg border border-border">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                <MessageSquare size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">Content Corrections</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Found an error? Help us maintain accuracy.
              </p>
              <a
                href="mailto:corrections@creditexplained.us"
                className="text-sm font-medium text-link hover:text-link-hover"
              >
                corrections@creditexplained.us
              </a>
            </div>
          </div>

          <div className="article-content">
            <section className="mb-10">
              <h2>Response Time</h2>
              <p>
                We aim to respond to all inquiries within 2-3 business days. For urgent matters related to content accuracy, we prioritize corrections and typically respond within 24 hours.
              </p>
            </section>

            <section className="mb-10">
              <h2>What We Can Help With</h2>
              <ul>
                <li><strong>Content questions:</strong> Clarifications about information in our guides</li>
                <li><strong>Corrections:</strong> Reporting errors or outdated information</li>
                <li><strong>Feedback:</strong> Suggestions for new topics or improvements</li>
                <li><strong>Partnership inquiries:</strong> Collaboration opportunities (subject to editorial policy)</li>
              </ul>
            </section>

            <section>
              <h2>What We Cannot Provide</h2>
              <p>
                Please note that we cannot provide personalized financial advice. Our team consists of educators, not licensed financial advisors. For advice specific to your situation, please consult with a qualified professional.
              </p>
              <p>
                If you're looking for help with a specific credit or banking issue, we recommend contacting:
              </p>
              <ul>
                <li>Your bank or credit card issuer directly</li>
                <li>The Consumer Financial Protection Bureau (CFPB) for complaints</li>
                <li>A certified financial planner for personalized guidance</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Contact;
