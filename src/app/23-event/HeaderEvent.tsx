"use client";
import SimpleMainNav from '../../components/header/SimpleMainNav'

import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderEvent() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150);

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="header-transparent-with-topbar">
            <header className={`tmp-header header-default header-not-transparent header-sticky ${isSticky ? "sticky" : ""}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <Link href="/">
                                    <img className="logo-light" src="/assets/images/logo/event-logo.svg" alt="Event Conference" />
                                    <img className="logo-dark" src="/assets/images/logo/event-logo-dark.svg" alt="Event Conference" />
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
                                </div>
                                <div className="tmp-header-right">
                                    <div className="tmp-side-collups-area d-none d-xl-block">
                                        <button aria-label="Open sidebar" className="tmp-menu-bars tmp_button_active" type="button">
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
        </div>
    );
}

export default HeaderEvent;
