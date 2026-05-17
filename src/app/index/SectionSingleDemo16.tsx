import Link from 'next/link'
function SectionSingleDemo16() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 mt--40">
      <div className="inversweb-single-demos-with-mobile demo-architecture light">
      <div className="single-demo tmponhover bg-card">
      <div className="demo-part">
      <div className="thumbnail">
      <img className="image-dark" loading="lazy" src="/assets/images/demo/white-25-architecture.webp" alt="Corporate Images" />
      <div className="tmp-preview-wrap">
      <Link target="_blank" href="/onepage-25-white" className="tmp-view-btn">One Page<svg className="tmp-icon-svg" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 8 8" fill="currentColor">
      <path d="M0.861539 8L0 7.13846L5.90769 1.23077H0.615385V0H8V7.38462H6.76923V2.09231L0.861539 8Z"></path>
      </svg>
      </Link>
      <Link target="_blank" href="/white-25-architecture" className="tmp-view-btn">Multi Page<svg className="tmp-icon-svg" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 8 8" fill="currentColor">
      <path d="M0.861539 8L0 7.13846L5.90769 1.23077H0.615385V0H8V7.38462H6.76923V2.09231L0.861539 8Z"></path>
      </svg>
      </Link>
      </div>
      </div>
      <div className="content">
      <h4 className="title">Architecture <span className="label-new">New Added</span></h4>
      <div className="tags-wrappers">
      <span className="single">
                                                      Architecture
                                                  </span>
      <span className="single">
                                                      Construction
                                                  </span>
      <span className="single">
                                                      Interior
                                                  </span>
      </div>
      </div>
      </div>
      </div>
      <Link target="_blank" href="/white-25-architecture" className="invers-mobile-view">
      <div className="inner">
      <img src="/assets/images/demo/white-demo-mobile-25.webp" alt="Corpox Images" />
      </div>
      </Link>
      </div>
      </div>
    </>
  )
}

export default SectionSingleDemo16
