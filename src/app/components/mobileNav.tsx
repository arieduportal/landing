import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
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
            <nav className="fixed w-full bg-black flex justify-center items-center" style={style}>
                <div className="close text-white w-8 h-8 absolute top-[6%] right-[5%] cursor-pointer" style={aStyle}>
                    <div>
                        <CgClose className="text-white" />
                    </div>
                </div>
                <ul className="list-none">
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
                        <a scroll={false} href='/member' className="text-white text-lg font-medium relative" style={aStyle}>Member</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
