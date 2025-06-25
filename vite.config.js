import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portafolio/", // 👈 IMPORTANTE para que funcione en GitHub Pages
});
