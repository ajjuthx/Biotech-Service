import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DEMO_CATEGORIES } from "@/lib/services/demo-data";

export function ServicesShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-semibold text-secondary">What We Do</span>
          <h2 className="mt-2 text-3xl font-bold text-primary-dark sm:text-4xl">Medical equipment services</h2>
          <p className="mt-3 max-w-xl text-text-muted">Comprehensive biomedical engineering support across all service areas.</p>
        </div>
        <Link href="/services"
          className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-2 text-sm font-medium text-text hover:border-primary hover:text-primary">
          All Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DEMO_CATEGORIES.map((cat) => (
          <Link key={cat.slug} href={`/services/${cat.slug}`}
            className="group flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-all hover:border-primary hover:shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
              <cat.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="flex-1">
              <h3 className="font-semibold text-text group-hover:text-primary">{cat.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
