/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00F0FF",
        dark: "#0A0A0F",
      },
      boxShadow: {
        neon: "0 0 10px #00F0FF, 0 0 20px #00F0FF",
      },
    },
  },
  plugins: [],
};
