// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

// Adjust the path to your actual entry file
const entryFile = 'renderer/index.html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist', // Adjust the output directory if needed
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Adjust proxy settings if needed
    },
  },
  root: 'src', // Adjust the root directory if needed
  resolve: {
    alias: {
      '@': '/src', // Adjust aliases if needed
    },
  },
  base: './', // Adjust the base path if needed
  build: {
    outDir: 'dist', // Adjust the output directory if needed
    assetsDir: '', // Adjust the assets directory if needed
  },
  publicDir: 'public', // Adjust the public directory if needed
  // Adjust the entry file
  rollupInputOptions: {
    input: entryFile,
  },
});