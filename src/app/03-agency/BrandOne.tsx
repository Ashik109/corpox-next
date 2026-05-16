"use client";

import Slider from "react-slick";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

export default function BrandOne() {

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
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
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
    <div className="tmp-brand-area tmp-section-gapTop">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">

            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">

                <div className="line-separator line-left" />

                <span className="subtitle">
                  <span className="number">2000+ </span>
                  <span className="subtitle-text">
                    Trusted leading companies
                  </span>
                </span>

                <div className="line-separator line-right" />

              </div>
            </div>

          </div>

          <div className="col-lg-12 mt--20">

            <Slider
              {...settings}
              className="brand-carousel-activation tmp-slick-arrow tmp-slick-dot mb--40"
            >

              {brands.map((brand, index) => (
                <div key={index}>

                  <a href="#">
                    <img
                      src={`/assets/images/brand/${brand}`}
                      alt="Brand Image"
                    />
                  </a>

                </div>
              ))}

            </Slider>

          </div>

        </div>

      </div>
    </div>
  );
}