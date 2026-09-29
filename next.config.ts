import type { NextConfig } from "next";

/**
 * Set NEXT_OUTPUT=export before `npm run build` to emit a fully static site
 * in ./out (for GitHub Pages, S3, Netlify drop, any static host).
 * Leave it unset for Vercel / Node hosting.
 */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: isStaticExport,
  },
  // basePath is only needed for GitHub Pages project sites (user.github.io/repo)
  basePath: process.env.NEXT_BASE_PATH || undefined,
};

export default nextConfig;
