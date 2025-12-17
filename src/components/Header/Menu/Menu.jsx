'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import * as Icon from '@phosphor-icons/react/dist/ssr'

export const Menu = () => {
    const pathname = usePathname();
    const [fixedHeader, setFixedHeader] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <>
            <div className={`bg-white header-menu ${fixedHeader ? 'fixed':''}`}>
                <div className='container flex items-center justify-between h-20'>
                    <Link href='/' className='menu-left-block'>
                        <Image src={'/images/Logo.png'} alt='logo' width={200} height={200} priority={true}
                        className='w-37 max-sw:w-33'
                        />
                    </Link> 

                    <div className='menu-center-block h-full'>
                        <ul className='menu-nav flex items-center h-full xl:gap-2'>
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/' ? 'active' : ''} `}>
                                <Link className='nav-link text-title flex items-center gap-1' href="/">
                                    <span>Home</span>
                                </Link> 
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/about' ? 'active' : ''} `}>
                                <Link className='nav-link text-title flex items-center gap-1' href="/about">
                                    <span>About Us</span>
                                </Link> 
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/service' ? 'active' : ''} `}>
                                <Link className='nav-link text-title flex items-center gap-1' href="/service">
                                    <span>Our Services</span>
                                </Link> 
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/case-studies' ? 'active' : ''} `}>
                                <Link className='nav-link text-title flex items-center gap-1' href="/case-studies">
                                    <span>Case Studies</span>
                                </Link> 
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/blog' ? 'active' : ''} `}>
                                <Link className='nav-link text-title flex items-center gap-1' href="/blog">
                                    <span>Blog</span>
                                </Link> 
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/contact' ? 'active' : ''} `}>
                                <Link className='nav-link text-title flex items-center gap-1' href="/contact">
                                    <span>Contact Us</span>
                                </Link> 
                            </li>
                        </ul>
                    </div>

                    <div className='flex menu-right-block items-center'>
                        <div className='icon-call'>
                            <i className='icon-phone-call text-4xl'></i>
                        </div>
                        <div className="text ml-3">
                            <div className='text caption1'>Free Consultation</div>
                            <div className='number text-button'> +123 456 789 </div>
                        </div>

                        <div className='menu-humburger hidden pointer' onClick={()=>setOpenMobileMenu(!openMobileMenu)}>
                            <Icon.ListIcon className='text-3xl' weight='bold'/>
                        </div>
                    </div>
                </div>

                <div id="menu-mobile-block" className={` ${openMobileMenu && 'open'}`}>
                    <div className='menu-mobile-main'>
                        <div className='container'>
                            <ul className='menu-nav-mobile h-full pt-1 pb-1'>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <Link className='nav-link-mobile flex items-center justify-between' href='/'>
                                        <span className='body2 font-bold'>Home</span>
                                    </Link>
                                </li>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <Link className='nav-link-mobile flex items-center justify-between' href='/about'>
                                    <span className='body2 font-bold'>About Us</span>
                                    </Link>
                                </li>

                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <Link className='nav-link-mobile flex items-center justify-between' href='/service'>
                                    <span className='body2 font-bold'>Service</span>
                                    </Link>
                                </li>

                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <Link className='nav-link-mobile flex items-center justify-between' href='/case-studies'>
                                    <span className='body2 font-bold'>Case Studies </span>
                                    </Link>
                                </li>

                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <Link className='nav-link-mobile flex items-center justify-between' href='/blog'>
                                    <span className='body2 font-bold'>Blog</span>
                                    </Link>
                                </li>

                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <Link className='nav-link-mobile flex items-center justify-between' href='/contact'>
                                    <span className='body2 font-bold'>Contact Us</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
