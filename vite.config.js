import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Base path relativo - funciona melhor no GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
