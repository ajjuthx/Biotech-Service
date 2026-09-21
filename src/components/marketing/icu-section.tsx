import { waLink, WA } from "@/lib/config";
import Link from "next/link";
import { ICU_EQUIPMENT } from "@/lib/services/demo-data";

export function ICUSection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">🏥 ICU Critical Care</span>
            <h2 className="mt-3 text-3xl font-bold text-primary-dark sm:text-4xl">ICU equipment service &amp; support</h2>
            <p className="mt-3 max-w-xl text-text-muted">
              We specialise in maintenance, repair and servicing of critical-care equipment
              used in Intensive Care Units.
            </p>
          </div>
          <Link href="/icu-equipment"
            className="shrink-0 rounded-[var(--radius-sm)] border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
            All ICU Equipment →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ICU_EQUIPMENT.slice(0,8).map((eq) => (
            <div key={eq.name}
              className="flex flex-col gap-2 rounded-[var(--radius-md)] border border-border bg-background p-4 hover:border-primary hover:bg-surface transition-colors">
              <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-primary/10 text-primary">
                <eq.icon className="h-5 w-5" strokeWidth={1.5}/>
              </span>
              <h3 className="text-sm font-semibold text-text">{eq.name}</h3>
              <p className="text-xs leading-relaxed text-text-muted">{eq.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href={waLink(WA.icu)} target="_blank" rel="noopener noreferrer"
            className="btn-emergency inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-6 py-2.5 text-sm">
            WhatsApp — Request ICU Equipment Service
          </a>
        </div>
      </div>
    </section>
  );
}
