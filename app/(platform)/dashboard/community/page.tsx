import { MessageSquare, Heart, Share2, MoreHorizontal, Search } from "lucide-react";
import { faker } from '@faker-js/faker';

// Mock de Posts
const posts = [
    {
        id: 1,
        author: faker.person.fullName(),
        role: "Aluna Fundadora",
        time: "2 horas atrás",
        content: "Pessoal, acabei de aplicar a técnica do Módulo 2 no meu lançamento e o resultado foi insano! Tivemos um aumento de 30% na conversão da página. Muito obrigada pelos insights!",
        likes: 24,
        comments: 5,
        tag: "Resultado"
    },
    {
        id: 2,
        author: faker.person.fullName(),
        role: "Aluno Iniciante",
        time: "5 horas atrás",
        content: "Estou com dúvida na aula sobre Headlines. Alguém poderia me dar um exemplo de como adaptar a estrutura para o nicho de emagrecimento?",
        likes: 8,
        comments: 12,
        tag: "Dúvida"
    }
];

export default function CommunityPage() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Feed Principal */}
            <div className="flex-1 w-full space-y-6">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-serif font-bold text-white">Comunidade</h1>
                    <button className="bg-brand-gold text-[#1C1512] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#dcbba0] transition-colors">
                        + Novo Post
                    </button>
                </div>

                {/* Input Fake de Post */}
                <div className="bg-[#1E1E1E] p-4 rounded-xl border border-white/5 flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">
                        EU
                    </div>
                    <input
                        type="text"
                        placeholder="No que você está pensando hoje?"
                        className="flex-1 bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 text-sm"
                    />
                </div>

                {/* Lista de Posts */}
                {posts.map(post => (
                    <div key={post.id} className="bg-[#1E1E1E] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <img src={faker.image.avatar()} alt={post.author} width={100} height={100} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-white font-medium text-sm">{post.author}</p>
                                    <p className="text-xs text-gray-500">{post.role} • {post.time}</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-white"><MoreHorizontal size={20} /></button>
                        </div>

                        <div className="mb-4">
                            <span className="inline-block bg-white/5 text-brand-gold text-[10px] px-2 py-1 rounded mb-2 uppercase tracking-wide font-bold">
                                {post.tag}
                            </span>
                            <p className="text-gray-300 text-sm leading-relaxed">{post.content}</p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex gap-6 text-sm text-gray-400">
                            <button className="flex items-center gap-2 hover:text-red-400 transition-colors group">
                                <Heart size={18} className="group-hover:fill-red-400" /> {post.likes}
                            </button>
                            <button className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                                <MessageSquare size={18} /> {post.comments}
                            </button>
                            <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto">
                                <Share2 size={18} /> Compartilhar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar da Comunidade (Tópicos e Avisos) */}
            <div className="w-full lg:w-80 space-y-6">

                {/* Busca */}
                <div className="bg-[#1E1E1E] p-2 rounded-lg border border-white/5 flex items-center px-4">
                    <Search size={18} className="text-gray-500" />
                    <input type="text" placeholder="Buscar discussões..." className="bg-transparent border-none text-sm text-white focus:ring-0 w-full ml-2" />
                </div>

                {/* Tópicos em Alta */}
                <div className="bg-[#1E1E1E] rounded-xl border border-white/5 p-5">
                    <h3 className="text-white font-serif font-medium mb-4">Tópicos em Alta</h3>
                    <ul className="space-y-3">
                        {['#Copywriting', '#Lançamentos', '#Networking', '#Ferramentas'].map((tag, i) => (
                            <li key={i} className="flex justify-between items-center text-sm text-gray-400 hover:text-brand-gold cursor-pointer transition-colors">
                                <span>{tag}</span>
                                <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-gray-500">24 posts</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Aviso */}
                <div className="bg-gradient-to-br from-brand-brown to-[#1E1E1E] rounded-xl p-5 border border-brand-gold/20">
                    <h3 className="text-brand-gold font-bold text-sm mb-2">Regras da Comunidade</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                        Mantenha o respeito e a cordialidade. O objetivo aqui é crescermos juntos. Dúvidas de suporte técnico devem ser enviadas via email.
                    </p>
                </div>

            </div>
        </div>
    );
}