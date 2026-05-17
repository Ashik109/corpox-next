'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MainNav from '../../components/header/MainNav'

interface HeaderAvatarsProps {
  className?: string
  variant?: 'transparent' | 'inner'
}

function HeaderAvatars({
  className = '',
  variant = 'inner',
}: HeaderAvatarsProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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
                <Link className="tmp-btn round" target="_blank" href="/contact">
                  Start Free Trial
                </Link>
              </div>
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button tmponhover" type="button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderAvatars
