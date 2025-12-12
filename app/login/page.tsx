"use client"
import { Lock, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import LoginController from "./controllers/LoginController";

export default function LoginPage() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        error,
        handleLogin
    } = LoginController();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white px-4">
            <div className="w-full max-w-md bg-[#1E1E1E] p-8 rounded-2xl border border-white/5 shadow-2xl relative z-10">
                <div className="text-center mb-8 space-y-2">
                    <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-gold">
                        <Lock size={24} />
                    </div>
                    <h1 className="text-2xl font-serif font-medium">Bem-vindo</h1>
                    <p className="text-sm text-gray-400">Acesse sua área exclusiva de aluno</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1 ml-1 uppercase tracking-wider">E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="w-full bg-[#2A2A2A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1 ml-1 uppercase tracking-wider">Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-[#2A2A2A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-gold hover:bg-[#D4B494] text-[#1C1512] font-bold py-3 rounded-lg 
                        transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <> Entrar <ArrowRight size={18} /></>}
                    </button>
                </form>

                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>Esqueceu sua senha? <a href="#" className="text-brand-gold hover:underline">Recuperar acesso</a></p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <Link href="/" className="hover:text-white transition-colors">← Voltar para a Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}