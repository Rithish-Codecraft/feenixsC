import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9", // Dominant: Soft Off-White
        foreground: "#1E293B", // Text color
        brand: {
          primary: "#2D6A4F", // Accent: Forest Green
          accent: "#0D9488", // Accent: Teal
          success: "#2D6A4F", // Forest Green success indicator
          warning: "#D97706", // High contrast warning
        },
        surface: {
          base: "#FAFAF9",
          elevated: "#FFFFFF", // Elevated clean white card panels
          border: "#E2E8F0", // Slate 200 light border
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "gradient-pulse": "gradient-pulse 8s ease infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-glow": "border-glow 4s linear infinite",
      },
      keyframes: {
        "gradient-pulse": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 5px rgba(45, 106, 79, 0.3))" },
          "50%": { opacity: ".6", filter: "drop-shadow(0 0 15px rgba(45, 106, 79, 0.6))" }
        },
        "border-glow": {
          "0%, 100%": { "border-color": "rgba(45, 106, 79, 0.2)" },
          "50%": { "border-color": "rgba(13, 148, 136, 0.6)" }
        }
      }
    },
  },
  plugins: [],
};
export default config;
