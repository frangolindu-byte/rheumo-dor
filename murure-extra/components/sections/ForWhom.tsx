"use client";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function ForWhom() {
    return (
        <section className="py-24 px-5 bg-gradient-to-br from-[#0d2414] to-[#1a3d20]">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <p className="text-center text-brand-amber font-bold text-xs tracking-widest uppercase mb-3">Para quem</p>
                    <h2 className="font-heading font-black text-center text-3xl sm:text-4xl text-white mb-14">
                        Faz sentido para <span className="text-brand-amber">você?</span>
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* ─ Para quem ─ */}
                    <Reveal direction="left">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8">
                            <h3 className="font-heading font-black text-brand-light text-lg mb-5">✅ Pode fazer sentido para quem:</h3>
                            <ul className="space-y-3">
                                {SITE.forWhom.map((item, i) => (
                                    <li key={i} className="text-brand-light/80 text-sm leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* ─ Atenção ─ */}
                    <Reveal direction="right">
                        <div className="bg-amber-500/8 border border-amber-400/25 rounded-3xl p-8">
                            <h3 className="font-heading font-black text-brand-amber text-lg mb-5">⚠️ Atenção:</h3>
                            <p className="text-brand-light/75 text-sm leading-relaxed">{SITE.notForWhom}</p>
                            <div className="mt-6 p-4 bg-white/5 rounded-2xl">
                                <p className="text-brand-light/60 text-xs leading-relaxed">
                                    Em caso de dúvida, sempre consulte um profissional de saúde antes de iniciar o uso de qualquer suplemento.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
