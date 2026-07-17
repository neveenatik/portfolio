import type { NextConfig } from "next";

// When deploying to GitHub Pages as a *project* site, the app is served from
// https://<user>.github.io/<repo>/ , so we need a basePath in production.
// Locally (next dev / non-production builds) it stays at the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
