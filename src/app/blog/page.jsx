import * as React from "react";
import TopNav from "@/components/Header/TopNav/TopNav";
import { Menu } from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/footer";

const Page = () => {
    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav />
                <Menu />
            </header>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default Page;
