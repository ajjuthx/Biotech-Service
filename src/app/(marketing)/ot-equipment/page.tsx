import type { Metadata } from "next";
import { OT_EQUIPMENT } from "@/lib/services/demo-data";
import { CTASection } from "@/components/marketing/cta-section";
import { waLink, WA } from "@/lib/config";

export const metadata: Metadata = {
  title: "OT Equipment Service & Support",
  description: "Maintenance and breakdown repair for operating theatre equipment — anaesthesia machines, OT tables, electrosurgical units, OT lights and more.",
};

export default function OTEquipmentPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">🔬 Operating Theatre</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-primary-dark sm:text-5xl">OT equipment service &amp; support</h1>
          <p className="mt-5 max-w-2xl text-lg text-text-muted">Specialised biomedical support for operating theatre equipment.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLink(WA.ot)} target="_blank" rel="noopener noreferrer"
              className="btn-emergency inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-sm">
              🚨 WhatsApp — OT Equipment Service
            </a>
            <a href={waLink(WA.pm)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-sm font-medium text-text hover:border-primary hover:text-primary">
              WhatsApp — Preventive Maintenance
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-primary-dark">OT equipment we service</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OT_EQUIPMENT.map((eq) => (
            <a key={eq.name} href={waLink(`Hello, I need service for *${eq.name}* in our OT.\n\nFacility: \nRequirement: \nPlease contact us.`)}
              target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 hover:border-[#25d366] hover:shadow-sm transition-all group">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-secondary/10 text-secondary group-hover:bg-[#25d366] group-hover:text-white transition-colors">
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

      <CTASection
        title="Need OT equipment service?"
        description="WhatsApp us for breakdown support or preventive maintenance."
        primaryLabel="🚨 WhatsApp for OT Service"
        primaryMsg={WA.ot}
        secondaryLabel="WhatsApp for PM"
        secondaryMsg={WA.pm}
      />
    </>
  );
}
