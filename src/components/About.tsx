import { education, profile } from "@/data/resume";
import Reveal from "./Reveal";
import Section from "./Section";

const highlights = [
  {
    title: "Architecture that holds up",
    body: "Event-driven Node.js and NestJS services, REST and WebSocket APIs, RabbitMQ messaging, Redis caching — designed for availability first, then speed.",
  },
  {
    title: "Frontend with a system behind it",
    body: "Reusable React component libraries built on Atomic Design, typed end-to-end, and tuned for real devices and browsers rather than a demo machine.",
  },
  {
    title: "Delivery, not just code",
    body: "CI/CD pipelines on Docker, Kubernetes and AWS ECS, sprint planning, structured code review, and mentoring that raises the whole team's baseline.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering leadership with hands on the keyboard"
      intro={profile.summaryTwo}
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-1">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <article className="group rounded-2xl border border-line bg-raised p-6 transition hover:border-accent/40">
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 font-mono text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {h.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-line bg-raised p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.short} className="border-l-2 border-accent/30 pl-4">
                  <p className="text-sm font-semibold">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-faint">{e.period}</p>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-line pt-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Currently
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Module Lead at <span className="text-ink">PMC India</span>,
                leading the migration of legacy webMethods integrations to
                containerized Node.js microservices on AWS ECS.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
