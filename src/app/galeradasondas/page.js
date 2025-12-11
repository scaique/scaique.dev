import GaleraDasOndas from "@/components/GaleraDasOndas";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar principal={false} />
      <GaleraDasOndas />
    </>
  );
}