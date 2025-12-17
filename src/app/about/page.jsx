'use client';
import React , {useEffect, useState} from "react";
import TopNav from "@/components/Header/TopNav/TopNav";
import { Menu } from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/footer";
import Service from "@/components/Services/service";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import ImageText from "@/components/Section/ImageText";
import Counter from "@/components/Section/Counter";
import Loader from "@/components/Loader/Loader";

const Page = () => {
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav />
                <Menu />
            </header>
            <main className="content">
                {
                    loading ? (
                        <div className="flex justify-center items-center h-125">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            <Breadcrumb link="About us" img="/images/header.webp" title="About Us" desc="We Parform a full analysis of the client's website and collect information about all the competitor"/> 
            
                            <ImageText />
                            <Counter className='lg:pb-6.25 sm:pb-16 pb-10'/>
                            <Service />
                        </>
                    )
                }
            </main>

            <Partner />
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default Page;
