import { waLink, WA } from "@/lib/config";

export function CTASection({
  title = "Equipment breakdown? We're here to help.",
  description = "WhatsApp us immediately for emergency support or to discuss any service requirement.",
  primaryLabel = "🚨 WhatsApp Us Now",
  primaryMsg = WA.breakdown,
  secondaryLabel = "Call Us Now",
  secondaryMsg = WA.general,
  emergency = true,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryMsg?: string;
  secondaryLabel?: string;
  secondaryMsg?: string;
  emergency?: boolean;
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div>
            {emergency && (
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                ⚡ 24/7 Breakdown Support Available
              </div>
            )}
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 text-white/70">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={waLink(primaryMsg)} target="_blank" rel="noopener noreferrer"
              className="btn-emergency flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3 text-sm whitespace-nowrap">
              {primaryLabel}
            </a>
            <a href={waLink(secondaryMsg)} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 whitespace-nowrap">
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
