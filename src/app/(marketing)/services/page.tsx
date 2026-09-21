import type { Metadata } from "next";
import { ServiceExplorer } from "@/components/services/service-explorer";
import { CTASection } from "@/components/marketing/cta-section";
import { WA } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Browse Urvi's Biomedical Services — breakdown repair, preventive maintenance, installation, calibration and biomedical consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-secondary">Services</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold text-primary-dark">
            Medical equipment services
          </h1>
          <p className="mt-4 max-w-xl text-text-muted">
            Browse our service areas. Tap any service to learn more, then WhatsApp
            us directly to request support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ServiceExplorer />
      </section>

      <CTASection
        primaryMsg={WA.breakdown}
        secondaryMsg={WA.general}
      />
    </>
  );
}
