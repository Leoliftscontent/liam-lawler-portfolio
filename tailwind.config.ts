import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#f7f4ef",
        brass: "#b7791f",
        cobalt: "#164e63",
        berry: "#8a1c4a"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
