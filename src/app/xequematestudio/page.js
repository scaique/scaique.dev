import XequeMateStudio from "@/components/XequeMateStudio";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar principal={false} />
      <XequeMateStudio />
    </>
  );
}