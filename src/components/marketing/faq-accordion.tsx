"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-[var(--radius-md)] border border-border bg-surface">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-text hover:text-primary"
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-text-subtle transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-4">
                <p className="text-sm leading-relaxed text-text-muted">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
