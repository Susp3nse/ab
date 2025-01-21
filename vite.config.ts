import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AB-list-maker",
  server: {
    proxy: {
      "/lookup": {
        target: "https://sync.runescape.wiki/runelite/player",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lookup/, ""),
      },
    },
  },
});
