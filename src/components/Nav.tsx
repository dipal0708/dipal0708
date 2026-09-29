"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/resume";
import { CloseIcon, MenuIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-surface">
            DK
          </span>
          <span className="hidden sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                active === link.href
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeFile}
            download
            className="hidden rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent sm:block"
          >
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? <MenuIconSwap open /> : <MenuIconSwap />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 text-[15px] text-muted last:border-0 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeFile}
              download
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-surface"
            >
              Download résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIconSwap({ open }: { open?: boolean }) {
  return open ? (
    <CloseIcon className="h-[18px] w-[18px]" />
  ) : (
    <MenuIcon className="h-[18px] w-[18px]" />
  );
}
