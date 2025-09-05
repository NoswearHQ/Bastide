import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface MedicalCardProps {
  className?: string;
  children: ReactNode;
  hover?: boolean;
  style?: CSSProperties;
}

export const MedicalCard = ({ className, children, hover = true, style }: MedicalCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-lg p-6 shadow-card transition-base",
        hover && "hover:shadow-hover hover:-translate-y-1",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};