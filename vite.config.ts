import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

// If you deploy under a subpath, set base accordingly (e.g., "/myapp/")
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    sourcemap: false,
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
        guide: resolve(root, "guide.html"),
        download: resolve(root, "download.html"),
        account: resolve(root, "account.html"),
        cohorts: resolve(root, "cohorts.html"),
      },
    },
  },
  server: { port: 5173 },
});