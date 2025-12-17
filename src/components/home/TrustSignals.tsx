import { Shield, BookOpen, Users, Award } from "lucide-react";

const signals = [
  {
    icon: Shield,
    title: "YMYL Compliant",
    description: "Content follows Google's Your Money Your Life guidelines for accuracy and trust.",
  },
  {
    icon: BookOpen,
    title: "Expert Reviewed",
    description: "All guides are reviewed by certified financial professionals.",
  },
  {
    icon: Users,
    title: "For US Consumers",
    description: "Content specifically written for the US credit and banking system.",
  },
  {
    icon: Award,
    title: "Editorial Standards",
    description: "Independent, non-promotional content with clear editorial policies.",
  },
];

export function TrustSignals() {
  return (
    <section className="py-16 md:py-20 border-t border-divider">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {signals.map((signal) => (
            <div key={signal.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary mb-4">
                <signal.icon size={24} />
              </div>
              <h3 className="text-sm font-semibold text-heading mb-2">{signal.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
