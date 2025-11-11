# 🔧 Como Corrigir Página em Branco no GitHub Pages

## Problema
O site aparece em branco no GitHub Pages.

## Soluções

### Solução 1: Verificar Base Path

O base path no `vite.config.js` precisa corresponder à URL do seu GitHub Pages.

**Se sua URL é:** `https://vinigabrielborba.github.io/allxd/`
- O base path deve ser: `/allxd/` ✅ (já configurado)

**Se sua URL é:** `https://vinigabrielborba.github.io/` (domínio customizado)
- Altere no `vite.config.js` para: `base: '/'`

### Solução 2: Rebuild e Redeploy

1. Faça um novo commit:
```bash
git add .
git commit -m "Fix: ajusta base path"
git push
```

2. Aguarde o GitHub Actions fazer o deploy (veja em Actions no GitHub)

### Solução 3: Verificar Console do Navegador

1. Abra o site no navegador
2. Pressione F12 para abrir o DevTools
3. Vá na aba Console
4. Veja se há erros de carregamento de assets

### Solução 4: Testar Localmente

```bash
npm run build
npm run preview
```

Se funcionar localmente, o problema é apenas o base path no GitHub Pages.

### Solução 5: Usar Base Path Relativo

Se nada funcionar, tente usar base path relativo:

No `vite.config.js`, mude para:
```js
base: './'
```

Isso funciona melhor em alguns casos.

## ⚠️ Importante

- Certifique-se de que o GitHub Pages está configurado para usar **GitHub Actions** (não a branch gh-pages)
- Verifique em: Settings > Pages > Source: "GitHub Actions"

## 🚀 Alternativa Rápida

Se continuar com problemas, use **Vercel** ou **Cloudflare Pages** que são mais simples para React/Vite:

- **Vercel**: https://vercel.com (já tem `vercel.json` configurado)
- **Cloudflare Pages**: https://pages.cloudflare.com

