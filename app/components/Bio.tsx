import Image from "next/image";

export default function Bio() {
    return (
        <section className="bg-brand-dark text-brand-cream py-20 px-6 lg:px-16 relative ">
            {/* Seta para baixo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-brand-cream"></div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1 h-1 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-brand-dark"></div>

            <div className="mx-auto flex flex-col md:flex-row items-center gap-16">
                {/* Foto com Moldura (Esquerda) */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px] overflow-hidden">

                        {/* Bordas decorativas */}
                        <div className="absolute inset-0 top-8 h-[94%] border-2 border-brand-gold/50 -translate-x-6 -translate-y-6 rounded-3xl z-0" />

                        <div className="absolute inset-0 top-16 h-[78%] right-5 left-5 border border-brand-gold/50 -translate-x-6 -translate-y-6 
                        rounded-3xl rounded-tl-none z-0"/>

                        {/* Imagem */}
                        <Image
                            width={1920}
                            height={1080}
                            src="/influencer-bio.webp"
                            alt="Imagem da influencer"
                            className="relative z-10 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Texto (Direita) */}
                <div className="w-full md:w-1/2 space-y-8 relative">
                    {/* Fundo do texto */}
                    <div className="absolute -translate-x-8 translate-y-[0%] w-64 left-9 md:-translate-x-9.5 md:translate-y-[5%] md:left-10 md:w-72 h-12 bg-orange-900 rounded-r-full z-0" />

                    <div className="relative left-2 inline-block px-6 py-2 border border-brand-gold/30 rounded-r-full bg-linear-to-r from-brand-cream-2 to-brand-cream backdrop-blur-sm z-10">
                        <h2 className="z-10 font-serif text-xl md:text-2xl text-brand-brown">Quem será sua mentora?</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 font-light leading-relaxed text-sm md:text-base">
                        <p>
                            <strong className="text-white">Juliana Montes</strong> não apenas escreve; ela converte.
                            Transformou a habilidade de escrita em um império digital e é a mente por trás da {" "}
                            <em>Lumina Copy</em>, agência referência no setor fundada em parceria com Mariana Silva.
                        </p>
                        <p>
                            Com uma trajetória consolidada nos bastidores, Juliana já liderou as estratégias de
                            lançamentos multimilionários de players como Ricardo Viana. Sua metodologia validada
                            já formou centenas de profissionais que hoje dominam o mercado digital.
                        </p>
                        <p>
                            O domínio da persuasão e da escrita intencional é o seu diferencial. Agora, ela
                            condensou anos de prática e estratégias de alto nível neste treinamento, pronta para
                            entregar a você o mapa completo da escrita lucrativa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
