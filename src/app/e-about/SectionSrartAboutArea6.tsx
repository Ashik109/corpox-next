import Link from 'next/link'
function SectionSrartAboutArea6() {
  return (
    <>
      <div className="tmp-about-area tmp-section-gap">
      <div className="container">
      <div className="row g-5 row--40 align-items-center">
      <div className="col-lg-4">
      <div className="content">
      <h3 className="title w-700 mt--20 tmp-title-split">Highly expertise</h3>
      <p className="tmp-title-split">Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim.</p>
      </div>
      </div>
      <div className="col-lg-6 offset-lg-2">
      <div className="tmp-progress-style-1">
      <div className="single-progress">
      <h6 className="title">Web Development</h6>
      <div className="progress">
      <div className="progress-bar" data-aos="fade-right" data-aos-duration="0.5s" data-aos-delay=".3s" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
      <span className="progress-number">90%</span>
      </div>
      </div>
      <div className="single-progress">
      <h6 className="title">Photoshop Design</h6>
      <div className="progress">
      <div className="progress-bar" data-aos="fade-right" data-aos-duration="0.5s" data-aos-delay=".3s" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
      <span className="progress-number">75%</span>
      </div>
      </div>
      <div className="single-progress">
      <h6 className="title">App Development</h6>
      <div className="progress">
      <div className="progress-bar" data-aos="fade-right" data-aos-duration="0.5s" data-aos-delay=".3s" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
      <span className="progress-number">95%</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="row g-5 service-wrapper mt--60">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="service service-eight text-left bg-color-card tmponhover">
      <div className="inner d-flex">
      <div className="image">
      <img src="/assets/images/services/icon-01.png" alt="card Images" />
      </div>
      <div className="content">
      <h4 className="title">
      <Link href="/service-details/management-leadership">Cloud based,
                                                  secured software</Link>
      </h4>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="service service-eight text-left bg-color-card tmponhover">
      <div className="inner d-flex">
      <div className="image">
      <img src="/assets/images/services/icon-02.png" alt="card Images" />
      </div>
      <div className="content">
      <h4 className="title">
      <Link href="/service-details/management-leadership">Web Application, software</Link>
      </h4>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="service service-eight text-left bg-color-card tmponhover">
      <div className="inner d-flex">
      <div className="image">
      <img src="/assets/images/services/icon-03.png" alt="card Images" />
      </div>
      <div className="content">
      <h4 className="title">
      <Link href="/service-details/management-leadership">App based, secured software</Link>
      </h4>
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

export default SectionSrartAboutArea6
