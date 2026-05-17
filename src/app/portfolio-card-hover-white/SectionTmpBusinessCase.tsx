import Link from 'next/link'
function SectionTmpBusinessCase() {
  return (
    <>
      <div className="tmp-business-case tmp-section-gap">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">03</span>
      <span className="subtitle-text">Case Studies</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Specialist Business Cases</h2>
      <p className="description b1 tmp-title-split-p">There are many variations of passages of Lorem Ipsum
                                      available,
                                      <br />but the majority have suffered alteration.
                                  </p>
      </div>
      </div>
      </div>
      <div className="row g-5 mt--10 tmp_jump_animation-wrapper">
      <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
      <div className="single-project-style-three invers-anime">
      <Link href="/portfolio-details-white" className="thumbnail">
      <img loading="lazy" src="/assets/images/portfolio/01.webp" alt="project" />
      </Link>
      <div className="inner-content tmponhover">
      <Link href="/portfolio-details-white">
      <h4 className="title">Business Growth</h4>
      </Link>
      <span>Business Strategy</span>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
      <div className="single-project-style-three invers-anime">
      <Link href="/portfolio-details-white" className="thumbnail">
      <img loading="lazy" src="/assets/images/portfolio/02.webp" alt="project" />
      </Link>
      <div className="inner-content tmponhover">
      <Link href="/portfolio-details-white">
      <h4 className="title">Startup Solution</h4>
      </Link>
      <span>Business Strategy</span>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
      <div className="single-project-style-three invers-anime">
      <Link href="/portfolio-details-white" className="thumbnail">
      <img loading="lazy" src="/assets/images/portfolio/03.webp" alt="project" />
      </Link>
      <div className="inner-content tmponhover">
      <Link href="/portfolio-details-white">
      <h4 className="title">Growth Manage</h4>
      </Link>
      <span>Business Strategy</span>
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item">
      <div className="single-project-style-three invers-anime">
      <Link href="/portfolio-details-white" className="thumbnail">
      <img loading="lazy" src="/assets/images/portfolio/04.webp" alt="project" />
      </Link>
      <div className="inner-content tmponhover">
      <Link href="/portfolio-details-white">
      <h4 className="title">Company Skills</h4>
      </Link>
      <span>Business Strategy</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionTmpBusinessCase
