# Guia de Implantação - Curso de Criptomoedas

Este projeto é um site interativo com um curso completo sobre criptomoedas, blockchain e finanças descentralizadas (DeFi).

## Opções de Implantação Permanente

### 1. **Vercel** (Recomendado - Mais Fácil)

**Passos:**
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Conecte seu repositório GitHub
4. Clique em "Deploy"

**Vantagens:**
- Implantação automática a cada push
- SSL gratuito
- CDN global
- Sem custo para sites estáticos

**Link após implantação:** `https://seu-projeto.vercel.app`

### 2. **Netlify**

**Passos:**
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Clique em "Deploy"

**Vantagens:**
- Implantação automática
- SSL gratuito
- Formulários e funções serverless
- Sem custo para sites estáticos

**Link após implantação:** `https://seu-projeto.netlify.app`

### 3. **GitHub Pages**

**Passos:**
1. Faça push do código para GitHub
2. Vá para Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha "master" e pasta "/ (root)"
5. Clique em "Save"

**Vantagens:**
- Totalmente gratuito
- Integrado ao GitHub
- Sem configuração necessária

**Link após implantação:** `https://seu-usuario.github.io/curso_cripto_site`

## Estrutura do Projeto

```
curso_cripto_site/
├── src/
│   ├── pages/           # Páginas React
│   ├── components/      # Componentes reutilizáveis
│   ├── modulo*.md       # Conteúdo dos módulos
│   └── defi_*.md        # Conteúdo especial DeFi
├── dist/                # Build de produção
├── package.json         # Dependências
├── vite.config.ts       # Configuração Vite
├── vercel.json          # Config Vercel
└── netlify.toml         # Config Netlify
```

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build localmente
npm run preview
```

## Conteúdo do Curso

- **Módulo 1:** Introdução às Criptomoedas
- **Módulo 2:** Tecnologia Blockchain
- **Módulo 3:** Principais Criptomoedas
- **Módulo 4:** Finanças Descentralizadas (DeFi)
- **Módulo 5:** Investimentos e Mercado
- **Módulo 6:** Exemplos Práticos e Estudos de Caso
- **Bônus:** DeFi 2025 - Tendências e Inovações

## Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- React Markdown
- Lucide Icons

## Suporte

Para dúvidas sobre implantação, consulte a documentação oficial:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
