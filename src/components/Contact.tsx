import { profile } from "@/data/resume";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-raised px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60"
              style={{
                background:
                  "radial-gradient(500px 220px at 50% 0%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build something that scales
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                I&apos;m open to senior and lead engineering roles, and to
                conversations about architecture, platform migrations, and team
                mentoring. The fastest way to reach me is email.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-90"
                >
                  <MailIcon className="h-4 w-4" />
                  {profile.email}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.resumeFile}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Résumé
                </a>
              </div>

              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                <ContactCard
                  icon={<LinkedInIcon className="h-[18px] w-[18px]" />}
                  label="LinkedIn"
                  value="in/dipalkharva"
                  href={profile.linkedin}
                />
                <ContactCard
                  icon={<PhoneIcon className="h-[18px] w-[18px]" />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <ContactCard
                  icon={<GitHubIcon className="h-[18px] w-[18px]" />}
                  label="GitHub"
                  value="View code"
                  href={profile.github}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-3 bg-raised px-5 py-5 text-left transition hover:bg-accent/5"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {label}
        </span>
        <span className="block truncate text-sm text-ink group-hover:text-accent">
          {value}
        </span>
      </span>
    </a>
  );
}
