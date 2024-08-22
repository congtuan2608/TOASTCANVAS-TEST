/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": "3rem",
      },
      maxWidth: {
        "8xl": "90rem",
        "10xl": "100rem",
        "12xl": "120rem",
      },
      backgroundImage: {
        "main-banner": "url('./src/assets/images/main-banner@3x.png')",
        "introduction-bg": "url('./src/assets/images/introduction-bg@3x.png')",
      },
      screens: {
        ss: "480px",
      },
    },
  },
  plugins: [],
};
