import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { CgMenuRight, CgClose } from "react-icons/cg";
import '../../../public/css/mobileNav.css';

export default function MobileNav() {
    useEffect(() => {
        const open = document.querySelector('.open') as HTMLElement;
        const close = document.querySelector('.close') as HTMLElement;
        const tl = gsap.timeline({ defaults: { duration: .8, ease: 'expo.inOut' } });

        const openNav = () => {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('nav', { right: 0 })
                    .to('nav', { height: '100vh' }, '-=.1')
                    .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
                    .to('.close', { opacity: 1, pointerEvents: 'all' }, '-=.8');
            }
        };

        const closeNav = () => {
            tl.reverse();
        };

        open.addEventListener('click', openNav);
        close.addEventListener('click', closeNav);

        return () => {
            open.removeEventListener('click', openNav);
            close.removeEventListener('click', closeNav);
        };
    }, []);

    const style = {
        right: "-300vw",
        height: "60px"
    }

    const aStyle: React.CSSProperties = {
        opacity: 0,
        pointerEvents: "none"

    }

    return (
        <div className="relative">
            <div className="open h-5 cursor-pointer">
                <CgMenuRight className="h-5 text-black fill-black" />
            </div>
            <nav className="fixed w-full bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center" style={style}>
                <div className="close text-white w-8 h-8 absolute top-[6%] right-[5%] cursor-pointer" style={aStyle}>
                    <div>
                        <CgClose className="text-white" />
                    </div>
                </div>
                <ul className="list-none font-roboto">
                    <li className="my-12">
                        <Link scroll={false} href='/mission' className="text-white text-lg font-medium relative" style={aStyle}>Mission</Link>
                    </li>
                    <li className="my-12">
                        <Link scroll={false} href='/plan' className="text-white text-lg font-medium relative" style={aStyle}>Plan</Link>
                    </li>
                    <li className="my-12">
                        <Link scroll={false} href='/faq' className="text-white text-lg font-medium relative" style={aStyle}>Faq</Link>
                    </li>
                    <li className="my-12">
                        <Link scroll={false} href='/member' className="text-white text-lg font-medium relative" style={aStyle}>Member</Link>
                    </li>
                    <li className="my-12">
                        <Link scroll={false} href="/affiliates" className="text-white text-lg font-medium relative close" style={aStyle}>Affiliates</Link>
                    </li>
                </ul>
                <Button className="mx-0.5 group/item bg-black transition-colors duration-500 text-white hover:bg-transparent hover:text-black capitalize hover:before:w-full hover:after:w-full text-base rounded-full after:content-[''] after:w-0 after:h-0.5 after:absolute after:transition-all before:content-[''] before:w-0 before:h-0.5 before:absolute before:transition-all after:duration-500 after:ease-linear before:ease-linear before:right-0 before:top-0 before:duration-500 after:left-0 after:bottom-0 p-1 px-2.5 cursor-pointer border-none after:bg-black before:bg-black w-32">
                    <span className="before:left-0 group-hover/item:after:h-full group-hover/item:before:h-full before:bottom-0 after:right-0 after:top-0 block px-1 py-0.5 after:content-[''] before:content-[''] after:w-0.5 before:w-0.5 after:h-0 before:h-0 after:absolute before:absolute after:ease-linear before:ease-linear before:transition-all after:duration-500 after:transition-all before:duration-500 after:bg-black before:bg-black text-sm font-inter">
                        Join Us
                        <span className="ml-1">
                            <span className="text-base">+</span>
                        </span>
                    </span>
                </Button>
            </nav>
        </div>
    );
};
