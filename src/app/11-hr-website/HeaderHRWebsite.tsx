'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderNav from '../../components/header/HeaderNav'
import {
  HeaderDotSidebarTrigger,
  HeaderMobileMenuTrigger,
  HeaderSearchTrigger,
} from '../components/HeaderPanelTriggers'

function HeaderHRWebsite() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`tmp-header header-default header-left-align header-not-transparent header-sticky-smooth header-sticky${isSticky ? ' sticky' : ''}`}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-6 col-4 position-static">
            <div className="header-left d-flex">
              <div className="logo">
                <Link href="/">
                  <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
                  <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                </Link>
              </div>
              <HeaderNav />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-8">
            <div className="header-right with-search">
              <div className="header-btn">
                <HeaderSearchTrigger />
                <div className="dot-btn">
                  <HeaderDotSidebarTrigger />
                </div>
                <Link className="tmp-btn btn-small round" target="_blank" href="/contact">
                  REQUEST A QUOTE
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

export default HeaderHRWebsite
