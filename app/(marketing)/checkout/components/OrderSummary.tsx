import { Package, ShieldCheck, RefreshCw } from "lucide-react";

export default function OrderSummary() {
    // Dados Fictícios do Produto
    const productName = "Curso Copywriter de Excelência";
    const productPrice = 997.00;
    const installments = 12;

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-gold/20 sticky top-10">
            <h2 className="text-xl font-serif text-brand-brown border-b pb-3 mb-4 flex items-center gap-2">
                <Package size={20} className="text-brand-gold" />
                Seu Pedido
            </h2>

            {/* Detalhes do Produto */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-4">
                {/* Imagem Placeholder do Módulo 1 */}
                <div className="w-16 h-16 bg-brand-brown rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    CURSO
                </div>
                <div>
                    <p className="font-semibold text-brand-dark">{productName}</p>
                    <p className="text-xs text-brand-gray">Acesso Imediato e Vitalício</p>
                </div>
            </div>

            {/* Resumo de Preços */}
            <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm text-brand-dark">
                    <span>Valor Total</span>
                    <span className="font-semibold">R$ {productPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-brand-gold font-bold">
                    <span className="text-lg">TOTAL A PAGAR</span>
                    <span className="text-xl">R$ {productPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <p className="text-xs text-center text-brand-gray italic pt-2">
                    ou {installments}x de R$ {(productPrice / installments).toFixed(2).replace('.', ',')} no cartão.
                </p>
            </div>

            {/* Selos de Confiança */}
            <div className="mt-6 pt-4 border-t border-brand-gold/10 space-y-4">
                <div className="flex items-center gap-3 text-sm text-green-700">
                    <ShieldCheck size={18} className="text-green-500" />
                    <span className="font-semibold">Compra 100% Segura e Protegida</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-dark">
                    <RefreshCw size={18} className="text-brand-gold" />
                    <span className="font-semibold">Garantia Incondicional de 7 dias</span>
                </div>
            </div>

        </div>
    );
}