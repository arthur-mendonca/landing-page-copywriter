import { Play, Clock, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dados simulados (Mock Data) para preencher a tela
const continueWatching = {
    id: 101,
    module: "Módulo 1: Fundamentos",
    title: "Aula 03: A Psicologia por trás do Clique",
    description: "Entenda os gatilhos mentais que fazem o cérebro humano tomar decisões instantâneas e como aplicá-los nos seus textos hoje mesmo.",
    progress: 65, // % assistido
    duration: "12m 40s",
    image: "/card-1.webp"
};

const modules = [
    {
        id: 1,
        title: "O Início da Jornada",
        classes: 8,
        duration: "4h 20m",
        image: "/card-1.webp",
        status: "Iniciado"
    },
    {
        id: 2,
        title: "Textos Irresistíveis",
        classes: 12,
        duration: "6h 15m",
        image: "/card-2.webp",
        status: "Bloqueado"
    },
    {
        id: 3,
        title: "Copywriting de Alto Nível",
        classes: 10,
        duration: "5h 00m",
        image: "/card-3.webp",
        status: "Bloqueado"
    },
    {
        id: 4,
        title: "Vendas & Negociação",
        classes: 6,
        duration: "3h 45m",
        image: "/influencer-1.webp", // Reutilizando imagem
        status: "Bloqueado"
    }
];

export default function DashboardPage() {
    return (
        <div className="space-y-12 pb-20">

            {/* 1. Hero Section (Continue Assistindo) */}
            <section className="relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden group shadow-2xl shadow-black/50 border border-white/5">
                {/* Imagem de Fundo */}
                <Image
                    src={continueWatching.image}
                    alt="Aula em destaque"
                    fill
                    className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
                    priority
                />

                {/* Overlay Gradiente (Efeito Cinema) */}
                <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-[#121212]/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-[#121212] via-[#121212]/40 to-transparent" />

                {/* Conteúdo do Hero */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col items-start space-y-6">

                    {/* Badge de "Continue Assistindo" */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        <Play size={12} className="fill-brand-gold" />
                        Continue Assistindo
                    </div>

                    <div className="max-w-2xl space-y-2">
                        <h3 className="text-white/70 text-lg md:text-xl font-light">{continueWatching.module}</h3>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                            {continueWatching.title}
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base line-clamp-2 md:line-clamp-none max-w-lg">
                            {continueWatching.description}
                        </p>
                    </div>

                    {/* Botões de Ação e Barra de Progresso */}
                    <div className="w-full max-w-md space-y-4">
                        <div className="flex items-center gap-4">
                            <button className="flex-1 bg-brand-gold hover:bg-[#D4B494] text-[#1C1512] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg hover:shadow-brand-gold/20">
                                <Play size={20} className="fill-[#1C1512]" />
                                Assistir Agora
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl backdrop-blur-md transition-colors border border-white/10">
                                <Star size={20} />
                            </button>
                        </div>

                        {/* Barra de Progresso */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>Progresso da aula</span>
                                <span>{continueWatching.progress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-gold shadow-[0_0_10px_rgba(192,160,128,0.5)]"
                                    style={{ width: `${continueWatching.progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Lista de Módulos (Carrossel Horizontal) */}
            <section>
                <div className="flex justify-between items-end mb-6 px-2">
                    <h2 className="text-2xl font-serif font-semibold text-white">Seus Módulos</h2>
                    <Link href="/dashboard/courses" className="text-sm text-brand-gold hover:text-white transition-colors flex items-center gap-1">
                        Ver todos <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((mod) => (
                        <div
                            key={mod.id}
                            className="group relative bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={mod.image}
                                    alt={mod.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-90" />

                                {/* Botão de Play que aparece no Hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 bg-brand-gold/90 rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                        <Play size={20} className="fill-[#1C1512] text-[#1C1512] ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Informações */}
                            <div className="p-5 space-y-3">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold/80 bg-brand-gold/10 px-2 py-1 rounded">
                                        Módulo 0{mod.id}
                                    </span>
                                    {mod.status === "Bloqueado" && (
                                        <span className="text-xs text-gray-500 flex items-center gap-1">🔒</span>
                                    )}
                                </div>

                                <h3 className="text-lg font-medium text-white group-hover:text-brand-gold transition-colors line-clamp-1">
                                    {mod.title}
                                </h3>

                                <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 border-t border-white/5">
                                    <div className="flex items-center gap-1.5">
                                        <Play size={12} /> {mod.classes} Aulas
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={12} /> {mod.duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}