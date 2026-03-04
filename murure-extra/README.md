# Mururé Extra – Landing Page Next.js 14

Landing page premium para o produto **Mururé Extra**, construída com:
- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animações)

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Desenvolvimento (http://localhost:3000)
npm run dev

# 3. Build de produção
npm run build
npm start
```

---

## 📁 Estrutura do Projeto

```
murure-extra/
├── app/
│   ├── page.tsx          ← Página principal (composição das seções)
│   ├── layout.tsx        ← Root layout + SEO (title, OG, schema.org)
│   └── globals.css       ← Estilos globais + importação de fontes
├── components/
│   ├── Reveal.tsx        ← Wrapper reutilizável de scroll reveal (Framer Motion)
│   ├── FloatingWA.tsx    ← Botão WhatsApp flutuante (sticky)
│   └── sections/
│       ├── Hero.tsx         ← Seção Hero (packshot + parallax + CTAs)
│       ├── TrustBar.tsx     ← Barra de confiança dourada
│       ├── Benefits.tsx     ← Cards de benefícios com hover 3D
│       ├── Ingredients.tsx  ← Grade de ingredientes (com placeholders editáveis)
│       ├── HowItWorks.tsx   ← Timeline 3 passos
│       ├── ForWhom.tsx      ← Para quem é / atenção
│       ├── Testimonials.tsx ← Depoimentos (com disclaimer)
│       ├── FAQ.tsx          ← Accordion de perguntas frequentes
│       ├── FinalCTA.tsx     ← CTA final de conversão
│       └── Footer.tsx       ← Rodapé com avisos legais obrigatórios
├── data/
│   └── site.ts          ← ⭐ TODOS os textos e dados editáveis aqui
├── public/
│   └── images/
│       ├── product-hero.jpg     ← Foto principal do produto (substituir)
│       └── og-murure.jpg        ← Imagem OpenGraph (1200×630px)
├── package.json
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── postcss.config.js
```

---

## ✏️ Como personalizar

**Todo o conteúdo está centralizado em `data/site.ts`:**

- Textos, copy, tagline → edite as strings
- Composição/ingredientes → substitua os placeholders
- Depoimentos → edite ou adicione
- FAQ → adicione/remova perguntas
- WhatsApp link e telefone → atualize `whatsappUrl` e `phoneDisplay`
- SEO → atualize `seoTitle`, `seoDesc`, `siteUrl`

---

## 🖼️ Imagens

Coloque as imagens em `/public/images/`:

| Arquivo | Uso | Tamanho sugerido |
|---------|-----|------------------|
| `product-hero.jpg` | Packshot principal (Hero) | 380×480px+ |
| `og-murure.jpg` | OpenGraph / redes sociais | 1200×630px |

---

## ⚖️ Compliance

Este projeto **não contém** alegações médicas proibidas:
- ❌ Sem "cura", "trata", "regenera", "anti-inflamatório"
- ❌ Sem "antes/depois" como prova de resultado
- ✅ Linguagem de suporte/bem-estar/conforto
- ✅ Aviso: "Produto natural. Não é medicamento."
- ✅ Disclaimer de depoimentos: "Resultados variam."

---

## 📞 Contato/Suporte

WhatsApp: **(11) 93029-0209**
