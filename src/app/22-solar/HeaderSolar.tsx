"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "../../components/header/HeaderNav";

interface HeaderSolarProps {
    className?: string;
}

function HeaderSolar({
    className = "",
}: HeaderSolarProps) {
    const [isSticky, setIsSticky] = useState(false);
    const [showTop, setShowTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150);

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {showTop ? (
                <div className="header-top-news bg-image1">
                    <div className="wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner">
                                        <div className="content">
                                            <span className="tmp-badge">Limited Time Offer</span>
                                            <span className="news-text">Intro price. Get Corpox for Big Sale -95% off.</span>
                                        </div>
                                        <div className="right-button">
                                            <Link className="btn-read-more" target="_blank" href="#">
                                                <span>
                                                    Purchase Now <i className="feather-arrow-right" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon-close">
                        <button aria-label="Close offer" className="close-button bgsection-activation" type="button" onClick={() => setShowTop(false)}>
                            <i className="feather-x" />
                        </button>
                    </div>
                </div>
            ) : null}
            <header className={`tmp-header header-default header-left-align header-sticky-smooth header-sticky${isSticky ? " sticky" : ""}${className ? ` ${className}` : ""}`}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-6 col-4 position-static">
                            <div className="header-left d-flex">
                                <div className="logo">
                                    <Link href="/">
                                        <img className="logo-light" src="/assets/images/logo/solar-logo.svg" alt="Corporate Logo" />
                                        <img className="logo-dark" src="/assets/images/logo/solar-logo-dark.svg" alt="Corporate Logo" />
                                    </Link>
                                </div>
                                <HeaderNav />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-8">
                            <div className="header-right with-search">
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
                                    <Link className="tmp-btn btn-small" target="_blank" href="/contact">
                                        REQUEST A QUOTE
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

export default HeaderSolar;
