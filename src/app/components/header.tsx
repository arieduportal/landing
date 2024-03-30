"use client";

import { useState, useEffect } from 'react';
import { Icon } from "@chakra-ui/react";
import {
    Menu, MenuButton, MenuList, MenuItem, Button
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoWhatsapp, IoAnalytics } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiMicrosoftacademic, SiNginxproxymanager } from "react-icons/si";
import { FaSitemap } from "react-icons/fa6";
import '../../../public/css/header.css'


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

    const handleScroll = () => {
        const menu = document.getElementById('header') as HTMLElement;
        const divTop = menu.offsetTop;
        const windowTop = window.pageYOffset - 0;

        if (windowTop > divTop) {
            if (!menu.classList.contains('stick')) {
                menu.classList.add('stick');
            }
            setIsNavVisible(true);
            setTimeout(() => {
                setIsNavAnimated(true);
            }, 2000);
        } else {
            menu.classList.remove('stick');
            setIsNavVisible(false);
            setIsNavAnimated(false);
        }
    };

    useEffect(() => {
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
                    <div className="app-container top-nav py-2 md:py-4 mx-auto flex flex-row justify-between align-middle items-center">
                        <div className="grid grid-cols-3 gap-x-4 justify-between align-middle items-center">
                            {socials.map(item => (
                                <span className="mb-0 inline-block" key={item.id}>
                                    <a href={item.tag} target="_blank" className="bg-transparent-white rounded-full m-0 text-xl w-[calc(20px+2*0em)] h-[calc(20px+2*0em)]">
                                        <Icon as={item.icon} className="block relative h-5 w-5 fill-[#B4B6C6] hover:fill-white transition-all duration-300" />
                                        <span className="sr-only">{item.name}</span>
                                    </a>
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-row gap-x-6 justify-center align-middle items-center">
                            <span>
                                <a href="/privacy" className="text-gray-400 hover:text-white text-sm font-inter transition-all duration-300">Privacy Policy</a>
                                <span className="sr-only">privacy policys</span>
                            </span>
                            <span>
                                <a href="/t&c" className="text-gray-400 hover:text-white text-sm font-inter transition-all duration-300">T&C</a>
                                <span className="sr-only">term and condition</span>
                            </span>
                            <span className="mr-2 z-[9999999]">
                                <a className="text-gray-400 hover:text-white text-sm font-inter transition-all duration-300">
                                    <Menu>
                                        <MenuButton>
                                            Log In
                                            <Icon as={IoMdLogIn} className="inline-block mx-1.5 relative h-4 w-4 fill-current transition-all duration-300" />
                                        </MenuButton>
                                        <MenuList className="bg-white z-[999999] text-black shadow-lg rounded-md border py-3 border-slate-300">
                                            {logins.map(item => (
                                                <MenuItem minH='38px' key={item.id} className="hover:bg-slate-100 rounded-lg transition-all duration-500">
                                                    <a href={item.tag} target="_blank" className="bg-transparent-white">
                                                        <Icon as={item.icon} className="inline-block relative h-5 w-5 fill-slate-500 mr-3 ml-3.5" />
                                                        <span className='font-medium text-[15px] font-roboto capitalize mr-4'>
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
                    <div className="app-container mx-auto rounded-md bg-white">
                        <div className="flex flex-row justify-between align-middle items-center font-inter py-3.5 px-3.5">
                            <div></div>
                            <div className="flex flex-row justify-between align-middle items-center my-1">
                                <a href='/plan' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="font-inter">Mission</span>
                                </a>
                                <a href='/plan' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="font-inter ">Plan</span>
                                </a>
                                <a href='/plan' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="">Faq</span>
                                </a>
                                <a href='/plan' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="">Team</span>
                                </a>
                                <Button className="mx-0.5 group/item bg-black transition-colors duration-500 text-white hover:bg-transparent hover:text-black capitalize hover:before:w-full hover:after:w-full text-base rounded-full after:content-[''] after:w-0 after:h-0.5 after:absolute after:transition-all before:content-[''] before:w-0 before:h-0.5 before:absolute before:transition-all after:duration-500 after:ease-linear before:ease-linear before:right-0 before:top-0 before:duration-500 after:left-0 after:bottom-0 p-1 px-2.5 cursor-pointer border-none after:bg-black before:bg-black">
                                    <span className="before:left-0 group-hover/item:after:h-full group-hover/item:before:h-full before:bottom-0 after:right-0 after:top-0 block px-1 py-0.5 after:content-[''] before:content-[''] after:w-0.5 before:w-0.5 after:h-0 before:h-0 after:absolute before:absolute after:ease-linear before:ease-linear before:transition-all after:duration-500 after:transition-all before:duration-500 after:bg-black before:bg-black text-sm font-inter">Join Us +</span>
                                </Button>
                                <a href='/plan' className="text-base mx-3.5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-500 ease-out">
                                    <span className="">Affiliates</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}