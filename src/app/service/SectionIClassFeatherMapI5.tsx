import Link from 'next/link'
function SectionIClassFeatherMapI5() {
  return (
    <>
      <img src="/assets/images/services/icons/03.png" alt="service" />

      <div className="content">
      <h4 className="title w-600">
      <Link href="/service/management-leadership">App Development</Link>
      </h4>
      <p className="description mb--0">Variations There are many variations of passages of Lorem available.</p>
      <div className="discover-btn mt--20">
      <Link className="tmp-btn round btn-small btn-border hover-icon-reverse" href="/service/management-leadership">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Discover services</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </span>
      </Link>
      </div>
      </div>


      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="slide-up" data-aos-duration="700" data-aos-delay="200">
      <div className="service service__style--1 bg-color-blackest radius text-center tmp-border"></div></div>
    </>
  )
}

export default SectionIClassFeatherMapI5
