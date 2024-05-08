/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link"
import { FaAngleRight, FaLocationArrow } from "react-icons/fa";
import { RiWhatsappLine, RiTwitterFill, RiInstagramLine, RiGithubLine, RiPhoneFill, RiMailLine } from "react-icons/ri";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <motion.footer whileInView={{ scale: 1, y: 0, transition: { delay: 0.3, duration: 0.9 } }} viewport={{ once: true, amount: .9 }} initial={{ scale: 0.1, y: 50 }} className="border-t border-gray-300">
            <div className="bg-slate-100 py-8 relative footer-top">
                <div className="app-container">
                    <div className="pt-16 pb-12 md:pt-20 md:pb-16">
                        <div className="flex flex-wrap mt-0 -mx-3 flex-col justify-between align-middle lg:items-start lg:flex-row pb-10">
                            <motion.div whileInView={{ scale: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }} viewport={{ once: true, amount: .7 }} initial={{ scale: 0.1, y: 50 }} className="w-full max-w-full lg:flex-[0_0_auto] lg:w-2/5 mt-0 px-3">
                                <div className="mb-6">
                                    <img src="/image/logo.png" alt="" className="max-w-[40%] mb-5" />
                                    <p className="text-black font-normal text-base font-inter mb-2.5 mt-0">
                                        AJHUB: Your transformative partners, not just consultants. We amplify your enterprise across industries with technology-driven excellence. Join our proven expertise for unrivaled business elevation.
                                    </p>
                                    <ul className="p-0 mt-5 list-none">
                                        <li className="inline-block mr-2">
                                            <a href="#" className="transition-all duration-500 no-underline">
                                                <RiWhatsappLine className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                        <li className="inline-block mr-2">
                                            <a href="#" className="transition-all duration-500 no-underline">
                                                <RiInstagramLine className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                        <li className="inline-block mr-2">
                                            <a href="#" className="transition-all duration-500 no-underline">
                                                <RiTwitterFill className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                        <li className="inline-block mr-2">
                                            <a href="#" className="transition-all duration-500 no-underline">
                                                <RiGithubLine className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div whileInView={{ scale: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }} viewport={{ once: true, amount: .7 }} initial={{ scale: 0.1, y: 50 }} className="w-full max-w-full lg:flex-[0_0_auto] lg:w-1/4 mt-0 px-3">
                                <div className="mb-6">
                                    <h3 className="text-black mt-2.5 mb-7 text-lg font-semibold font-merri uppercase">Quick link</h3>
                                    <div className="flex flex-wrap -mx-4 mt-0">
                                        <div className="md:flex-[0_0_auto] max-w-full w-full flex-shrink-0 px-4 mt-0">
                                            <ul className="list-none p-0 m-0">
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <Link href="#" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">About Us</Link>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <Link href="#" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Our Service</Link>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <Link href="#" className="text[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Blog</Link>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <Link href="#" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Projects</Link>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <Link href="#" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Become an afflilate</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileInView={{ scale: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }} viewport={{ once: true, amount: .7 }} initial={{ scale: 0.1, y: 50 }} className="w-full max-w-full lg:flex-[0_0_auto] lg:w-1/3 mt-0 px-3">
                                <div className="mb-6">
                                    <h3 className="text-black mt-2.5 mb-7 text-lg font-semibold font-merri uppercase">subscribe to our newletter</h3>
                                    <p className="text-black font-normal text-base font-inter mb-2.5 mt-0">Dont miss out on a single update! Stay in the know with our newsletter.</p>
                                    <div className="mt-6 mb-4">
                                        <input type="text" name="" id="" className="rounded-full transition-all duration-300 px-4 pl-6 outline-none py-3.5 text-sm font-roboto text-rasin-black border-slate-200 border hover:border-teal-400 ring-2 ring-transparent hover:ring-slate-300 focus:border-rose-400 w-full shadow-custom mb-4" placeholder="Your Email Address" />
                                        <div className="w-full md:w-1/2 mx-auto mb-2">
                                            <button className="hover:shadow-md ripple-btn overflow-hidden transition-shadow duration-300 bg-rasin-black text-white relative text-center mx-auto rounded-full py-3 px-7">
                                                <text className="z-50 relative transition-[color] duration-700 text-white">Subscribe</text>
                                                <span className="absolute w-0 h-0 z-0 opacity-100 rounded-full block"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-black mt-2.5 mb-7 text-lg font-semibold font-merri uppercase">contact info</h3>
                                    <ul className="m-0 p-0 list-none">
                                        <li className="text-black pl-5 relative mb-3.5 text-sm font-inter font-normal">
                                            <FaLocationArrow className="absolute top-1 left-0 text-slate-800" />
                                            <Link href="" className="text-sm transition-all duration-300 pl-2 hover:pl-4 hover:text-rasin-black">Opp. St.Faith Schools Ebony Paint Road</Link>
                                        </li>
                                        <li className="text-black pl-5 relative mb-3.5 text-sm font-inter font-normal">
                                            <RiPhoneFill className="absolute top-1 left-0 text-slate-800" />
                                            <Link href="tel:" className="text-sm transition-all duration-300 pl-2 hover:pl-4 hover:text-rasin-black">+(234) 7045 22 9531 </Link>
                                        </li>
                                        <li className="text-black pl-5 relative mb-3.5 text-sm font-inter font-normal">
                                            <RiMailLine className="absolute top-1 left-0 text-slate-800" />
                                            <Link href="mailto:info@arieducationportal.com" className="text-sm transition-all duration-300 pl-2 hover:pl-4 hover:text-rasin-black">info@arieducationportal.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }} viewport={{ once: true, amount: .9 }} initial={{ opacity: 0.1, y: 50 }} className="w-auto md:w-3/4 mx-auto mt-8 mb-2 rounded-lg shadow-app z-50 bg-white/70 backdrop-blur drop-shadow-md relative">
                            <div className="flex justify-evenly flex-col md:flex-row items-center align-middle">
                                <div className="w-full md:w-auto py-4 md:py-14 md:px-16 text-center">
                                    <h1 className="font-merri text-gradient-1 mb-2 md:mb-4 text-base font-semibold">Consultation Email</h1>
                                    <p className="text-purple-500 font-inter text-sm font-normal">support@ajhub.com</p>
                                </div>
                                <div className="w-full md:w-auto py-4 md:py-14 md:px-16 text-center border-t md:border-t-0 md:border-l border-slate-200">
                                    <h1 className="font-merri text-gradient-1 mb-2 md:mb-4 text-base font-semibold">Consultation Number (Whatsapp Only)</h1>
                                    <p className="text-purple-500 font-inter text-sm font-normal">+234 7081 3170 77</p>
                                </div>
                                <motion.div className="absolute top-2 md:top-1/2 right-3 md:right-1/2 bg-transparent p-1.5 md:p-3 border border-pink-600" animate={{
                                    scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 270, 270, 0],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                }} transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}></motion.div>
                            </div>
                            <div className="absolute -top-8 -left-4 animate-bounce bounce">
                                <img src="/image/consult.png" alt="" className="w-32 h-32" />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-3 right-6 tri-shape">
                    <img src="/image/tri-shape.png" alt="shape triangle" className="max-w-full align-middle" />
                </div>
                <div className="absolute left-1/3 top-1/4 round-shape">
                    <img src="/image/round-shape.png" alt="shape circle" className="max-w-full align-middle" />
                </div>
                <div className="absolute bottom-4 left-1/3 animate-spin duration-[3s] p-3 backdrop-blur-sm bg-teal-600/60"></div>
            </div>
            <div className="bg-rasin-black border-t border-dashed p-4 border-white">
                <div className="app-container text-center text-white text-xs">
                    <p>© 2021 - {currentYear}. <span className="ml-2">AJHUB™ Helping schools to track student proformance, manage grades and others</span> </p>
                </div>
            </div>
        </motion.footer>
    )
}