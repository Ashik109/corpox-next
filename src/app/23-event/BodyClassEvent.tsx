"use client";

import { useEffect } from "react";

function BodyClassEvent() {
    useEffect(() => {
        document.body.classList.add("demo-event");

        return () => {
            document.body.classList.remove("demo-event");
        };
    }, []);

    return null;
}

export default BodyClassEvent;
