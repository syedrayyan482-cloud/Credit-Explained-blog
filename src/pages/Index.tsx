import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedGuides } from "@/components/home/FeaturedGuides";
import { TopicCluster } from "@/components/home/TopicCluster";
import { TrustSignals } from "@/components/home/TrustSignals";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta */}
      <title>CreditExplained.us - US Credit Score & Personal Finance Education</title>
      <meta
        name="description"
        content="Learn about credit scores, credit reports, and personal finance fundamentals. Authoritative guides written for US consumers."
      />
      
      <Hero />
      <FeaturedGuides />
      <TopicCluster />
      <TrustSignals />
    </Layout>
  );
};

export default Index;
