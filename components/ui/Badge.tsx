import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "purple" | "neutral";
  className?: string;
}

const variants = {
  teal: "bg-teal/10 text-teal border border-teal/20",
  purple: "bg-purple/10 text-purple border border-purple/20",
  neutral: "bg-bg-surface text-text-secondary border border-bg-border",
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span className={twMerge("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
