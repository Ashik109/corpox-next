import Link from 'next/link'
function SectionAboutArea2() {
  return (
    <>
      <div className="tmp-about-area tmp-section-gap">
      <div className="container">
      <div className="row g-5 row--40 align-items-center">
      <div className="col-lg-6 order-2 order-xl-1">
      <div className="content">
      <div className="tmp-section-title-border text-start">
      <div className="pres-line-separator-wrapper mb--10 tmp-title-split">
      <span className="subtitle"><span className="number">01</span> <span className="subtitle-text">About Us</span></span>
      <div className="line-separator"></div>
      </div>
      <h2 className="title w-700 mb--30 tmp-title-split">Meet the Experts Behind <br />
      Next Level of Success.</h2>
      <p className="tmp-title-split-p">We are an innovative and results-driven business agency committed to <br /> delivering smart, effective solutions tailored to your unique needs.</p>
      <div className="why-choose-feature">
      <div className="single tmponhover">
      <p>Rapid Revenue Growth</p>
      </div>
      <div className="single tmponhover">
      <p>24/7 Assistance</p>
      </div>
      </div>
      <div className="tmp-profile-box">
      <div className="profile-share justify-content-start">
      <Link href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-01.png" alt="education" /></Link>
      <Link href="#" className="avatar" data-tooltip="Mark" tabIndex={0}><img src="/assets/images/testimonial/tooltip-02.png" alt="education" /></Link>
      <Link href="#" className="avatar" data-tooltip="Jordan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-03.png" alt="education" /></Link>
      <div className="more-author-text">
      <p className="subtitle">
      <Link className="btn-read-more" href="#"><span>Check all History</span></Link>
      </p>
      </div>
      </div>
      </div>
      <div className="read-more-btn btn-group gap-4 mt--40">
      <Link className="tmp-btn btn-primary round btn-large" href="/about">More About Us</Link>
      <Link className="tmp-btn btn-border round btn-large" href="/contact">Contact With Us</Link>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6 order-1 order-xl-2 pl--60">
      <div className="video-btn">
      <div className="video-popup icon-center about-relative-thumb">
      <div className="overlay-content">
      <div className="thumbnail invers-anime"><img className="radius-small" src="/assets/images/about/03.webp" alt="Corporate Image" />
      </div>
      <div className="video-icon">
      <Link className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
      <span><i className="feather-play"></i></span>
      </Link>
      </div>
      </div>
      <div className="absolute-rating-area images-left-right-float image">
      <div className="profile-share justify-content-start">
      <Link href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-01.png" alt="education" /></Link>
      <Link href="#" className="avatar" data-tooltip="Mark" tabIndex={0}><img src="/assets/images/testimonial/tooltip-02.png" alt="education" /></Link>
      <Link href="#" className="avatar" data-tooltip="Jordan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-03.png" alt="education" /></Link>
      </div>
      <div className="stars-area">
      <img src="/assets/images/icons/stars.svg" alt="small-image" />
      <img src="/assets/images/icons/stars.svg" alt="small-image" />
      <img src="/assets/images/icons/stars.svg" alt="small-image" />
      <img src="/assets/images/icons/stars.svg" alt="small-image" />
      <img src="/assets/images/icons/stars.svg" alt="small-image" />
      </div>
      <p><span className="odometer" data-count="100">00</span>+ Review</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionAboutArea2
