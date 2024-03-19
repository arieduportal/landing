"use client";

import { Icon } from "@chakra-ui/react";
import {
    Menu, MenuButton, MenuList, MenuItem, Button
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoWhatsapp, IoAnalytics } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiMicrosoftacademic, SiNginxproxymanager } from "react-icons/si";
import { FaSitemap } from "react-icons/fa6";


export default function Header() {
    const socials = [
        { id: 1, name: "Instagram", icon: IoLogoInstagram, tag: "https://instagram.com/" },
        { id: 2, name: "Twitter", icon: IoLogoTwitter, tag: "https://twitter.com/" },
        { id: 3, name: "Whatsapp", icon: IoLogoWhatsapp, tag: "https://wa.me/+234" }
    ];

    const logins = [
        { id: 1, name: "Academics Portal", icon: SiMicrosoftacademic, tag: "https://edu.ajhub.com/" },
        { id: 2, name: "e-Payment Portal", icon: RiSecurePaymentFill, tag: "https://twitter.com/" },
        { id: 3, name: "Analytics Manager", icon: IoAnalytics, tag: "https://wa.me/+234" },
        { id: 4, name: "Site Management", icon: FaSitemap, tag: "https://wa.me/+234" },
        { id: 5, name: "StaffPay Manager", icon: SiNginxproxymanager, tag: "https://wa.me/+234" }
    ];

    return (
        <>
            <header>
                <div className=""></div>
                <div className="from-[rgb(59,58,78)] from-40% to-rasin-black w-full bg-gradient-to-r">
                    <div className="app-container py-2 md:py-4 mx-auto flex flex-row justify-between align-middle items-center">
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
                                                        <span className='font-medium text-[15px] font-inter capitalize mr-4'>
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
                        <div className="flex flex-row justify-between align-middle items-center font-inter py-3 -mb-5 px-3.5">
                            <div></div>
                            <div className="flex flex-row justify-between align-middle items-center my-1">
                                <a href='/plan' className="text-base mx-5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-250 ease-out">
                                    <span className="">Mission</span>
                                </a>
                                <a href='/plan' className="text-base mx-5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-250 ease-out">
                                    <span className="">Plan</span>
                                </a>
                                <a href='/plan' className="text-base mx-5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-250 ease-out">
                                    <span className="">FAQ</span>
                                </a>
                                <a href='/plan' className="text-base mx-5 font-medium inline-block text-rasin-black  relative no-underline after:content-[''] after:rounded-sm after:h-[0.05em] after:absolute after:w-full after:transform after:bottom-0 after:left-0 after:bg-rasin-black after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left duration-250 ease-out">
                                    <span className="">Team</span>
                                </a>
                                <Button colorScheme='teal' variant='outline'>
                                    Button
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}