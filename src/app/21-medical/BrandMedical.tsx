"use client";

import Link from 'next/link'
import Slider from "react-slick";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

const brands = ["brand-01.png", "brand-02.png", "brand-03.png", "brand-04.png", "brand-05.png", "brand-06.png", "brand-06.png", "brand-06.png"];

function BrandMedical() {
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

    return (
        <div className="tmp-brand-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt--20">
                        <Slider {...settings} className="brand-list brand-carousel-activation tmp-slick-arrow tmp-slick-dot mb--40">
                            {brands.map((brand, index) => (
                                <div key={`${brand}-${index}`}>
                                    <Link href="#">
                                        <img src={`/assets/images/brand/${brand}`} alt="Brand Image" />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandMedical;
