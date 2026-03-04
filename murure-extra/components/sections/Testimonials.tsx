"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const count = SITE.testimonials.length;

    return (
        <section className="py-24 px-5 bg-[#f4f7f4]">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <p className="text-center text-brand-green font-bold text-xs tracking-widest uppercase mb-3">Clientes</p>
                    <h2 className="font-heading font-black text-center text-3xl sm:text-4xl text-brand-dark mb-4">
                        O que dizem nossos <span className="text-brand-mid">clientes</span> ⭐
                    </h2>
                    <p className="text-center text-gray-400 text-xs mb-12">{SITE.testimonialsDisclaimer}</p>
                </Reveal>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
                    {SITE.testimonials.map((t, i) => (
                        <Reveal key={i} delay={i * 0.1} direction="scale">
                            <div
                                className={`rounded-3xl p-7 border cursor-pointer transition-all duration-300 relative overflow-hidden ${active === i ? "bg-brand-mid border-brand-mid shadow-xl shadow-green-900/20 text-white" : "bg-white border-gray-100 hover:border-brand-green/40 hover:shadow-md"}`}
                                onClick={() => setActive(i)}
                            >
                                <div className="absolute -bottom-3 -right-3 text-7xl opacity-5 font-serif leading-none">❝</div>
                                <div className="flex mb-3 text-brand-gold">{"★".repeat(5)}</div>
                                <p className={`text-sm leading-relaxed mb-4 italic ${active === i ? "text-white/90" : "text-gray-600"}`}>{t.text}</p>
                                <div>
                                    <span className={`font-bold text-sm font-heading ${active === i ? "text-brand-light" : "text-brand-mid"}`}>{t.name}</span>
                                    <span className={`block text-xs mt-0.5 ${active === i ? "text-white/50" : "text-gray-400"}`}>📍 {t.city}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <p className="text-center text-gray-400 text-xs">
                    ⚠️ {SITE.testimonialsDisclaimer}
                </p>
            </div>
        </section>
    );
}
