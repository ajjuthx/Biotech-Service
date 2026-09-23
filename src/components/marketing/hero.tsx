import { waLink, WA, COMPANY } from "@/lib/config";
import Link from "next/link";
import { Phone } from "lucide-react";

const QUICK_SERVICES = [
  { icon: "🔧", label: "Breakdown & Repair",     msg: WA.breakdown },
  { icon: "📞", label: "Call Us Now",              msg: WA.general },
  { icon: "🛠️", label: "Preventive Maintenance", msg: WA.pm },
  { icon: "⚙️", label: "Installation",           msg: WA.installation },
  { icon: "📏", label: "Calibration & Testing",  msg: WA.calibration },
  { icon: "🏥", label: "ICU & OT Support",        msg: WA.icu },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #1a4f8a 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        aria-hidden="true" />
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8 lg:pt-20 lg:pb-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="hero-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary-light px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold text-secondary">{COMPANY.tagline} — Pune &amp; Chhatrapati Sambhajinagar</span>
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-primary-dark sm:text-5xl">
              Reliable medical equipment service{" "}
              <span className="text-secondary">&amp; technical support</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              Professional biomedical engineering support for hospitals, ICUs, operating
              theatres, clinics and diagnostic centres in{" "}<strong className="text-text">Pune</strong> and{" "}<strong className="text-text">Chhatrapati Sambhajinagar</strong>{" "}— breakdown repair, preventive maintenance, installation and calibration.
            </p>

            {/* WhatsApp CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(WA.breakdown)}
                target="_blank" rel="noopener noreferrer"
                className="btn-emergency flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-base"
              >
                🚨 Request Service on WhatsApp
              </a>
              <a
                href={`tel:${COMPANY.phone1Raw}`}
                className="flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-base font-medium text-text hover:border-primary hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {["ICU Equipment","OT Equipment","Emergency Dept.","NICU","CSSD","Diagnostic"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs font-medium text-text-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />{t}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-rise mx-auto w-full max-w-sm lg:max-w-none" style={{animationDelay:"100ms"}} aria-hidden="true">
          <img
  src="/hospital-animation.gif"
  alt="Medical equipment service illustration"
  className="w-full max-w-md mx-auto lg:max-w-none"
  width={500}
  height={400}
/>
          </div>
        </div>

        {/* Quick-service WhatsApp buttons */}
        <div className="mt-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-subtle">Quick Services — Tap to WhatsApp</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {QUICK_SERVICES.map((s) => (
              <a
                key={s.label}
                href={waLink(s.msg)}
                target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-surface p-4 text-center transition-all hover:border-[#25d366] hover:shadow-sm hover:bg-[#f0fdf4]"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-xs font-medium leading-snug text-text-muted group-hover:text-[#128c4a]">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="lattice-rule" />
    </section>
  );
}

