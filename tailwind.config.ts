import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sena: {
          green: "#5db81f",
          "green-dark": "#4a9617",
          "green-light": "#7cc739",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-lg": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      spacing: {
        "container": "1.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
