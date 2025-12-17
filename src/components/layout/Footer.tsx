import { Link } from "react-router-dom";

const trustLinks = [
  { name: "About Us", href: "/about" },
  { name: "Editorial Policy", href: "/editorial-policy" },
  { name: "Financial Disclaimer", href: "/financial-disclaimer" },
  { name: "Contact", href: "/contact" },
];

const topicLinks = [
  { name: "Credit Scores", href: "/#credit-scores" },
  { name: "Credit Reports", href: "/#credit-reports" },
  { name: "Banking Basics", href: "/#banking" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-divider mt-20">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block no-underline">
              <span className="text-xl font-bold text-heading tracking-tight">
                Credit<span className="text-primary">Explained</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Authoritative guides on credit scores, banking, and personal finance for US consumers.
            </p>
          </div>

          {/* Topics column */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-4 uppercase tracking-wider">
              Topics
            </h4>
            <ul className="space-y-3">
              {topicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-heading no-underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust links column */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-4 uppercase tracking-wider">
              About
            </h4>
            <ul className="space-y-3">
              {trustLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-heading no-underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-divider">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-caption">
              © {currentYear} CreditExplained.us. All rights reserved.
            </p>
            <p className="text-xs text-caption max-w-md text-center md:text-right">
              Information provided is for educational purposes only and should not be considered financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
