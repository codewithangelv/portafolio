import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/codewithangelv/", // ajusta si tu repo tiene otro nombre
  plugins: [react()],
});
