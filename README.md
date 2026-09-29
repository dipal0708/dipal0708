<h1 align="center">Hi 👋, I'm Dipal Kharva</h1>
<h3 align="center">An enthusiastic Full-Stack Developer with eight years of experience in Node.js, Angular, React, and the MEAN/MERN stack,AWS services.</h3>


# Dipal Kharva — Portfolio

Personal portfolio site built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Fully static — every route is prerendered at build time, so it can be hosted anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3).

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build locally
```

---

## Editing content

**All copy lives in one file:** [`src/data/resume.ts`](src/data/resume.ts)

| What you want to change | Where |
| --- | --- |
| Name, role, email, phone, links | `profile` |
| Hero stat tiles | `stats` |
| Skill categories and chips | `skillGroups` |
| Job history and bullets | `experience` |
| Project cards | `projects` |
| Degrees | `education` |
| Nav items | `navLinks` |
| SEO title/description/domain | `site` |

Nothing in `src/components` needs to change to update the résumé content.

**Other things you'll likely want to update:**

- `public/Dipal_Kharva_Resume.pdf` — the downloadable résumé. Replace the file, keep the name (or update `profile.resumeFile`).
- `profile.github` — currently a guess at `github.com/dipalkharva`. Point it at your real handle, or delete the field and the GitHub links in `Hero.tsx`, `Contact.tsx`, and `Footer.tsx`.
- `profile.phone` — delete this line if you'd rather not publish your number; then remove the phone card in `Contact.tsx`.
- `src/app/icon.svg` — the favicon.
- Theme colors — the `:root` and `.dark` blocks in `src/app/globals.css`.

---

## Going live

### Option 1 — Vercel (recommended)

Vercel is built by the Next.js team; zero configuration, free for personal sites, automatic HTTPS and preview deploys on every push.

1. Push this folder to a GitHub repo:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

2. Go to https://vercel.com, sign in with GitHub, **Add New → Project**, import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. You get a live URL like `portfolio-xyz.vercel.app` in about a minute.
4. Every future `git push` to `main` redeploys automatically.

Or deploy straight from this machine without GitHub:

```bash
npx vercel
npx vercel --prod
```

**Custom domain:** buy a domain (Namecheap, Cloudflare, GoDaddy — around $10–15/yr), then in Vercel go to **Project → Settings → Domains → Add**, and set the DNS records Vercel shows you at your registrar. HTTPS is issued automatically.

After the domain is live, set the real URL so SEO tags and the sitemap are correct — in Vercel **Settings → Environment Variables**:

```
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

Then redeploy.

### Option 2 — Netlify or Cloudflare Pages

Both connect to the same GitHub repo.

- Build command: `npm run build`
- Output directory: `.next` (Netlify uses the official Next.js runtime; Cloudflare Pages: pick the Next.js preset)

### Option 3 — GitHub Pages (free, static)

This project supports a fully static export.

```bash
# Windows PowerShell
$env:NEXT_OUTPUT="export"; npm run build
```

```bash
# macOS / Linux / Git Bash
NEXT_OUTPUT=export npm run build
```

That writes a static site to `./out`.

A ready-made workflow is included at `.github/workflows/deploy-pages.yml`. To use it:

1. Push the repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. If you're deploying to a **project** site (`username.github.io/portfolio`), set `NEXT_BASE_PATH` to `/portfolio` in the workflow. For a **user** site (`username.github.io`), leave it empty.

> Note: GitHub Pages serves static files only. If you later add API routes, server actions, or image optimization, move to Vercel.

---

## Adding a working contact form later

The contact section uses `mailto:` links, which keeps the site fully static. If you want a real form:

- **Easiest:** [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — a plain `<form action="...">`, no backend, works with static export.
- **More control:** add `src/app/api/contact/route.ts` and send mail with [Resend](https://resend.com). This requires a Node host (Vercel/Netlify), not GitHub Pages.

---

## Project structure

```
src/
  app/
    layout.tsx      # metadata, fonts, JSON-LD, no-flash theme script
    page.tsx        # section composition
    globals.css     # theme tokens, dark mode, animations
    icon.svg        # favicon
    robots.ts       # /robots.txt
    sitemap.ts      # /sitemap.xml
  components/       # Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
  data/
    resume.ts       # ← all content
public/
  Dipal_Kharva_Resume.pdf
```

## What's built in

- Light/dark theme with a toggle, saved to `localStorage`, no flash on load
- Scroll-spy navigation with an active-section indicator, plus a mobile menu
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Project filtering by company
- SEO: Open Graph, Twitter cards, `Person` JSON-LD, sitemap, robots
- Accessibility: skip link, ARIA labels, keyboard focus states, AA colour contrast
- Print stylesheet
