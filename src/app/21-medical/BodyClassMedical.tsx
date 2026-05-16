"use client";

import { useEffect } from "react";

function BodyClassMedical() {
    useEffect(() => {
        document.body.classList.add("demo-medical");

        return () => {
            document.body.classList.remove("demo-medical");
        };
    }, []);

    return null;
}

export default BodyClassMedical;
