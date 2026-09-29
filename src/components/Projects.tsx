"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/resume";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  const companies = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.company)))],
    []
  );
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.company === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Platforms shipped to production"
      intro="Enterprise and SaaS systems delivered across ad-tech, fintech, identity, analytics, and logistics."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {companies.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-[13px] transition ${
              filter === c
                ? "border-accent bg-accent/10 text-accent"
                : "border-line text-muted hover:border-accent/40 hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal as="article" key={p.name} delay={(i % 3) * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-raised p-6 transition hover:-translate-y-1 hover:border-accent/40">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                {p.company}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-accent">{p.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <p className="mt-5 rounded-lg bg-accent/8 px-3 py-2 text-[13px] font-medium text-accent">
                {p.impact}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-xs text-faint">
        Client work is described at a level that respects confidentiality — happy
        to go deeper on architecture and trade-offs in conversation.
      </p>
    </Section>
  );
}
