import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portafolio/", // 👈 ¡Muy importante!
  plugins: [react()],
});
