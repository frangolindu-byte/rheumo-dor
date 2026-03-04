"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ImageBanner() {
    return (
        <section className="w-full bg-gradient-to-br from-[#07180a] via-[#112C1B] to-[#0d2414] py-16 px-5">
            <Reveal>
                <div className="max-w-4xl mx-auto">
                    <Image
                        src="/images/13.jpeg"
                        alt="Mururé Extra – Produto natural premium"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-3xl shadow-2xl shadow-green-950/70 ring-2 ring-brand-gold/25 object-cover"
                    />
                </div>
            </Reveal>
        </section>
    );
}
