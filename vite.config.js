import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/allxd/', // Base path para GitHub Pages (ajuste se necessário)
})

