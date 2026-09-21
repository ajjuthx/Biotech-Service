import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/marketing/cta-section";
import { WA } from "@/lib/config";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description:
    "Technical guides and maintenance articles on medical equipment service, breakdown prevention and preventive maintenance from Urvi's Biomedical Services.",
};

const ARTICLES = [
  {
    slug: "why-preventive-maintenance-icu-equipment",
    type: "Technical Guide", typeVariant: "primary" as const,
    title: "Why preventive maintenance is essential for ICU equipment",
    excerpt:
      "Unexpected equipment failures in critical care can have serious consequences. This guide explains the importance of structured preventive maintenance for ICU ventilators, monitors and pumps — and what a good PM programme should include.",
  },
  {
    slug: "biomedical-equipment-maintenance-checklist",
    type: "Technical Guide", typeVariant: "primary" as const,
    title: "Medical equipment maintenance checklist for hospitals",
    excerpt:
      "A structured equipment maintenance checklist helps biomedical and engineering teams ensure that PM activities are consistently carried out across all departments.",
  },
  {
    slug: "when-should-ventilator-be-serviced",
    type: "Technical Guide", typeVariant: "primary" as const,
    title: "When should a ventilator be serviced?",
    excerpt:
      "Ventilators are among the most critical pieces of equipment in any ICU. This article covers recommended service intervals, what a comprehensive ventilator PM should include, and warning signs that indicate a breakdown may be approaching.",
  },
  {
    slug: "importance-calibration-medical-equipment",
    type: "Technical Guide", typeVariant: "primary" as const,
    title: "The importance of calibration in medical equipment",
    excerpt:
      "Accurate medical equipment is fundamental to safe patient care. This guide covers which equipment types require regular calibration, what calibration involves, and how to maintain calibration records.",
  },
  {
    slug: "reducing-hospital-equipment-downtime",
    type: "Insight", typeVariant: "info" as const,
    title: "How hospitals can reduce medical equipment downtime",
    excerpt:
      "Unplanned equipment downtime disrupts clinical operations and patient care. This article outlines practical strategies for reducing equipment failures — including structured maintenance programmes and rapid breakdown response.",
  },
  {
    slug: "protein-expression-troubleshooting",
    type: "Technical Guide", typeVariant: "primary" as const,
    title: "Common challenges in ICU equipment preventive maintenance",
    excerpt:
      "Preventive maintenance of ICU equipment presents specific challenges — access constraints, infection control requirements, and equipment criticality. This guide covers best practices for PM in critical care environments.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-secondary">Knowledge Base</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold text-primary-dark">
            Medical equipment maintenance guides
          </h1>
          <p className="mt-4 max-w-xl text-text-muted">
            Technical guides and insights on medical equipment service, breakdown
            prevention and preventive maintenance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col rounded-[var(--radius-md)] border border-border bg-surface p-6 hover:border-primary hover:shadow-sm transition-all"
            >
              <Badge variant={article.typeVariant}>{article.type}</Badge>
              <h2 className="mt-4 text-base font-semibold leading-snug text-text group-hover:text-primary">
                {article.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {article.excerpt}
              </p>
              <div className="mt-5">
                <Link
                  href={`/resources/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
                >
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Need medical equipment service support?"
        description="Contact us for breakdown repair, preventive maintenance or any other service."
        primaryLabel="🚨 WhatsApp Us"
        primaryMsg={WA.breakdown}
        secondaryLabel="Request a Service"
        secondaryMsg={WA.general}
        emergency={false}
      />
    </>
  );
}
