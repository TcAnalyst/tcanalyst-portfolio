import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0c0a",
        surface: "#1a1512",
        "surface-2": "#221c18",
        border: "#2e261f",
        muted: "#a89a8c",
        accent: "#d4a574",
        "accent-dim": "#b8894f",
        cream: "#f5f0e8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0,0,0,0.4)",
        glow: "0 0 30px -5px rgba(212, 165, 116, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;