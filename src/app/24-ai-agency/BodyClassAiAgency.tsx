"use client";

import { useEffect } from "react";

function BodyClassAiAgency() {
    useEffect(() => {
        document.body.classList.add("demo-ai-agency");

        return () => {
            document.body.classList.remove("demo-ai-agency");
        };
    }, []);

    return null;
}

export default BodyClassAiAgency;
