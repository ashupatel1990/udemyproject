import Link from "next/link";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const CaseStudy = () => {
    return (
        <div>
            <section className="case-study-block style-one lg:pt-25 sm:pt-16 pt-10">
                <div className="container">
                    <div className="heading text-center">
                        <h3 className="heading3">Case Studies</h3>
                        <div className="right flex flex-col items-center gap-2 mt-3">
                            <div className="body3">
                                Experience the excitement and potential of the
                            </div>
                            <Link
                                className="flex items-center gap-2 hover:text-blue duration-300"
                                href="/"
                            >
                                <div className="text-button">
                                    View All Case List{" "}
                                </div>
                                <Icon.CaretDoubleRightIcon
                                    weight="bold"
                                    className="text-xs mt-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="list-case-study md:mt-10 mt-6">
                    <div className="list grid lg:grid-cols-4 sm:grid-cols-2">
                        <div className="w-full hover:scale-105 duration-300">
                            <div className="case-study-item relative overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className="w-full h-full block object-cover"
                                        src="/images/caseone.webp"
                                        alt="img"
                                    />
                                </div>
                                <div className="text absolute inset-0 flex flex-col justify-end gap-3 p-6 bg-black/40">
                                    <div className="heading5">
                                        <Link className="text-white" href="/">
                                            Trusted Advisor
                                        </Link>
                                    </div>
                                    <div className="body2 text-white">
                                        Experience the excitement and potential
                                        of the cryptocurrency market with our
                                        expert.
                                    </div>
                                    <Link
                                        className="flex items-center gap-1 text-white" href="/">
                                        <div className="text-button text-white">
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRightIcon
                                            weight="bold"
                                            className="text-xs text-white mt-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full hover:scale-105 duration-300">
                            <div className="case-study-item relative overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className="w-full h-full block object-cover"
                                        src="/images/casetwo.webp"
                                        alt="img"
                                    />
                                </div>
                                <div className="text absolute inset-0 flex flex-col justify-end gap-3 p-6 bg-black/40">
                                    <div className="heading5">
                                        <Link className="text-white" href="/">
                                            Team Augmentation
                                        </Link>
                                    </div>
                                    <div className="body2 text-white">
                                        With the experienced and skill team, we bring the necessary expertise to our clients.
                                    </div>
                                    <Link
                                        className="flex items-center gap-1 text-white"
                                        href="/"
                                    >
                                        <div className="text-button text-white">
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRightIcon
                                            weight="bold"
                                            className="text-xs text-white mt-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full hover:scale-105 duration-300">
                            <div className="case-study-item relative overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className="w-full h-full block object-cover"
                                        src="/images/casethree.webp"
                                        alt="img"
                                    />
                                </div>
                                <div className="text absolute inset-0 flex flex-col justify-end gap-3 p-6 bg-black/40">
                                    <div className="heading5">
                                        <Link className="text-white" href="/">
                                            Innovation
                                        </Link>
                                    </div>
                                    <div className="body2 text-white">
                                        Experience the excitement and potential
                                        of the cryptocurrency market with our
                                        expert.
                                    </div>
                                    <Link
                                        className="flex items-center gap-1 text-white"
                                        href="/"
                                    >
                                        <div className="text-button text-white">
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRightIcon
                                            weight="bold"
                                            className="text-xs text-white mt-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full hover:scale-105 duration-300">
                            <div className="case-study-item relative overflow-hidden">
                                <div className="bg-img">
                                    <Image
                                        width={5000}
                                        height={5000}
                                        className="w-full h-full block object-cover"
                                        src="/images/casefour.webp"
                                        alt="img"
                                    />
                                </div>
                                <div className="text absolute inset-0 flex flex-col justify-end gap-3 p-6 bg-black/40">
                                    <div className="heading5">
                                        <Link className="text-white" href="/">
                                            Experience
                                        </Link>
                                    </div>
                                    <div className="body2 text-white">
                                        With over 20 years of serving industrial customers and over 3000 projects, we have the experience to solve almost.
                                    </div>
                                    <Link
                                        className="flex items-center gap-1 text-white"
                                        href="/"
                                    >
                                        <div className="text-button text-white">
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRightIcon
                                            weight="bold"
                                            className="text-xs text-white mt-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudy;
