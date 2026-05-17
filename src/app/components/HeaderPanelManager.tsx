'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const searchItems = [
  { title: 'Awarded Design', href: '/service/management-leadership', image: '/assets/images/services/serviice-01.jpg', keywords: 'service business consultancy awarded design' },
  { title: 'Design & Creative', href: '/service/digital-transformation', image: '/assets/images/services/serviice-02.jpg', keywords: 'service business consultancy design creative' },
  { title: 'App Development', href: '/service/financial-growth', image: '/assets/images/services/serviice-03.jpg', keywords: 'service business consultancy app development' },
  { title: 'UI/UX Design', href: '/service/management-leadership', image: '/assets/images/services/serviice-04.jpg', keywords: 'service business consultancy ui ux design' },
] as const

const popularTags = ['Service', 'Business', 'Consultancy'] as const

const mobileMenu = [
  {
    label: 'Home',
    links: [
      ['Business Consulting', '/01-index-consulting'],
      ['Startup Business', '/06-startup'],
      ['AI Agency', '/24-ai-agency'],
      ['Construction', '/26-construction'],
    ],
  },
  {
    label: 'Pages',
    links: [
      ['About', '/about'],
      ['Team', '/team'],
      ['Pricing', '/pricing'],
      ['FAQ', '/faq'],
    ],
  },
  {
    label: 'Service',
    links: [
      ['Our Service', '/service'],
      ['Service List', '/service-list'],
      ['Service Details', '/service/management-leadership'],
    ],
  },
  {
    label: 'Project',
    links: [
      ['Portfolio', '/portfolio'],
      ['Portfolio Three Column', '/portfolio-three-column'],
      ['Portfolio Details', '/portfolio-details/brand-refresh-venture'],
    ],
  },
  {
    label: 'Blog',
    links: [
      ['Blog Grid', '/blog-grid'],
      ['Blog List View', '/blog-list-view'],
      ['Blog Details', '/blog/corporate-success-strategy'],
    ],
  },
  {
    label: 'Elements',
    links: [
      ['Banner Slider', '/banner-slider'],
      ['Accordion', '/accordion'],
      ['Progressbar', '/progressbar'],
      ['Tab Style', '/tab'],
    ],
  },
] as const

type PanelName = 'search' | 'offcanvas' | 'mobile' | ''

export default function HeaderPanelManager() {
  const [activePanel, setActivePanel] = useState<PanelName>('')
  const [openMobileSection, setOpenMobileSection] = useState<string>('Home')
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const isOpen = activePanel !== ''
  const normalizedSearch = searchValue.trim().toLowerCase()
  const filteredSearchItems = normalizedSearch
    ? searchItems.filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(normalizedSearch))
    : searchItems

  const closePanels = () => setActivePanel('')

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      if (!target || target.closest('[data-local-header-panel="true"]')) return

      if (target.closest('.search-area-btn')) {
        event.preventDefault()
        setActivePanel('search')
      } else if (target.closest('.offcanvas-trigger')) {
        event.preventDefault()
        setActivePanel('offcanvas')
      } else if (target.closest('.hamberger-button')) {
        event.preventDefault()
        setActivePanel('mobile')
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePanels()
    }

    document.body.classList.toggle('tmp-header-panel-open', isOpen)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('tmp-header-panel-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = filteredSearchItems[0]?.href || '/service'
    closePanels()
    router.push(target)
  }

  return (
    <>
      {isOpen ? (
        <div
          aria-hidden={!isOpen}
          className="bgshow"
          id="anywhere-home"
          onClick={closePanels}
        />
      ) : null}

      <div className={`tmp-search-input-area${activePanel === 'search' ? ' show' : ''}`} role="dialog" aria-modal="true" aria-label="Site search">
        <div className="container">
          <div className="search-input-inner">
            <form action="#" className="input-div tmponhover" onSubmit={handleSearchSubmit}>
              <input
                id="searchInput1"
                className="search-input"
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="🔎 Search products, topics, or #tags"
                aria-label="Search products, topics, or tags"
                autoComplete="off"
                required
              />
              <button type="submit" aria-label="Submit search">
                <i className="feather-search" />
              </button>
            </form>
            <div className="popular-keyword">
              <h4 className="title">Popular Tag :</h4>
              <div className="tag-wrapper">
                {popularTags.map((tag) => (
                  <a
                    className="tmp-btn btn-border btn-small radius-round"
                    href="#"
                    key={tag}
                    onClick={(event) => {
                      event.preventDefault()
                      setSearchValue(tag)
                    }}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            <div className="row g-5 service-wrapper mt--10 mt_md--10 mt_sm--0">
              {filteredSearchItems.slice(0, 4).map((item) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 sal-animate" key={`${item.href}-${item.title}`}>
                  <div className="card-box card-style-1 text-left tmponhover">
                    <div className="inner">
                      <div className="image">
                        <Link href={item.href} onClick={closePanels}>
                          <img src={item.image} alt="card Images" />
                        </Link>
                      </div>
                      <div className="content">
                        <h4 className="title mb--20">
                          <Link href={item.href} onClick={closePanels}>{item.title}</Link>
                        </h4>
                        <div className="discover-btn">
                          <Link className="tmp-btn mt--0 round btn-small btn-border hover-icon-reverse" href={item.href} onClick={closePanels}>
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">See More</span>
                              <span className="btn-icon"><i className="feather-arrow-right" /></span>
                              <span className="btn-icon"><i className="feather-arrow-right" /></span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="close"
          className="search-close-icon tmponhover"
          role="button"
          tabIndex={0}
          aria-label="Close search"
          onClick={closePanels}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              closePanels()
            }
          }}
        >
          <img src="/assets/images/icons/close.png" alt="" />
        </div>
        <div className="bg-text">consultancy</div>
      </div>

      <div className={`inverweb-side-bar-close${activePanel === 'offcanvas' ? ' show' : ''}`} role="dialog" aria-modal="true" aria-label="Sidebar menu" aria-hidden={activePanel !== 'offcanvas'}>
        <div className="shape-right-top">
          <img src="/assets/images/banner/shape-it-1.svg" alt="" />
        </div>
        <button className="close-icon-menu tmponhover" type="button" aria-label="Close sidebar menu" onClick={closePanels}>
          <i className="feather-x" />
        </button>
        <div className="logo-side">
          <Link href="/" onClick={closePanels}>
            <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
            <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
          </Link>
        </div>
        <div className="side-info">
          <div className="contact-list">
            <h4>Office Address</h4>
            <p>456/B, Madison Avenue Kora Road<br /> New York, NY 10022</p>
          </div>
          <div className="contact-list">
            <h4>Phone Number</h4>
            <a href="tel:+8801712345678">+0989 7876 9865 9</a>
            <a href="tel:+8801712345678">+(090) 8765 86543 85</a>
          </div>
          <div className="contact-list">
            <h4>Email Address</h4>
            <a href="mailto:info@yourdomain.com">info@example.com</a>
            <a href="mailto:info@yourdomain.com">example.mail@hum.com</a>
          </div>
        </div>

        <div className="row g-3 mt--15" id="animated-lightbox2">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            const imagePath = `/assets/images/portfolio/portfolio-0${item}.jpg`

            return (
              <a className="col-lg-4 col-md-6 col-sm-6 col-12" href={imagePath} key={imagePath}>
                <div className="tmp-gallery icon-center">
                  <div className="thumbnail">
                    <img className="radius-small" src={imagePath} alt="Corporate Image" />
                  </div>
                  <div className="video-icon">
                    <div className="btn-default rounded-player sm-size">
                      <span><i className="feather-zoom-in" /></span>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <ul className="social-icon social-default justify-content-start mt--30">
          <li><a href="https://www.facebook.com/"><i className="feather-facebook" /></a></li>
          <li><a href="https://www.twitter.com"><i className="feather-twitter" /></a></li>
          <li><a href="https://www.instagram.com/"><i className="feather-instagram" /></a></li>
          <li><a href="https://www.linkdin.com/"><i className="feather-linkedin" /></a></li>
        </ul>
      </div>

      <div className={`popup-mobile-menu${activePanel === 'mobile' ? ' active' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile menu">
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="/" onClick={closePanels}>
                <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
                <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button tmponhover" type="button" aria-label="Close mobile menu" onClick={closePanels}>
                <i className="feather-x" />
              </button>
            </div>
          </div>
          <ul className="mainmenu">
            {mobileMenu.map((section) => {
              const sectionOpen = openMobileSection === section.label
              const usesMegaMenu = section.label === 'Home' || section.label === 'Service' || section.label === 'Elements'

              return (
                <li className={`${usesMegaMenu ? 'with-megamenu' : 'has-droupdown'} has-menu-child-item`} key={section.label}>
                  <Link
                    className={sectionOpen ? 'open' : ''}
                    href="/#"
                    aria-expanded={sectionOpen}
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMobileSection(sectionOpen ? '' : section.label)
                    }}
                  >
                    {section.label}
                  </Link>
                  {usesMegaMenu ? (
                    <div className="tmp-megamenu with-mega-item-2 full-width-mega" style={{ display: sectionOpen ? 'block' : 'none' }}>
                      <div className="wrapper">
                        <div className="row row--0">
                          <div className="col-lg-12 single-mega-item">
                            <ul className="mega-menu-item">
                              {section.links.map(([label, href]) => (
                                <li key={href}>
                                  <Link href={href} onClick={closePanels}>{label}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ul className="submenu" style={{ display: sectionOpen ? 'block' : 'none' }}>
                      {section.links.map(([label, href]) => (
                        <li key={href}>
                          <Link href={href} onClick={closePanels}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
            <li>
              <Link href="/contact" onClick={closePanels}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
