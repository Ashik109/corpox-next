"use client";
import HeaderNav from '../../components/header/HeaderNav'

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderDotSidebarTrigger, HeaderMobileMenuTrigger, HeaderSearchTrigger } from "../components/HeaderPanelTriggers";

interface HeaderAiAgencyProps {
    className?: string;
    variant?: "overlay" | "light";
}

function HeaderAiAgency({
    className = "",
    variant = "overlay",
}: HeaderAiAgencyProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150);

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerMods =
        variant === "overlay"
            ? "header-transparent header-sticky header-one"
            : "header-not-transparent header-sticky";

    const header = (
        <header className={`tmp-header header-default ${headerMods} ${isSticky ? "sticky" : ""} ${className}`}>
            <div className="container position-relative">
                <div className="row align-items-center row--0">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                        <div className="logo">
                            <Link href="/">
                                <img className="logo-light" src="/assets/images/logo/ai-logo.svg" alt="AI Agency" />
                                <img className="logo-dark" src="/assets/images/logo/ai-logo-dark.svg" alt="AI Agency" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-6 col-8 position-static">
                        <div className="header-right with-search">
                            <HeaderNav />
                            <div className="header-btn">
                                <HeaderSearchTrigger />
                                <div className="dot-btn">
                                    <HeaderDotSidebarTrigger />
                                </div>
                                <Link className="tmp-btn round tmponhover" target="_blank" href="/contact">
                                    Start Free Trial
                                </Link>
                            </div>
                            <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                <div className="hamberger">
                                    <HeaderMobileMenuTrigger />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

    return <div className="header-transparent-with-topbar">{header}</div>;
}

export default HeaderAiAgency;
