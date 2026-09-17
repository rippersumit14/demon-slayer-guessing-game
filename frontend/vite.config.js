import { defineConfig } from "vite";

// Forward the existing routes without changing the Express backend or adding CORS.
const proxy = { "/questions": "http://127.0.0.1:3000" };

export default defineConfig({
  server: { port: 5173, strictPort: true, proxy },
  preview: { port: 4173, strictPort: true, proxy },
});
