import Link from 'next/link'
function SectionMainCounterUp5Area() {
  return (
    <>
      <div className="tmp-counterup-area tmp-section-gapTop">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">+2000</span>
      <span className="subtitle-text">Awesome Clients</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700">Our Agency in Numbers</h2>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-8 offset-lg-2">
      <div className="row g-5 mt--0">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="signle-fun-facts-one tmponhover">
      <div className="icon">
      <img src="/assets/images/fun-facts/01.svg" alt="fun-facts" />
      </div>
      <h2 className="title"><span className="odometer" data-count="1200">00</span>+
                                          </h2>
      <span className="bototm">Project Done</span>
      </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="signle-fun-facts-one tmponhover">
      <div className="icon">
      <img src="/assets/images/fun-facts/02.svg" alt="fun-facts" />
      </div>
      <h2 className="title"><span className="odometer" data-count="99">00</span>%
                                          </h2>
      <span className="bototm">Business Solution</span>
      </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="signle-fun-facts-one tmponhover">
      <div className="icon">
      <img src="/assets/images/fun-facts/03.svg" alt="fun-facts" />
      </div>
      <h2 className="title"><span className="odometer" data-count="18">00</span>M
                                          </h2>
      <span className="bototm">Global Customers</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <section className="tmp-get-in-touch-area area-2 tmp-section-gapTop">
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

export default SectionMainCounterUp5Area
