import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";



// If you deploy under a subpath, set base accordingly (e.g., "/myapp/")
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/",
    build: {
      sourcemap: false,
      outDir: "dist",
    },
    server: { port: 5173 },
  };
});