/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "@component": path.resolve(__dirname, "src/components"),
      "@icon": path.resolve(__dirname, "src/components/icons/index.tsx"),
      "@hook": path.resolve(__dirname, "src/hooks"),
      "@util": path.resolve(__dirname, "src/utils"),
    },
  },
});
