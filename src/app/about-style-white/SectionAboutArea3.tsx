import Link from 'next/link'
function SectionAboutArea3() {
  return (
    <>
      <div className="tmp-about-area tmp-section-gap">
      <div className="container">
      <div className="row g-5 row--40 align-items-center">
      <div className="col-lg-6">
      <div className="video-btn">
      <div className="video-popup icon-center about-relative-thumb">
      <div className="overlay-content">
      <div className="thumbnail invers-anime"><img className="radius-small" src="/assets/images/about/04.webp" alt="Corporate Image" />
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
      <p><span className="odometer" data-count="999">00</span>+ Review</p>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6">
      <div className="content">
      <div className="tmp-section-title-border text-start about-style-4">
      <div className="pres-line-separator-wrapper mb--10">
      <span className="subtitle"><span className="number">01</span> <span className="subtitle-text">Our Mission</span></span>
      <div className="line-separator"></div>
      </div>
      <h2 className="title w-700 mb--30 tmp-title-split">Empowering Businesses Through Strategy</h2>
      <p className="tmp-title-split-p">At Corpox, our mission is to empower businesses with insightful strategies, data-driven solutions, and expert guidance that foster sustainable growth and operational excellence</p>
      <ul className="feature-list">
      <li>
      <div className="icon">
      <i className="feather-check"></i>
      </div>
      <div className="title-wrapper">
      <h4 className="title">Delivering customized consulting</h4>
      <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                                      incididunt labore.</p>
      </div>
      </li>
      <li>
      <div className="icon">
      <i className="feather-check"></i>
      </div>
      <div className="title-wrapper">
      <h4 className="title">Building long-term relationships</h4>
      <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor
                                                      incididunt labore.</p>
      </div>
      </li>
      </ul>
      <div className="read-more-btn mt--40">
      <Link className="tmp-btn round btn-large btn-border" href="/contact-white">Lets Contact Us</Link>
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

export default SectionAboutArea3
