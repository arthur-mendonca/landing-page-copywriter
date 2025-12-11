import Image from "next/image";

export default function Bio() {
    return (
        <section className="bg-brand-dark text-brand-cream py-20 px-6 lg:px-16 relative overflow-hidden">
            {/* Seta para baixo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-brand-cream"></div>

            <div className="mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Foto com Moldura (Esquerda) */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px] overflow-hidden">

                        {/* rounded-bl-3xl rounded-tr-3xl border border-brand-gold/30 */}
                        {/* Borda decorativa fina */}
                        <div className="absolute inset-0 top-8 h-[94%] border-2 border-brand-gold/50 -translate-x-6 -translate-y-6 rounded-3xl z-0"></div>

                        <div className="absolute inset-0 top-16 h-[78%] right-5 left-5 border border-brand-gold/50 -translate-x-6 -translate-y-6 rounded-3xl rounded-tl-none z-0"></div>

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
                    <div className="absolute -translate-x-9.5 translate-y-[5%] left-10 w-72 h-12 bg-orange-900 rounded-r-full z-0"></div>
                    {/* <div className="absolute -top-1/2 left-2 w-20 h-12 bg-sky-400 rounded-r-full -translate-y-1/2 -z-10"></div> */}

                    <div className="relative left-2 inline-block px-6 py-2 border border-brand-gold/30 rounded-r-full bg-linear-to-r from-brand-cream-2 to-brand-cream backdrop-blur-sm z-10">
                        <h2 className="z-10 font-serif text-xl md:text-2xl text-brand-brown">Quem será sua mentora?</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 font-light leading-relaxed text-sm md:text-base">
                        <p>
                            <strong className="text-white">Gabi Viriato</strong>, a copywriter que transformou a sua paixão em um negócio de sucesso.
                            É a fundadora da Grit, uma empresa de excelência em copy, junto com sua sócia Izabella.
                        </p>
                        <p>
                            Gabi tem uma carreira de sucesso na área de copy, já trabalhou com grandes nomes do mercado,
                            como Stella Saderio, e já ajudou centenas de pessoas a se tornarem profissionais de sucesso nessa área.
                        </p>
                        <p>
                            Ela sabe como ninguém como usar as palavras para persuadir, engajar e impactar o público.
                            E ela quer compartilhar com você todo o seu conhecimento e experiência no curso de Copywriting.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
