"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/menu'


const socials = [
  { id: 1, name: "Email", image: "/image/email.svg", link: "mailto:support@arieducationportal.com", alt: "Email us" },
  { id: 2, name: "X (Twitter)", image: "/image/x.svg", link: "https://www.x.com/arieducationhub", alt: "Follow us on Twitter" },
  { id: 3, name: "Whatsapp", image: "/image/wa.svg", link: "https://wa.me/+2347036575295", alt: "Chat us on Whatsapp" },
  { id: 4, name: "Instagram", image: "/image/ig.svg", link: "https://instagram.com/arieducationhub", alt: "Follow us on Instagram" }
]

export default function Index() {
  return (
    <div className="min-h-[200vh]">
      <div className="">

      </div>
      <div className="my-3 py-3">
        <div className="app-container flex justify-center items-center mx-auto relative">
          <div className="flex relative flex-wrap min-h-[1px] flex-col justify-center items-center align-middle">
            <div className="text-center">
              <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, y: 50 }} className="rounded-full bg-sky-200 text-sky-700 px-4 py-1 translate-x-0">
                <p className="uppercase text-sm text-sky-700 px-1 py-0.5 font-roboto">our services</p>
              </motion.div>
            </div>
            <motion.div variants={{
              hidden: { scale: 0, y: 75 },
              visible: { scale: 1, y: 0 }
            }} initial="hidden" animate="visible" transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false, amount: .5 }} className="text-center mt-2 pt-2 mb-4 pb-4 w-full md:w-3/4 lg:w-2/3">
              <p className="text-teal-700 font-roboto text-5xl font-semibold leading-[1.3]">We develop solutions for schools</p>
            </motion.div>
          </div>
        </div>
        <div className="pt-4">
          <div className="pt-20 bg-gradient-to-b from-slate-200 from-65% to-slate-50">
            <div className="-mt-28 app-container gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-2 justify-between align-middle items-center">
              <motion.div whileInView={{ scale: 1, x: 0, transition: { delay: 0.2, duration: 0.9 } }} viewport={{ once: true, amount: .4 }} initial={{ scale: 0.1, x: -100 }} className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></motion.div>
              <motion.div whileInView={{ scale: 1, x: 0, transition: { delay: 0.2, duration: 0.9 } }} viewport={{ once: true, amount: .4 }} initial={{ scale: 0.1, x: 100 }} className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, y: -70 }} className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ opacity: 0, y: -70 }} className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></motion.div>
              <motion.div whileInView={{ scale: 1, y: 0, transition: { delay: 0.6, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ scale: 0, y: 50 }} className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></motion.div>
              <motion.div whileInView={{ scale: 1, y: 0, transition: { delay: 0.6, duration: 0.9 } }} viewport={{ once: true, amount: .5 }} initial={{ scale: 0, y: 50 }} className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
