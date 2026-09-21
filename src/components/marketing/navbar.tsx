"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { waLink, WA, COMPANY } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/breakdown-repair",           label: "Breakdown & Repair" },
      { href: "/services/preventive-maintenance",     label: "Preventive Maintenance" },
      { href: "/services/installation-commissioning", label: "Installation & Commissioning" },
      { href: "/services/calibration-testing",        label: "Calibration & Testing" },
      { href: "/services/biomedical-consultancy",     label: "Biomedical Consultancy" },
    ],
  },
  { href: "/icu-equipment", label: "ICU Equipment" },
  { href: "/ot-equipment",  label: "OT Equipment" },
  { href: "/about",         label: "About Us" },
  { href: "/contact",       label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]         = React.useState(false);
  const [mobileOpen, setMobileOpen]     = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden bg-primary-dark lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-1.5">
          <p className="text-xs text-white/55">
            {COMPANY.tagline} — {COMPANY.serviceArea}
          </p>
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
              className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white">
              <Phone className="h-3 w-3" />{COMPANY.phone1}
            </a>
            <span className="text-white/25">|</span>
            <a href={`tel:${COMPANY.phone2.replace(/\s/g,"")}`}
              className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white">
              <Phone className="h-3 w-3" />{COMPANY.phone2}
            </a>
            <span className="text-white/25">|</span>
            <a href={`mailto:${COMPANY.email}`}
              className="text-xs text-white/70 hover:text-white">{COMPANY.email}</a>
          </div>
        </div>
      </div>

      <header className={cn(
        "sticky top-0 z-50 bg-surface/95 backdrop-blur transition-shadow duration-200",
        scrolled ? "shadow-md border-b border-border" : "border-b border-transparent"
      )}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Urvi's Biomedical Services">
            <UrviBioLogo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}>
                  <button className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-primary">
                    {link.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-1 w-60 rounded-[var(--radius-md)] border border-border bg-surface py-1.5 shadow-lg">
                      {link.children.map((c) => (
                        <Link key={c.href} href={c.href}
                          className="block px-4 py-2.5 text-sm text-text-muted hover:bg-secondary-light hover:text-primary"
                          onClick={() => setServicesOpen(false)}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-primary">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2.5 xl:flex">
            <a href={waLink(WA.breakdown)} target="_blank" rel="noopener noreferrer"
              className="btn-emergency flex items-center gap-1.5 rounded-[var(--radius-sm)] px-4 py-2 text-sm">
              🚨 Request Service
            </a>
            <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
              className="flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-2 text-sm font-medium text-text hover:border-primary hover:text-primary">
              <Phone className="h-3.5 w-3.5" />Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] p-2 text-text xl:hidden"
            onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-surface px-4 pb-5 pt-3 xl:hidden">
            <nav className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <React.Fragment key={link.href}>
                    <span className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-text-subtle">
                      Services
                    </span>
                    {link.children.map((c) => (
                      <Link key={c.href} href={c.href}
                        className="rounded-[var(--radius-sm)] px-5 py-2.5 text-sm text-text-muted hover:bg-secondary-light"
                        onClick={() => setMobileOpen(false)}>
                        {c.label}
                      </Link>
                    ))}
                  </React.Fragment>
                ) : (
                  <Link key={link.href} href={link.href}
                    className="rounded-[var(--radius-sm)] px-3 py-2.5 text-base font-medium text-text hover:bg-secondary-light"
                    onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-4 flex flex-col gap-2.5">
              <a href={waLink(WA.breakdown)} target="_blank" rel="noopener noreferrer"
                className="btn-emergency flex items-center justify-center gap-2 rounded-[var(--radius-sm)] py-3 text-sm"
                onClick={() => setMobileOpen(false)}>
                🚨 Request Breakdown Service
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a href={`tel:${COMPANY.phone1.replace(/\s/g,"")}`}
                  className="flex items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-border py-2.5 text-sm font-semibold text-text">
                  <Phone className="h-3.5 w-3.5"/>{COMPANY.phone1}
                </a>
                <a href={`tel:${COMPANY.phone2.replace(/\s/g,"")}`}
                  className="flex items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-border py-2.5 text-sm font-semibold text-text">
                  <Phone className="h-3.5 w-3.5"/>{COMPANY.phone2}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function UrviBioLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-primary">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="8" y="2" width="6" height="18" rx="1.5" fill="white" opacity="0.9"/>
          <rect x="2" y="8" width="18" height="6" rx="1.5" fill="white" opacity="0.9"/>
          <circle cx="17" cy="5" r="2.5" fill="#0e8c7e"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tight text-primary"
          style={{ fontWeight: 900, letterSpacing: "-0.03em" }}>
          urvi&apos;s
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary">
          Biomedical Services
        </span>
      </div>
    </div>
  );
}
