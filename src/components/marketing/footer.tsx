import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { waLink, WA, COMPANY } from "@/lib/config";

const SERVICES = [
  { href: "/services/breakdown-repair",           label: "Breakdown & Repair" },
  { href: "/services/preventive-maintenance",     label: "Preventive Maintenance" },
  { href: "/services/installation-commissioning", label: "Installation & Commissioning" },
  { href: "/services/calibration-testing",        label: "Calibration & Testing" },
  { href: "/services/biomedical-consultancy",     label: "Biomedical Consultancy" },
];

const EQUIPMENT = [
  { href: "/icu-equipment",             label: "ICU Equipment" },
  { href: "/ot-equipment",              label: "OT Equipment" },
  { href: "/services?dept=emergency",   label: "Emergency Dept." },
  { href: "/services?dept=nicu",        label: "NICU Equipment" },
  { href: "/services?dept=diagnostic",  label: "Diagnostic Equipment" },
  { href: "/services?dept=cssd",        label: "CSSD Equipment" },
];

const QUICK = [
  { href: "/",               label: "Home" },
  { href: "/about",          label: "About Us" },
  { href: "/service-request",label: "Request a Service" },
  { href: "/resources",      label: "Knowledge Base" },
  { href: "/faq",            label: "FAQ" },
  { href: "/contact",        label: "Contact Us" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand + contact */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-white/10">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <rect x="8" y="2" width="6" height="18" rx="1.5" fill="white" opacity="0.85"/>
                  <rect x="2" y="8" width="18" height="6" rx="1.5" fill="white" opacity="0.85"/>
                  <circle cx="17" cy="5" r="2.5" fill="#0e8c7e"/>
                </svg>
              </div>
              <div>
                <span className="block text-lg font-black leading-none tracking-tight text-white">urvi&apos;s</span>
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-secondary">Biomedical Services</span>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Your trusted partner for medical equipment service, breakdown support,
              and preventive maintenance across ICU, OT and hospital departments.
            </p>

            <ul className="mt-5 space-y-2.5">
              <li>
                <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
                  className="flex items-center gap-2 text-sm text-white/65 hover:text-white">
                  <Phone className="h-3.5 w-3.5 shrink-0"/>{COMPANY.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone2.replace(/\s/g,"")}`}
                  className="flex items-center gap-2 text-sm text-white/65 hover:text-white">
                  <Phone className="h-3.5 w-3.5 shrink-0"/>{COMPANY.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sm text-white/65 hover:text-white">
                  <Mail className="h-3.5 w-3.5 shrink-0"/>{COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/65">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0"/>
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/65">
                <Clock className="h-3.5 w-3.5 shrink-0"/>{COMPANY.hours}
              </li>
            </ul>

            <a href={waLink(WA.general)} target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[#25d366]/40 px-3.5 py-2 text-xs font-medium text-[#25d366] hover:border-[#25d366] hover:bg-[#25d366]/10">
              <MessageCircle className="h-4 w-4"/>Chat on WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/60 hover:text-white">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-sm font-semibold text-white">Equipment Areas</h3>
            <ul className="mt-4 space-y-2.5">
              {EQUIPMENT.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-sm text-white/60 hover:text-white">{e.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + emergency box */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <Link href={q.href} className="text-sm text-white/60 hover:text-white">{q.label}</Link>
                </li>
              ))}
            </ul>

            {/* Emergency box */}
            <div className="mt-6 rounded-[var(--radius-md)] border border-accent/40 bg-accent/10 p-4">
              <p className="text-xs font-bold text-accent">🚨 Breakdown Support</p>
              <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
                className="mt-1.5 block text-base font-black text-white hover:text-accent">
                {COMPANY.phone1}
              </a>
              <a href={`tel:${COMPANY.phone2.replace(/\s/g,"")}`}
                className="block text-sm font-semibold text-white/70 hover:text-accent">
                {COMPANY.phone2}
              </a>
              <p className="mt-1 text-xs text-white/50">Call or WhatsApp for urgent support</p>
              <a href={waLink(WA.breakdown)} target="_blank" rel="noopener noreferrer"
                className="mt-3 block rounded-[var(--radius-sm)] bg-[#25d366] py-2 text-center text-xs font-bold text-white hover:bg-[#1da851]">
                WhatsApp for Breakdown
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {year} Urvi&apos;s Biomedical Services. All rights reserved. Bhosari, Pune.
          </p>
          <div className="flex gap-5 text-xs text-white/40">
            <Link href="/privacy-policy" className="hover:text-white/70">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
