import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  variant?: "teal" | "purple" | "neutral";
  className?: string;
}

const variants = {
  teal: "border-teal/20 shadow-[0_0_40px_rgba(0,196,167,0.08)]",
  purple: "border-purple/20 shadow-[0_0_40px_rgba(124,58,237,0.08)]",
  neutral: "border-bg-border",
};

export function Card({ children, variant = "neutral", className }: CardProps) {
  return (
    <div className={twMerge("bg-bg-surface border rounded-2xl p-6", variants[variant], className)}>
      {children}
    </div>
  );
}
