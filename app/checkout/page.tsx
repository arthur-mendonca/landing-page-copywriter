
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";

export default function CheckoutPage() {
    return (
        // Reutilizando o fundo claro
        <div className="min-h-screen bg-brand-cream py-10 px-4 md:px-8 lg:px-16">

            {/* Header com link de retorno */}
            <header className="max-w-7xl mx-auto mb-10 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-brand-brown hover:text-brand-gold transition-colors text-sm font-semibold">
                    <ArrowLeft size={16} />
                    Voltar para a Oferta
                </Link>
                <div className="flex items-center gap-2 text-brand-dark/70 text-sm">
                    <Lock size={14} />
                    Pagamento Seguro
                </div>
            </header>

            <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Coluna 1: Formulário (2/3 da largura no desktop) */}
                <div className="lg:col-span-2 space-y-8">
                    <h1 className="text-3xl md:text-4xl font-serif text-brand-brown">
                        Finalize sua Inscrição
                    </h1>

                    {/* O Formulário */}
                    <CheckoutForm />
                </div>

                {/* Coluna 2: Resumo do Pedido (1/3 da largura no desktop) */}
                <div className="lg:col-span-1">
                    <OrderSummary />
                </div>

            </main>

            {/* Footer minimalista de segurança */}
            <footer className="max-w-7xl mx-auto mt-16 text-center text-xs text-brand-gray">
                <p className="flex items-center justify-center gap-2">
                    <ShieldCheck size={14} className="text-brand-gold" />
                    Processado com criptografia SSL. Seus dados estão 100% seguros.
                </p>
            </footer>
        </div>
    );
}