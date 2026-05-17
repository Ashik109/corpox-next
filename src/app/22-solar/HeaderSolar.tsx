"use client";
import SimpleMainNav from '../../components/header/SimpleMainNav'

import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderSolar() {
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
                                            <Link className="btn-read-more" target="_blank" href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866">
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
            <header className={`tmp-header header-default header-left-align header-sticky-smooth header-sticky ${isSticky ? "sticky" : ""}`}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-6 col-4 position-static">
                            <div className="header-left d-flex">
                                <div className="logo">
                                    <Link href="/">
                                        <img className="logo-light" src="/assets/images/logo/solar-logo.svg" alt="Solar Renewable Energy" />
                                        <img className="logo-dark" src="/assets/images/logo/solar-logo-dark.svg" alt="Solar Renewable Energy" />
                                    </Link>
                                </div>
                                <SimpleMainNav />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-8">
                            <div className="header-right">
                                <div className="actions-area">
                                    <div className="search-trigger-icon">
                                        <button aria-label="Search" className="search-icon" type="button">
                                            <i className="feather-search" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mobile-menu-bar d-block d-lg-none">
                                    <div className="hamberger">
                                        <button aria-label="Open mobile menu" className="hamberger-button tmponhover" type="button">
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
