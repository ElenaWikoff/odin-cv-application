import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Example: '@' alias points to the 'src' directory
      "@": resolve(__dirname, "src"),
      // You can add more aliases for specific directories, e.g., 'components'
      // "components": resolve(__dirname, "src/components"),
    },
  },
})
