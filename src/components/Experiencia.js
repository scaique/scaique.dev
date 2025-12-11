'use client';

import CardProjeto from "./CardProjeto";

export default function Experiencia() {
    const experiencias = [
        {
            nome: "Galera Das Ondas",
            tecnologias: ["React Native", "NestJS", "TypeScript", "Apache"],
            imagem: "/images/galeradasondas/galeradasondas_1.png",
            link: "/galeradasondas"
        },
        {
            nome: "XequeMateStudio",
            tecnologias: ["Next.js", "Tailwind", "JavaScript", "Apache"],
            imagem: "/images/xequematestudio/xequematestudio_1.png",
            link: "/xequematestudio"
        }
    ];

    return (
        <section id="experiencia" className="w-full flex">
            <div className="w-full max-w-6xl rounded-lg">
                <div className="p-8 flex flex-col">
                    {/* Título */}
                    <p className="text-4xl max-sm:text-2xl font-bold text-start uppercase">
                        experiência
                    </p>
                    {/* Linha decorativa */}
                    <div className="w-24 h-1 bg-secundario mb-6 self-start"></div>
                    {/* Projetos */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 self-center">
                        {experiencias.map((projeto, index) => (
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
