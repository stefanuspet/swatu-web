import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#8a9e8c",
          light: "#c4d4c6",
          dark: "#4a5e4c",
        },
        warm: {
          DEFAULT: "#7a5c3e",
          light: "#c9a882",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark: "#ede5d5",
        },
        charcoal: "#2c2c2a",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
