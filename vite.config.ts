import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";



// If you deploy under a subpath, set base accordingly (e.g., "/myapp/")
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    sourcemap: false,
    outDir: "dist",
  },
  server: { port: 5173 }
});