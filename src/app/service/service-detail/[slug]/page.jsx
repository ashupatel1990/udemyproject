import * as React from "react";
import TopNav from "@/components/Header/TopNav/TopNav";
import { Menu } from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/footer";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Partner from "@/components/Partner/Partner";
import Image from "next/image";
import Link from "next/link";

const Page = ({ slug }) => {
    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav />
                <Menu />
            </header>
            <main className="content">
                <Breadcrumb
                    link="Our Service Detail"
                    img="/images/header.webp"
                    title="Our Service Detail"
                    desc="We Parform a full analysis of the client'<s website and collect information about all the competitor"
                />
                <div className="cotent-deta-block lg:py-25 sm:py-16 py-10 ">
                    <div className="container">
                        <div className="flex max-xl:flex-col gap-y-8">
                            <div className="w-full xl:w-3/4">
                                <div className="w-full xl:pr-20">
                                    <h3 className="heading3">
                                        Portfolio managemetn for financial growth
                                    </h3>
                                    <div className="bg-img mt-5 mb-5">
                                        <Image
                                            alt=""
                                            src="/images/gateway1.webp"
                                            width={4000}
                                            height={4000}
                                            className="w-full h-full rounded-xl"
                                        />
                                    </div>
                                    <div className="body2 text-secondary mt-2">
                                        <h4 className="heading4">We Offer diverse business solution</h4>
                                        dapibus in, viverra quis, feugiat a, tellus.
                                        Phasellus viverra nulla ut metus varius
                                        laoreet. Quisque rutrum. Aenean imperdiet.
                                        Etiam ultricies nisi vel augue. Curabitur
                                        ullamcorper ultricies nisi. Nam eget dui.
                                        Etiam rhoncus. Maecenas tempus, tellus eget
                                        condimentum rhoncus, sem quam semper libero,
                                        sit amet adipiscing sem neque sed ipsum. Nam
                                        quam nunc
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-1/4">
                                <div className="more-infor border border-line rounded-xl py-8 px-8">
                                    <div className="heading6">The best our services</div>
                                    <div className="body3 text-secondary mt-2">
                                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet
                                    </div>
                                    <div className="list-nav mt-4">
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">Financial Planning</div>
                                        </Link>
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">Payment Solution</div>
                                        </Link>
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">Blockchain</div>
                                        </Link>
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">Online Banking</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Partner />
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default Page;
