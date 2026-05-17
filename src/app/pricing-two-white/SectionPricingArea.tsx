import Link from 'next/link'
function SectionPricingArea() {
  return (
    <>
      <div className="main-content">
      <div className="tmp-service-area tmp-section-gap banner-personal-portfolio signle-section">
      <div className="container">
      <div className="row mb--40 mb_sm--0">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">+3</span>
      <span className="subtitle-text">Pricing</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Pricing Plan.</h2>
      </div>
      </div>
      </div>
      <div className="pricing-table-items">
      <div className="pricing-table-items">
      <div className="row g-5">
      <div className="col-md-6">
      <div className="pricing-table large-padding tmponhover">
      <div className="pricing-table-header">
      <div className="top d-flex justify-content-between align-items-start">
      <h4>basic</h4>
      <p className="text-right">Have design ready to build?<br />
                                  or small budget</p>
      </div>
      <h1>$59 <span>/ hour</span></h1>
      </div>
      <ul className="feature-lists">
      <li>Need your wireframe</li>
      <li>Design with Figma, Framer</li>
      <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
      <li>Remote/Online</li>
      <li>Work in business days, no weekend.</li>
      <li>Support 6 months</li>
      </ul>
      <Link href="" className="tmp-btn btn-primary w-100">pick this package</Link>
      </div>
      </div>
      <div className="col-md-6">
      <div className="pricing-table large-padding tmponhover">
      <div className="pricing-table-header">
      <div className="top d-flex justify-content-between align-items-start">
      <h4>premium</h4>
      <p className="text-right">Not have any design?<br />
                                  Leave its for me</p>
      </div>
      <h1>$129 <span>/ hour</span></h1>
      </div>
      <ul className="feature-lists">
      <li>Don't need wireframe or anything</li>
      <li>Design with Figma, Framer from scratch</li>
      <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
      <li>Remote/Online</li>
      <li>Work with both weekend</li>
      <li>Support 12 months</li>
      <li>Your project alway be priority</li>
      <li>Customer care gifts</li>
      </ul>
      <Link href="" className="tmp-btn btn-primary w-100">pick this package</Link>
      </div>
      </div>
      </div>
      <p className="info text-center">
                                      Don't find any package match with your plan!<br />
              Want to setup a new tailor-made package for only you?. <Link href="/contact">Contact Us</Link>
      </p>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionPricingArea
