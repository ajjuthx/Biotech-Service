import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { DEMO_SERVICES, getDemoServiceBySlug } from "@/lib/services/demo-data";
import { Badge } from "@/components/ui/badge";
import { ServiceProcess } from "@/components/services/service-process";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { CTASection } from "@/components/marketing/cta-section";
import { waLink, WA, DOMAIN, COMPANY } from "@/lib/config";

export function generateStaticParams() {
  return DEMO_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getDemoServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Pune & Chhatrapati Sambhajinagar`,
    description: `${service.shortDescription} Contact Urvi's Biomedical Services — ${COMPANY.phone1}.`,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} | Urvi's Biomedical Services, Pune`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getDemoServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",     item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Services", item: `${DOMAIN}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: `${DOMAIN}/services/${service.slug}` },
        ],
      },
      {
        "@type": "Service",
        name: service.name,
        description: service.fullDescription,
        provider: {
          "@type": "LocalBusiness",
          name: COMPANY.name,
          telephone: COMPANY.phone1Raw,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Chhatrapati Sambhajinagar" },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-text-subtle">
            <Link href="/services" className="hover:text-primary">Services</Link>
            {" / "}
            <span className="text-text">{service.name}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <Badge variant="primary">{service.categoryName}</Badge>
                {service.isFeatured && <Badge variant="accent">Featured</Badge>}
              </div>
              <h1 className="mt-4 max-w-2xl text-4xl font-bold text-primary-dark">
                {service.name}
              </h1>
              <p className="mt-3 max-w-xl text-text-muted">{service.shortDescription}</p>
              <p className="mt-2 text-sm font-medium text-secondary">
                Serving {COMPANY.serviceCities}
              </p>
            </div>

            <a
              href={waLink(WA.service(service.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emergency inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-sm)] px-5 py-2.5 text-sm"
            >
              🚨 WhatsApp — Request This Service
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark">Overview</h2>
            <p className="mt-4 leading-relaxed text-text-muted">{service.fullDescription}</p>

            <h2 className="mt-12 text-2xl font-bold text-primary-dark">What We Offer</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5 text-sm text-text">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {cap}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-primary-dark">Our Process</h2>
            <div className="mt-6">
              <ServiceProcess steps={service.processSteps} />
            </div>

            {service.faqs.length > 0 && (
              <>
                <h2 className="mt-12 text-2xl font-bold text-primary-dark">FAQ</h2>
                <div className="mt-5">
                  <FAQAccordion items={service.faqs} />
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[var(--radius-md)] border border-border bg-background p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-text-subtle">
                Typical Applications
              </h3>
              <ul className="mt-4 space-y-2.5">
                {service.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2 text-sm text-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-md)] border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-text">Request This Service</h3>
              <p className="mt-2 text-sm text-text-muted">
                WhatsApp us with your equipment details — we respond quickly.
              </p>
              <a
                href={waLink(WA.service(service.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full rounded-[var(--radius-sm)] bg-[#25d366] py-2.5 text-sm font-bold text-white hover:bg-[#1da851]"
              >
                WhatsApp Us →
              </a>
              <a
                href={`tel:${COMPANY.phone1Raw}`}
                className="mt-2 flex items-center justify-center gap-2 w-full rounded-[var(--radius-sm)] border border-border py-2.5 text-sm font-medium text-text hover:border-primary hover:text-primary"
              >
                📞 {COMPANY.phone1}
              </a>
            </div>

            <div className="rounded-[var(--radius-md)] border border-border bg-secondary-light p-6">
              <h3 className="text-sm font-semibold text-primary-dark">Service area</h3>
              <p className="mt-2 text-sm text-text-muted">{COMPANY.serviceCities}</p>
              <p className="mt-1 text-xs text-text-subtle">{COMPANY.hours}</p>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title="Ready to book this service?"
        description={`WhatsApp our team directly — serving ${COMPANY.serviceCities}.`}
        primaryLabel="🚨 WhatsApp — Book Service"
        primaryMsg={WA.service(service.name)}
        secondaryMsg={WA.general}
        secondaryLabel="Call Us"
        emergency={false}
      />
    </>
  );
}
