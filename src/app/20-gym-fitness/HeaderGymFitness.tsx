"use client";
import SimpleMainNav from '../../components/header/SimpleMainNav'

import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderGymFitness() {
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
                                        Discover the most advanced template <i className="feather-chevron-right" />
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
                                            <Link href="tel:+0698682322">+06 98 68 23 22</Link>
                                        </span>
                                    </p>
                                </div>
                                <div className="social-icon-wrapper">
                                    <ul className="social-icon social-default icon-naked">
                                        {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                                            <li key={icon}>
                                                <Link href={`https://www.${icon}.com/`}>
                                                    <i className={`feather-${icon}`} />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className={`tmp-header header-default header-not-transparent header-sticky-smooth header-sticky ${isSticky ? "sticky" : ""}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <Link href="/">
                                    <img className="logo-light" src="/assets/images/logo/gym-logo.svg" alt="Gym Fitness" />
                                    <img className="logo-dark" src="/assets/images/logo/gym-logo-dark.svg" alt="Gym Fitness" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-6 col-8 position-static">
                            <div className="header-right with-search">
                                <SimpleMainNav />
                                <div className="actions-area">
                                    <div className="search-trigger-icon">
                                        <button aria-label="Search" className="search-icon" type="button">
                                            <i className="feather-search" />
                                        </button>
                                    </div>
                                    <div className="tmp-side-collups-area d-none d-xl-block">
                                        <button aria-label="Open menu" className="tmp-menu-bars" type="button">
                                            <i className="feather-menu" />
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

export default HeaderGymFitness;
