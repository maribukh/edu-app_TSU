/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Убедитесь, что эта строка есть
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
