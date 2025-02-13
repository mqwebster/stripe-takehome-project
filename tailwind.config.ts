import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: {
          base: "#CA6F31",
        },
        yellow: {
          base: "#F6CB40",
        },
        cream: {
          base: "#F7E6DA",
        },
        black: {
          base: "#1F1F1F",
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "22px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "72px",
        "5xl": "128px",
      },
    },
  },
  plugins: [],
} satisfies Config;
