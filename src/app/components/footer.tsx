/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <motion.footer whileInView={{ scale: 1, y: 0, transition: { delay: 0.3, duration: 0.9 } }} viewport={{ once: true, amount: .9 }} initial={{ scale: 0.1, y: -50 }} className="border-t border-gray-300">
            <div className="bg-slate-100 py-8 relative footer-top">
                <div className="app-container">
                    <div className="pt-[100px] pb-[60px]">
                        <div className="flex flex-wrap mt-0 -mx-3"></div>
                        <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.9 } }} viewport={{ once: false, amount: .9 }} initial={{ opacity: 0.1, y: 50 }} className="w-auto md:w-3/4 mx-auto mt-8 mb-2 rounded-lg shadow-app z-50 bg-white/70 backdrop-blur drop-shadow-md relative">
                            <div className="flex justify-evenly flex-col md:flex-row items-center align-middle">
                                <div className="w-full md:w-auto py-4 md:py-14 md:px-16 text-center">
                                    <h1 className="font-roboto text-gradient-1 mb-2 md:mb-4 text-base font-semibold">Consultation Email</h1>
                                    <p className="text-purple-500 font-inter text-sm font-normal">support@ajhub.com</p>
                                </div>
                                <div className="w-full md:w-auto py-4 md:py-14 md:px-16 text-center border-t md:border-t-0 md:border-l border-slate-200">
                                    <h1 className="font-roboto text-gradient-1 mb-2 md:mb-4 text-base font-semibold">Consultation Number (Whatsapp Only)</h1>
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
                <div className="absolute left-1/3 top-1/3 round-shape">
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