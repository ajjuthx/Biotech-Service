"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { DEMO_SERVICES, DEMO_CATEGORIES, type DemoService } from "@/lib/services/demo-data";
import { ServiceCard } from "@/components/services/service-card";

const inputClass = "w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3.5 py-2.5 text-sm text-text placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-secondary/40";
const selectClass = "w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3.5 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-secondary/40";

export function ServiceExplorer() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("all");

  const filtered = React.useMemo(() => {
    return DEMO_SERVICES.filter((s) => {
      const matchSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "all" || s.categorySlug === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-subtle" />
          <input
            className={`${inputClass} pl-10`}
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select className={`${selectClass} sm:w-56`} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {DEMO_CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>

      <p className="mt-3 text-sm text-text-subtle">{filtered.length} service{filtered.length !== 1 ? "s" : ""} found</p>

      {filtered.length === 0 ? (
        <div className="mt-12 py-16 text-center">
          <p className="text-lg font-medium text-text-muted">No services match your search.</p>
          <button onClick={() => { setSearch(""); setCategory("all"); }} className="mt-3 text-sm text-secondary hover:underline">Clear filters</button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      )}
    </div>
  );
}
