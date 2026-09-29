import { experience } from "@/data/resume";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Seven years, six teams, one throughline"
      intro="From junior Node.js developer to module lead — building and leading systems that stay up, stay fast, and stay maintainable."
    >
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 60}>
            <span
              className={`absolute -left-[7px] mt-2 grid h-3.5 w-3.5 place-items-center rounded-full border-2 ${
                job.current
                  ? "border-accent bg-accent"
                  : "border-line bg-surface"
              }`}
              aria-hidden="true"
            />

            <div className="rounded-2xl border border-line bg-raised p-6 transition hover:border-accent/40 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent">
                    {job.company}
                    <span className="text-faint"> · {job.location}</span>
                  </p>
                </div>
                <p className="font-mono text-xs text-faint">
                  {job.period}
                  {job.current && (
                    <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-accent">
                      current
                    </span>
                  )}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="relative pl-5 text-sm leading-relaxed text-muted"
                  >
                    <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent/60" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {job.stack.map((t) => (
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
      </ol>
    </Section>
  );
}
