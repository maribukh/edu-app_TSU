export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        neonBlue: "#00F0FF",
        neonPink: "#FF00FF",
        cyberBg: "#EDF1F4",
      },
      boxShadow: {
        neon: "0 0 15px rgba(0,240,255,0.5)",
        neonPink: "0 0 15px rgba(255,0,255,0.4)",
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        heroGlow:
          "radial-gradient(circle at center, rgba(0,240,255,0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
