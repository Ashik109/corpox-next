"use client";

import Link from "next/link";
import Slider from "react-slick";
import NextArrow from "../01-index-consulting/NextArrow";
import PrevArrow from "../01-index-consulting/PrevArrow";

const testimonials = [
  {
    country: "USA",
    description:
      "When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.",
    image: "/assets/images/testimonial/testimonial-dark-01.jpg",
    name: "Darun Due",
    role: "Business Developer",
  },
  {
    country: "INDIA",
    description:
      "When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.",
    image: "/assets/images/testimonial/testimonial-dark-02.jpg",
    name: "Mohima Ale",
    role: "Business Developer",
  },
  {
    country: "Bangladesh",
    description:
      "When taking on new projects, I primarily look for a strong visual and aesthetic alignment, as well as a meaningful personal connection.",
    image: "/assets/images/testimonial/testimonial-dark-03.jpg",
    name: "John Roni",
    role: "Marketing Expart",
  },
];

function SectionTestimonialFive() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="tmp-testimonial-area tmp-section-gap">
      <div className="container">
      <div className="row mb--30">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">+3</span>
      <span className="subtitle-text">Client Feedback</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700">Client <span className="theme-gradient">Feedback.</span></h2>
      </div>
      </div>
      </div>
      <Slider {...settings} className="tmp-slick-dot tmp-slick-arrow testimonial-activation">
      {testimonials.map((testimonial) => (
      <div key={testimonial.name} className="testimonial-style-two">
      <div className="row align-items-center row--30">
      <div className="offset-lg-1 col-lg-4 col-md-4">
      <div className="thumbnail"><img className="w-100" src={testimonial.image} alt="Corporate Template" /></div>
      </div>
      <div className="col-lg-6 col-md-8">
      <div className="content mt_sm--40"><span className="form">{testimonial.country}</span>
      <p className="description">{testimonial.description}</p>
      <div className="rating mb--15">
      {[1, 2, 3, 4, 5].map((star) => (
      <Link href="#" key={star}><i className="feather-star"></i></Link>
      ))}
      </div>
      <div className="client-info">
      <h4 className="title">{testimonial.name}</h4>
      <h6 className="subtitle">{testimonial.role}</h6>
      </div>
      </div>
      </div>
      </div>
      </div>
      ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default SectionTestimonialFive
