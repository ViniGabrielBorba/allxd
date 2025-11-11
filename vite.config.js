import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/allxd/', // Base path absoluto para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
