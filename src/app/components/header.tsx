/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import {
    Menu, MenuButton, MenuList, MenuItem, Button, Icon
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoTwitter, IoLogoInstagram, IoLogoWhatsapp, IoAnalytics } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiMicrosoftacademic, SiNginxproxymanager } from "react-icons/si";
import { FaSitemap } from "react-icons/fa6";
import MobileNav from './mobileNav'
import '../../../public/css/header.css'

export default function Header() {
    const socials = [
        { id: 1, name: "Instagram", icon: IoLogoInstagram, tag: "https://instagram.com/axiolothub" },
        { id: 2, name: "Twitter", icon: IoLogoTwitter, tag: "https://twitter.com/@axiolothub" },
        { id: 3, name: "Whatsapp", icon: IoLogoWhatsapp, tag: "https://wa.me/+2347081317077" }
    ];

    const logins = [
        { id: 1, name: "Academics Portal", icon: SiMicrosoftacademic, tag: "https://portal.axiolot.com.ng/" },
        { id: 2, name: "e-Payment Portal", icon: RiSecurePaymentFill, tag: "https://e-pay.axiolot.com.ng" },
        { id: 3, name: "Analytics Manager", icon: IoAnalytics, tag: "https://analytics.axiolot.com.ng" },
        { id: 4, name: "Site Management", icon: FaSitemap, tag: "https://sites.axiolot.com.ng/" },
        { id: 5, name: "StaffPay Manager", icon: SiNginxproxymanager, tag: "https://wa.me/+2347081317077" }
    ];

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isNavAnimated, setIsNavAnimated] = useState(false);

    const router = useRouter();

    const handleScroll = () => {
        const navigationElement = document.getElementById('header') as HTMLElement;

        const { offsetTop } = navigationElement;
        const windowScrollTop = window.pageYOffset;

        if (windowScrollTop > offsetTop + 120) {
            if (!navigationElement.classList.contains('stick')) {
                navigationElement.classList.add('stick');
            }

            setIsNavAnimated(true);
            setIsNavVisible(true);
        } else {
            navigationElement.classList.remove('stick');
            if (windowScrollTop <= offsetTop + 1) {
                setIsNavVisible(false);
                setIsNavAnimated(false);
            }
        }
    };

    const navigate = () => {
        router.push('/#plan')
    }

    const home = () => {
        router.push('/')
    }

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${isNavVisible ? 'active' : 'relative'} ${isNavAnimated ? 'animate' : ''}`} id="header">
                <div></div>
                <div className="from-[rgb(59,58,78)] from-40% to-rasin-black w-full bg-gradient-to-r bg-holder">
                    <div className="app-container top-nav py-2 md:py-4 flex flex-row justify-center md:justify-between align-middle items-center mx-2 md:mx-auto">
                        <div data-wow-delay="0.3s" className="md:grid wow slideInLeft grid-cols-3 gap-x-4 justify-between align-middle items-center hidden">
                            {socials.map(item => (
                                <span className="mb-0 inline-block" key={item.id}>
                                    <Link href={item.tag} target="_blank" className="bg-transparent-white rounded-full m-0 text-xl w-[calc(20px+2*0em)] h-[calc(20px+2*0em)]">
                                        <Icon as={item.icon} className="block relative h-5 w-5 fill-[#B4B6C6] hover:fill-white transition-all duration-300" />
                                        <span className="sr-only">{item.name}</span>
                                    </Link>
                                </span>
                            ))}
                        </div>
                        <div data-wow-delay="0.3s" className="flex wow slideInRight flex-row gap-x-6 justify-center align-middle items-center">
                            <span>
                                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm font-satoshi transition-all duration-300">Privacy Policy</Link>
                                <span className="sr-only">privacy policys</span>
                            </span>
                            <span>
                                <Link href="/#plan" className="text-gray-400 hover:text-white text-sm font-satoshi transition-all duration-300">Get Started</Link>
                                <span className="sr-only">get started</span>
                            </span>
                            <span className="mr-2 z-[9999999]">
                                <a className="text-gray-400 hover:text-white text-sm font-satoshi transition-all duration-300">
                                    <Menu>
                                        <MenuButton>
                                            Log In
                                            <Icon as={IoMdLogIn} className="inline-block mx-1.5 relative h-4 w-4 fill-current transition-all duration-300" />
                                        </MenuButton>
                                        <MenuList className="bg-white z-[999999] text-black shadow-lg rounded-md border py-3 border-gray-200">
                                            {logins.map(item => (
                                                <MenuItem minH='42px' key={item.id} className="hover:bg-gray-100 rounded-xl transition-all duration-500">
                                                    <a href={item.tag} target="_blank" className="bg-transparent-white">
                                                        <Icon as={item.icon} className="inline-block relative h-5 w-5 fill-slate-500 mr-3 ml-3.5" />
                                                        <span className='font-medium text-sm font-satoshi capitalize mr-4'>
                                                            {item.name}
                                                        </span>
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </Menu>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div data-wow-delay="0.2s" className="app-container wow bounceInUp mx-auto rounded-md bg-white bottom-nav -mb-4 md:-mb-2 transform-none">
                        <div className="flex flex-row -mb-2 justify-between align-middle items-center font-satoshi py-3.5 px-3.5">
                            <div onClick={home} data-wow-delay="0.5s" className="py-0 wow slideInLeft flex flex-row justify-start items-center cursor-pointer">
                                <img src={process.env.NEXT_PUBLIC_CDN + "/image/Wzcdkj2.png"} data-src={process.env.NEXT_PUBLIC_CDN + "/image/Wzcdkj2.png"} alt="" loading="lazy" decoding="async" className="w-10 h-10 md:h-12 md:w-12 m-0 p-0 mx-auto pr-0 mr-0" />
                                <svg height="40" width="200" className="-ml-2">
                                    <text x="5" y="30" fill="none" stroke="#2f2e41" fontSize="35" rotate="10" className="font-satoshi">xiolot</text>
                                </svg>
                            </div>
                            <div data-wow-delay="0.5s" className="md:flex wow slideInRight flex-row justify-between align-middle items-center my-1 hidden">
                                <Link href='/#mission' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="font-satoshi">Mission</span>
                                </Link>
                                <Link href='/#plan' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="font-satoshi ">Plan</span>
                                </Link>
                                <Link href='/#service' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span>Service</span>
                                </Link>
                                <Link href='/#member' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span>Team</span>
                                </Link>
                                <Button onClick={navigate} className="mx-0.5 block group/item bg-black transition-colors duration-500 text-white hover:bg-transparent hover:text-black capitalize hover:before:w-full hover:after:w-full text-base rounded-full after:content-[''] after:w-0 after:h-0.5 after:absolute after:transition-all before:content-[''] before:w-0 before:h-0.5 before:absolute before:transition-all after:duration-500 after:ease-linear before:ease-linear before:right-0 before:top-0 before:duration-500 after:left-0 after:bottom-0 p-1 px-2.5 cursor-pointer border-none after:bg-black before:bg-black">
                                    <span className="before:left-0 group-hover/item:after:h-full group-hover/item:before:h-full before:bottom-0 after:right-0 after:top-0 block px-1 py-0.5 after:content-[''] before:content-[''] after:w-0.5 before:w-0.5 after:h-0 before:h-0 after:absolute before:absolute after:ease-linear before:ease-linear before:transition-all after:duration-500 after:transition-all before:duration-500 after:bg-black before:bg-black text-sm font-satoshi">
                                        Join Us
                                        <span className="ml-1">
                                            <span className="text-base">+</span>
                                        </span>
                                    </span>
                                </Button>
                                <Link href='/#faq' className="text-base mx-3.5 font-medium inline-block text-rasin-black relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span>Faq</span>
                                </Link>
                            </div>
                            <div data-wow-delay="0.5s" className="block md:hidden wow pb-2 slideInRight relative z-[9999] transform-none">
                                <MobileNav />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}