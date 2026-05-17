import Link from 'next/link'
function SectionSingleDemo51() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 mt--40">
      <div className="inversweb-single-demos-with-mobile">
      <div className="single-demo tmponhover bg-card">
      <div className="demo-part">
      <div className="thumbnail">
      <img className="image-dark" loading="lazy" src="/assets/images/demo/19-personal-advisory.webp" alt="Corporate Images" />
      <div className="tmp-preview-wrap">
      <Link target="_blank" href="/onepage-nineteen" className="tmp-view-btn">One Page<svg className="tmp-icon-svg" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 8 8" fill="currentColor">
      <path d="M0.861539 8L0 7.13846L5.90769 1.23077H0.615385V0H8V7.38462H6.76923V2.09231L0.861539 8Z"></path>
      </svg>
      </Link>
      <Link target="_blank" href="/19-personal-advisory" className="tmp-view-btn">Multi Page<svg className="tmp-icon-svg" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 8 8" fill="currentColor">
      <path d="M0.861539 8L0 7.13846L5.90769 1.23077H0.615385V0H8V7.38462H6.76923V2.09231L0.861539 8Z"></path>
      </svg>
      </Link>
      </div>
      </div>
      <div className="content">
      <h4 className="title">Personal Advisory <span className="label-new">New Added</span></h4>
      <div className="tags-wrappers">
      <span className="single">
                                                     Career Coaching
                                                  </span>
      <span className="single">
                                                      Leadership Coaching
                                                  </span>
      <span className="single">
                                                     Success Coaching
                                                  </span>
      <span className="single">
                                                    Search Guidance
                                                  </span>
      <span className="single">
                                                      More..
                                                  </span>
      </div>
      </div>
      </div>
      </div>
      <Link target="_blank" href="/19-personal-advisory" className="invers-mobile-view">
      <div className="inner">
      <img src="/assets/images/demo/demo-mobile-19.webp" alt="Corpox Images" />
      </div>
      </Link>
      </div>
      </div>
    </>
  )
}

export default SectionSingleDemo51
