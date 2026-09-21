import type { Metadata } from "next";
import Link from "next/link";
import { ICU_EQUIPMENT } from "@/lib/services/demo-data";
import { CTASection } from "@/components/marketing/cta-section";
import { waLink, WA } from "@/lib/config";

export const metadata: Metadata = {
  title: "ICU Equipment Service & Support",
  description: "Maintenance, breakdown repair and AMC for ICU equipment — ventilators, patient monitors, infusion pumps, defibrillators and more.",
};

export default function ICUEquipmentPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">🏥 Intensive Care Unit</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-primary-dark sm:text-5xl">ICU equipment service &amp; support</h1>
          <p className="mt-5 max-w-2xl text-lg text-text-muted">
            Specialised biomedical engineering support for critical care equipment — breakdown repair, preventive maintenance and calibration.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLink(WA.icu)} target="_blank" rel="noopener noreferrer"
              className="btn-emergency inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-sm">
              🚨 WhatsApp — ICU Equipment Service
            </a>
            <a href={waLink(WA.pm)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-sm font-medium text-text hover:border-primary hover:text-primary">
              WhatsApp — Preventive Maintenance
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-primary-dark">ICU equipment we service</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ICU_EQUIPMENT.map((eq) => (
            <a key={eq.name} href={waLink(`Hello, I need service for *${eq.name}* in our ICU.\n\nFacility: \nRequirement: \nPlease contact us.`)}
              target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 hover:border-[#25d366] hover:shadow-sm transition-all group">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-primary/10 text-primary group-hover:bg-[#25d366] group-hover:text-white transition-colors">
                <eq.icon className="h-6 w-6" strokeWidth={1.5}/>
              </span>
              <div>
                <h3 className="font-semibold text-text group-hover:text-[#128c4a]">{eq.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{eq.desc}</p>
                <p className="mt-2 text-xs font-semibold text-[#25d366] opacity-0 group-hover:opacity-100 transition-opacity">Tap to WhatsApp →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary-light">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-primary-dark">ICU service scope</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title:"Breakdown & Emergency", items:["Emergency fault diagnosis","Component repair & replacement","Performance verification","Service report provided"] },
              { title:"Preventive Maintenance", items:["Scheduled PM visits","Functional & safety testing","Filter replacement","PM report & sign-off"] },
              { title:"Calibration & Testing", items:["Performance checks","Electrical safety testing","Accuracy verification","Test report provided"] },
            ].map((col) => (
              <div key={col.title} className="rounded-[var(--radius-md)] border border-border bg-surface p-5">
                <h3 className="mb-3 font-semibold text-primary-dark">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need ICU equipment service?"
        description="WhatsApp us for breakdown support or preventive maintenance."
        primaryLabel="🚨 WhatsApp for ICU Service"
        primaryMsg={WA.icu}
        secondaryLabel="WhatsApp for PM"
        secondaryMsg={WA.pm}
      />
    </>
  );
}
