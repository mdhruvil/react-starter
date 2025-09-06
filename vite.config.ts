import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    headers: {
      "Content-Security-Policy":
        "frame-ancestors 'self' http://localhost:3000 https://vibe.appwrite.network;",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
  },
});
