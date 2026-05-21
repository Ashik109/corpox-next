'use client'
import HeaderNav from '../../components/header/HeaderNav'
import { useState, useEffect } from 'react';
import Link from 'next/link'

interface HeaderTwoProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
    ctaHref?: string;
    ctaTarget?: string | null;
    ctaClassName?: string;
    mobileButtonClassName?: string;
    showTopNews?: boolean;
    variant?: 'transparent' | 'not-transparent';
    homeActive?: boolean;
}

function HeaderTwo({
    className = "",
    logoSrc = "",
    logoAlt = "",
    ctaHref = "/contact",
    ctaTarget = "_blank",
    ctaClassName = "tmp-btn btn-small round",
    mobileButtonClassName = "hamberger-button",
    showTopNews = false,
    variant = 'not-transparent',
    homeActive = false,
}: HeaderTwoProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const logoLight = logoSrc || '/assets/images/logo/logo.png';
  const logoDark = logoSrc || '/assets/images/logo/logo-dark.png';
  const logoText = logoAlt || 'Corporate Logo';
  const headerMods =
    variant === 'transparent'
      ? 'header-transparent header-sticky'
      : 'header-not-transparent header-sticky-smooth header-sticky';
  const headerClassName = [
    `tmp-header header-default header-left-align ${headerMods}`,
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
      {showTopNews && showTop ? (
        <div className="header-top-news bg-image1">
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
            <button
              aria-label="Close offer"
              className="close-button bgsection-activation"
              type="button"
              onClick={() => setShowTop(false)}
            >
              <i className="feather-x" />
            </button>
          </div>
        </div>
      ) : null}
      <header className={headerClassName}>
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
                <HeaderNav homeActive={homeActive} />
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
                  <Link
                    className={ctaClassName}
                    target={ctaTarget ?? undefined}
                    href={ctaHref}
                  >
                    REQUEST A QUOTE
                  </Link>
                </div>
                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button className={mobileButtonClassName} type="button">
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
    </>
  )
}


export default HeaderTwo
