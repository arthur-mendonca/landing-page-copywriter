import Image from "next/image";

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
        image: "/card-1.webp"
    },
    {
        id: 3,
        title: "Módulo 3:",
        subtitle: "Alto nível",
        desc: "Como se tornar um profissional requisitado e bem pago com a sua paixão.",
        image: "/card-1.webp"
    }
];

export default function Modules() {
    return (
        <section className="py-24 px-6 bg-brand-cream text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-brown mb-16">
                O que você irá aprender:
            </h2>

            {/* Grid de Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Linha decorativa horizontal atrás (opcional, visto na imagem) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand-gold/30 -z-10"></div>

                {modules.map((mod) => (
                    <div key={mod.id} className="group relative h-[450px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                        {/* Imagem de Fundo */}
                        <Image
                            width={1920}
                            height={1080}
                            src={mod.image}
                            alt={mod.subtitle}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Gradiente Overlay para leitura do texto */}
                        <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>

                        {/* Conteúdo do Card */}
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center text-white space-y-2">
                            <h3 className="font-serif text-2xl">
                                <span className="block font-light text-lg opacity-90">{mod.title}</span>
                                {mod.subtitle}
                            </h3>
                            <p className="text-xs text-gray-300 font-light leading-relaxed px-2">
                                {mod.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <button className="bg-brand-brown/90 hover:bg-brand-brown text-white px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-sm shadow-xl transition-colors border border-brand-gold/20">
                    Quero minha vaga
                </button>
            </div>
        </section>
    );
}