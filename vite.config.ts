import { defineConfig } from "vite";

export default defineConfig({
  base: "/elmi-landing/",
  build: {
    cssCodeSplit: false,
  },
  css: {
    devSourcemap: true,
  },
});
