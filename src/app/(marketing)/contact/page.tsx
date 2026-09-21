import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { waLink, WA, COMPANY } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact — Biomedical Equipment Service Pune",
  description: "Contact Urvi's Biomedical Services for medical equipment breakdown repair, preventive maintenance and technical support. B25, Basate Building, Bhosari, Pune 411039. +91 90212 61329.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Urvi's Biomedical Services, Pune",
    description: "+91 90212 61329 | +91 86918 90677 | urvibiomedicalservices2705@gmail.com | Bhosari, Pune 411039.",
  },
};

const CONTACT_WAYS = [
  {
    icon: "🚨",
    label: "Breakdown / Emergency Repair",
    sub: "Equipment not working — need urgent support",
    msg: WA.breakdown,
    urgent: true,
  },
  {
    icon: "🛠️",
    label: "Preventive Maintenance",
    sub: "Schedule a PM visit for your equipment",
    msg: WA.pm,
    urgent: false,
  },
  {
    icon: "⚙️",
    label: "Installation & Commissioning",
    sub: "New equipment installation and setup",
    msg: WA.installation,
    urgent: false,
  },
  {
    icon: "📏",
    label: "Calibration & Testing",
    sub: "Equipment calibration and performance testing",
    msg: WA.calibration,
    urgent: false,
  },
  {
    icon: "🏥",
    label: "ICU Equipment Service",
    sub: "Ventilators, monitors, pumps, defibrillators",
    msg: WA.icu,
    urgent: false,
  },
  {
    icon: "💬",
    label: "General Enquiry",
    sub: "Any other question or requirement",
    msg: WA.contact,
    urgent: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-secondary">Contact</span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold text-primary-dark">Get in touch</h1>
          <p className="mt-4 max-w-xl text-text-muted">
            For medical equipment service, breakdown support, installation and technical
            support — WhatsApp or call our team directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">

          {/* Contact info */}
          <div>
            <h2 className="text-xl font-bold text-primary-dark">Contact information</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-secondary">
                  <Phone className="h-5 w-5" strokeWidth={1.5}/>
                </span>
                <div>
                  <p className="text-xs font-medium text-text-subtle">Phone</p>
                  <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
                    className="mt-0.5 block text-base font-bold text-primary hover:underline">
                    {COMPANY.phone1}
                  </a>
                  <a href={`tel:${COMPANY.phone2.replace(/\s/g,"")}`}
                    className="block text-sm font-semibold text-text-muted hover:text-primary hover:underline">
                    {COMPANY.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-secondary">
                  <Mail className="h-5 w-5" strokeWidth={1.5}/>
                </span>
                <div>
                  <p className="text-xs font-medium text-text-subtle">Email</p>
                  <a href={`mailto:${COMPANY.email}`}
                    className="mt-0.5 block text-sm font-medium text-text hover:text-primary hover:underline">
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-secondary">
                  <MapPin className="h-5 w-5" strokeWidth={1.5}/>
                </span>
                <div>
                  <p className="text-xs font-medium text-text-subtle">Address</p>
                  <p className="mt-0.5 text-sm text-text leading-relaxed">{COMPANY.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-secondary-light text-secondary">
                  <Clock className="h-5 w-5" strokeWidth={1.5}/>
                </span>
                <div>
                  <p className="text-xs font-medium text-text-subtle">Service Hours</p>
                  <p className="mt-0.5 text-sm text-text">{COMPANY.hours}</p>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a href={waLink(WA.general)} target="_blank" rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 rounded-[var(--radius-md)] border border-[#25d366] bg-[#f0fdf4] p-5 hover:bg-[#dcfce7] transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] shrink-0">
                <MessageCircle className="h-6 w-6 text-white"/>
              </div>
              <div>
                <p className="font-bold text-[#128c4a]">Chat on WhatsApp</p>
                <p className="text-sm text-[#166534]">Fastest way to reach our biomedical team</p>
              </div>
            </a>

            {/* Map embed placeholder */}
            <div className="mt-6 overflow-hidden rounded-[var(--radius-md)] border border-border">
              <iframe
                title="Urvi's Biomedical Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0!2d73.85!3d18.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhosari%2C+Pune!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* WhatsApp service cards */}
          <div>
            <h2 className="mb-5 text-xl font-bold text-primary-dark">Select your service requirement</h2>
            <div className="flex flex-col gap-3">
              {CONTACT_WAYS.map((way) => (
                <a
                  key={way.label}
                  href={waLink(way.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between rounded-[var(--radius-md)] border p-4 transition-all hover:shadow-sm ${
                    way.urgent
                      ? "border-accent/40 bg-accent/5 hover:border-accent"
                      : "border-border bg-surface hover:border-[#25d366] hover:bg-[#f0fdf4]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{way.icon}</span>
                    <div>
                      <p className={`text-sm font-bold ${way.urgent ? "text-accent" : "text-text"}`}>
                        {way.label}
                      </p>
                      <p className="text-xs text-text-subtle">{way.sub}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap ${
                    way.urgent ? "bg-accent text-white" : "bg-[#25d366] text-white"
                  }`}>
                    WhatsApp →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-[var(--radius-md)] border border-border bg-secondary-light p-5">
              <p className="text-sm font-bold text-primary-dark">Prefer to call?</p>
              <div className="mt-3 flex flex-col gap-2">
                <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
                  className="flex items-center gap-2 text-lg font-black text-primary hover:underline">
                  <Phone className="h-5 w-5"/>{COMPANY.phone1}
                </a>
                <a href={`tel:${COMPANY.phone2.replace(/\s/g,"")}`}
                  className="flex items-center gap-2 text-base font-bold text-text-muted hover:text-primary hover:underline">
                  <Phone className="h-4 w-4"/>{COMPANY.phone2}
                </a>
              </div>
              <p className="mt-2 text-xs text-text-subtle">{COMPANY.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
