"use client";
import Link from 'next/link'


import Slider from "react-slick";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

const testimonials = [
    {
        image: "/assets/images/testimonial/testimonial-01.jpg",
        name: "Sr Janen Sara",
        text: "Lorem ipsum, dolor sit amet consectetur adipi sicing elit. Asperiores accusamus eum consequuntur pari atur lauda ntium odit there.",
    },
    {
        image: "/assets/images/testimonial/testimonial-02.jpg",
        name: "Al Eram",
        text: "There ipsum, dolor sit amet consectetur adipi sicing elit. Asperiores accusamus eum consequuntur pari atur lauda ntium odit there.",
    },
    {
        image: "/assets/images/testimonial/testimonial-03.jpg",
        name: "Janen Sara",
        text: "Corpox ipsum, dolor sit amet consectetur adipi sicing elit. Asperiores accusamus eum consequuntur pari atur lauda ntium odit there.",
    },
    {
        image: "/assets/images/testimonial/testimonial-02.jpg",
        name: "Arowa",
        text: "Eram ipsum, dolor sit amet consectetur adipi sicing elit. Asperiores accusamus eum consequuntur pari atur lauda ntium odit there.",
    },
];

function TestimonialMarketingAgency() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 581, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <div className="tmp-testimonial-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="section-title text-center"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <h4 className="subtitle">Client Feedback</h4>
                            <h2 className="title w-600 mb--20">Client Feedback.</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available, <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className="tmp-slick-dot tmp-slick-arrow testimonial-activation-2 marketing-testimonial-slider slick-gutter-15 mt--30 mb--60">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name}>
                            <div className="tmp-box-card card-style-default testimonial-style-one variation-2 tmponhover">
                                <div className="inner">
                                    <div className="content">
                                        <div className="rating mb--15">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Link href="#" key={star}>
                                                    <img src="/assets/images/icons/stars.svg" alt="" />
                                                </Link>
                                            ))}
                                        </div>
                                        <p className="description">{testimonial.text}</p>
                                        <div className="content-bottom">
                                            <div className="thumbnail">
                                                <img src={testimonial.image} alt="Corporate Template" />
                                            </div>
                                            <div className="main-content">
                                                <h2 className="title">{testimonial.name}</h2>
                                                <h6 className="subtitle">inversweb.com</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <style jsx global>{`
                    .marketing-testimonial-slider.slick-gutter-15 {
                        margin-left: -15px !important;
                        margin-right: -15px !important;
                    }

                    .marketing-testimonial-slider.slick-gutter-15 .slick-slide {
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default TestimonialMarketingAgency;
