'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderNav, { type HeaderNavVariant } from '../../components/header/HeaderNav'
import {
    HeaderDotSidebarTrigger,
    HeaderMobileMenuTrigger,
    HeaderSearchTrigger,
} from '../components/HeaderPanelTriggers'

interface HeaderOneProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
    ctaClassName?: string;
    /** Multipage inner pages (non-home): opaque header + smooth sticky */
    variant?: 'transparent' | 'inner';
    navVariant?: HeaderNavVariant;
}

function HeaderOne({
    className = '',
    logoSrc = '',
    logoAlt = '',
    ctaClassName = 'tmp-btn round tmponhover',
    variant = 'transparent',
    navVariant,
}: HeaderOneProps) {
    const [isSticky, setIsSticky] = useState(false)
    const logoLight = logoSrc || '/assets/images/logo/logo.png'
    const logoDark = logoSrc || '/assets/images/logo/logo-dark.png'
    const logoText = logoAlt || 'Corporate Logo'

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150)

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const headerMods =
        variant === 'inner'
            ? 'header-not-transparent header-sticky-smooth header-sticky'
            : 'header-transparent header-sticky header-one'

    return (
        <header className={`tmp-header header-default ${headerMods} ${isSticky ? 'sticky' : ''} ${className}`}>
            <div className="container position-relative">
                <div className="row align-items-center row--0">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                        <div className="logo">
                            <Link href="/">
                                <img className="logo-light" src={logoLight} alt={logoText} />
                                <img className="logo-dark" src={logoDark} alt={logoText} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-6 col-8 position-static">
                        <div className="header-right with-search">
                            <HeaderNav variant={navVariant} />
                            <div className="header-btn">
                                <HeaderSearchTrigger />
                                <div className="dot-btn">
                                    <HeaderDotSidebarTrigger />
                                </div>
                                <Link className={ctaClassName} target="_blank" href="/contact">
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
    )
}

export default HeaderOne
