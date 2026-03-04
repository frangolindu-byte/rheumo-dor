"use client";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function Ingredients() {
    return (
        <section id="ingredients" className="py-24 px-5 bg-gradient-to-br from-[#0d2414] to-[#193d22] relative overflow-hidden">
            {/* Molecular lines bg (SVG pattern) */}
            <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="#67925D" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            <div className="relative z-10 max-w-6xl mx-auto">
                <Reveal>
                    <p className="text-center text-brand-amber font-bold text-xs tracking-widest uppercase mb-3">Composição</p>
                    <h2 className="font-heading font-black text-center text-3xl sm:text-4xl text-white mb-3">
                        O que há dentro de cada cápsula
                    </h2>
                    <p className="text-center text-brand-light/60 text-sm mb-4 max-w-xl mx-auto">
                        Ingredientes de origem natural. Composição completa disponível no rótulo do produto.
                    </p>
                    <p className="text-center text-brand-amber/70 text-xs mb-14 font-medium">
                        ⚠️ {SITE.ingredientsNote}
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {SITE.ingredients.map((ing, i) => (
                        <Reveal key={i} delay={i * 0.1} direction="scale">
                            <div className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 hover:border-brand-green/50 hover:bg-white/8 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30 text-left">
                                <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4 text-brand-amber text-lg group-hover:scale-110 transition-transform">
                                    🌿
                                </div>
                                <h3 className="font-heading font-black text-white text-sm mb-1">{ing.name}</h3>
                                <p className="text-brand-light/60 text-xs leading-relaxed">{ing.desc}</p>
                                {ing.placeholder && (
                                    <span className="inline-block mt-3 text-brand-amber/50 text-xs border border-brand-amber/20 rounded px-2 py-0.5">✏️ Editável</span>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
