"use client";

import Link from "next/link";
import Slider from "react-slick";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

function SectionBrandStyle3() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 769, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 581, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const brands = [
    "brand-01.png",
    "brand-02.png",
    "brand-03.png",
    "brand-04.png",
    "brand-05.png",
    "brand-06.png",
    "brand-06.png",
    "brand-06.png",
  ];

  return (
    <>
      <div className="tmp-brand-area tmp-section-gapBottom">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">+3</span>
      <span className="subtitle-text">Our Awesome Client</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Our Trusted Client</h2>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-12 mt--10">
      <Slider {...settings} className="brand-list brand-carousel-activation tmp-slick-arrow tmp-slick-dot mb--40">
      {brands.map((brand, index) => (
      <div key={`${brand}-${index}`}>
      <Link href="#"><img src={`/assets/images/brand/${brand}`} alt="Brand Image" /></Link>
      </div>
      ))}
      </Slider>
      </div>
      </div>
      </div>
      </div>


    </>
  )
}

export default SectionBrandStyle3
