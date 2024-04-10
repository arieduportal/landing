"use client";

import { useState, useEffect } from 'react';
import { SlideFade } from '@chakra-ui/react'

export default function CookieBanner() {
    const [cookieAccepted, setCookieAccepted] = useState(true);

    useEffect(() => {
        const isCookieAccepted = localStorage.getItem('cka');
        if (!isCookieAccepted) {
            setTimeout(() => setCookieAccepted(false), 3000)
        }
    }, []);

    const handleAcceptCookie = () => {
        localStorage.setItem('cka', 'yes');
        setCookieAccepted(true);
    };

    return (
        <>
            {!cookieAccepted && (
                <SlideFade in={!cookieAccepted}>
                    <div
                        className='py-2.5 px-2.5 md:pl-5 rounded-xl md:rounded-[50px] fixed bottom-14 left-1/2 w-3/4 text-center md:w-auto font-normal app-bs transform -translate-x-1/2 bg-white/30 backdrop-blur-sm text-sm z-[99999] text-gray-700 border border-gray-200'
                    >
                        <div className='flex flex-col md:flex-row justify-between align-middle items-center'>
                            <div className='mb-4 md:mb-0 p-0 text-sm mr-4'>This site uses cookies to improve your web experience.</div>
                            <div onClick={handleAcceptCookie} className='uppercase bg-teal-50 font-semibold cursor-pointer transition-all duration-500 rounded-full px-4 py-1.5 text-teal-700 hover:bg-black hover:text-white text-xs border border-transparent hover:border-slate-100'>Accept</div>
                        </div>
                    </div>
                </SlideFade>
            )}
        </>
    )
}