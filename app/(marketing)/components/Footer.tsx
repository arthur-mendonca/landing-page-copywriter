import { PenTool } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#231815] text-white py-12 border-t border-brand-gold/10">
            <div className="flex flex-col items-center justify-center space-y-6">

                {/* Logo */}
                <div className="flex items-center gap-2 opacity-80">
                    <PenTool size={24} className="text-brand-cream" />
                    <div className="text-left leading-none">
                        <span className="block text-xs uppercase tracking-widest text-brand-gold">Curso de </span>
                        <span className="font-serif text-lg italic">copywriter</span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-[10px] md:text-xs text-gray-500 uppercase tracking-widest space-y-2">
                    <p>Desenvolvido por: <span className="text-brand-gold">Arthur Mendonça</span></p>
                </div>
            </div>
        </footer>
    );
}