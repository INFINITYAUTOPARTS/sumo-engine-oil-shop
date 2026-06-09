import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        oil: {
          black: "#080808",
          red: "#c8102e",
          gold: "#d6a62a",
          graphite: "#171717",
          steel: "#2d2f33"
        }
      },
      boxShadow: {
        glow: "0 18px 50px rgba(200,16,46,0.22)"
      }
    }
  },
  plugins: []
};

export default config;
