/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link"
import { FaAngleRight, FaLocationArrow } from "react-icons/fa";
import { RiWhatsappLine, RiTwitterFill, RiInstagramLine, RiFacebookFill, RiPhoneFill, RiMailLine, RiTimeLine } from "react-icons/ri";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-gray-300">
            <div className="bg-slate-100 py-8 relative footer-top" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_CDN}/svg/bg.svg) !important` }}>
                <div className="app-container">
                    <div className="pt-16 pb-12 md:pt-20 md:pb-16">
                        <div className="flex flex-wrap mt-0 -mx-3 flex-col justify-between align-middle lg:items-start lg:flex-row pb-10">
                            <div data-wow-delay="0.4s" className="w-full wow slideInUp max-w-full lg:flex-[0_0_auto] lg:w-2/5 mt-0 px-3">
                                <div className="mb-6">
                                    {/* <img src="/image/logo.png" alt="" className="max-w-[40%] mb-5" /> */}
                                    <h3 className="text-black mt-2.5 mb-7 text-lg font-semibold font-merri uppercase">AXIOLOT HUB LOGO</h3>
                                    <p className="text-black font-normal text-base font-satoshi mb-2.5 mt-0">
                                        AXIOLOT HUB: Your transformative partners, not just consultants. We amplify your institution across educational sectors with technology-driven excellence. Join our proven circle for unrivaled academics elevation.
                                    </p>
                                    <ul className="p-0 mt-5 list-none">
                                        <li className="inline-block mr-2">
                                            <a href="https://wa.me/+2347081317077" className="transition-all duration-500 no-underline">
                                                <RiWhatsappLine className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                        <li className="inline-block mr-2">
                                            <a href="https://instagram.com/axiolothub" className="transition-all duration-500 no-underline">
                                                <RiInstagramLine className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                        <li className="inline-block mr-2">
                                            <a href="https://twitter.com/@axiolothub" className="transition-all duration-500 no-underline">
                                                <RiTwitterFill className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                        <li className="inline-block mr-2">
                                            <a href="https://facebook.com/axiolothub" className="transition-all duration-500 no-underline">
                                                <RiFacebookFill className="bg-slate-600 text-white p-1.5 w-8 h-8 text-center rounded-full transition-all duration-300 leading-8 shadow-custom hover:bg-white hover:text-rasin-black hover:scale-[1.09] transform" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.4s" className="w-full wow slideInUp max-w-full lg:flex-[0_0_auto] lg:w-1/4 mt-0 px-3">
                                <div className="mb-6">
                                    <h3 className="text-black mt-2.5 mb-7 text-lg font-semibold font-merri uppercase">Quick link</h3>
                                    <div className="flex flex-wrap -mx-4 mt-0">
                                        <div className="md:flex-[0_0_auto] max-w-full w-full flex-shrink-0 px-4 mt-0">
                                            <ul className="list-none p-0 m-0">
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <a href="#about" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">About Us</a>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <a href="#service" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Our Service</a>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <a href="#blog" className="text[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Blog</a>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <a href="#plan" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Pricing</a>
                                                </li>
                                                <li className="relative pl-5 mb-2.5 font-normal">
                                                    <FaAngleRight className="absolute left-0 top-1 text-slate-800" />
                                                    <Link href="#" className="text-[15px] leading-6 font-inter text-black transition-all duration-300 hover:pl-2 hover:text-rasin-black">Become an afflilate</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-black mt-2.5 mb-7 text-lg font-semibold font-merri uppercase">Office Hour</h3>
                                    <ul className="m-0 p-0 list-none">
                                        <li className="text-black pl-5 relative mb-3.5 text-sm font-inter font-normal">
                                            <RiTimeLine className="absolute top-1 left-0 text-slate-800" />
                                            <Link href="" className="text-sm transition-all duration-300 pl-2 hover:pl-4 hover:text-rasin-black">
                                            Monday - Friday: 8AM - 4PM <br/> Saturday: 8AM - 12Noon
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div data-wow-delay="0.4s" className="w-full wow slideInUp max-w-full lg:flex-[0_0_auto] lg:w-1/3 mt-0 px-3">
                                <div className="mb-6">
                                    <h3 className="text-black mt-2.5 mb-7 text-lg font-semibold font-merri uppercase">subscribe to our newletter</h3>
                                    <p className="text-black font-normal text-base font-inter mb-2.5 mt-0">Dont miss out on a single update! Stay in the know with our newsletter.</p>
                                    <div className="mt-6 mb-4">
                                        <input type="text" name="" id="" className="rounded-full transition-all duration-300 px-4 pl-6 outline-none py-3.5 text-sm font-roboto text-rasin-black border-slate-200 border hover:border-teal-400 ring-2 ring-transparent hover:ring-slate-300 focus:border-rose-400 w-full shadow-custom mb-4" placeholder="Your Email Address" />
                                        <div className="w-full md:w-1/2 mx-auto mb-2">
                                            <button className="hover:shadow-md ripple-btn overflow-hidden transition-shadow duration-300 bg-rasin-black text-white relative text-center w-full mx-auto rounded-full py-3 px-7 opacity-100 inline-block">
                                                <p className="z-50 relative transition-[color] duration-700 text-white">Subscribe</p>
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
                                            <Link href="" className="text-sm transition-all duration-300 pl-2 hover:pl-4 hover:text-rasin-black">Block 4, Opp. St.Faith Schools Ebony Paint Road, Enugu State</Link>
                                        </li>
                                        <li className="text-black pl-5 relative mb-3.5 text-sm font-inter font-normal">
                                            <RiPhoneFill className="absolute top-1 left-0 text-slate-800" />
                                            <Link href="tel:+2347073184665" target="_blank" className="text-sm transition-all duration-300 pl-2 hover:pl-4 hover:text-rasin-black">+(234) 707 318 4665</Link>
                                        </li>
                                        <li className="text-black pl-5 relative mb-3.5 text-sm font-inter font-normal">
                                            <RiMailLine className="absolute top-1 left-0 text-slate-800" />
                                            <Link href="mailto:support@axiolot.com.ng" target="_blank" className="text-sm transition-all duration-300 pl-2 hover:pl-4 hover:text-rasin-black">support@axiolot.com.ng</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div data-wow-delay="0.3s" className="w-auto wow fadeInUp md:w-3/4 mx-auto mt-8 mb-2 rounded-lg shadow-app z-50 bg-white/70 backdrop-blur-md border-2 border-white drop-shadow-md relative">
                            <div className="flex justify-evenly flex-col md:flex-row items-center align-middle">
                                <div className="w-full md:w-auto py-4 md:py-14 md:px-16 text-center">
                                    <h1 className="font-merri text-gradient-1 mb-2 md:mb-4 text-base font-semibold">Consultation Email</h1>
                                    <Link href="mailto:info@axiolot.com.ng" target="_blank" className="text-purple-500 font-inter text-sm font-normal">info@axiolot.com.ng</Link>
                                </div>
                                <div className="w-full md:w-auto py-4 md:py-14 md:px-16 text-center border-t md:border-t-0 md:border-l border-slate-200">
                                    <h1 className="font-merri text-gradient-1 mb-2 md:mb-4 text-base font-semibold">Consultation Number (Whatsapp Only)</h1>
                                    <Link href="https://wa.me/+2347081317077" target="_blank" className="text-purple-500 font-inter text-sm font-normal">+234 7081 3170 77</Link>
                                </div>
                            </div>
                            <div className="absolute -top-8 -left-4 animate-bounce bounce">
                                <img src={process.env.NEXT_PUBLIC_CDN + "/image/consult.png"} alt="" className="w-32 h-32" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-3 right-6 tri-shape">
                    <img src={process.env.NEXT_PUBLIC_CDN + "/image/tri-shape.png"} alt="shape triangle" className="max-w-full align-middle" />
                </div>
                <div className="absolute left-1/3 top-1/4 round-shape">
                    <img src={process.env.NEXT_PUBLIC_CDN + "/image/round-shape.png"} alt="shape circle" className="max-w-full align-middle" />
                </div>
                <div className="absolute bottom-4 left-1/3 animate-spin duration-[3s] p-3 backdrop-blur-sm bg-teal-600/60"></div>
            </div>
            <div className="bg-rasin-black border-t border-dashed p-4 border-white">
                <div className="app-container text-center text-white text-xs">
                    <p>© 2021 - {currentYear}. <span className="ml-2">AXIOLOT HUB™ Helping schools to track student proformance, manage grades and others</span> </p>
                </div>
            </div>
        </footer>
    )
}
