
import type { Metadata } from "next";
import Sidebar from "./ui/Sidebar";

export const metadata: Metadata = {
    title: "Área do Aluno | Copywriter de Excelência",
    description: "Assista suas aulas e domine o copywriting.",
};

export default function PlatformLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Forçamos o background escuro para toda a área da plataforma
        <div className="min-h-screen bg-[#121212] text-white flex">

            {/* Sidebar Fixa */}
            <div className="hidden md:block w-48 shrink-0">
                <Sidebar />
            </div>

            {/* Conteúdo Principal */}
            <main className="flex-1 min-h-screen relative overflow-x-hidden md:pl-20">
                {/* Topo Mobile (Opcional - caso queira implementar depois para celular) */}
                <div className="md:hidden p-4 border-b border-white/10 bg-[#0A0A0A] flex justify-between items-center sticky top-0 z-40">
                    <span className="font-serif text-brand-gold">Menu Mobile aqui</span>
                </div>

                {/* Área de renderização das páginas (Dashboard, Aulas, etc) */}
                <div className="p-6 md:p-10 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}