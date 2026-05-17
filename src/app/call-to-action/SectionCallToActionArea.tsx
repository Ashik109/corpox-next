import Link from 'next/link'
function SectionCallToActionArea() {
  return (
    <>
      <div className="tmp-callto-action-area tmp-section-gapBottom">
      <div className="wrapper">
      <div className="tmp-callto-action-area with-shape position-relative">
      <div className="wrapper">
      <div className="tmp-callto-action clltoaction-style-default style-5">
      <div className="container">
      <div className="row row--0 align-items-center content-wrapper theme-shape">
      <div className="col-lg-12">
      <div className="inner">
      <div className="content text-center">
      <h2 className="title tmp-title-split">Ready to start creating <br /> a standard website?</h2>
      <h6 className="subtitle tmp-title-split">Finest choice for your home &amp; office</h6>
      <div className="call-to-btn d-flex justify-content-center">
      <Link className="tmp-btn btn-extra-large hover-icon-reverse" href="#">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Purchase Corpox</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </span>
      </Link>
      </div>
      </div>
      <div className="tmp-profile-box mt--50">
      <div className="profile-share justify-content-center">
      <Link href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-01.png" alt="education" /></Link>
      <Link href="#" className="avatar" data-tooltip="Mark" tabIndex={0}><img src="/assets/images/testimonial/tooltip-02.png" alt="education" /></Link>
      <Link href="#" className="avatar" data-tooltip="Jordan" tabIndex={0}><img src="/assets/images/testimonial/tooltip-03.png" alt="education" /></Link>
      <div className="more-author-text">
      <h5 className="total-join-students">Join Over 3000+ Students</h5>
      <p className="subtitle">
      <Link className="btn-read-more" href="#"><span>Purchase Corpox</span></Link>
      </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="person-stand images-left-right-float">
      <img loading="lazy" src="/assets/images/call-to-action/01.png" alt="call-to-action" />
      </div>
      <div className="bg-shape-area-cta-main tmponhover">
      <img loading="lazy" src="/assets/images/shape/01.webp" alt="" />
      </div>
      <div className="bg-line-animatoin-area-global"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <section className="tmp-get-in-touch-area area-2 tmp-section-gapBottom">
      <div className="container">
      <div className="section-inner">
      <div className="left-image">
      <img src="/assets/images/contact/get-bg.webp" width={420} alt="" />
      </div>
      <div className="content">
      <div className="icon">
      <Link href="call-to:+00449922097788"><i className="feather-phone"></i></Link>
      </div>
      <div className="text">
      <h4 className="title">Have Any Questions? Call Us free</h4>
      <Link href="call-to:+00449922097788" className="phone">+00449922097788</Link>
      <p className="desc">As the world's largest producer of business service agency, Corpox stands at the forefront of the Business sector.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default SectionCallToActionArea
