import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Pełna skala szarości — dopasowana do szarego logo (beauty / clinical) */
        brand: {
          ink: "#18181b",
          body: "#52525b",
          muted: "#71717a",
          soft: "#a1a1aa",
          subtle: "#d4d4d8",
          accent: "#3f3f46",
          line: "#e4e4e7",
          panel: "#fafafa",
          surface: "#f4f4f5",
          /** Aliasy pod istniejące klasy (sand / rosewood → szarości) */
          sand: "#a1a1aa",
          rosewood: "#3f3f46",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        content: "90rem",
      },
      fontSize: {
        "display-lg": ["clamp(2.25rem,5vw,4.375rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(1.75rem,3.5vw,2.75rem)", { lineHeight: "1.15" }],
        quote: ["clamp(4rem,12vw,7.5rem)", { lineHeight: "0.85" }],
      },
      transitionDuration: {
        220: "220ms",
        400: "400ms",
      },
      boxShadow: {
        beauty:
          "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.06)",
        "beauty-md":
          "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        "beauty-lg":
          "0 20px 50px -12px rgb(0 0 0 / 0.12), 0 8px 16px -8px rgb(0 0 0 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
