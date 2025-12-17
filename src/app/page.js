import Image from "next/image";
import TopNav from "@/components/Header/TopNav/TopNav";
import { Menu } from "@/components/Header/Menu/Menu";
import Slider from "@/components/Slider/slider";
import Service from "@/components/Services/service";
import Footer from "@/components/Footer/footer";
import Paymentgateway from "@/components/PaymentGateway/paymentgateway";
import Casestudy from "@/components/Casestudy/Casestudy";
import Testimonials from "@/components/Testimonials/Testimonials";
import Blog from "@/components/Blog/Blog";
import Partner from "@/components/Partner/Partner";

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
                <Paymentgateway />
                <Casestudy />
                <Testimonials />
                <Blog />
            </main>
            <Partner />
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}
