import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-bg-base font-semibold hover:shadow-[0_0_24px_rgba(0,196,167,0.4)] hover:-translate-y-0.5 transition-all duration-200",
  secondary:
    "border border-teal text-teal hover:bg-teal hover:text-bg-base transition-all duration-200",
  ghost:
    "text-text-secondary hover:text-text-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-teal after:transition-all after:duration-200",
};

const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium cursor-pointer relative";

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const classes = twMerge(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
