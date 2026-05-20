"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainNav from "../../components/header/MainNav";

interface HeaderMedicalProps {
    className?: string;
}

function HeaderMedical({ className = "" }: HeaderMedicalProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150);

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="header-top-bar with-border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="header-left">
                                <p>
                                    <Link href="#">
                                        Discover the most advanced template
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
                                        <span>California, USA</span>
                                    </p>
                                    <p>
                                        <i className="feather-phone" />
                                        <span>
                                            <Link href="#">+06 98 68 23 22</Link>
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

            <header className={`tmp-header header-default header-not-transparent header-sticky-smooth header-sticky${isSticky ? " sticky" : ""}${className ? ` ${className}` : ""}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <Link href="/">
                                    <img className="logo-light" src="/assets/images/logo/doctor-logo.svg" alt="Corporate Logo" />
                                    <img className="logo-dark" src="/assets/images/logo/doctor-logo-dark.svg" alt="Corporate Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-6 col-8 position-static">
                            <div className="header-right with-search">
                                <MainNav />

                                <div className="header-btn">
                                    <div className="search-area-btn cursor-pointer" id="search">
                                        <i className="feather-search" />
                                    </div>
                                    <div className="dot-btn">
                                        <span className="offcanvas-trigger">
                                            <span className="offcanvas-bars">
                                                <span />
                                                <span />
                                                <span />
                                            </span>
                                        </span>
                                    </div>
                                    <Link className="tmp-btn btn-small round" target="_blank" href="/contact">
                                        Start Free Trial
                                    </Link>
                                </div>

                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <button className="hamberger-button" type="button">
                                            <i className="feather-menu" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderMedical;
