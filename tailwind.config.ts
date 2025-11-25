import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 24px 60px rgba(15, 9, 2, 0.16)"
      },
      borderRadius: {
        xl: "1.2rem"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
