import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
  id?: string;
}

export const Section = ({ 
  children, 
  className, 
  container = true,
  id 
}: SectionProps) => {
  return (
    <section id={id} className={cn("section-padding", className)}>
      {container ? (
        <div className="container mx-auto container-padding">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};