"use client";

import Link from 'next/link';
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
              <div className="rounded-full bg-sky-200 text-sky-700 px-4 py-1">
                <p className="uppercase text-sm text-sky-700 px-1 py-0.5 font-roboto">our services</p>
              </div>
            </div>
            <div className="text-center mt-2 pt-2 mb-4 pb-4 w-full md:w-3/4 lg:w-2/3">
              <p className="text-teal-700 font-roboto text-5xl font-semibold leading-[1.3]">We develop solutions for schools</p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="pt-20abcdefghijklmnopqrstuvwxyz  bg-gradient-to-b from-slate-200 from-65% to-slate-50">
            <div className="-mt-28 app-container gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-2 justify-between align-middle items-center">
              <div className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></div>
              <div className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></div>
              <div className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></div>
              <div className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></div>
              <div className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></div>
              <div className="bg-white shadow-lg rounded-md py-4 px-2.5 text-slate-700 text-sm flex m-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
