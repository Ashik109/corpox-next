"use client";

import { useEffect } from "react";

function BodyClassConstruction() {
    useEffect(() => {
        document.body.classList.add("dark-home", "demo-construction");

        return () => {
            document.body.classList.remove("dark-home", "demo-construction");
        };
    }, []);

    return null;
}

export default BodyClassConstruction;
