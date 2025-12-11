"use client";

import Link from "next/link";

export default function CardProjeto({ nome, descricao = '', tecnologias, imagem, link }) {
  return (
    <Link href={`${link}`} className="block w-full max-w-sm">
        <div className="relative overflow-hidden rounded-2xl shadow-lg bg-quintenario/70 hover:scale-[1.03] transition-transform duration-300">
            {/* Imagem do Projeto */}
            <img src={imagem} alt={`Imagem do projeto ${nome}`} className="w-full h-48 object-cover" />

            {/* Conteúdo do Card */}
            <div className="p-5">
                <h3 className="text-xl font-bold">{nome}</h3>
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                    {tecnologias?.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-secundario rounded-full">
                        {tech}
                    </span>
                    ))}
                </div>
            </div>
        </div>
    </Link>
  );
}
