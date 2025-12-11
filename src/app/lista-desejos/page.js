import Footer from "@/components/Footer";
import ListaDesejos from "@/components/ListaDesejos";
import Navbar from "@/components/Navbar";

export default function Home(){
    return (
        <>
            <Navbar principal={false} />
            <ListaDesejos />
        </>
    );
}