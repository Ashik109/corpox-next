const VIDEO_URL = 'https://www.youtube.com/watch?v=4jnzf1yj48M'

function AboutVideo() {
  return (
    <div className="tmp-video-area tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-btn">
              <div className="video-popup icon-center">
                <div className="overlay-content">
                  <div className="thumbnail">
                    <img className="radius-small" src="/assets/images/about/about-3.jpg" alt="Corporate Image" />
                  </div>
                  <div className="video-icon">
                    <a className="tmp-btn rounded-player popup-video" href={VIDEO_URL}>
                      <span><i className="feather-play" /></span>
                    </a>
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

export default AboutVideo
