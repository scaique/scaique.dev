import Experiencia from "@/components/Experiencia";
import Footer from "@/components/Footer";
import Habilidades from "@/components/Habilidades";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Navbar principal={true} />
      <div className="flex flex-col md:flex-row w-full justify-center items-start gap-8 mt-20">
        <Sobre />
        <Habilidades />
      </div>
      <Portfolio />
      <Experiencia />
    </>
  );
}