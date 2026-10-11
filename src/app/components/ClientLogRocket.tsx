"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";

export default function ClientLogRocket() {
  useEffect(() => {
    const dev = process.env.NODE_ENV === "development";
    if (dev) return;
    LogRocket.init("71izqx/axiolot-hub", {
      persistUserIdInfo: true,
      shouldCaptureIP: true,
      rootHostname: "axiolot.com.ng",
      console: {
        isEnabled: {
          log: false,
          debug: false,
          info: false,
          warn: true,
          error: true,
        },
      },
    });
  }, []);

  return null;
}
