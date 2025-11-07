"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";

export default function ClientLogRocket() {
    useEffect(() => {
        LogRocket.init("71izqx/axiolot-hub");
    }, []);

    return null;
}