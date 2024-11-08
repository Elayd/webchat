/// <reference types="vitest" />
/// <reference types="vite/client" />
import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "elayd",
      project: "javascript-react",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: true,
    emptyOutDir: true,
  },
});
