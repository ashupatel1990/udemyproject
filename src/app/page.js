import Image from "next/image";
import TopNav from "@/components/Header/TopNav/TopNav";
import { Menu } from "@/components/Header/Menu/Menu";
import Slider from "@/components/Slider/slider";
import Service from "@/components/Services/service";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        <Slider />
        <Service />
      </main>

      <footer id="footer">
        <Footer/>
      </footer>
    </div>
  );
}
