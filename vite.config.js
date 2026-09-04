import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative asset paths work both at a GitHub Pages project URL and on any
// other static host, without requiring a paid custom domain.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
