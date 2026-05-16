"use client";

import { useEffect } from "react";

function BodyClassSolar() {
    useEffect(() => {
        document.body.classList.add("demo-solar");

        return () => {
            document.body.classList.remove("demo-solar");
        };
    }, []);

    return null;
}

export default BodyClassSolar;
