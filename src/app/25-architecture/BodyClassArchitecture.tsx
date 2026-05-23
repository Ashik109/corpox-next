"use client";

import { useEffect } from "react";

function BodyClassArchitecture() {
    useEffect(() => {
        document.body.classList.add("demo-architecture", "dark-home");

        return () => {
            document.body.classList.remove("demo-architecture", "dark-home");
        };
    }, []);

    return null;
}

export default BodyClassArchitecture;
