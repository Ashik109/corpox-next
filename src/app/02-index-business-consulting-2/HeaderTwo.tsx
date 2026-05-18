'use client'
import MainNav from '../../components/header/MainNav'
import { useState, useEffect } from 'react';
import Link from 'next/link'

interface HeaderTwoProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
}

function HeaderTwo({
    className = "",
    logoSrc = "",
    logoAlt = "",
}: HeaderTwoProps) {
  const [isSticky, setIsSticky] = useState(false);
  const logoLight = logoSrc || '/assets/images/logo/logo.png';
  const logoDark = logoSrc || '/assets/images/logo/logo-dark.png';
  const logoText = logoAlt || 'Corporate Logo';
  const headerClassName = [
    'tmp-header header-default header-left-align header-not-transparent header-sticky-smooth header-sticky',
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
              <MainNav />
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
                  className="tmp-btn btn-small round"
                  target="_blank"
                  href="/contact"
                >
                  REQUEST A QUOTE
                </Link>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button tmponhover" type="button">
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


  )
}


export default HeaderTwo
