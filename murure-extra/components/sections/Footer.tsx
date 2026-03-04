"use client";
import { SITE } from "@/data/site";

export default function Footer() {
    return (
        <footer className="bg-[#060e07] text-white/40 text-center py-12 px-5 text-xs leading-loose">
            <div className="max-w-3xl mx-auto">
                <p className="text-white font-black font-heading text-lg mb-1">{SITE.productName}</p>
                <p className="text-white/50 text-sm mb-5">Suplemento Natural Premium</p>

                <div className="flex flex-wrap gap-x-6 gap-y-1 justify-center text-white/30 text-xs mb-6">
                    <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-white/60 transition-colors">Termos de Uso</a>
                    <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Contato WhatsApp</a>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-1.5">
                    <p>⚠️ {SITE.disclaimer}</p>
                    <p>Não substitui alimentação equilibrada e hábitos saudáveis.</p>
                    <p>Consulte um profissional de saúde em caso de dúvidas.</p>
                    <p className="mt-3 text-white/20">© {new Date().getFullYear()} {SITE.productName}. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
