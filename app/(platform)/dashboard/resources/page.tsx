import { FileText, Download, FileSpreadsheet, FileBox } from "lucide-react";

const resources = [
    {
        category: "Apostilas & Resumos",
        items: [
            { id: 1, name: "Guia Definitivo do Copywriter.pdf", size: "12.5 MB", type: "pdf" },
            { id: 2, name: "Glossário de Termos do Marketing.pdf", size: "2.1 MB", type: "pdf" },
        ]
    },
    {
        category: "Templates & Scripts",
        items: [
            { id: 3, name: "Script de Vendas para WhatsApp.docx", size: "500 KB", type: "doc" },
            { id: 4, name: "Estrutura de Página de Vendas.fig", size: "45 MB", type: "fig" },
        ]
    },
    {
        category: "Ferramentas",
        items: [
            { id: 5, name: "Calculadora de LTV e CAC.xlsx", size: "1.2 MB", type: "xls" },
        ]
    }
];

export default function ResourcesPage() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Materiais de Apoio</h1>
            <p className="text-gray-400 mb-10">Baixe os arquivos complementares para acelerar seus resultados.</p>

            <div className="space-y-10">
                {resources.map((section, idx) => (
                    <section key={idx}>
                        <h2 className="text-xl font-medium text-brand-gold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                            {section.category}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.items.map((item) => (
                                <div key={item.id} className="bg-[#1E1E1E] p-4 rounded-xl border border-white/5 hover:border-brand-gold/40 transition-all group cursor-pointer flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-brand-brown/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                                            {item.type === 'xls' ? <FileSpreadsheet size={24} /> :
                                                item.type === 'pdf' ? <FileText size={24} /> : <FileBox size={24} />}
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm group-hover:text-brand-gold transition-colors">{item.name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.size} • Clique para baixar</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-2 rounded-full text-gray-400 group-hover:bg-brand-gold group-hover:text-black transition-all">
                                        <Download size={18} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}