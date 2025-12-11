"use client";
import { useState } from "react";

export default function Projetos({ nome, descricao, imagens, csm = false, bsky_download = false, xeque = false, unf_bsky = false }) {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    return (
        <div className="min-h-screen flex justify-center mt-20 max-w-6xl rounded-lg">
            <div className="p-8 flex flex-col">
                {/* Título */}
                <p className="text-4xl max-sm:text-2xl font-bold text-start uppercase">
                    {nome}
                </p>
                {/* Linha decorativa */}
                <div className="w-24 h-1 bg-secundario mb-6 self-start"></div>
                {/* Texto */}
                <p className="text-lg max-sm:text-base text-justify leading-relaxed">
                    {descricao}
                </p>
                {/* Imagens */}
                {/* <p className="text-xl max-sm:text-lg font-bold text-start uppercase mt-8">
                    mídias:
                </p>
                <div className="image-scroll-container overflow-x-auto whitespace-nowrap">
                    {imagens.map(({ name }, index) => (
                        <div key={index} className="inline-flex items-center">
                            {name.includes(".mp4") ? (
                                <video className="image-item w-64 h-auto mr-4"
                                    src={`/images/${name}`} loading="lazy"
                                    onClick={() => setImagemSelecionada(`/images/${name}`)}
                                    autoPlay loop muted
                                />
                            ) : (
                                <img className="image-item w-80 h-auto mr-4"
                                    src={`/images/${name}`}
                                    alt={`Ícone de ${index+1}`} loading="lazy" 
                                    onClick={() => setImagemSelecionada(`/images/${name}`)}
                                />
                            )}
                        </div>
                    ))}
                </div> */}
                <p className="text-xl max-sm:text-lg font-bold text-start uppercase mt-8">
                    mídias:
                </p>
                {imagens.length > 0 ? (
                    <div className="image-scroll-container overflow-x-auto whitespace-nowrap">
                        {imagens.map(({ name }, index) => (
                            <div key={index} className="inline-flex items-center">
                                {name.includes(".mp4") ? (
                                    <video className="image-item w-64 h-auto mr-4"
                                        src={`/images/${name}`} loading="lazy"
                                        onClick={() => setImagemSelecionada(`/images/${name}`)}
                                        autoPlay loop muted
                                    />
                                ) : (
                                    <img className="image-item w-80 h-auto mr-4"
                                        src={`/images/${name}`}
                                        alt={`Ícone de ${index+1}`} loading="lazy" 
                                        onClick={() => setImagemSelecionada(`/images/${name}`)}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    // texto alternativo se não houver imagens
                    <p className="text-xl max-sm:text-lg font-bold text-start uppercase mt-8">
                        em desenvolvimento...
                    </p>
                )}
                {/* Modal de Imagem */}
                {imagemSelecionada && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                        onClick={() => setImagemSelecionada(null)}>
                        <button className="absolute top-4 right-6 text-white text-4xl font-bold z-50"
                            onClick={() => setImagemSelecionada(null)}>
                            &times;
                        </button>
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            {/* <button className="absolute top-2 right-2 text-white text-3xl font-bold"
                                onClick={() => setImagemSelecionada(null)}>
                                &times;
                            </button> */}
                            {imagemSelecionada.includes(".mp4") ? (
                                <video controls src={imagemSelecionada} alt="Imagem ampliada" className="max-w-full max-h-[90vh] rounded-lg" />
                            ) : (
                                <img src={imagemSelecionada} alt="Imagem ampliada" className="max-w-full max-h-[90vh] rounded-lg" />
                            )}
                        </div>
                    </div>
                )}
                {/* Download Confront Space Mobile */}
                {csm && (
                    <div className="w-full mt-10 gap-4 flex flex-row items-center">
                        <a href="/ConfrontSpaceMobile.apk" 
                            download={"ConfrontSpaceMobile.apk"}
                            className="bg-secundario hover:bg-secundario/70 duration-300 text-terciario text-center font-bold py-2 px-4 rounded-lg">
                            Download
                        </a>
                        <a href="https://gamejolt.com/games/confrontspacemobile/500906"
                            target="_blank" rel="noreferrer"
                            className="bg-secundario hover:bg-secundario/70 duration-300 text-terciario text-center font-bold py-2 px-4 rounded-lg">
                            Ver em GameJolt
                        </a>
                    </div>
                )}
                {/* XequeMateStudio */}
                {xeque && (
                    <div className="w-full mt-10 gap-4 flex flex-row items-center">
                        <a href="https://xequematestudio.com.br"
                            target="_blank" rel="noreferrer"
                            className="bg-secundario hover:bg-secundario/70 duration-300 text-terciario text-center font-bold py-2 px-4 rounded-lg">
                            Visite o site
                        </a>
                    </div>
                )}
                {/* Unfollowers for Bluesky */}
                {unf_bsky && (
                    <div className="w-full mt-10 gap-4 flex flex-row items-center">
                        {bsky_download && (
                            <a href="/UnfollowersForBluesky.apk" 
                                download={"UnfollowersForBluesky.apk"}
                                className="bg-secundario hover:bg-secundario/70 duration-300 text-terciario text-center font-bold py-2 px-4 rounded-lg">
                                Download
                            </a>
                        )}
                        <a href="https://unfollowers.scaique.dev.br"
                            target="_blank" rel="noreferrer"
                            className="bg-secundario hover:bg-secundario/70 duration-300 text-terciario text-center font-bold py-2 px-4 rounded-lg">
                            Visite o site
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
