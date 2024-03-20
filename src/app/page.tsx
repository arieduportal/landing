"use client";

import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/menu'


const socials = [
  { id: 1, name: "Email", image: "/image/email.svg", link: "mailto:support@arieducationportal.com", alt: "Email us" },
  { id: 2, name: "X (Twitter)", image: "/image/x.svg", link: "https://www.x.com/arieducationhub", alt: "Follow us on Twitter" },
  { id: 3, name: "Whatsapp", image: "/image/wa.svg", link: "https://wa.me/+2347036575295", alt: "Chat us on Whatsapp" },
  { id: 4, name: "Instagram", image: "/image/ig.svg", link: "https://instagram.com/arieducationhub", alt: "Follow us on Instagram" }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-0">
      <div className="">
        <img src="/image/Wzcdkj2.png" alt="arihub logo" className='w-32 h-28 md:h-36 md:w-40 mx-auto' loading="eager" />
        <div className="mb-6">
          <p className="text-center font-bold uppercase text-2xl">AJHUB</p>
        </div>
        <p className="text-center font-bold uppercase text-base md:text-xl">Website is currently undergoing updates</p>
        <div className="my-4 pt-3 flex flex-row justify-between items-center w-3/4 md:w-auto mx-auto">
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
            >
              <div className='flex flex-col items-center justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[var(--forground-rgb)] mb-1.5 pb-1" width="40" height="40" viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="20" fill="none" stroke="none" /><path fill="currentColor" d="M7.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-1.551.75a.949.949 0 0 0-.949.949c0 .847.577 1.585 1.399 1.791l.059.015c.684.17 1.4.17 2.084 0l.06-.015A1.846 1.846 0 0 0 10 11.699a.949.949 0 0 0-.949-.949H5.95ZM12 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.75 4A1.75 1.75 0 0 0 3 5.75v8.5c0 .966.784 1.75 1.75 1.75h5.587a3.474 3.474 0 0 1-.302-1H4.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 4.75 5h12.5a.75.75 0 0 1 .75.75v5.285c.353.05.69.154 1 .302V5.75A1.75 1.75 0 0 0 17.25 4H4.75Zm8.75 8a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z" /></svg>
                <p className="text-sm md:text-[15px]">Contact Us</p>
              </div>
            </MenuButton>
            <MenuList className="z-50">
              {socials.map((item, _index) => {
                return <div key={item.id} className={`dfT_${_index}`}>
                  <MenuItem>
                    <Link target="_blank" href={item.link} className="flex items-center justify-between align-middle">
                      <picture>
                        <img src={item.image} alt={item.alt} className="w-12 h-6" loading="lazy" />
                      </picture>
                      <p className="text-sm text-black">{item.name}</p>
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                </div>;
              })}
            </MenuList>
          </Menu>
          <Link href="https://app.arieducationportal.com" className='flex flex-col items-center justify-between'>
            <svg xmlns="http://www.w3.org/2000/svg" className="text-[var(--forground-rgb)] mb-1.5 pb-1" width="40" height="40" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M3 12h10.25L10 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L13.25 13H3v-1Z" /></svg>
            <p className="text-sm md:text-[15px]">Login</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
