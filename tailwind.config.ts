import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Green palette
        "green-50": "#E8ECEB",
        "green-100": "#B7C5C0",
        "green-200": "#95A9A2",
        "green-400": "#46695D",
        "green-500": "#184335",
        "green-900": "#0A1C16",
        "adjusted-green-500": "#245749",
        // Neutral palette
        "neutral-50": "#FAFAFA",
        "neutral-200": "#E5E5E5",
        "neutral-300": "#D4D4D4",
        "neutral-400": "#A1A1A1",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        // Orange palette
        "orange-200": "#FFD6A8",
        "orange-300": "#FFB86A",
        // Others
        stone: "#343330",
      },
      fontFamily: {
        "neue-montreal": ["Neue Montreal", "sans-serif"],
        "perfectly-nineties": ["Perfectly Nineties", "serif"],
      },
      fontSize: {
        "14": ["14px", { lineHeight: "1.5", letterSpacing: "0" }],
        "16": ["16px", { lineHeight: "1.5", letterSpacing: "0" }],
        "18": ["18px", { lineHeight: "1.5", letterSpacing: "0" }],
        "20": ["20px", { lineHeight: "1.5", letterSpacing: "0" }],
        "28": ["28px", { lineHeight: "1.5", letterSpacing: "0" }],
        "32": ["32px", { lineHeight: "1.5", letterSpacing: "0" }],
        "48": ["48px", { lineHeight: "1.5", letterSpacing: "0" }],
        "64": ["64px", { lineHeight: "69px", letterSpacing: "0" }],
        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "48px", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "40px", fontWeight: "600" }],
        h4: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        body: ["16px", { lineHeight: "24px" }],
        small: ["14px", { lineHeight: "20px" }],
      },
      spacing: {
        "space-xs": "4px",
        "space-sm": "6px",
        "space-smm": "8px",
        "space-md": "12px",
        "space-lg": "16px",
        "space-xl": "20px",
        "space-xll": "24px",
        "space-xlll": "32px",
        "space-huge": "64px",
      },
      borderRadius: {
        "radius-sm": "8px",
        "radius-big": "999px",
      },
    },
  },
  plugins: [],
};
export default config;
