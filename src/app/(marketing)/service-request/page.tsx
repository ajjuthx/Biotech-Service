import type { Metadata } from "next";
import { waLink, WA, COMPANY } from "@/lib/config";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Service",
  description: "Request breakdown repair, preventive maintenance, installation, calibration or any other medical equipment service via WhatsApp.",
};

const SERVICES = [
  { icon: "🚨", label: "Breakdown / Emergency Repair", msg: WA.breakdown,    urgent: true,  desc: "Equipment not working — need urgent support" },
  { icon: "🛠️", label: "Preventive Maintenance",       msg: WA.pm,           urgent: false, desc: "Schedule a PM visit for your equipment" },
  { icon: "⚙️", label: "Installation & Commissioning", msg: WA.installation, urgent: false, desc: "New equipment installation and setup" },
  { icon: "📏", label: "Calibration & Testing",         msg: WA.calibration,  urgent: false, desc: "Equipment calibration and performance testing" },
  { icon: "🏥", label: "ICU Equipment Service",         msg: WA.icu,          urgent: false, desc: "Ventilators, monitors, pumps, defibrillators" },
  { icon: "🔬", label: "OT Equipment Service",          msg: WA.ot,           urgent: false, desc: "Anaesthesia machines, OT tables, ESU, lights" },
  { icon: "💼", label: "Biomedical Consultancy",        msg: WA.consultancy,  urgent: false, desc: "Equipment planning, inventory, advisory" },
];

export default function ServiceRequestPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-dark">Book a Service</h1>
          <p className="mt-3 max-w-xl text-lg text-text-muted">
            Select the service you need and tap to open WhatsApp with a pre-filled message.
            Our biomedical team will respond and guide you from there.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f0fdf4] border border-[#25d366] px-4 py-2 text-sm font-semibold text-[#128c4a]">
            <span>No forms. No waiting. Just WhatsApp.</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <a
              key={s.label}
              href={waLink(s.msg)}
              target="_blank" rel="noopener noreferrer"
              className={`group flex items-start gap-4 rounded-[var(--radius-md)] border p-5 transition-all hover:shadow-md ${
                s.urgent
                  ? "border-accent/40 bg-accent/5 hover:border-accent hover:bg-accent/10"
                  : "border-border bg-surface hover:border-[#25d366] hover:bg-[#f0fdf4]"
              }`}
            >
              <span className="mt-0.5 text-3xl shrink-0">{s.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`font-bold ${s.urgent ? "text-accent" : "text-text"}`}>{s.label}</p>
                  {s.urgent && <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-white">URGENT</span>}
                </div>
                <p className="mt-1 text-sm text-text-muted">{s.desc}</p>
                <p className={`mt-3 text-xs font-semibold ${s.urgent ? "text-accent" : "text-[#128c4a]"}`}>
                  Tap to open WhatsApp →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Call option */}
        <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-secondary-light p-7 text-center">
          <p className="text-lg font-bold text-primary-dark">Prefer to call?</p>
          <p className="mt-1 text-text-muted">Our team is available {COMPANY.hours}</p>
          <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
            className="mt-4 inline-flex items-center gap-2 text-3xl font-black text-primary hover:underline">
            <Phone className="h-7 w-7"/>
            {COMPANY.phone1}
          </a>
        </div>
      </section>
    </>
  );
}
