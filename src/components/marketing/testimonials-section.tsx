import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Professional service and quick response for our ICU ventilator breakdown. Equipment was back in operation the same day.",
    author: "Biomedical Department",
    org: "Multi-Specialty Hospital, Pune",
    stars: 5,
  },
  {
    quote: "We have our ICU and OT equipment on a maintenance contract with Urvi's Biomedical. Preventive maintenance visits are thorough and documentation is always provided.",
    author: "Hospital Administrator",
    org: "Private Hospital, Pune",
    stars: 5,
  },
  {
    quote: "Reliable and knowledgeable team. They identified and resolved a recurring fault with our patient monitor that others couldn't fix.",
    author: "Head of Engineering",
    org: "Diagnostic Centre, Pune",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-secondary">Client Feedback</span>
          <h2 className="mt-2 text-3xl font-bold text-primary-dark">What our clients say</h2>
          <p className="mt-2 text-sm text-text-muted">
            </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-text-muted italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-text">{t.author}</p>
                <p className="text-xs text-text-subtle">{t.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
