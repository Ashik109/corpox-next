'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TeamTwo() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <>
      {/* Start Team Area */}
      <div className="tmp-team-area tmp-section-gap">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="tmp-section-title-border text-center">

                <div className="pres-line-separator-wrapper text-center mb--10">
                  <div className="line-separator line-left"></div>

                  <span className="subtitle">
                    <span className="number">4</span>
                    <span className="subtitle-text">Our Teams</span>
                  </span>

                  <div className="line-separator line-right"></div>
                </div>

                <h2 className="title w-700 tmp-title-split">
                  Some of Our Talents.
                </h2>

              </div>
            </div>
          </div>

          <div className="row g-5 mt--5">

            {/* Team Member 1 */}
            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="tmp-team team-style-two">
                <div className="inner">

                  <div className="thumbnail">
                    <img
                      src="/assets/images/team/team-04.jpg"
                      alt="team"
                    />
                  </div>

                  <div className="content">
                    <h2 className="title">Sr Janen Sara</h2>
                    <h6 className="subtitle color-body">
                      Sr Product Designer
                    </h6>

                    <ul className="social-icon social-default icon-naked justify-content-start">

                      <li data-aos="fade-up" data-aos-delay="200">
                        <a href="https://www.facebook.com/">
                          <i className="feather-facebook"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="300">
                        <a href="https://www.twitter.com">
                          <i className="feather-twitter"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="400">
                        <a href="https://www.instagram.com/">
                          <i className="feather-instagram"></i>
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="tmp-team team-style-two">
                <div className="inner">

                  <div className="thumbnail">
                    <img
                      src="/assets/images/team/team-05.jpg"
                      alt="team"
                    />
                  </div>

                  <div className="content">
                    <h2 className="title">John Deon</h2>
                    <h6 className="subtitle color-body">
                      App Developer
                    </h6>

                    <ul className="social-icon social-default icon-naked justify-content-start">

                      <li data-aos="fade-up" data-aos-delay="200">
                        <a href="https://www.facebook.com/">
                          <i className="feather-facebook"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="300">
                        <a href="https://www.twitter.com">
                          <i className="feather-twitter"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="400">
                        <a href="https://www.instagram.com/">
                          <i className="feather-instagram"></i>
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="tmp-team team-style-two">
                <div className="inner">

                  <div className="thumbnail">
                    <img
                      src="/assets/images/team/team-06.jpg"
                      alt="team"
                    />
                  </div>

                  <div className="content">
                    <h2 className="title">Mark Henry</h2>
                    <h6 className="subtitle color-body">
                      Accounts Manager
                    </h6>

                    <ul className="social-icon social-default icon-naked justify-content-start">

                      <li data-aos="fade-up" data-aos-delay="200">
                        <a href="https://www.facebook.com/">
                          <i className="feather-facebook"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="300">
                        <a href="https://www.twitter.com">
                          <i className="feather-twitter"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="400">
                        <a href="https://www.instagram.com/">
                          <i className="feather-instagram"></i>
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="tmp-team team-style-two">
                <div className="inner">

                  <div className="thumbnail">
                    <img
                      src="/assets/images/team/team-07.jpg"
                      alt="team"
                    />
                  </div>

                  <div className="content">
                    <h2 className="title">Muskan Sarif</h2>
                    <h6 className="subtitle color-body">
                      Accounts Manager
                    </h6>

                    <ul className="social-icon social-default icon-naked justify-content-start">

                      <li data-aos="fade-up" data-aos-delay="200">
                        <a href="https://www.facebook.com/">
                          <i className="feather-facebook"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="300">
                        <a href="https://www.twitter.com">
                          <i className="feather-twitter"></i>
                        </a>
                      </li>

                      <li data-aos="fade-up" data-aos-delay="400">
                        <a href="https://www.instagram.com/">
                          <i className="feather-instagram"></i>
                        </a>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* End Team Area */}
    </>
  );
}

export default TeamTwo;