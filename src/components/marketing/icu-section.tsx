import Link from "next/link";
import { waLink, WA, COMPANY } from "@/lib/config";
import { DEPT_TABS } from "@/lib/services/demo-data";

export function ICUSection() {
  // Show first 4 equipment items from each of the 3 most important depts
  const highlight = [
    { dept: "ICU",  items: DEPT_TABS.find(d => d.key === "icu")!.equipment.slice(0, 4) },
    { dept: "NICU", items: DEPT_TABS.find(d => d.key === "nicu")!.equipment.slice(0, 4) },
    { dept: "OT",   items: DEPT_TABS.find(d => d.key === "ot")!.equipment.slice(0, 4) },
  ];

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="mt-3 text-3xl font-bold text-primary-dark sm:text-4xl">
              ICU • NICU • OT • PICU • CSSD &amp; more
            </h2>
            <p className="mt-3 max-w-xl text-text-muted">
              Specialised service and repair for all hospital department equipment.
              Serving <strong>{COMPANY.serviceCities}</strong>.
            </p>
          </div>
          <Link href="/icu-equipment"
            className="shrink-0 rounded-[var(--radius-sm)] border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
            View All Equipment →
          </Link>
        </div>

        {/* Dept preview grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {highlight.map(({ dept, items }) => (
            <div key={dept}>
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-primary-dark">
                <span className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-primary text-white text-xs font-bold">
                  {dept[0]}
                </span>
                {dept} Equipment
              </h3>
              <ul className="space-y-2">
                {items.map((eq) => (
                  <li key={eq.name}>
                    <a
                      href={waLink(`Hello, I need service for *${eq.name}* (${dept} Department).\n\nFacility Name: \nRequirement: \n\nPlease contact us.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-text hover:border-[#25d366] hover:bg-[#f0fdf4] hover:text-[#128c4a] transition-colors"
                    >
                      <eq.icon className="h-4 w-4 shrink-0 text-secondary" strokeWidth={1.5} />
                      {eq.name}
                      <span className="ml-auto text-xs text-[#25d366] opacity-0 group-hover:opacity-100">WhatsApp →</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dept pills — quick jump to PICU, CSSD, Emergency, Diagnostic */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["PICU", "CSSD", "Emergency", "Diagnostic"].map((d) => (
            <Link key={d} href="/icu-equipment"
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-text-muted hover:border-primary hover:text-primary transition-colors">
              {d} Equipment →
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href={waLink(WA.breakdown)} target="_blank" rel="noopener noreferrer"
            className="btn-emergency inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-6 py-2.5 text-sm">
            🚨 Request Equipment Service
          </a>
        </div>
      </div>
    </section>
  );
}
