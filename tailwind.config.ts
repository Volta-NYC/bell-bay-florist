import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#2D5A3D",
        blush: "#F5E6E0",
        gold: "#C9A96E",
        warm: "#FAFAF8",
        ink: "#1A1A1A",
        muted: "#4A4A4A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(26, 26, 26, 0.08)",
      },
    },
  },
  plugins: [],
}
export default config
