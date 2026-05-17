"use client";
import Link from 'next/link'


import Slider from "react-slick";

const testimonials = [
    ["01.webp", "USA", "Darun Due", "Business Developer"],
    ["02.webp", "INDIA", "Mohima Ale", "Business Developer"],
    ["03.webp", "Bangladesh", "John Roni", "Marketing Expart"],
] as const;

function TestimonialMedical() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="tmp-testimonial-area tmp-section-gapBottom">
            <div className="container pb--70">
                <div className="row mb--30">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+3</span>
                                    <span className="subtitle-text">Client Feedback</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Client Feedback.</h2>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className="tmp-slick-dot tmp-slick-arrow testimonial-activation">
                    {testimonials.map(([image, country, name, role]) => (
                        <div className="col-lg-12" key={name}>
                            <div className="testimonial-style-two">
                                <div className="row align-items-center row--30">
                                    <div className="col-lg-5 col-md-4">
                                        <div className="thumbnail">
                                            <img className="w-100" src={`/assets/images/testimonial/${image}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8">
                                        <div className="content mt_sm--40">
                                            <span className="form">{country}</span>
                                            <p className="description">When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.</p>
                                            <div className="rating mb--15">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Link href="#" key={index}>
                                                        <img src="/assets/images/icons/stars.svg" alt="" />
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="client-info">
                                                <h4 className="title">{name}</h4>
                                                <h6 className="subtitle">{role}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default TestimonialMedical;
