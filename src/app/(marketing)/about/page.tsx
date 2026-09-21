import type { Metadata } from "next";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { CTASection } from "@/components/marketing/cta-section";
import { waLink, WA, COMPANY } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Urvi's Biomedical Services — professional medical equipment service and support for hospitals, ICUs, OTs, clinics and diagnostic centres. Based in Bhosari, Pune.",
};

const WHY_ITEMS = [
  "Qualified biomedical engineering professionals — not general technicians.",
  "Experience with a wide range of ICU and OT medical equipment.",
  "Systematic fault diagnosis rather than trial-and-error repairs.",
  "All service visits documented with written service reports.",
  "Confidential handling of your facility's equipment and service information.",
  "Clear, direct communication at every step.",
  "Available on call and WhatsApp for urgent breakdown support.",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-secondary">About Us</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold text-primary-dark">
            Your trusted biomedical service partner
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Urvi&apos;s Biomedical Services is a medical equipment service and support company
            dedicated to helping healthcare facilities maintain their equipment safely,
            reliably and efficiently — based in Bhosari, Pune.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark">Who we are</h2>
            <p className="mt-4 leading-relaxed text-text-muted">
              Urvi&apos;s Biomedical Services provides technical service and support for
              hospitals, ICUs, operating theatres, clinics, diagnostic centres and other
              healthcare facilities across Pune and surrounding areas.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Our focus is on delivering professional, documented and reliable biomedical
              engineering support — so healthcare professionals can focus on what matters
              most: patient care.
            </p>

            {/* Quick contact in About */}
            <div className="mt-8 space-y-3">
              <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
                className="flex items-center gap-3 text-sm text-text-muted hover:text-primary">
                <Phone className="h-4 w-4 text-secondary"/>{COMPANY.phone1}
              </a>
              <a href={`tel:${COMPANY.phone2.replace(/\s/g,"")}`}
                className="flex items-center gap-3 text-sm text-text-muted hover:text-primary">
                <Phone className="h-4 w-4 text-secondary"/>{COMPANY.phone2}
              </a>
              <a href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-sm text-text-muted hover:text-primary">
                <Mail className="h-4 w-4 text-secondary"/>{COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary"/>
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 content-start">
            <div className="rounded-[var(--radius-md)] border border-border bg-secondary-light p-6">
              <h3 className="text-lg font-bold text-primary-dark">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                To provide dependable biomedical engineering services that help healthcare
                professionals focus on patient care.
              </p>
            </div>
            <div className="rounded-[var(--radius-md)] border border-border bg-primary/5 p-6">
              <h3 className="text-lg font-bold text-primary-dark">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                To become the most trusted biomedical equipment service partner for
                healthcare institutions across Pune and Maharashtra.
              </p>
            </div>
            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6 sm:col-span-2">
              <h3 className="text-base font-bold text-primary-dark mb-3">Departments We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {["ICU","Operating Theatre","Emergency","NICU","CSSD","General Wards","Diagnostic Centres","Clinics","Nursing Homes"].map((a) => (
                  <span key={a} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-text-muted">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lattice-rule mx-8" />

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary-dark">Why choose Urvi&apos;s Biomedical Services?</h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {WHY_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" strokeWidth={1.75}/>
              <span className="text-sm leading-relaxed text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTASection
        title="Ready to discuss your requirement?"
        description="Call or WhatsApp us directly — we respond quickly."
        primaryLabel="🚨 WhatsApp Us"
        primaryMsg={WA.general}
        secondaryMsg={WA.breakdown}
        secondaryLabel="Breakdown Support"
        emergency={false}
      />
    </>
  );
}
