import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base works on Vercel, GitHub Pages (project sites) and any static host
  base: './',
  build: {
    outDir: 'dist'
  }
});
