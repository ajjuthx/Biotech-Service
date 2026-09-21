import type { Metadata } from "next";
import { waLink, WA, COMPANY } from "@/lib/config";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Medical Equipment Service — Pune & Chhatrapati Sambhajinagar",
  description:
    "Request breakdown repair, preventive maintenance, installation or calibration for medical equipment in Pune and Chhatrapati Sambhajinagar. WhatsApp Urvi's Biomedical Services — +91 90212 61329.",
  alternates: { canonical: "/service-request" },
};

const DEPT_SERVICES = [
  {
    dept: "ICU",
    icon: "🏥",
    equipment: ["Ventilator", "Monitor", "Defibrillator", "Syringe Pump", "Infusion Pump", "ABG", "HFNC"],
    urgent: true,
  },
  {
    dept: "NICU",
    icon: "👶",
    equipment: ["Incubator", "Radiant Warmer", "Neonatal Ventilator", "CPAP", "Phototherapy", "Neonatal Monitor"],
    urgent: true,
  },
  {
    dept: "OT",
    icon: "🔬",
    equipment: ["Anaesthesia Machine", "OT Table", "OT Light", "Cautery", "Monitor", "Surgical Suction", "C-Arm"],
    urgent: true,
  },
  {
    dept: "PICU",
    icon: "🩺",
    equipment: ["Pediatric Ventilator", "Monitor", "Infusion/Syringe Pumps", "Defibrillator", "HFNC", "CPAP"],
    urgent: true,
  },
  {
    dept: "CSSD",
    icon: "⚙️",
    equipment: ["Autoclave", "Washer Disinfector", "Ultrasonic Cleaner", "Plasma Sterilizer", "Sealing Machine"],
    urgent: false,
  },
  {
    dept: "Emergency",
    icon: "🚨",
    equipment: ["Patient Monitor", "Ventilator", "Defibrillator", "Syringe Pump", "ABG", "HFNC"],
    urgent: true,
  },
  {
    dept: "Diagnostic",
    icon: "📊",
    equipment: ["ECG", "TMT", "Holter", "Echo", "ABPM"],
    urgent: false,
  },
];

const SERVICE_TYPES = [
  { icon: "🔧", label: "Breakdown / Emergency Repair", msg: WA.breakdown, urgent: true,  sub: "Equipment not working — need urgent support" },
  { icon: "🛠️", label: "Preventive Maintenance",       msg: WA.pm,       urgent: false, sub: "Schedule a PM visit for your equipment" },
  { icon: "⚙️", label: "Installation & Commissioning", msg: WA.installation, urgent: false, sub: "New equipment installation and setup" },
  { icon: "📏", label: "Calibration & Testing",         msg: WA.calibration,  urgent: false, sub: "Equipment calibration and performance testing" },
  { icon: "💼", label: "Biomedical Consultancy",        msg: WA.consultancy,  urgent: false, sub: "Equipment planning, inventory, advisory" },
];

export default function ServiceRequestPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-dark">Book a Service</h1>
          <p className="mt-3 max-w-xl text-lg text-text-muted">
            Select your department or service type below. Each card opens WhatsApp
            with a pre-filled message for our biomedical team.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#25d366] bg-[#f0fdf4] px-4 py-2 text-sm font-semibold text-[#128c4a]">
            No forms. No waiting. Just WhatsApp.
          </div>
          <p className="mt-3 text-sm font-medium text-secondary">
            Serving: {COMPANY.serviceCities}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* By Department */}
        <h2 className="mb-6 text-2xl font-bold text-primary-dark">By Department — Tap Equipment to WhatsApp</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEPT_SERVICES.map((d) => (
            <div key={d.dept} className={`rounded-[var(--radius-md)] border p-5 ${d.urgent ? "border-border bg-surface" : "border-border bg-surface"}`}>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">{d.icon}</span>
                <h3 className="font-bold text-primary-dark">{d.dept}</h3>
                {d.urgent && (
                  <span className="ml-auto rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">CRITICAL</span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {d.equipment.map((eq) => (
                  <a
                    key={eq}
                    href={waLink(`Hello, I need service for *${eq}* in our *${d.dept}* department.\n\nFacility Name: \nProblem / Requirement: \nLocation: ${COMPANY.serviceCities}\n\nPlease contact us.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-text hover:border-[#25d366] hover:bg-[#f0fdf4] hover:text-[#128c4a] transition-colors"
                  >
                    {eq}
                  </a>
                ))}
              </div>
              <a
                href={waLink(`Hello, I need *${d.dept} Department* equipment service.\n\nFacility Name: \nEquipment: \nRequirement (Breakdown / PM / Other): \nLocation: \n\nPlease contact us.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-[var(--radius-sm)] border border-[#25d366] py-2 text-center text-xs font-bold text-[#128c4a] hover:bg-[#25d366] hover:text-white transition-colors"
              >
                WhatsApp for {d.dept} Service →
              </a>
            </div>
          ))}
        </div>

        {/* By Service Type */}
        <h2 className="mb-5 mt-14 text-2xl font-bold text-primary-dark">By Service Type</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_TYPES.map((s) => (
            <a
              key={s.label}
              href={waLink(s.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between rounded-[var(--radius-md)] border p-4 transition-all hover:shadow-sm ${
                s.urgent
                  ? "border-accent/40 bg-accent/5 hover:border-accent"
                  : "border-border bg-surface hover:border-[#25d366] hover:bg-[#f0fdf4]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className={`text-sm font-bold ${s.urgent ? "text-accent" : "text-text"}`}>{s.label}</p>
                  <p className="text-xs text-text-subtle">{s.sub}</p>
                </div>
              </div>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap ${
                s.urgent ? "bg-accent text-white" : "bg-[#25d366] text-white"
              }`}>
                WhatsApp →
              </span>
            </a>
          ))}
        </div>

        {/* Call box */}
        <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-secondary-light p-7 text-center">
          <p className="text-lg font-bold text-primary-dark">Prefer to call?</p>
          <p className="mt-1 text-text-muted">Available {COMPANY.hours}</p>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <a href={`tel:${COMPANY.phone1Raw}`}
              className="inline-flex items-center gap-2 text-2xl font-black text-primary hover:underline">
              <Phone className="h-6 w-6" />{COMPANY.phone1}
            </a>
            <span className="hidden text-text-subtle sm:inline">|</span>
            <a href={`tel:${COMPANY.phone2Raw}`}
              className="inline-flex items-center gap-2 text-lg font-bold text-text-muted hover:text-primary hover:underline">
              <Phone className="h-5 w-5" />{COMPANY.phone2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
