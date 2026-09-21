import type { Metadata } from "next";
import { waLink, WA, COMPANY } from "@/lib/config";
import { CTASection } from "@/components/marketing/cta-section";
import { EquipmentTabs } from "@/components/services/equipment-tabs";

export const metadata: Metadata = {
  title: "Medical Equipment Service — ICU, NICU, OT, PICU, CSSD, Emergency, Diagnostic | Pune",
  description:
    `Medical equipment breakdown repair, preventive maintenance and calibration for ICU, NICU, OT, PICU, CSSD, Emergency and Diagnostic equipment in ${COMPANY.serviceCities}. Ventilators, monitors, defibrillators, infusion pumps, ECG, anaesthesia machines and more.`,
  alternates: { canonical: "/icu-equipment" },
  keywords: [
    "ICU equipment service pune",
    "NICU equipment service pune",
    "OT equipment service pune",
    "ventilator repair pune",
    "defibrillator service pune",
    "patient monitor repair pune",
    "syringe pump calibration pune",
    "anaesthesia machine service pune",
    "ECG machine service pune",
    "incubator service pune",
    "autoclave service pune",
    "biomedical equipment service chhatrapati sambhajinagar",
  ],
  openGraph: {
    title: "Medical Equipment Service — ICU, NICU, OT, PICU | Urvi's Biomedical, Pune",
    description: `Breakdown repair and preventive maintenance for hospital equipment in ${COMPANY.serviceCities}. +91 90212 61329.`,
  },
};

export default function EquipmentPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            🏥 Equipment Service — {COMPANY.serviceCities}
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-primary-dark sm:text-5xl">
            Hospital equipment service &amp; repair
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Breakdown repair, preventive maintenance and calibration for all
            departments — ICU, NICU, OT, PICU, CSSD, Emergency and Diagnostic.
            Serving <strong>{COMPANY.serviceCities}</strong>.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={waLink(WA.breakdown)} target="_blank" rel="noopener noreferrer"
              className="btn-emergency inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-sm">
              🚨 WhatsApp — Request Service
            </a>
            <a href={`tel:${COMPANY.phone1Raw}`}
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-sm font-semibold text-text hover:border-primary hover:text-primary">
              📞 {COMPANY.phone1}
            </a>
          </div>
        </div>
      </section>

      {/* Tabbed equipment browser */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <EquipmentTabs />
      </section>

      <CTASection
        title="Need equipment service?"
        description={`WhatsApp or call us for breakdown support, preventive maintenance or calibration. Serving ${COMPANY.serviceCities}.`}
        primaryLabel="🚨 WhatsApp for Service"
        primaryMsg={WA.breakdown}
        secondaryMsg={WA.pm}
        secondaryLabel="Request Preventive Maintenance"
        emergency={true}
      />
    </>
  );
}
