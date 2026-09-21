export default function ServicesLoading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Filter bar skeleton */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="h-11 flex-1 animate-pulse rounded-[var(--radius-sm)] bg-border" />
        <div className="h-11 w-full animate-pulse rounded-[var(--radius-sm)] bg-border sm:w-56" />
        <div className="h-11 w-full animate-pulse rounded-[var(--radius-sm)] bg-border sm:w-48" />
      </div>
      <div className="mt-4 h-4 w-32 animate-pulse rounded bg-border" />
      {/* Card grid skeleton */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-6"
          >
            <div className="h-11 w-11 animate-pulse rounded-[var(--radius-sm)] bg-border" />
            <div className="h-3 w-24 animate-pulse rounded bg-border" />
            <div className="h-5 w-40 animate-pulse rounded bg-border" />
            <div className="h-12 w-full animate-pulse rounded bg-border" />
            <div className="h-4 w-28 animate-pulse rounded bg-border" />
          </div>
        ))}
      </div>
    </section>
  );
}
