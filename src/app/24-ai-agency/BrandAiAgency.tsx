"use client";
import Link from 'next/link'


import Slider from "react-slick";

const brands = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp", "02.webp"];

function BrandAiAgency() {
    return (
        <div className="tmp-brand-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">2000+ </span>
                                    <span className="subtitle-text">Trusted leading companies</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mt--20">
                        <Slider
                            className="brand-list brand-carousel-activation-ai tmp-slick-arrow tmp-slick-dot mb--40"
                            arrows={false}
                            autoplay
                            autoplaySpeed={1800}
                            dots={false}
                            infinite
                            pauseOnHover
                            slidesToScroll={1}
                            slidesToShow={5}
                            responsive={[
                                { breakpoint: 992, settings: { slidesToShow: 3 } },
                                { breakpoint: 576, settings: { slidesToShow: 2 } },
                            ]}
                            speed={600}
                        >
                            {brands.map((brand, index) => (
                                <div key={`${brand}-${index}`}>
                                    <li>
                                        <Link href="#">
                                            <img src={`/assets/images/ai-agency/brand/${brand}`} alt="Brand" />
                                        </Link>
                                    </li>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandAiAgency;
