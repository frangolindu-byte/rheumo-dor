"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-24 px-5 bg-white">
            <div className="max-w-2xl mx-auto">
                <Reveal>
                    <p className="text-center text-brand-green font-bold text-xs tracking-widest uppercase mb-3">Dúvidas</p>
                    <h2 className="font-heading font-black text-center text-3xl sm:text-4xl text-brand-dark mb-14">
                        Perguntas <span className="text-brand-mid">Frequentes</span>
                    </h2>
                </Reveal>

                <div className="space-y-3">
                    {SITE.faq.map((item, i) => (
                        <Reveal key={i} delay={i * 0.06}>
                            <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                                    aria-expanded={open === i}
                                >
                                    <span className="font-heading font-bold text-brand-dark text-sm">{item.q}</span>
                                    <span className={`text-brand-green transition-transform duration-300 shrink-0 text-xl font-bold ${open === i ? "rotate-45" : ""}`}>+</span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
