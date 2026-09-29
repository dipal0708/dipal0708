import { profile, stats } from "@/data/resume";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from "./Icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-[0.55]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.available}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-1.5 font-mono text-sm text-faint">
            {profile.subRole}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:opacity-90"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-raised px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download résumé
            </a>
            <div className="ml-1 flex items-center gap-1">
              <IconLink href={profile.linkedin} label="LinkedIn">
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </IconLink>
              <IconLink href={profile.github} label="GitHub">
                <GitHubIcon className="h-[18px] w-[18px]" />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Email">
                <MailIcon className="h-[18px] w-[18px]" />
              </IconLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-faint">
            <LocationIcon className="h-4 w-4" />
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={380}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-raised px-5 py-6 text-center sm:py-7">
                <dt className="text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-xs text-muted sm:text-[13px]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-accent/10 hover:text-accent"
    >
      {children}
    </a>
  );
}
