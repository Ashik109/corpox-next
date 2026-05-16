function SectionAboutArea() {
  return (
    <>
      <div className="about-area about-style-4 tmp-section-gap">
      <div className="container">
      <div className="row row--5 align-items-center">
      <div className="col-lg-7 pr--40 pr_sm--0">
      <div className="about-2-thumbnail-left-wrapper">
      <div className="single-thumbnail invers-anime">
      <img loading="lazy" src="/assets/images/about/01.webp" alt="about" />
      </div>
      <div className="single-thumbnail invers-anime mt--80">
      <img loading="lazy" src="/assets/images/about/02.webp" alt="about" />
      <div className="video-icon">
      <a className="tmp-btn rounded-player popup-video" href="/assets/images/video/01.mp4">
      <span><i className="feather-play"></i></span>
      </a>
      </div>
      </div>
      <div className="absolute-rating-area images-left-right-float image">
      <div className="stars-area">
      <img loading="lazy" src="/assets/images/icons/stars.svg" alt="small-image" />
      <img loading="lazy" src="/assets/images/icons/stars.svg" alt="small-image" />
      <img loading="lazy" src="/assets/images/icons/stars.svg" alt="small-image" />
      <img loading="lazy" src="/assets/images/icons/stars.svg" alt="small-image" />
      <img loading="lazy" src="/assets/images/icons/stars.svg" alt="small-image" />
      <span>(4.99+)</span>
      </div>
      <p><span className="odometer" data-count="599">00</span> Review form our <br /> Best Clients</p>
      <div className="profile-share justify-content-start">
      <a href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-01.png" alt="education" /></a>
      <a href="#" className="avatar" data-tooltip="Mark" tabIndex={0}><img src="/assets/images/testimonial/tooltip-02.png" alt="education" /></a>
      <a href="#" className="avatar" data-tooltip="Jordan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-03.png" alt="education" /></a>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-5 mt_md--40 mt_sm--40">
      <div className="content">
      <div className="inner">
      <div className="tmp-section-title-border text-start hero__sub-title">
      <div className="pres-line-separator-wrapper mb--10">
      <span className="subtitle"><span className="number">01</span> <span className="subtitle-text">ABOUT BUSINESS</span></span>
      <div className="line-separator"></div>
      </div>
      </div>
      <h2 className="title w-700 tmp-title-split">Clever and results driven business agency.
                                      </h2>
      <ul className="feature-list">
      <li>
      <div className="icon">
      <i className="feather-check"></i>
      </div>
      <div className="title-wrapper">
      <h4 className="title">A good traveler has no fixed plans</h4>
      <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                                      incididunt labore.</p>
      </div>
      </li>
      <li>
      <div className="icon">
      <i className="feather-check"></i>
      </div>
      <div className="title-wrapper">
      <h4 className="title">A good traveler has no fixed plans</h4>
      <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                                      incididunt labore.</p>
      </div>
      </li>
      </ul>
      <div className="about-btn mt--30">
      <a className="tmp-btn round text-center" href="#">About Our Corpox</a>
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

export default SectionAboutArea
