/** @type {import('tailwindcss').Config} */
const primary = "#2f2e41";
const accent = "#6c63ff";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "rasin-black": primary,
        "transparent-white": "#1F171700",
        "royal-lilac": accent,
        "hub-text": "#595868",
        "hub-muted": "#646174",
        "hub-border": "#e7e6ec",
        "hub-surface": "#f6f6f9",
        "hub-tint": "#f0efff",
        "hub-success": "#008000",
        "hub-accent-strong":
          "color-mix(in srgb, " + accent + " 84%, " + primary + ")",
        "hub-accent-hover":
          "color-mix(in srgb, " + accent + " 72%, " + primary + ")",
      },
      boxShadow: {
        hub: "0 12px 40px -18px rgba(47, 46, 65, 0.18)",
        app: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        custom:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      merri: ["Merriweather", "serif"],
      satoshi: ["var(--font-satoshi)", "Inter", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
  important: true,
  safelist: ["prose", "line-clamp-2", "line-clamp-3", "animate-pulse"],
};
