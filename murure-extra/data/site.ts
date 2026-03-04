// ─────────────────────────────────────────────
//  data/site.ts  –  Edite aqui para personalizar
// ─────────────────────────────────────────────

export const SITE = {
    /* ── Produto ── */
    productName: "Mururé Extra",
    tagline: "Suporte natural para o seu bem-estar diário",
    subtagline: "Blend herbal premium. Praticidade em cápsulas.",
    disclaimer: "Produto natural. Não é medicamento. Não substitui alimentação equilibrada e hábitos saudáveis.",

    /* ── Contato / Compra ── */
    whatsappUrl: "https://wa.me/5511930290209?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Mururé%20Extra.",
    phoneDisplay: "(11) 93029-0209",
    phoneDisplayFull: "+55 11 93029-0209",

    /* ── SEO / OpenGraph ── */
    siteUrl: "https://murure-extra.com.br",
    seoTitle: "Mururé Extra – Suporte Natural para Bem-Estar | Suplemento Herbal",
    seoDesc: "Mururé Extra é um blend herbal natural para apoio ao conforto muscular e articular no dia a dia. Suplemento em cápsulas. Fale pelo WhatsApp.",
    ogImage: "/images/og-murure.jpg",

    /* ── Selos do Hero ── */
    badges: [
        { label: "100% Natural*", note: "*conferir no rótulo" },
        { label: "30 Cápsulas por frasco*", note: "*conferir no rótulo" },
        { label: "Atendimento pelo WhatsApp" },
    ],

    /* ── Barra de confiança ── */
    trustItems: [
        { icon: "shield-check", text: "Compra Segura" },
        { icon: "message", text: "Suporte Humano WhatsApp" },
        { icon: "leaf", text: "100% Natural" },
        { icon: "star", text: "Satisfação do Cliente" },
    ],

    /* ── Benefícios ── */
    benefits: [
        { emoji: "💪", title: "Conforto Muscular e Articular", desc: "Suporte natural para o conforto do corpo durante a rotina diária." },
        { emoji: "⚡", title: "Bem-estar para Rotina Ativa", desc: "Formulado para quem tem uma vida dinâmica e precisa de suporte contínuo." },
        { emoji: "🔄", title: "Suporte Pós-Esforço", desc: "Auxilia o corpo após esforços físicos do cotidiano. Resultados variam conforme organismo." },
        { emoji: "💊", title: "Praticidade em Cápsulas", desc: "Fácil de incluir na rotina. Leve para qualquer lugar." },
        { emoji: "🌿", title: "Composição Herbal Selecionada", desc: "Ingredientes de origem natural, cuidadosamente selecionados." },
        { emoji: "🤝", title: "Atendimento Próximo", desc: "Suporte direto pelo WhatsApp para tirar dúvidas sobre o produto." },
    ],

    /* ── Ingredientes / Composição ── */
    ingredients: [
        { name: "Extratos Vegetais", desc: "Compostos de origem vegetal selecionados.", placeholder: true },
        { name: "Compostos Naturais", desc: "Ativos naturais com função de suporte.", placeholder: true },
        { name: "Blend Herbal", desc: "Mistura equilibrada de ervas naturais.", placeholder: true },
        { name: "Vitaminas e Minerais", desc: "Micronutrientes complementares.", placeholder: true },
    ],
    ingredientsNote: "Composição completa: consulte o rótulo do produto. Informações acima são placeholders editáveis.",

    /* ── Como usar (passo a passo) ── */
    steps: [
        { num: "01", title: "Inclua na Rotina", desc: "Tome conforme indicação do rótulo. Consulte o profissional de saúde se necessário." },
        { num: "02", title: "Mantenha Consistência", desc: "Para melhores resultados, use regularmente. A consistência é fundamental." },
        { num: "03", title: "Acompanhe seu Corpo", desc: "Observe como seu organismo responde. Resultados variam conforme hábitos e organismo." },
    ],

    /* ── Para quem é ── */
    forWhom: [
        "✅  Quem busca bem-estar e conforto no dia a dia",
        "✅  Pessoas com rotina ativa ou trabalho físico",
        "✅  Quem quer praticidade: suplemento em cápsulas",
        "✅  Adultos saudáveis que buscam suporte natural",
    ],
    notForWhom: "Gestantes, lactantes, crianças e pessoas com condições de saúde devem consultar um profissional de saúde antes de usar.",

    /* ── Depoimentos ── */
    testimonials: [
        { name: "Maria S., 54 anos", city: "São Paulo – SP", text: "\"Senti mais conforto na rotina após incluir o Mururé Extra no meu dia a dia. Ótima praticidade!\"" },
        { name: "Carlos R., 48 anos", city: "Guarulhos – SP", text: "\"Fácil de tomar e o atendimento pelo WhatsApp foi excelente. Voltarei a comprar.\"" },
        { name: "João P., 37 anos", city: "Campinas – SP", text: "\"Após semanas de uso consistente, percebi mais disposição no meu dia a dia. Recomendo.\"" },
        { name: "Ana L., 61 anos", city: "Belo Horizonte – MG", text: "\"Produto simples, natural e prático. Atendimento rápido e entrega no prazo.\"" },
    ],
    testimonialsDisclaimer: "Relatos individuais. Resultados variam conforme organismo e hábitos de vida.",

    /* ── FAQ ── */
    faq: [
        {
            q: "É medicamento?",
            a: "Não. O Mururé Extra é um suplemento natural. Não é medicamento e não cura, trata ou previne doenças.",
        },
        {
            q: "Em quanto tempo percebo resultados?",
            a: "Isso varia conforme organismo e hábitos de cada pessoa. Não garantimos prazo específico de resultado.",
        },
        {
            q: "Como comprar?",
            a: "Entre em contato pelo WhatsApp (11) 93029-0209. Nossa equipe responde rapidamente.",
        },
        {
            q: "Como é feita a entrega?",
            a: "Entrega para todo o Brasil. Prazo a confirmar com nossa equipe ao fazer o pedido.",
        },
        {
            q: "Posso tomar com outros suplementos ou medicamentos?",
            a: "Recomendamos consultar um profissional de saúde antes de combinar suplementos ou medicamentos.",
        },
        {
            q: "Gestantes e crianças podem usar?",
            a: "Não recomendamos para gestantes, lactantes, crianças ou pessoas com condições de saúde sem orientação médica.",
        },
    ],
} as const;
