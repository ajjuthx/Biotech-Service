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
                href={waLink(WA.pm)}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-base font-medium text-text hover:border-primary hover:text-primary"
              >
                📞 Call Now
              </a>
              <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
                className="flex items-center justify-center gap-2 text-sm font-medium text-text-muted hover:text-primary sm:ml-2">
                <Phone className="h-4 w-4 text-secondary" />
                {COMPANY.phone1}
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
            <BiomedicalIllustration />
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

function BiomedicalIllustration() {
  return (
    <svg viewBox="0 0 420 380" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="140" width="300" height="210" rx="4" fill="#e8eef6"/>
      <rect x="60" y="130" width="300" height="20" rx="3" fill="#1a4f8a" opacity="0.15"/>
      {[90,140,190,240,290].map((x) =>
        [165,210,255,300].map((y) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="24" height="18" rx="2" fill="#1a4f8a" opacity="0.12"/>
        ))
      )}
      <rect x="180" y="295" width="60" height="55" rx="3" fill="#1a4f8a" opacity="0.2"/>
      <rect x="195" y="295" width="28" height="55" rx="2" fill="#0e8c7e" opacity="0.15"/>
      <rect x="197" y="90" width="10" height="32" rx="2" fill="#1a4f8a" opacity="0.7"/>
      <rect x="188" y="99" width="28" height="10" rx="2" fill="#1a4f8a" opacity="0.7"/>
      <polyline points="40,230 80,230 95,200 110,260 125,220 145,240 160,230 200,230 215,195 228,265 241,230 260,230"
        stroke="#0e8c7e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      <line x1="260" y1="230" x2="380" y2="230" stroke="#0e8c7e" strokeWidth="2.5" opacity="0.3" strokeDasharray="4 4"/>
      <rect x="310" y="55" width="80" height="60" rx="6" fill="#1a4f8a" opacity="0.12" stroke="#1a4f8a" strokeWidth="1.5"/>
      <rect x="320" y="63" width="60" height="36" rx="3" fill="#1a4f8a" opacity="0.08"/>
      <polyline points="325,81 333,81 337,72 341,90 345,78 349,81 357,81 361,69 365,88 369,81 375,81"
        stroke="#0e8c7e" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>
      <circle cx="350" cy="108" r="3" fill="#1a4f8a" opacity="0.4"/>
      <circle cx="80" cy="72" r="22" fill="#e6f4f2" stroke="#0e8c7e" strokeWidth="1.5" opacity="0.6"/>
      <path d="M80 58 L80 86 M67 65 L93 79 M67 79 L93 65" stroke="#0e8c7e" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <circle cx="80" cy="72" r="7" fill="white" stroke="#0e8c7e" strokeWidth="1.5" opacity="0.8"/>
      <rect x="295" y="168" width="90" height="30" rx="15" fill="#1a4f8a" opacity="0.9"/>
      <text x="340" y="188" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">PM Service</text>
      <rect x="36" y="268" width="72" height="30" rx="15" fill="#e05c1a"/>
      <text x="72" y="288" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">24/7 Support</text>
    </svg>
  );
}
