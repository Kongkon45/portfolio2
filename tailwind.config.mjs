/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1736px",
        "5xl": "1920px",
      },
      maxWidth: {
        "screen-5xl": "1920px",
      },
      colors: {
        primary: {
          DEFAULT: "#880769",
          50: "#C477B1",
          100: "#54042C",
          200: "#54042C",
          300: "#54042C",
          400: "#54042C",
          500: "#54042C",
          600: "#54042C",
          700: "#54042C",
        },
        secondary: {
          DEFAULT: "#049E43",
          50: "#049E43",
        },
        info: {
          DEFAULT: "#33475B",
          50: "#89A3BD",
        },
        success: {
          DEFAULT: "#049E43",
          50: "#89A3BD",
        },
        dark: {
          DEFAULT: "#111111",
          50: "#1F1D20",
          100: "#AFAFAF",
          200: "#F7F7F7",
          300: "#4A4A4A",
        },
        warning: {
          DEFAULT: "#FBCC21",
          50: "#FBCD22",
        },
        danger: {
          DEFAULT: "#DC0000",
        },
        gray: {
          DEFAULT: "#D9D9D9",
          50: "#717171",
        },
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        background: "var(--background-color)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
