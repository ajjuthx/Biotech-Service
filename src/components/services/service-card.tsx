import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { DemoService } from "@/lib/services/demo-data";

export function ServiceCard({ service }: { service: DemoService }) {
  const Icon = service.icon;
  return (
    <Link href={`/services/${service.slug}`}
      className="group flex flex-col rounded-[var(--radius-md)] border border-border bg-surface p-6 transition-all hover:border-primary hover:shadow-sm">
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          <Icon className="h-5 w-5" strokeWidth={1.75}/>
        </span>
        {service.isFeatured && <Badge variant="accent">Featured</Badge>}
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-subtle">{service.categoryName}</p>
      <h3 className="mt-1.5 text-base font-semibold text-text">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{service.shortDescription}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
        Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"/>
      </span>
    </Link>
  );
}
