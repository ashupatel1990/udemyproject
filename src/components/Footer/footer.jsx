'use client';
import Image from 'next/image'; 
import Link from 'next/link'; 
import React, { useEffect, useState } from 'react'; 
import * as Icon from '@phosphor-icons/react/dist/ssr' 
// import { API_BASE_URL } from '@/config/config'; 

const Footer = () => { 
    // const [footer, setFooter] = useState([]);
    // const [loading, setLoading] = useState(true); 
    
    return (
        <div className='footer-block bg-[#0f1e33] pt-15'>
            <div className='container'>
                <div className='flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10'>
                    <div className='lg:w-1/4'>
                        <div className='footer-company-infor flex flex-col justify-between gap-5'>
                            <Image width={4000} height={4000} alt="" className='footer-logo w-36' src='/images/LogoWhite.png' />
                            <div className='text caption1 text-white'>
                                We are diversified company specialized in providing comprehensive financial solutions for individuals and organizations.
                            </div>

                            <div className='list-social flex items-center gap-2'>

                                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://facebook.com' target='_blank'>
                                    <i className='icon-facebook text-sm'></i>
                                </Link>

                                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://linkedin.com/' target='_blank'>
                                    <i className='icon-in text-xs'></i>
                                </Link>

                                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://twitter.com/' target='_blank'>
                                    <i className='icon-twitter text-xs'></i>
                                </Link>

                                <Link className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center' href='https://youtube.com' target='_blank'>
                                    <i className='icon-youtube text-xs'></i>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/2'>
                        <div className='footer-navigate flex items-center justify-center gap-20'>
                            <div className='footer-nav-item'>
                                <div className='item-heading text-button-sm text-white'>
                                    Quick Links
                                </div>
                                <ul className='list-nav mt-1 text-white'>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href={'/about'}> About Us
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href={'/service'}> Services
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> Case Studies
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href={'/contact'}> Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                            <div className='footer-nav-item max-sm:hidden'>
                                <div className='item-heading text-button-sm text-white'>
                                    Pages
                                </div>
                                <ul className='list-nav mt-1 text-white'>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> About Us
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> Services
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> Case Studies
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>




                            <div className='footer-nav-item'>
                                <div className='item-heading text-button-sm text-white'>
                                    Blog
                                </div>
                                <ul className='list-nav mt-1 text-white'>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> All Blog
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> Services
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> Case Studies
                                        </Link>
                                    </li>
                                    <li className='mt-3'>
                                        <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'> Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/4'>
                        <div className='company-contact'>
                            <div className='heading text-button-sm text-white'>
                                NewsLetter
                            </div>
                            <div className='mt-3 flex items-start'>
                                <div className='text'>
                                    <div className='cpation2 text-surface text-white'>
                                        Need Help? 24/7
                                    </div>
                                    <div className='fw-700 text-white mt-1'>
                                        001-1234-1234
                                    </div>
                                </div>
                            </div>

                            <div className='locate mt-3 flex items-center'>
                                <div className='caption1 text-surface text-white'>
                                    101, E 101th, Rajpath Rd, New York, NY 10001
                                </div>
                            </div>

                            <form className='send-block mt-5 flex items-center h-11.25 rounded-lg overflow-hidden'>
                                <input className='caption1 text-secondary h-full w-full pr-4 pl-3 bg-white' type="text" placeholder='Your Email Address' />
                                <button className='flex items-center justify-center w-11.25 h-11.25 bg-blue-800 shrink-0'>
                                    <Icon.PaperPlaneTiltIcon className='text-white' />
                                </button>
                            </form>

                        </div>
                    </div>
                </div>

                <div className='border-line'> </div>
                <div className='footer-bottom flex items-center justify-between pt-3 pb-3'>
                    <div className='left-block flex items-center'>
                        <div className='copy-right text-surface caption1 text-white'>
                            @2024 EasyTech. All Rights Reserved
                        </div>
                    </div>

                    <div className='nav-link flex items-center gap-3 text-white'>
                        <a href="#" className='text-surface caption1 hover-underline'>Terms of Services</a>
                        <span className='text-surface caption1 '> | </span>
                        <a href="#" className='text-surface caption1 hover-underline'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;