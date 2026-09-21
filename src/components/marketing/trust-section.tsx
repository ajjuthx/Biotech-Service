import { Wrench, Clock, ShieldCheck, FileText, Users, Stethoscope } from "lucide-react";

const ITEMS = [
  { icon: Users,      title: "Experienced Biomedical Engineers", desc: "Technical support delivered by qualified biomedical engineering professionals." },
  { icon: Clock,      title: "Fast Breakdown Response",          desc: "We prioritise getting your critical equipment back in operation quickly." },
  { icon: ShieldCheck,title: "Preventive Maintenance",           desc: "Scheduled PM programmes to reduce unexpected equipment failures." },
  { icon: Wrench,     title: "Reliable Technical Solutions",     desc: "Systematic diagnosis and quality repairs across a wide range of equipment." },
  { icon: Stethoscope,title: "Hospital-Focused Service",         desc: "We understand clinical environments and minimise disruption to patient care." },
  { icon: FileText,   title: "Transparent Service Process",      desc: "Clear communication, proper documentation and sign-off at every step." },
];

export function TrustSection() {
  return (
    <section className="border-b border-border bg-secondary-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary-dark">Why choose Urvi&apos;s?</h2>
          <p className="mt-2 text-text-muted">Six reasons hospitals and clinics trust us with their medical equipment.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-secondary">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-primary-dark">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
