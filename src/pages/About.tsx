import { Layout } from "@/components/layout/Layout";
import { Shield, Target, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <article className="py-12 md:py-16">
        <div className="container-editorial">
          <header className="mb-12">
            <h1 className="text-heading mb-4">About CreditExplained</h1>
            <p className="text-xl text-body leading-relaxed">
              We provide clear, authoritative education on credit scores, credit reports, and personal finance for US consumers.
            </p>
          </header>

          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-heading mb-4">Our Mission</h2>
              <p className="text-body leading-relaxed mb-4">
                CreditExplained.us exists to demystify personal finance. We believe that everyone deserves access to accurate, easy-to-understand information about how credit works in America—without the jargon, sales pitches, or hidden agendas.
              </p>
              <p className="text-body leading-relaxed">
                Our guides are designed to help everyday Americans—from students building their first credit history to immigrants navigating the US financial system—make informed decisions about their financial lives.
              </p>
            </section>

            <section className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Target size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">Educational Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize education over promotion. Our content helps you understand concepts, not sell you products.
                  </p>
                </div>
                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">YMYL Standards</h3>
                  <p className="text-sm text-muted-foreground">
                    As a finance site, we adhere to Google's "Your Money Your Life" standards for accuracy and trust.
                  </p>
                </div>
                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Users size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">US-Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    Our content is specifically written for the US credit system, banking regulations, and financial landscape.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-heading mb-4">Our Team</h2>
              <p className="text-body leading-relaxed mb-4">
                CreditExplained is maintained by a team of financial educators and writers who are passionate about making personal finance accessible. Our content is reviewed by certified financial professionals to ensure accuracy and compliance with industry standards.
              </p>
              <p className="text-body leading-relaxed">
                We maintain strict editorial independence. Our recommendations and explanations are based solely on what we believe is best for our readers, not on commercial relationships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-heading mb-4">Contact Us</h2>
              <p className="text-body leading-relaxed">
                Have questions, feedback, or corrections? We welcome all inquiries. Visit our{" "}
                <a href="/contact" className="text-link hover:text-link-hover">contact page</a>{" "}
                to get in touch.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default About;
