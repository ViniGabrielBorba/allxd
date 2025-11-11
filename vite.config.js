import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path para GitHub Pages
// Se o site estiver em branco, tente mudar para '/' (para domínio customizado)
// ou verifique a URL do seu GitHub Pages
const getBasePath = () => {
  // Se tiver variável de ambiente do GitHub, usa ela
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    return `/${repoName}/`
  }
  // Fallback para o nome do repositório
  return '/allxd/'
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
