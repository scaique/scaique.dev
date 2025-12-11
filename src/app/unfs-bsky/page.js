import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar principal={false} />
            <div className="min-h-screen flex p-8 justify-center max-w-6xl rounded-lg mt-20">
                <div className="p-8 flex flex-col">
                    {/* Título */}
                    <p className="text-4xl max-sm:text-xl font-bold text-start uppercase">
                        Unfollowers for Bluesky (Nova Página)
                    </p>
                    {/* Linha decorativa */}
                    <div className="w-24 h-1 bg-secundario mb-6 self-start"></div>
                    {/* Texto */}
                    <p className="text-lg max-sm:text-base text-justify leading-relaxed">
                        Você está acessando uma página antiga de um projeto para a Bluesky, que foi migrada para o novo site. Clique no botão abaixo para acessar a nova página.
                    </p>
                    <a href="https://unfollowers.scaique.dev.br/" target="_blank" className="bg-secundario text-terciario text-center font-bold py-2 px-4 rounded-lg mt-10">Acessar nova página</a>
                </div>
            </div>
        </>
    );
}