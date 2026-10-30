import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo-name>; the deploy workflow sets this.
// Locally it stays empty so `npm run dev` keeps working at the root.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // cacheComponents/partialPrefetching are left off: they need a server and
  // are rejected by `output: "export"`.
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
