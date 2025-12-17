import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-muted-foreground hover:text-heading no-underline flex items-center gap-1"
          >
            <Home size={14} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="text-muted-foreground mx-1.5" />
            {item.href ? (
              <Link
                to={item.href}
                className="text-muted-foreground hover:text-heading no-underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-body font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
