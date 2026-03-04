"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function Benefits() {
    return (
        <section className="py-24 px-5 bg-[#f4f7f4]">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <p className="text-center text-brand-green font-bold text-xs tracking-widest uppercase mb-3">Por que escolher</p>
                    <h2 className="font-heading font-black text-center text-3xl sm:text-4xl text-brand-dark mb-3">
                        O que o <span className="text-brand-mid">Mururé Extra</span> oferece
                    </h2>
                    <p className="text-center text-gray-500 text-sm mb-14 max-w-xl mx-auto">
                        Suporte natural para o bem-estar diário. Resultados variam conforme organismo e hábitos.
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SITE.benefits.map((b, i) => (
                        <Reveal key={i} delay={i * 0.08} direction="scale">
                            <motion.div
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 cursor-default transition-shadow hover:shadow-xl hover:shadow-green-100/60"
                            >
                                <span className="text-4xl mb-4 block">{b.emoji}</span>
                                <h3 className="font-heading font-black text-brand-dark text-base mb-2">{b.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-brand-green to-brand-gold rounded-full group-hover:w-20 transition-all duration-500" />
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
