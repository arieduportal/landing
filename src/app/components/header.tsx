"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"
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

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    ul: {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    }
}


export default function Header() {
    const socials = [
        { id: 1, name: "Instagram", icon: IoLogoInstagram, tag: "https://instagram.com/" },
        { id: 2, name: "Twitter", icon: IoLogoTwitter, tag: "https://twitter.com/" },
        { id: 3, name: "Whatsapp", icon: IoLogoWhatsapp, tag: "https://wa.me/+234" }
    ];

    const logins = [
        { id: 1, name: "Academics Portal", icon: SiMicrosoftacademic, tag: "https://edu.ajhub.com/" },
        { id: 2, name: "e-Payment Portal", icon: RiSecurePaymentFill, tag: "blob:https://web.whatsapp.com/b4184f24-9472-476b-b91a-0b8b427ccc2c/" },
        { id: 3, name: "Analytics Manager", icon: IoAnalytics, tag: "https://wa.me/+234" },
        { id: 4, name: "Site Management", icon: FaSitemap, tag: "https://wa.me/+234" },
        { id: 5, name: "StaffPay Manager", icon: SiNginxproxymanager, tag: "https://wa.me/+234" }
    ];

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isNavAnimated, setIsNavAnimated] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

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

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${isNavVisible ? 'active' : ''} ${isNavAnimated ? 'animate' : ''}`} id="header">
                <div className=""></div>
                <div className="from-[rgb(59,58,78)] from-40% to-rasin-black w-full bg-gradient-to-r bg-holder">
                    <div className="app-container top-nav py-2 md:py-4 flex flex-row justify-center md:justify-between align-middle items-center mx-2 md:mx-auto">
                        <motion.div whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.7 } }} viewport={{ once: true, amount: .8 }} initial={{ opacity: 0, x: -50 }} className="md:grid grid-cols-3 gap-x-4 justify-between align-middle items-center hidden">
                            {socials.map(item => (
                                <span className="mb-0 inline-block" key={item.id}>
                                    <a href={item.tag} target="_blank" className="bg-transparent-white rounded-full m-0 text-xl w-[calc(20px+2*0em)] h-[calc(20px+2*0em)]">
                                        <Icon as={item.icon} className="block relative h-5 w-5 fill-[#B4B6C6] hover:fill-white transition-all duration-300" />
                                        <span className="sr-only">{item.name}</span>
                                    </a>
                                </span>
                            ))}
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.7 } }} viewport={{ once: true, amount: .8 }} initial={{ opacity: 0, x: 50 }} className="flex flex-row gap-x-6 justify-center align-middle items-center">
                            <span>
                                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm font-inter transition-all duration-300">Privacy Policy</Link>
                                <span className="sr-only">privacy policys</span>
                            </span>
                            <span>
                                <Link href="/t&c" className="text-gray-400 hover:text-white text-sm font-inter transition-all duration-300">T&C</Link>
                                <span className="sr-only">term and condition</span>
                            </span>
                            <span className="mr-2 z-[9999999]">
                                <a className="text-gray-400 hover:text-white text-sm font-inter transition-all duration-300">
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
                                                        <span className='font-medium text-sm font-inter capitalize mr-4'>
                                                            {item.name}
                                                        </span>
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </Menu>
                                </a>
                            </span>
                        </motion.div>
                    </div>
                    <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, y: -80 }} className="app-container mx-auto rounded-md bg-white bottom-nav -mb-4 md:-mb-2 transform-none">
                        <div className="flex flex-row -mb-2 justify-between align-middle items-center font-inter py-3.5 px-3.5">
                            <motion.div whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.7 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, x: -100 }} className='h-4 py-3'></motion.div>
                            <motion.div whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.7 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, x: 100 }} className="md:flex flex-row justify-between align-middle items-center my-1 hidden">
                                <Link scroll={false} href='#mission' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="font-inter">Mission</span>
                                </Link>
                                <Link href='#plan' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="font-inter ">Plan</span>
                                </Link>
                                <Link href='#faq' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="">Faq</span>
                                </Link>
                                <Link href='#team' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="">Team</span>
                                </Link>
                                <Button className="mx-0.5 group/item bg-black transition-colors duration-500 text-white hover:bg-transparent hover:text-black capitalize hover:before:w-full hover:after:w-full text-base rounded-full after:content-[''] after:w-0 after:h-0.5 after:absolute after:transition-all before:content-[''] before:w-0 before:h-0.5 before:absolute before:transition-all after:duration-500 after:ease-linear before:ease-linear before:right-0 before:top-0 before:duration-500 after:left-0 after:bottom-0 p-1 px-2.5 cursor-pointer border-none after:bg-black before:bg-black">
                                    <span className="before:left-0 group-hover/item:after:h-full group-hover/item:before:h-full before:bottom-0 after:right-0 after:top-0 block px-1 py-0.5 after:content-[''] before:content-[''] after:w-0.5 before:w-0.5 after:h-0 before:h-0 after:absolute before:absolute after:ease-linear before:ease-linear before:transition-all after:duration-500 after:transition-all before:duration-500 after:bg-black before:bg-black text-sm font-inter">
                                        Join Us
                                        <span className="ml-1">
                                            <span className="text-base">+</span>
                                        </span>
                                    </span>
                                </Button>
                                <Link href='/affiliates' className="text-base mx-3.5 font-medium inline-block text-rasin-black relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="">Affiliates</span>
                                </Link>
                            </motion.div>
                            <motion.div whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.7 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, x: 100 }} className="block md:hidden relative z-[9999] transform-none">
                                <MobileNav />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </header>
        </>
    )
}