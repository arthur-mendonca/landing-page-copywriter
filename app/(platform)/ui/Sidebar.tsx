"use client";

import { Home, PlayCircle, BookOpen, MessageCircle, Settings, LogOut, PenTool } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { icon: Home, label: "Início", href: "/dashboard" },
    { icon: PlayCircle, label: "Minhas Aulas", href: "/dashboard/courses" },
    { icon: BookOpen, label: "Materiais", href: "/dashboard/resources" },
    { icon: MessageCircle, label: "Comunidade", href: "/dashboard/community" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-[#0A0A0A] border-r border-white/10 flex flex-col fixed left-0 top-0 z-50">
            {/* Logo Area */}
            <div className="p-8 border-b border-white/5">
                <div className="flex items-center gap-2 text-brand-gold">
                    <PenTool size={24} />
                    <div>
                        <span className="block text-[10px] uppercase tracking-widest text-gray-500 leading-none">Plataforma</span>
                        <span className="font-serif text-xl font-bold tracking-tight text-white">Excelência</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${isActive
                                ? "bg-brand-gold/10 text-brand-gold"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <item.icon size={20} className={isActive ? "stroke-[2.5px]" : "stroke-[1.5px]"} />
                            <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>

                            {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(192,160,128,0.5)]"></div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User / Footer */}
            <div className="p-4 border-t border-white/5">
                <button
                    className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                >
                    <Settings size={18} /> Configurações
                </button>
                <button
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-900/10 rounded-lg transition-colors text-sm font-medium mt-1"
                >
                    <LogOut size={18} /> Sair
                </button>
            </div>
        </aside>
    );
}