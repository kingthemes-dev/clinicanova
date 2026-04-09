import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Na Vercel (VERCEL=1) nie ustawiamy outputFileTracingRoot — stabilniejszy deploy.
 * Lokalnie: przy drugim package-lock wyżej w drzewie katalogów wymuszamy root projektu.
 */
const nextConfig: NextConfig = {
  ...(!process.env.VERCEL && {
    outputFileTracingRoot: path.join(__dirname),
  }),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
