'use client'

import Link from 'next/link'
import Slider from 'react-slick'
import NextArrow from '../01-index-consulting/NextArrow'
import PrevArrow from '../01-index-consulting/PrevArrow'

const slides = [
  {
    imageClass: 'bg_image--12',
    title: 'Startup Your',
    highlight: 'Business Agency.',
  },
  {
    imageClass: 'bg_image--13',
    title: 'Combine thinking',
    highlight: 'Business Agency.',
  },
]

const socials = [
  ['https://www.facebook.com/', 'feather-facebook'],
  ['https://www.twitter.com', 'feather-twitter'],
  ['https://www.instagram.com/', 'feather-instagram'],
  ['https://www.linkdin.com/', 'feather-linkedin'],
] as const

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 700,
  fade: true,
  adaptiveHeight: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

function SectionSliderArea() {
  return (
    <div className="banner-slider-react slider-area slider-style-4 variation-2 slider-dot tmp-slick-dot tmp-slick-arrow tmp-section-gapBottom">
      <Slider {...settings} className="slider-activation">
        {slides.map((slide) => (
          <div key={`${slide.imageClass}-${slide.title}`}>
            <div className={`height-850 bg_image ${slide.imageClass} d-flex align-items-center`} data-black-overlay={1}>
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="col-12">
                    <div className="inner banner-startup-agency-content text-start pt--0">
                      <span className="tmp-badge-2">DIGITAL STARTUP AGENCY</span>
                      <h1 className="title w-700">
                        {slide.title} <br /> <span className="theme-gradient">{slide.highlight}</span>
                      </h1>
                      <p className="description">
                        We help our clients succeed by creating brand identities, <br />
                        digital experiences, and print materials.
                      </p>
                      <ul className="social-icon social-default transparent-with-border">
                        {socials.map(([href, icon]) => (
                          <li key={icon}>
                            <Link href={href}>
                              <i className={icon} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="button-group mt--30">
                        <Link className="tmp-btn btn-large round hover-icon-reverse" href="/contact">
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Get started now</span>
                            <span className="btn-icon"><i className="feather-arrow-right" /></span>
                            <span className="btn-icon"><i className="feather-arrow-right" /></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SectionSliderArea
