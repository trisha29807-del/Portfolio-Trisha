import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        day: {
          bg: "#F5EDE2",
          surface: "#EFE4D3",
          ink: "#221C17",
          muted: "#6E6154",
          border: "#DDCFB9",
          burgundy: "#7A1626",
          burgundyMuted: "#9C4351",
        },
        night: {
          bg: "#16120E",
          surface: "#211A14",
          ink: "#F2E7D8",
          muted: "#AE9E8B",
          border: "#3A3025",
          burgundy: "#C7495C",
          burgundyMuted: "#8C3140",
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
