"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/data/site";

export default function FloatingWA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => { window.removeEventListener("scroll", onScroll); clearTimeout(timer); };
    }, []);

    return (
        <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className={`fixed bottom-6 right-5 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
            {/* Ping */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-wa-ping opacity-60" />
            {/* WA Icon */}
            <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8 relative z-10">
                <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.74.7 5.38 2.04 7.74L.5 31.5l8-2.02A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.63 21.97c-.32.9-1.85 1.72-2.56 1.8-.66.08-1.5.12-2.42-.15a22.2 22.2 0 01-2.2-.8C13.1 22.1 10.5 19 10.2 18.6c-.28-.38-2.3-3.04-2.3-5.82 0-2.78 1.46-4.14 1.98-4.7.52-.57 1.14-.72 1.52-.72l1.08.02c.34.02.8-.13 1.26.96.47 1.1 1.6 3.88 1.74 4.16.14.28.22.6.04.96-.18.36-.27.58-.54.9-.27.32-.57.7-.82.94-.27.26-.55.54-.24 1.06.32.52 1.4 2.3 3 3.72 2.06 1.82 3.8 2.4 4.34 2.66.54.26.86.22 1.18-.13.32-.35 1.36-1.58 1.72-2.12.36-.54.72-.44 1.22-.26.5.18 3.16 1.48 3.7 1.76.54.27.9.4 1.03.62.14.2.14 1.16-.18 2.06z" />
            </svg>
        </a>
    );
}
