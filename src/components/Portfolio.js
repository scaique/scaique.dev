'use client';

import CardProjeto from "./CardProjeto";

export default function Portfolio() {
    const projetos = [
        {
            nome: "Lista de Desejos",
            tecnologias: ["Next.js", "Tailwind", "JavaScript", "Apache"],
            imagem: "/images/lista-desejos/listadesejos_1.png",
            link: "/lista-desejos"
        },
        {
            nome: "Unfollowers for Bluesky",
            tecnologias: ["Next.js", "Tailwind", "JavaScript", "Apache"],
            imagem: "/images/unfollowers-for-bluesky/unfollowersbsky_1.png",
            link: "/unfollowers-for-bluesky"
        },
        {
            nome: "Confront Space Mobile",
            tecnologias: ["Unity", "C#", "Blender"],
            imagem: "/images/confront-space-mobile/confrontspacemobile_6.jpg",
            link: "/confront-space-mobile"
        },
    ];

    return (
        <section id="portfolio" className="w-full flex">
            <div className="w-full max-w-6xl rounded-lg">
                <div className="p-8 flex flex-col">
                    {/* Título */}
                    <p className="text-4xl max-sm:text-2xl font-bold text-start uppercase">
                        portfólio
                    </p>
                    {/* Linha decorativa */}
                    <div className="w-24 h-1 bg-secundario mb-6 self-start"></div>
                    {/* Projetos */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 self-center">
                        {projetos.map((projeto, index) => (
                            <CardProjeto
                                key={index}
                                nome={projeto.nome}
                                tecnologias={projeto.tecnologias}
                                imagem={projeto.imagem}
                                link={projeto.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
