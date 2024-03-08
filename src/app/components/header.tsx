"use client";

import { Icon } from "@chakra-ui/react";
import {
    Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";


export default function Header() {
    const socials = [
        { id: 1, name: "Instagram", icon: IoLogoInstagram, tag: "https://instagram.com/" },
        { id: 2, name: "Twitter", icon: IoLogoTwitter, tag: "https://twitter.com/" },
        { id: 3, name: "Whatsapp", icon: IoLogoWhatsapp, tag: "https://wa.me/+234" }
    ];

    const logins = [
        { id: 1, name: "Instagram", icon: IoLogoInstagram, tag: "https://instagram.com/" },
        { id: 2, name: "Twitter", icon: IoLogoTwitter, tag: "https://twitter.com/" },
        { id: 3, name: "Whatsapp", icon: IoLogoWhatsapp, tag: "https://wa.me/+234" }
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
                            <span className="mr-2">
                                <a className="text-gray-400 hover:text-white text-sm font-inter transition-all duration-300">
                                    <Menu>
                                        <MenuButton>
                                            Log In
                                            <Icon as={IoMdLogIn} className="inline-block mx-1.5 relative h-4 w-4 fill-current transition-all duration-300" />
                                        </MenuButton>
                                        <MenuList className="bg-white text-black shadow-lg rounded-md border py-3 px-5 border-slate-300">
                                            <MenuItem>Download</MenuItem>
                                            <MenuItem>Create a Copy</MenuItem>
                                            <MenuItem>Mark as Draft</MenuItem>
                                            <MenuItem>Delete</MenuItem>
                                            <MenuItem>Attend a Workshop</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="app-container mx-auto rounded-md bg-white">
                        <div className="flex flex-row justify-between align-middle items-center font-inter py-2">

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}