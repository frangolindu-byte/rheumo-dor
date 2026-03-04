"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/data/site";

const WA_SVG = (
    <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6 shrink-0">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.74.7 5.38 2.04 7.74L.5 31.5l8-2.02A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.63 21.97c-.32.9-1.85 1.72-2.56 1.8-.66.08-1.5.12-2.42-.15a22.2 22.2 0 01-2.2-.8C13.1 22.1 10.5 19 10.2 18.6c-.28-.38-2.3-3.04-2.3-5.82 0-2.78 1.46-4.14 1.98-4.7.52-.57 1.14-.72 1.52-.72l1.08.02c.34.02.8-.13 1.26.96.47 1.1 1.6 3.88 1.74 4.16.14.28.22.6.04.96-.18.36-.27.58-.54.9-.27.32-.57.7-.82.94-.27.26-.55.54-.24 1.06.32.52 1.4 2.3 3 3.72 2.06 1.82 3.8 2.4 4.34 2.66.54.26.86.22 1.18-.13.32-.35 1.36-1.58 1.72-2.12.36-.54.72-.44 1.22-.26.5.18 3.16 1.48 3.7 1.76.54.27.9.4 1.03.62.14.2.14 1.16-.18 2.06z" />
    </svg>
);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#07180a] via-[#112C1B] to-[#193d22] px-5 pt-20 pb-32">
            {/* Bokeh background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute rounded-full opacity-10 blur-3xl animate-float"
                        style={{
                            width: `${80 + i * 40}px`, height: `${80 + i * 40}px`,
                            background: i % 2 === 0 ? "#67925D" : "#C8962A",
                            left: `${(i * 137) % 100}%`, top: `${(i * 89) % 100}%`,
                            animationDelay: `${i * 0.7}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-14 items-center">
                {/* ── Text ── */}
                <div className="text-center lg:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}
                        className="inline-block bg-brand-gold/20 border border-brand-gold/40 text-brand-amber text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
                    >
                        🌿 Suplemento Natural Premium
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}
                        className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5"
                    >
                        {SITE.productName}:{" "}
                        <span className="bg-gradient-to-r from-brand-amber to-brand-gold bg-clip-text text-transparent">
                            {SITE.tagline}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}
                        className="text-brand-light/80 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                    >
                        {SITE.subtagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                    >
                        <a
                            href={SITE.whatsappUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-bold text-base px-7 py-4 rounded-2xl shadow-lg shadow-green-900/40 transition-all hover:scale-105 animate-glow-pulse"
                        >
                            {WA_SVG} Falar no WhatsApp Agora
                        </a>
                        <a
                            href="#ingredients"
                            className="inline-flex items-center justify-center gap-2 border border-brand-light/30 text-brand-light hover:border-brand-gold hover:text-brand-amber text-sm font-semibold px-6 py-4 rounded-2xl backdrop-blur-sm transition-all"
                        >
                            Ver Composição ↓
                        </a>
                    </motion.div>

                    {/* Badges */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .5 }}
                        className="flex flex-wrap gap-3 justify-center lg:justify-start"
                    >
                        {SITE.badges.map((b, i) => (
                            <div key={i} className="flex flex-col items-start gap-0.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                                <span className="text-white font-bold text-sm">{b.label}</span>
                                {"note" in b && <span className="text-white/40 text-xs">{b.note}</span>}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Product image ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }}
                    className="flex justify-center items-center relative"
                >
                    {/* Halo */}
                    <div className="absolute w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl" />
                    <div className="absolute w-56 h-56 rounded-full bg-brand-green/15 blur-2xl animate-float" />

                    <div className="relative z-10 animate-float">
                        <Image
                            src="/images/product-hero.jpg"
                            alt="Mururé Extra – Frasco do suplemento natural"
                            width={380}
                            height={480}
                            priority
                            className="rounded-3xl object-cover shadow-2xl shadow-green-950/70 ring-2 ring-brand-gold/25"
                        />
                        {/* Badge flutuante */}
                        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-brand-amber to-brand-gold text-brand-dark font-black text-xs px-4 py-2 rounded-full shadow-lg shadow-amber-900/40 animate-float" style={{ animationDelay: "0.5s" }}>
                            ⭐ MAIS VENDIDO
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll arrow */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-50">
                <span className="block w-0.5 h-6 bg-brand-light/40 rounded" />
                <span className="border-r-2 border-b-2 border-brand-light/60 w-3 h-3 rotate-45 -mt-1" />
            </div>
        </section>
    );
}
