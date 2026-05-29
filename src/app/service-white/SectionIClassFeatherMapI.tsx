import Link from 'next/link'
function SectionIClassFeatherMapI() {
  return (
    <>
      <img src="/assets/images/services/icons/03.png" alt="service" />

      <div className="content">
      <h4 className="title w-600">
      <Link href="/service-details/management-leadership">Data Insights</Link>
      </h4>
      <p className="description mb--0">We analyze business data, find patterns, give recommendations, and support strategic decisions.</p>
      <div className="discover-btn mt--30">
      <Link className="tmp-btn round btn-small btn-border hover-icon-reverse" href="/service-details/management-leadership">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Discover services</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </span>
      </Link>
      </div>
      </div>
      <div className="shape-service-1">
      <img src="/assets/images/services/shape/01.png" alt="service" />
      </div>


      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="service service__style--1 bg-color-card radius text-start tmp-border-none tmponhover"></div></div>
    </>
  )
}

export default SectionIClassFeatherMapI
