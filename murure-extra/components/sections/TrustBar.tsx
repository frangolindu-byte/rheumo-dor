"use client";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export default function TrustBar() {
    return (
        <section className="bg-brand-gold py-4 px-5">
            <Reveal>
                <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                    {SITE.trustItems.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-brand-dark font-bold text-sm whitespace-nowrap">
                            <TrustIcon name={item.icon} />
                            {item.text}
                        </div>
                    ))}
                </div>
            </Reveal>
            <p className="text-center text-brand-dark/60 text-xs mt-2 font-medium">
                Resultados variam conforme organismo e hábitos.
            </p>
        </section>
    );
}

function TrustIcon({ name }: { name: string }) {
    const cls = "w-4 h-4 shrink-0";
    switch (name) {
        case "truck":
            return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" /></svg>;
        case "shield-check":
            return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
        case "message":
            return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
        case "leaf":
            return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 3s5 0 10 5c5 5 5 10 5 10S15 18 10 13C5 8 5 3 5 3z" /><path d="M5 3L3 21" /></svg>;
        case "star":
            return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
        default:
            return <span>•</span>;
    }
}
