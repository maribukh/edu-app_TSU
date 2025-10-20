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

        "neon-glow":
          "0 0 15px rgba(0, 240, 255, 0.7), 0 0 30px rgba(147, 51, 234, 0.5), 0 0 45px rgba(255, 0, 255, 0.5)",
        "card-glow": "0 0 15px rgba(0, 240, 255, 0.3)",
      },
      backgroundImage: {
        heroGlow:
          "radial-gradient(circle at center, rgba(0,240,255,0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
