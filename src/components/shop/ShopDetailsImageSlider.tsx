"use client";

import Slider from "react-slick";

const images = ["slide-1.webp", "slide-2.webp", "slide-3.webp"];

type ArrowProps = {
  className?: string;
  onClick?: () => void;
};

function PrevArrow({ className = "", onClick }: ArrowProps) {
  return (
    <button
      type="button"
      className={`${className} prev-arrow`.trim()}
      aria-label="Previous product image"
      onClick={onClick}
    />
  );
}

function NextArrow({ className = "", onClick }: ArrowProps) {
  return (
    <button
      type="button"
      className={`${className} next-arrow`.trim()}
      aria-label="Next product image"
      onClick={onClick}
    />
  );
}

function ShopDetailsImageSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    autoplay: false,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className="row tmp-slick-dot tmp-slick-arrow testimonial-activation">
      {images.map((image) => (
        <div className="shop-details-thumbnail-main" key={image}>
          <div className="thumbnail">
            <img className="w-100" src={`/assets/images/shop/${image}`} alt="Corporate Template" />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default ShopDetailsImageSlider;
