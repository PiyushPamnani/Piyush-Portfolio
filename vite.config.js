import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Site is served from https://piyushpamnani.github.io/Piyush-Portfolio/
  base: "/Piyush-Portfolio/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Keep CRA's output folder so `gh-pages -d build` works unchanged
    outDir: "build",
  },
});
