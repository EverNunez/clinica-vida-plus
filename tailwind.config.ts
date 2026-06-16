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
        // Paleta clínica premium: azul profesional, celeste, menta y dorado suave
        ink: "#0f2a3f",
        brand: {
          50: "#eef9fb",
          100: "#d7eff4",
          200: "#b3e0ea",
          300: "#82cbdc",
          400: "#4aadc6",
          500: "#2c91ad",
          600: "#247591",
          700: "#225f76",
          800: "#234f61",
          900: "#214353",
        },
        mint: {
          50: "#f0fbf6",
          100: "#d9f5e7",
          200: "#b6e9d2",
          300: "#84d6b5",
          400: "#4fbd93",
          500: "#2fa37a",
        },
        gold: {
          300: "#e8d3a2",
          400: "#dcbd77",
          500: "#c9a45a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(33, 67, 83, 0.18)",
        card: "0 20px 60px -25px rgba(33, 67, 83, 0.25)",
        glow: "0 0 0 1px rgba(255,255,255,0.6), 0 25px 70px -30px rgba(44,145,173,0.55)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 80% -10%, rgba(130,203,220,0.35), transparent 60%), radial-gradient(900px 500px at 0% 20%, rgba(132,214,181,0.25), transparent 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
