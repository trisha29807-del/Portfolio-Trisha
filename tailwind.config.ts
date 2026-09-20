import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        day: {
          bg: "#050B2A",
          surface: "#0C1740",
          ink: "#F4F1FF",
          muted: "#B8C2E8",
          border: "#23366D",
          burgundy: "#B9B5FF",
          burgundyMuted: "#7F86D9",
        },
        night: {
          bg: "#050B2A",
          surface: "#0C1740",
          ink: "#F4F1FF",
          muted: "#B8C2E8",
          border: "#23366D",
          burgundy: "#B9B5FF",
          burgundyMuted: "#7F86D9",
        },
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "ui-serif", "Georgia", "serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
