import * as React from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  neutral: "bg-black/[0.04] text-text-muted",
  primary: "bg-secondary-light text-primary-dark",
  success: "bg-green-50 text-green-700",
  warning: "bg-amber-50 text-amber-700",
  danger:  "bg-red-50 text-red-700",
  info:    "bg-blue-50 text-blue-700",
  accent:  "bg-amber-50 text-amber-700",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof VARIANTS;
}

export function Badge({ className, variant="neutral", ...props }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-[var(--radius-sm)] px-2.5 py-1 text-xs font-medium", VARIANTS[variant], className)} {...props}/>
  );
}
