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
        background: "#140f0c",      // deep warm brown-black
        surface: "#1c1612",         // slightly lighter brown
        border: "#2a211c",          // soft brown border
        muted: "#a89f94",           // warm gray-brown text
        accent: "#c9a66b",          // warm gold/tan accent
        "accent-dim": "#a88b4f",    // darker gold
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;