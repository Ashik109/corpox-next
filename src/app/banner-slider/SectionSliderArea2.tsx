'use client'

import Link from 'next/link'
import Slider from 'react-slick'
import NextArrow from '../01-index-consulting/NextArrow'
import PrevArrow from '../01-index-consulting/PrevArrow'

const slides = [
  {
    imageClass: 'bg_image--10',
    word: 'Consulting',
    suffix: 'Agency.',
  },
  {
    imageClass: 'bg_image--13',
    word: 'Creative',
    suffix: 'Agency.',
  },
  {
    imageClass: 'bg_image--19',
    word: 'Digital Agency',
    suffix: '.',
  },
]

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
  autoplaySpeed: 5200,
  pauseOnHover: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

function SectionSliderArea2() {
  return (
    <div className="banner-slider-react slider-animation-2 slider-activation-2 slider-dot tmp-slick-dot tmp-slick-arrow tmp-slick-arrow-white tmp-section-gapTop">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.word}>
            <div className={`slider-area slider-style-2 d-flex variation-2 height-850 bg_image ${slide.imageClass}`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-10">
                    <div className="inner text-left">
                      <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6>
                      <h1 className="title display-one">
                        Build a Strong <br /> <span>{slide.word}</span>{slide.suffix}
                      </h1>
                      <p className="mb--40 b1">
                        We provide you with user management functionality that results in faster development and revenue.
                      </p>
                      <div className="read-more-btn">
                        <Link className="tmp-btn btn-large round hover-icon-reverse" href="/service">
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Check our services</span>
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

export default SectionSliderArea2
