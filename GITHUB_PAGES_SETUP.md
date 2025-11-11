# 📄 Configuração GitHub Pages

## ✅ Status: Site funcionando!

Seu site já está no ar! 🎉

## 🔧 Configurações importantes

### 1. Base Path no Vite

O arquivo `vite.config.js` está configurado com:
```js
base: '/allxd/'
```

**Se você usar domínio customizado**, altere para:
```js
base: '/'
```

### 2. Arquivo 404.html

Criei um arquivo `public/404.html` que ajuda com o roteamento de SPAs no GitHub Pages.

## 🚀 Para fazer deploy/atualizar

```bash
npm run build
npm run deploy
```

Ou configure GitHub Actions para deploy automático (veja abaixo).

## ⚙️ Deploy Automático com GitHub Actions

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📝 Notas

- O site está acessível em: `https://vinigabrielborba.github.io/allxd/`
- Se configurar domínio customizado, lembre-se de alterar o `base` no `vite.config.js`
- O arquivo `404.html` garante que rotas diretas funcionem corretamente

