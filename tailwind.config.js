/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["pop-light"],
        heading: ["pop-semibold"],
      },
      colors: {
        tea: "var(--color_18)",
        charcoal: "var(--color_1)",
      },
    },
  },
  plugins: [],
};
