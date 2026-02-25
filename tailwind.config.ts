import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#08080E",
          surface: "#0F0F1A",
          border: "#1E1E30",
        },
        teal: {
          DEFAULT: "#00C4A7",
          glow: "rgba(0, 196, 167, 0.15)",
        },
        purple: {
          DEFAULT: "#7C3AED",
          glow: "rgba(124, 58, 237, 0.15)",
        },
        text: {
          primary: "#F5F4EF",
          secondary: "#9B9AA6",
          tertiary: "#5C5B68",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.05", fontWeight: "700" }],
        "display-l": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        "display-m": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "600" }],
        "body-l": ["clamp(1rem, 1.5vw, 1.25rem)", { lineHeight: "1.625" }],
      },
      animation: {
        aurora: "aurora 12s ease infinite alternate",
      },
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
