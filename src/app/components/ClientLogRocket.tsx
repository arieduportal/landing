"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";

export default function ClientLogRocket() {
    useEffect(() => {
        const dev = process.env.NODE_ENV === "development";
        console.log(dev)
        if (dev) return;
        LogRocket.init("71izqx/axiolot-hub");
    }, []);

    return null;
}