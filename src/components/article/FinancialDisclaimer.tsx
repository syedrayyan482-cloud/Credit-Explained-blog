import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export function FinancialDisclaimer() {
  return (
    <aside className="mt-12 p-6 bg-accent/30 border border-border rounded-lg">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">
          <AlertTriangle size={20} className="text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-heading mb-2">
            Financial Disclaimer
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The information provided on CreditExplained.us is for educational purposes only and should not be considered financial, legal, or investment advice. We recommend consulting with a qualified financial advisor before making any financial decisions.{" "}
            <Link to="/financial-disclaimer" className="text-link hover:text-link-hover underline">
              Read our full disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}
