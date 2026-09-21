"use client";

import * as React from "react";
import { DEPT_TABS } from "@/lib/services/demo-data";
import { waLink, WA } from "@/lib/config";

export function EquipmentTabs() {
  const [active, setActive] = React.useState("icu");
  const dept = DEPT_TABS.find((d) => d.key === active)!;

  const waMsg = (equipName: string) =>
    `Hello, I need service for *${equipName}* (${dept.label} Department).\n\nFacility Name: \nProblem / Requirement: \n\nPlease contact us.`;

  return (
    <div>
      {/* Department tab bar */}
      <div
        role="tablist"
        aria-label="Hospital departments"
        className="flex flex-wrap gap-2 border-b border-border pb-1"
      >
        {DEPT_TABS.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            aria-controls={`panel-${tab.key}`}
            onClick={() => setActive(tab.key)}
            className={`rounded-[var(--radius-sm)] px-4 py-2 text-sm font-semibold transition-colors ${
              active === tab.key
                ? "bg-primary text-white"
                : "border border-border bg-surface text-text-muted hover:border-primary hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Equipment grid */}
      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-label={`${dept.label} equipment`}
        className="mt-6"
      >
        <h2 className="mb-5 text-xl font-bold text-primary-dark">
          {dept.label} Equipment — Service &amp; Repair
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dept.equipment.map((eq) => (
            <a
              key={eq.name}
              href={waLink(waMsg(eq.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 transition-all hover:border-[#25d366] hover:shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-primary/10 text-primary group-hover:bg-[#25d366] group-hover:text-white transition-colors">
                <eq.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text group-hover:text-[#128c4a]">{eq.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{eq.desc}</p>
                <p className="mt-2 text-xs font-semibold text-[#25d366] opacity-0 group-hover:opacity-100 transition-opacity">
                  Tap to WhatsApp →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Dept-level WhatsApp CTA */}
      <div className="mt-8 flex flex-col items-start gap-3 rounded-[var(--radius-md)] border border-border bg-secondary-light p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-primary-dark">
            Need {dept.label} equipment service?
          </p>
          <p className="text-sm text-text-muted">
            WhatsApp us with your equipment details and we&apos;ll respond quickly.
          </p>
        </div>
        <a
          href={waLink(`Hello, I need service support for ${dept.label} equipment.\n\nFacility Name: \nEquipment: \nRequirement (Breakdown / PM / Other): \n\nPlease contact us.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-[var(--radius-sm)] bg-[#25d366] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1da851] transition-colors whitespace-nowrap"
        >
          WhatsApp for {dept.label} Service →
        </a>
      </div>
    </div>
  );
}
