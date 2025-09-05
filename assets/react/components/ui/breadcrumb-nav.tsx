import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbNav = ({ items, className }: BreadcrumbNavProps) => {
  return (
    <nav 
      aria-label="Fil d'Ariane" 
      className={cn("py-4", className)}
    >
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-primary transition-base flex items-center"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            {item.href ? (
              <Link 
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-base"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};