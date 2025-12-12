import Image from "next/image";
import { PenTool } from "lucide-react";
import KiwifiLogo from "../resources/svg/Kiwifi";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="relative bg-brand-cream w-full px-6 pt-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* Coluna de Texto */}
            <div className="w-full md:w-1/2 space-y-6 z-10">
                <div className="flex items-center gap-2 text-brand-gold italic">
                    <PenTool size={20} />
                    <span className="font-serif">Curso de Copywriter</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif font-medium text-brand-brown">
                    Torne-se um
                    <em>copywriter</em> de

                    sucesso do zero
                </h1>

                <p className="text-brand-gray max-w-md text-sm md:text-base leading-relaxed">
                    Eu vou te ensinar o passo a passo para criar copys irresistíveis,
                    que geram resultados reais e comprovados. E o melhor: você vai aprender
                    tudo isso estudando no seu ritmo, no seu tempo e no seu espaço.
                </p>

                <div className="pt-4 space-y-2 flex flex-col ">
                    <Link href="/checkout">
                        <button
                            className="bg-linear-to-r from-brand-brown to-brand-gold text-white px-8 py-4 
                    rounded-r-2xl font-bold tracking-wider transition-all uppercase text-sm shadow-xl cursor-pointer hover:scale-105"
                        >
                            Garantir minha vaga
                        </button>
                    </Link>

                    <div className="flex items-center gap-2 text-xs text-brand-brown font-semibold opacity-70">
                        <span className="flex items-center gap-2"> <KiwifiLogo width={60} className="text-brand-brown" /> | Compra segura</span>
                    </div>
                </div>
            </div>
            {/* Coluna de Imagem */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center md:justify-end mr-10">
                <div className="absolute hidden md:block bottom-10 w-[70%] h-[80%] bg-radial-[at_30%_10%] from-brand-cream-2 to-yellow-950 to-75% 
                rounded-b-full md:rounded-r-[3rem] md:rounded-l-none z-1 translate-x-4" />
                <div className="absolute hidden md:block top-14 right-10 w-[75%] h-[80%] border-2 border-orange-800 rounded-[3rem] z-2" />
                <div className="absolute hidden md:block top-48 left-32 w-[89%] h-[80%] border-2 border-yellow-900 rounded-[3rem] z-3" />

                <div className="relative w-[350px] h-[500px] md:w-[400px] md:h-[600px] mt-10 bottom-10 md:bottom-0 z-10">
                    <Image
                        preload={true}
                        fetchPriority="high"
                        width={1920}
                        height={1080}
                        src="/influencer-1.webp"
                        alt="foto da mentora"
                        className="object-cover w-full h-full rounded-b-full bg-radial-[at_30%_10%] from-brand-cream-2 
                        to-yellow-950 to-75% md:bg-none md:rounded-none drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
