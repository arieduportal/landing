import { useEffect } from 'react';
import gsap from 'gsap';
import { CgMenuRight, CgClose } from "react-icons/cg";

export default function MobileNav() {
    useEffect(() => {
        const open = document.querySelector('.open') as HTMLElement;
        const close = document.querySelector('.close') as HTMLElement;
        const tl = gsap.timeline({ defaults: { duration: 3, ease: 'expo.inOut' } });

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
        right: "-300px",
        height: "30px"
    }

    return (
        <div className="relative">
            <div className="open h-5 cursor-pointer">
                <CgMenuRight className="h-5 text-black fill-black" />
            </div>
            <nav className="fixed w-full bg-black flex justify-center items-center" style={style}>
                <div className="close">
                    <div>
                        <CgClose />
                    </div>
                </div>
                <ul className="list-none">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};
