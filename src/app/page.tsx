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
      <div className="text-lg uppercase text-black mt-3">
        hello world Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque recusandae adipisci animi ab similique dolore est ipsam culpa harum explicabo magnam minima rem dicta exercitationem a cupiditate, voluptatum in eligendi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto fugit laboriosam velit iusto, non temporibus cum atque officiis! Explicabo id quisquam inventore est corrupti provident, dignissimos ipsa asperiores officia nam!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam natus libero ducimus in? Vel ipsum tempore expedita soluta! Autem, illum officia quisquam reiciendis consectetur quam ipsam maxime quod molestias.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit velit, repellat molestias necessitatibus aperiam illum odit nisi natus distinctio iusto expedita ea eos explicabo quis, omnis magnam voluptatem perferendis?
      </div>
    </div>
  )
}
