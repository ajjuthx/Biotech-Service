import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const BASE = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4";
const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-primary",
  outline: "border border-border-strong bg-surface text-text hover:border-primary hover:text-primary",
  ghost: "text-text hover:bg-secondary-light",
};
const SIZES = { sm:"h-9 px-3.5 text-sm", md:"h-11 px-5 text-sm", lg:"h-12 px-7 text-base" };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant="primary", size="md", ...props }, ref) => (
    <button ref={ref} className={cn(BASE, VARIANTS[variant], SIZES[size], className)} {...props} />
  )
);
Button.displayName = "Button";
