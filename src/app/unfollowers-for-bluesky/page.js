import UnfollowersBluesky from "@/components/UnfollowersBluesky";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar principal={false} />
      <UnfollowersBluesky />
    </>
  );
}