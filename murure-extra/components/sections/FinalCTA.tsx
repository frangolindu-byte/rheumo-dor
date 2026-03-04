"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

const WA_SVG = (
    <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6 shrink-0">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.74.7 5.38 2.04 7.74L.5 31.5l8-2.02A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.63 21.97c-.32.9-1.85 1.72-2.56 1.8-.66.08-1.5.12-2.42-.15a22.2 22.2 0 01-2.2-.8C13.1 22.1 10.5 19 10.2 18.6c-.28-.38-2.3-3.04-2.3-5.82 0-2.78 1.46-4.14 1.98-4.7.52-.57 1.14-.72 1.52-.72l1.08.02c.34.02.8-.13 1.26.96.47 1.1 1.6 3.88 1.74 4.16.14.28.22.6.04.96-.18.36-.27.58-.54.9-.27.32-.57.7-.82.94-.27.26-.55.54-.24 1.06.32.52 1.4 2.3 3 3.72 2.06 1.82 3.8 2.4 4.34 2.66.54.26.86.22 1.18-.13.32-.35 1.36-1.58 1.72-2.12.36-.54.72-.44 1.22-.26.5.18 3.16 1.48 3.7 1.76.54.27.9.4 1.03.62.14.2.14 1.16-.18 2.06z" />
    </svg>
);

export default function FinalCTA() {
    return (
        <section className="relative py-28 px-5 overflow-hidden bg-gradient-to-br from-[#07180a] via-[#112C1B] to-[#0d2414]">
            {/* Glow bg */}
            <div className="absolute inset-0 bg-gradient-radial from-brand-gold/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <Reveal>
                    <span className="inline-block bg-brand-amber/20 border border-brand-amber/30 text-brand-amber text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                        🌿 Pronto para começar?
                    </span>
                    <h2 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight mb-5">
                        Pronto para cuidar melhor<br />
                        <span className="bg-gradient-to-r from-brand-amber to-brand-gold bg-clip-text text-transparent">
                            da sua rotina?
                        </span>
                    </h2>
                    <p className="text-brand-light/75 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                        Fale com nossa equipe pelo WhatsApp. Atendimento rápido e personalizado.
                    </p>
                </Reveal>

                <Reveal delay={0.15}>
                    {/* Phone badge */}
                    <div className="inline-flex items-center gap-3 bg-white/8 border border-white/15 backdrop-blur-sm rounded-full px-6 py-3 text-white font-bold text-base mb-8">
                        📱 {SITE.phoneDisplay} &nbsp;·&nbsp; {SITE.phoneDisplayFull}
                    </div>

                    <br />

                    <a
                        href={SITE.whatsappUrl}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-green-900/50 transition-all hover:scale-105 mt-4 animate-glow-pulse"
                    >
                        {WA_SVG} Chame agora no WhatsApp
                    </a>
                </Reveal>

                {/* Trust badges */}
                <Reveal delay={0.25}>
                    <div className="flex flex-wrap gap-4 justify-center mt-10">
                        {["🔒 Compra Segura", "🤝 Suporte Humano", "🌿 100% Natural"].map((b, i) => (
                            <span key={i} className="text-brand-light/60 text-xs font-semibold bg-white/5 border border-white/10 px-4 py-2 rounded-full">{b}</span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
