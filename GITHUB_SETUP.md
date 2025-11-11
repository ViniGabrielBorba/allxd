# 🚀 Como adicionar este projeto no GitHub

## Passo 1: Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `landing-page-psicologo` (ou o nome que preferir)
   - **Description**: "Landing page moderna para psicólogo com React + TailwindCSS"
   - **Visibility**: Escolha Public ou Private
   - **NÃO marque** "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

## Passo 2: Conectar repositório local ao GitHub

Após criar o repositório no GitHub, você verá uma página com instruções. Use uma das opções abaixo:

### Opção A: Se você já tem o repositório criado no GitHub

Execute os comandos abaixo (substitua `SEU_USUARIO` pelo seu username do GitHub):

```bash
git remote add origin https://github.com/SEU_USUARIO/landing-page-psicologo.git
git branch -M main
git push -u origin main
```

### Opção B: Usando SSH (se você configurou SSH keys)

```bash
git remote add origin git@github.com:SEU_USUARIO/landing-page-psicologo.git
git branch -M main
git push -u origin main
```

## ✅ Pronto!

Seu projeto estará disponível no GitHub e pronto para deploy na Vercel!

---

**Dica**: Se você usar a extensão do GitHub no VS Code ou Cursor, pode publicar diretamente pela interface gráfica!

