"use client";
import SimpleMainNav from '../../components/header/SimpleMainNav'

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderCtaButton, HeaderMobileMenuTrigger, HeaderSearchTrigger, HeaderSidebarTrigger } from "../components/HeaderPanelTriggers";

interface HeaderAiAgencyProps {
    className?: string;
}

function HeaderAiAgency({
    className = "",
}: HeaderAiAgencyProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150);

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="header-transparent-with-topbar">
            <header className={`tmp-header header-default header-not-transparent header-sticky ${isSticky ? "sticky" : ""} ${className}`}>
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
                                <SimpleMainNav />
                                <div className="actions-area">
                                    <div className="search-trigger-icon">
                                        <HeaderSearchTrigger className="search-icon" />
                                    </div>
                                </div>
                                <div className="tmp-header-right">
                                    <div className="tmp-side-collups-area d-none d-xl-block">
                                        <HeaderSidebarTrigger className="tmp-menu-bars tmp_button_active" />
                                    </div>
                                </div>
                                <div className="mobile-menu-bar d-block d-lg-none">
                                    <div className="hamberger">
                                        <HeaderMobileMenuTrigger />
                                    </div>
                                </div>
                                <div className="tmp-header-btn d-none d-xl-block">
                                    <HeaderCtaButton label="Start Free Trial" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeaderAiAgency;
