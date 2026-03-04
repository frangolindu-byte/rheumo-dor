"use client";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function HowItWorks() {
    return (
        <section className="py-24 px-5 bg-white">
            <div className="max-w-5xl mx-auto">
                <Reveal>
                    <p className="text-center text-brand-green font-bold text-xs tracking-widest uppercase mb-3">Passo a Passo</p>
                    <h2 className="font-heading font-black text-center text-3xl sm:text-4xl text-brand-dark mb-14">
                        Como funciona na <span className="text-brand-mid">sua rotina</span>
                    </h2>
                </Reveal>

                <div className="relative">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-px h-[calc(100%-80px)] bg-gradient-to-b from-brand-green/40 to-transparent" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {SITE.steps.map((step, i) => (
                            <Reveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                                <div className="relative flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-mid to-brand-green flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-900/20 mb-5">
                                        {step.num}
                                    </div>
                                    <h3 className="font-heading font-black text-brand-dark text-base mb-2">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.5}>
                    <p className="text-center text-amber-600 text-xs mt-10 font-semibold">
                        ⚠️ Não substitui orientação profissional. Consulte um médico ou nutricionista.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
