'use client'
import HeaderNav from '../../components/header/HeaderNav'
import { useState, useEffect } from 'react';
import Link from 'next/link'
interface HeaderSixProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
    ctaHref?: string;
}

function HeaderSix({
    className = "",
    logoSrc = "",
    logoAlt = "",
    ctaHref = "/contact",
}: HeaderSixProps) {
    const [isSticky, setIsSticky] = useState(false);
    const headerClassName = [
        'tmp-header header-default header-transparent with-blur header-sticky',
        isSticky ? 'sticky' : '',
        className,
    ].filter(Boolean).join(' ');

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
            {/* Start Header Top Area  */}
            <div className="header-top-news bg-image1 with-bg-gradient">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <div className="content">
                                        <span className="tmp-badge">Limited Time Offer</span>
                                        <span className="news-text">
                                            Intro price. Get Corpox for Big Sale -95% off.
                                        </span>
                                    </div>
                                    <div className="right-button">
                                        <Link
                                            className="btn-read-more"
                                            target="_blank"
                                            href="https://themeforest.net/item/corpox-business-consulting-bootstrap-5-html-template/59767866"
                                        >
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
                    <button className="close-button bgsection-activation">
                        <i className="feather-x" />
                    </button>
                </div>
            </div>
            {/* End Header Top Area  */}
            {/* Start Header Area  */}
            <header className={headerClassName}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <Link href="/index">
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
                                <HeaderNav />
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
                                        href={ctaHref}
                                    >
                                        Start Free Trial
                                    </Link>
                                </div>
                                {/* End Header Btn  */}
                                {/* Start Mobile-Menu-Bar */}
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <button className="hamberger-button" type="button">
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

export default HeaderSix
