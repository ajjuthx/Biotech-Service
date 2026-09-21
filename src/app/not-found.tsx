import Link from "next/link";
import { Cross } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-md)] bg-secondary-light text-primary">
        <Cross className="h-8 w-8" strokeWidth={1.5} />
      </span>
      <h1 className="mt-8 text-5xl font-bold text-primary-dark">404</h1>
      <h2 className="mt-2 text-xl font-medium text-text">Page not found</h2>
      <p className="mt-3 max-w-md text-text-muted">The page you are looking for does not exist or has been moved.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark">
          Return Home
        </Link>
        <Link href="/services" className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-sm font-medium text-text hover:border-primary hover:text-primary">
          Browse Services
        </Link>
      </div>
    </div>
  );
}
