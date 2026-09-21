export function ServiceProcess({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex flex-col gap-2 pt-8">
          <span className="absolute left-0 top-0 font-display text-3xl text-border-strong">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-sm font-semibold text-text">{step.title}</h3>
          <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
