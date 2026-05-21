"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "../../components/header/HeaderNav";
import { HeaderDotSidebarTrigger, HeaderMobileMenuTrigger, HeaderSearchTrigger } from "../components/HeaderPanelTriggers";

interface HeaderArchitectureProps {
    className?: string;
    ctaHref?: string;
}

function HeaderArchitecture({
    className = "",
    ctaHref = "/contact",
}: HeaderArchitectureProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150);

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="header-left">
                                <p>
                                    <Link href="#">
                                        Get the most advanced template
                                        <i className="feather-chevron-right" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="header-right">
                                <div className="address-content">
                                    <p>
                                        <i className="feather-map-pin" />
                                        <span>Alabama, USA</span>
                                    </p>
                                    <p>
                                        <i className="feather-phone" />
                                        <span>
                                            <Link href="#">+06 58 49 99 56</Link>
                                        </span>
                                    </p>
                                </div>
                                <div className="social-icon-wrapper">
                                    <ul className="social-icon social-default icon-naked">
                                        <li>
                                            <Link href="https://www.facebook.com/">
                                                <i className="feather-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.twitter.com">
                                                <i className="feather-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/">
                                                <i className="feather-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkdin.com/">
                                                <i className="feather-linkedin" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-transparent-with-topbar">
                <header className={`tmp-header header-default header-transparent header-sticky header-one${isSticky ? " sticky" : ""}${className ? ` ${className}` : ""}`}>
                    <div className="container position-relative">
                        <div className="row align-items-center row--0">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                                <div className="logo">
                                    <Link href="/">
                                        <img className="logo-light" src="/assets/images/logo/archi-logo.svg" alt="Corporate Logo" />
                                        <img className="logo-dark" src="/assets/images/logo/archi-logo-dark.svg" alt="Corporate Logo" />
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
                                        <Link className="tmp-btn btn-primary" target="_blank" href={ctaHref}>
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
            </div>
        </>
    );
}

export default HeaderArchitecture;
