"use client";

import { useEffect } from "react";

function BodyClassConstruction() {
    useEffect(() => {
        document.body.classList.add("demo-construction");

        return () => {
            document.body.classList.remove("demo-construction");
        };
    }, []);

    return null;
}

export default BodyClassConstruction;
