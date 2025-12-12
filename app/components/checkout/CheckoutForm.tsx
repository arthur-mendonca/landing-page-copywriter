"use client"
import CheckoutController from '@/app/controllers/checkout/CheckoutControllers';
import { User, Mail, CreditCard, DollarSign } from 'lucide-react';

export default function CheckoutForm() {
    const { setStep, step, loading, handleSubmit } = CheckoutController();

    const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-gold focus:border-brand-gold transition-colors text-brand-dark";
    const labelClasses = "block text-sm font-medium text-brand-dark mb-1";

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-brand-gold/70"
        >
            {/* Indicador de Etapa */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-medium text-brand-brown">
                    {step === 1 ? '1. Seus Dados' : '2. Pagamento'}
                </h2>
                <div className="text-sm font-semibold text-brand-gold">
                    Etapa {step} de 2
                </div>
            </div>

            {step === 1 && (
                <div className="space-y-6">
                    {/* Nome Completo */}
                    <div>
                        <label htmlFor="name" className={labelClasses}>Nome Completo</label>
                        <div className="relative">
                            <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input type="text" id="name" placeholder="Seu nome, como no documento" className={`${inputClasses} pl-10`} required />
                        </div>
                    </div>

                    {/* E-mail */}
                    <div>
                        <label htmlFor="email" className={labelClasses}>E-mail (Acesso ao curso)</label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input type="email" id="email" placeholder="email@exemplo.com.br" className={`${inputClasses} pl-10`} required />
                        </div>
                    </div>

                    {/* CPF/CNPJ (Para Nota Fiscal) */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="document" className={labelClasses}>CPF ou CNPJ</label>
                            <input type="text" id="document" placeholder="000.000.000-00" className={inputClasses} required />
                        </div>
                        <div>
                            <label htmlFor="phone" className={labelClasses}>Telefone</label>
                            <input type="tel" id="phone" placeholder="(99) 99999-9999" className={inputClasses} required />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-gold/90 text-brand-dark py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-brand-gold transition-colors shadow-lg"
                    >
                        Continuar para o Pagamento
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-6">
                    {/* Métodos de Pagamento */}
                    <div>
                        <label className={labelClasses}>Selecione o Método</label>
                        <div className='flex gap-4'>
                            <button type='button' className='flex-1 border-2 border-brand-gold/50 bg-brand-cream py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold text-brand-brown hover:bg-brand-gold/10 transition-colors'>
                                <CreditCard size={18} /> Cartão de Crédito
                            </button>
                            <button type='button' className='flex-1 border-2 border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold text-brand-dark hover:bg-gray-100 transition-colors'>
                                <DollarSign size={18} /> Pix/Boleto
                            </button>
                        </div>
                    </div>

                    {/* Dados do Cartão (Simulados) */}
                    <h3 className="text-xl font-serif text-brand-brown pt-4">Dados do Cartão</h3>

                    <div>
                        <label htmlFor="cardNumber" className={labelClasses}>Número do Cartão</label>
                        <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" className={inputClasses} />
                    </div>

                    <div>
                        <label htmlFor="cardName" className={labelClasses}>Nome no Cartão</label>
                        <input type="text" id="cardName" placeholder="Nome Impresso no Cartão" className={inputClasses} />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <label htmlFor="expiryDate" className={labelClasses}>Validade (MM/AA)</label>
                            <input type="text" id="expiryDate" placeholder="00/00" className={inputClasses} />
                        </div>
                        <div>
                            <label htmlFor="cvv" className={labelClasses}>CVV</label>
                            <input type="text" id="cvv" placeholder="123" className={inputClasses} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-brown text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors shadow-2xl disabled:bg-gray-500 mt-6"
                    >
                        {loading ? 'Processando Pagamento...' : 'Comprar Agora (R$ 997,00)'}
                    </button>

                    <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full text-sm text-brand-gray mt-4 hover:text-brand-dark transition-colors"
                    >
                        ← Voltar para Meus Dados
                    </button>
                </div>
            )}
        </form>
    );
}