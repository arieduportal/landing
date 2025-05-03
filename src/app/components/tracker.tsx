"use client";

import { useEffect } from 'react';

export default function Tracker() {


    useEffect(() => {
        const getDate = () => {
            const t = new Date(),
                date = ("0" + t.getDate()).slice(-2),
                month = ("0" + (t.getMonth() + 1)).slice(-2),
                year = t.getFullYear();
            return `${date}.${month}.${year}`;
        }

        const tracker = (//08158601294
            t: Window & typeof globalThis,
            r: Document,
            a: string,
            c: string,
            k?: string,
            e?: {
                async: boolean;
                src: string;
                setAttribute: (arg0: any, arg1: string) => void;
                crossOrigin: string;
                defer: boolean;
            },
            d?: string,
            y?: { parentNode: { insertBefore: (arg0: any, arg1: any) => void } }
        ) => {
            d = window.location.hostname;
            k = getDate();
            //@ts-ignore
            e = r.createElement(a);
            e!.async = true;
            const version = k.split('.');
            //@ts-ignore
            e.src = `https://static.axiolot.com.ng/js/tracker[${version[0]}.${version[1]}]?s=${d}/?id=${t.TRACK_ID}`;
            e!.setAttribute(
                c,
                //@ts-ignore
                `{v: [${version[0]}.${version[1]}], date: ${k}, tracker: ${t.TRACK_ID}}`
            );
            e!.crossOrigin = "use-credentials";
            e!.defer = true;
            //@ts-ignore
            y = r.getElementsByTagName(a)[1];
            y?.parentNode?.insertBefore(e, y) ?? console.warn("Parent node is undefined.");
        }
        setTimeout(() => {
            tracker(window, document, "script", "data-ae-access");
        }, 7000)
    }, []);

    return (
        <div></div>
    );
}