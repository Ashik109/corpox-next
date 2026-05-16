"use client";

import { useEffect } from "react";

function BodyClassGymFitness() {
    useEffect(() => {
        document.body.classList.add("gym-demo");

        return () => {
            document.body.classList.remove("gym-demo");
        };
    }, []);

    return null;
}

export default BodyClassGymFitness;
