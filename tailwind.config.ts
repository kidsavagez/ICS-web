import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal:   { DEFAULT: "#0E4D5C", 50: "#E7EEF0", 100: "#C1D2D7", 500: "#0E4D5C", 600: "#0B3F4C", 700: "#08313C" },
        pink:   { DEFAULT: "#D67AB1", 50: "#FBEEF5", 100: "#F4D3E5", 500: "#D67AB1", 600: "#C56AA0", 700: "#A1547F" },
        cream:  { DEFAULT: "#F4ECDD", 100: "#FAF6EC", 500: "#F4ECDD", 700: "#E5DBC4" },
        bg:     "#FAFAF7",
        ink:    "#111418",
        muted:  "#6B6B6B",
        border: "#E5E1D8",
        success: "#2E7D5B",
        warning: "#D89B3C",
        error:   "#C5453A",
      },
      fontFamily: {
        display: ["'DM Serif Display'", "'Playfair Display'", "Georgia", "serif"],
        sans:    ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono:    ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["6rem",    { lineHeight: "1.0",  letterSpacing: "-0.03em", fontWeight: "600" }],
        "display-lg": ["4.5rem",  { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["3rem",    { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-lg": ["2rem",    { lineHeight: "1.2",  letterSpacing: "-0.01em", fontWeight: "600" }],
        "heading-md": ["1.5rem",  { lineHeight: "1.3",  fontWeight: "600" }],
        "body-lg":    ["1.25rem", { lineHeight: "1.5" }],
        "body":       ["1rem",    { lineHeight: "1.6" }],
        "body-sm":    ["0.875rem",{ lineHeight: "1.5" }],
        "eyebrow":    ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        "card-hover": "0 12px 32px rgba(14, 77, 92, 0.08)",
        "focus-ring": "0 0 0 3px rgba(14, 77, 92, 0.15)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        fast:   "200ms",
        normal: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
