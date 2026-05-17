import Link from 'next/link'
function SectionSrartAboutArea3() {
  return (
    <>
      <div className="about-area about-style-4 tmp-section-gapBottom">
      <div className="container">
      <div className="row row--40 align-items-center">
      <div className="col-lg-6">
      <div className="video-btn">
      <div className="video-popup icon-center">
      <div className="overlay-content">
      <div className="thumbnail" data-aos="fade-up"><img className="radius-small rts-reveal-image-one" src="/assets/images/about/contact-image.png" alt="Corporate Image" /></div>
      <div className="video-icon">
      <Link className="tmp-btn rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
      <span><i className="feather-play"></i></span>
      </Link>
      </div>
      </div>
      </div>
      <div className="video-lightbox-wrapper"></div>
      </div>
      </div>
      <div className="col-lg-6 mt_md--40 mt_sm--40">
      <div className="content">
      <div className="inner">
      <div className="tmp-section-title-border text-start hero__sub-title">
      <div className="pres-line-separator-wrapper mb--10">
      <span className="subtitle"><span className="number">01</span> <span className="subtitle-text">ABOUT US</span></span>
      <div className="line-separator"></div>
      </div>
      </div>
      <h3 className="title w-700 tmp-title-split">Corpox specializes in <br /> small Corporate Business.
                                      </h3>
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
      <Link className="tmp-btn round text-center" href="/about">About Our Corpox</Link>
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

export default SectionSrartAboutArea3
