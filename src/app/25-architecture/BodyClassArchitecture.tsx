"use client";

import { useEffect } from "react";

function BodyClassArchitecture() {
    useEffect(() => {
        document.body.classList.add("demo-architecture");

        return () => {
            document.body.classList.remove("demo-architecture");
        };
    }, []);

    return null;
}

export default BodyClassArchitecture;
