import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const ImageText = ( ) => {
    return (
        <div className="about-block lg:py-25 sm:py-16 py-10 bg-white">
            <div className="container">
                <div className="row flex max-lg:flex-col lg:items-center gap-y-6">
                    <div className="w-full lg:w-1/2">
                        <div className="bg-img w-full overflow-hidden rounded-3xl ">
                            <Image
                                alt=""
                                src="/images/assessment.webp"
                                width={4000}
                                height={4000}
                                className="w-full h-full block"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex-col lg:pl-20">
                        <div className="heading3">Financial Management</div>
                        <div className="nav-infor mt-8">
                            <div className="title text-secondary mt-4">
                                dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis dolor
                                sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa. dolor
                                sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa. dolor
                                sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa.
                                parturient montes, nascetur ridiculus mus. Donec
                                quam felis, ultricies nec, pellentesque eu,
                                pretium quis, sem. Nulla consequat massa quis
                                enim. Donec pede justo, fringilla vel, aliquet
                                nec, vulputate eget, arcu. In enim justo,
                            </div>
                        </div>
                        <div className="button-block flex items-center gap-5 md:mt-10 mt-6 pb-2">
                            <Link
                                href="/"
                                className="button-main text-button text-white bg-blue-800 hover-button-black rounded-full text-button"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/"
                                className="button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent bg-white text-button rounded-full border-2 border-blue-800"
                            >
                                (000) 123 2323
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageText;
