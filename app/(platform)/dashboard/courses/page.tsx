import { PlayCircle, Lock, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock Data mais completo
const allCourses = [
    {
        id: 1,
        title: "Fundamentos do Copywriting",
        description: "A base sólida para escrever textos que vendem.",
        progress: 100,
        totalClasses: 8,
        image: "/card-1.webp", // Reutilizando suas imagens
        status: "completed"
    },
    {
        id: 2,
        title: "Gatilhos Mentais & Psicologia",
        description: "Como entrar na mente do seu cliente.",
        progress: 45,
        totalClasses: 12,
        image: "/card-2.webp",
        status: "in_progress"
    },
    {
        id: 3,
        title: "Estruturas de Lançamento",
        description: "O passo a passo de campanhas milionárias.",
        progress: 0,
        totalClasses: 15,
        image: "/card-3.webp",
        status: "locked"
    },
    {
        id: 4,
        title: "Email Marketing Estratégico",
        description: "Crie sequências que abrem carteiras.",
        progress: 0,
        totalClasses: 6,
        image: "/influencer-1.webp",
        status: "locked"
    }
];

export default function CoursesPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white">Minhas Aulas</h1>
                    <p className="text-gray-400 mt-2">Continue sua jornada rumo à excelência.</p>
                </div>

                {/* Resumo Geral */}
                <div className="flex gap-4">
                    <div className="bg-[#1E1E1E] px-4 py-2 rounded-lg border border-white/5 text-center">
                        <span className="block text-xl font-bold text-brand-gold">4</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Módulos</span>
                    </div>
                    <div className="bg-[#1E1E1E] px-4 py-2 rounded-lg border border-white/5 text-center">
                        <span className="block text-xl font-bold text-green-500">12</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Aulas Feitas</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allCourses.map((course) => (
                    <div key={course.id} className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all group flex flex-col md:flex-row">

                        {/* Imagem */}
                        <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0">
                            <Image src={course.image} alt={course.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                            {/* Ícone de Status na Imagem */}
                            <div className="absolute top-2 left-2">
                                {course.status === 'completed' && <div className="bg-green-500/90 text-white p-1 rounded-full"><CheckCircle size={16} /></div>}
                                {course.status === 'locked' && <div className="bg-gray-800/90 text-gray-400 p-1 rounded-full"><Lock size={16} /></div>}
                            </div>
                        </div>

                        {/* Conteúdo */}
                        <div className="p-6 flex flex-col justify-between w-full">
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">{course.title}</h3>
                                <p className="text-sm text-gray-400 line-clamp-2">{course.description}</p>
                            </div>

                            <div className="mt-6 space-y-4">
                                {/* Barra de Progresso */}
                                <div>
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span>{course.progress}% concluído</span>
                                        <span>{course.totalClasses} aulas</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-gold transition-all duration-1000" style={{ width: `${course.progress}%` }}></div>
                                    </div>
                                </div>

                                {/* Botão de Ação */}
                                {course.status === 'locked' ? (
                                    <button disabled className="w-full py-2 rounded-lg border border-white/5 text-gray-500 text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2">
                                        <Lock size={16} /> Indisponível
                                    </button>
                                ) : (
                                    <Link href={`/watch/aula-1`} className="block">
                                        <button className="w-full bg-white/5 hover:bg-brand-gold hover:text-[#1C1512] text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:bg-brand-gold group-hover:text-[#1C1512]">
                                            <PlayCircle size={18} />
                                            {course.progress > 0 ? 'Continuar' : 'Iniciar Módulo'}
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}