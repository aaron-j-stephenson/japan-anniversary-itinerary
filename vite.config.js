import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// One id per build: baked into the app and written to version.json, so an
// open copy (e.g. an iPhone home-screen app resumed from memory) can tell
// when a newer deploy exists and reload itself.
const BUILD_ID = String(Date.now());

// Relative asset paths work both at a GitHub Pages project URL and on any
// other static host, without requiring a paid custom domain.
export default defineConfig({
  base: "./",
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [
    react(),
    {
      name: "emit-version",
      apply: "build",
      generateBundle() {
        this.emitFile({ type: "asset", fileName: "version.json", source: JSON.stringify({ build: BUILD_ID }) });
      },
    },
  ],
});
