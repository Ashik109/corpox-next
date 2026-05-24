'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderNav from '../../components/header/HeaderNav'
import { HeaderDotSidebarTrigger, HeaderMobileMenuTrigger, HeaderSearchTrigger } from '../components/HeaderPanelTriggers'

interface HeaderOneProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
    ctaHref?: string;
}

function HeaderConstruction({
    className = "",
    logoSrc = "",
    logoAlt = "",
    ctaHref = "/contact",
}: HeaderOneProps) {
    const [isSticky, setIsSticky] = useState(false);
    const logoLight = logoSrc || "/assets/images/logo/construction-logo.svg";
    const logoDark = logoSrc || "/assets/images/logo/construction-logo-dark.svg";
    const logoText = logoAlt || "Construction Logo";
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
        <header className={`tmp-header header-default header-left-align header-sticky-smooth header-sticky${isSticky ? ' sticky' : ''}${className ? ` ${className}` : ''}`}>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-6 col-4 position-static">
                        <div className="header-left d-flex">
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        className="logo-light"
                                        src={logoLight}
                                        alt={logoText}
                                    />
                                    <img
                                        className="logo-dark"
                                        src={logoDark}
                                        alt={logoText}
                                    />
                                </Link>
                            </div>
                            <HeaderNav />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-8">
                        <div className="header-right with-search">
                            {/* Start Header Btn  */}
                            <div className="header-btn">
                                <HeaderSearchTrigger />
                                <div className="dot-btn">
                                    <HeaderDotSidebarTrigger />
                                </div>
                                <Link className="tmp-btn" target="_blank" href={ctaHref}>
                                    REQUEST A QUOTE
                                </Link>
                            </div>
                            {/* End Header Btn  */}
                            {/* Start Mobile-Menu-Bar */}
                            <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                <div className="hamberger">
                                    <HeaderMobileMenuTrigger />
                                </div>
                            </div>
                            {/* Start Mobile-Menu-Bar */}
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderConstruction
