export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 4px #a855f7, 0 0 8px #a855f7" },
          "100%": { textShadow: "0 0 10px #c084fc, 0 0 20px #c084fc" },
        },
      },
    },
  },
  plugins: [],
};
