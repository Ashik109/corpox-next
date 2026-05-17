import Link from 'next/link'
const VIDEO_URL = 'https://www.youtube.com/watch?v=4jnzf1yj48M'

function AboutBanner() {
  return (
    <div className="about-banner-area pt--150 tmp-shape-position">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle">
                  <span className="number">01</span>
                  <span className="subtitle-text">Our Company&apos;s About Details.</span>
                </span>
                <div className="line-separator line-right" />
              </div>
              <h1 className="title w-700 mt--20">
                We are a Business &amp; Consulting <br />
                <span className="theme-gradient">Business Agency.</span>
              </h1>
              <p className="b1">We design and develop world-class websites and applications.</p>
            </div>
          </div>
        </div>
        <div className="row mt--30">
          <div className="col-lg-12">
            <div className="video-btn">
              <div className="video-popup icon-center">
                <div className="overlay-content">
                  <div className="thumbnail">
                    <img className="radius-small" src="/assets/images/about/14.webp" alt="Corporate Image" />
                  </div>
                  <div className="video-icon">
                    <Link className="tmp-btn rounded-player popup-video" href={VIDEO_URL}>
                      <span><i className="feather-play" /></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="video-lightbox-wrapper" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBanner
