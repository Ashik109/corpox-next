'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderNav from '../../components/header/HeaderNav'

function HeaderBusinessCoachWhite() {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 150)

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="header-transparent-with-topbar">
            <header className={`tmp-header header-default header-not-transparent header-sticky${isSticky ? ' sticky' : ''}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <Link href="/">
                                    <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
                                    <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-6 col-8 position-static">
                            <div className="header-right with-search">
                                <HeaderNav homeActive />

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
                                    <Link className="tmp-btn btn-small" href="/contact-white">
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
        </div>
    )
}

export default HeaderBusinessCoachWhite
