import Image from "next/image";
import Link from "next/link";

const modules = [
    {
        id: 1,
        title: "Módulo 1:",
        subtitle: "Copywriting",
        desc: "A técnica secreta que pode multiplicar as suas vendas em qualquer nicho ou mercado.",
        image: "/card-1.webp"
    },
    {
        id: 2,
        title: "Módulo 2:",
        subtitle: "Textos Irresistíveis",
        desc: "Como atrair e conquistar o seu público com as palavras certas.",
        image: "/card-2.webp"
    },
    {
        id: 3,
        title: "Módulo 3:",
        subtitle: "Alto nível",
        desc: "Como se tornar um profissional requisitado e bem pago com a sua paixão.",
        image: "/card-3.webp"
    }
];

export default function Modules() {
    return (
        <section className="py-24 px-6 bg-brand-cream text-center overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-brown mb-16">
                O que você irá aprender:
            </h2>

            {/* Grid de Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Linhas inferiores esquerda */}
                <div className="absolute inset-0 top-96 -translate-x-48 h-[94%] w-[44%] border-4 border-brand-gold/50 rounded-3xl z-0" />
                <div className="absolute inset-0 top-58 -translate-x-[48%] h-[85%] w-[44%] border-3 border-brand-gold/50 rounded-3xl z-0" />

                {/* Linhas superiores direita */}
                <div className="absolute inset-0 -top-36 translate-x-[170%] h-[94%] w-[44%] border-4 border-brand-gold/50 rounded-3xl z-0" />
                <div className="hidden md:block absolute inset-0 -top-8 translate-x-[173%] h-[85%] w-[44%] border-3 border-brand-gold/50 rounded-3xl z-0" />

                {modules.map((mod) => (
                    <div
                        key={mod.id} className="group relative h-[450px] md:h-[500px] w-full rounded-2xl overflow-hidden 
                    hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] cursor-pointer hover:-translate-y-2 transition-shadow duration-300"
                    >
                        {/* Imagem de Fundo */}
                        <Image
                            width={1920}
                            height={1080}
                            src={mod.image}
                            alt={mod.subtitle}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Gradiente Overlay para leitura do texto */}
                        <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>

                        {/* Conteúdo do Card */}
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center text-white space-y-2">
                            <h3 className="font-serif text-4xl">
                                {mod.title} <br />
                                {mod.subtitle}
                            </h3>
                            <p className="text-sm text-gray-300 font-light leading-relaxed px-2">
                                {mod.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <Link href="/checkout">
                    <button
                        className="z-10 relative bg-linear-to-r from-brand-brown to-brand-gold text-white px-10 py-4 rounded-r-2xl tracking-widest uppercase 
                text-sm font-medium shadow-xl border border-brand-gold/80 cursor-pointer hover:scale-105 transition-transform"
                    >
                        Quero minha vaga
                    </button>
                </Link>
            </div>
        </section>
    );
}
