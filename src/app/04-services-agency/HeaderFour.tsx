'use client'
import MainNav from '../../components/header/MainNav'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import React from 'react'

interface HeaderFourProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
}


function HeaderFour({
    className = "",
    logoSrc = "",
    logoAlt = "",
}: HeaderFourProps) {
    const [isSticky, setIsSticky] = useState(false);
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 150) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    return (
        <>
            {/* Start Header Area  */}
            <header className={`tmp-header header-default header-not-transparent header-sticky-smooth header-sticky ${isSticky ? 'sticky' : ''} ${className}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        className="logo-light"
                                        src="/assets/images/logo/logo.png"
                                        alt="Corporate Logo"
                                    />
                                    <img
                                        className="logo-dark"
                                        src="/assets/images/logo/logo-dark.png"
                                        alt="Corporate Logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-6 col-8 position-static">
                            <div className="header-right with-search">
                                <MainNav />
                                {/* Start Header Btn  */}
                                <div className="header-btn">
                                    <div className="search-area-btn cursor-pointer" id="search">
                                        <i className="feather-search" />
                                        {/* <img src="/assets/images/icons/search.svg" alt="Business"> */}
                                    </div>
                                    <div className="dot-btn">
                                        {/* <img src="/assets/images/shop/dot.svg" alt=""> */}
                                        <span className="offcanvas-trigger">
                                            <span className="offcanvas-bars">
                                                <span />
                                                <span />
                                                <span />
                                            </span>
                                        </span>
                                    </div>
                                    <Link
                                        className="tmp-btn btn-small"
                                        target="_blank"
                                        href="/contact"
                                    >
                                        Start Free Trial
                                    </Link>
                                </div>
                                {/* End Header Btn  */}
                                {/* Start Mobile-Menu-Bar */}
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <button className="hamberger-button">
                                            <i className="feather-menu" />
                                        </button>
                                    </div>
                                </div>
                                {/* Start Mobile-Menu-Bar */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* End Header Area  */}
        </>

    )
}

export default HeaderFour