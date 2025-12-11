import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section className="w-full flex flex-col h-[90vh] p-8 mt-14 relative">
                <div className="flex items-center justify-center rounded-md h-96">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl max-sm:text-xl font-bold">
                            404 - Página Não Encontrada
                        </h2>
                        <div className="w-24 h-1 bg-secundario mx-auto mt-1"></div>
                        <p className="mt-6 text-base max-sm:text-sm">A página que você está procurando não existe. Verifique o endereço digitado e tente novamente.</p>
                        <Link href="/" className="mt-6 inline-block text-sm font-semibold px-8 py-2 rounded-lg transition-all duration-300 text-center bg-secundario hover:bg-secundario/70 text-terciario">
                            Voltar para a Página Inicial
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}