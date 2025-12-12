import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Copywriter de Excelência | Juliana Montes",
    description: "Torne-se um copywriter de sucesso do zero com nossa metodologia validada.",
};

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-brand-brown text-brand-dark min-h-screen selection:bg-brand-gold/30 max-w-7xl mx-auto">
            {/* Este layout aplica o tema "Marketing" (fundo claro) 
        a todas as páginas dentro do grupo (marketing) 
      */}
            {children}
        </div>
    );
}