function SectionPortfolioArea() {
  return (
    <>
      <div className="tmp-portfolio-area tmp-section-gap masonary-wrapper-activation">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">+6</span>
      <span className="subtitle-text">Projects</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Our Latest Projects</h2>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-12">
      <div className="tmp-portfolio-filter filter-button-default messonry-button text-center mb--30">
      <button data-filter="*" className="is-checked"><span className="filter-text">All
                          Project</span></button>
      <button data-filter=".cat--1"><span className="filter-text">Grow Business</span></button>
      <button data-filter=".cat--2"><span className="filter-text">Art Design</span></button>
      <button data-filter=".cat--3"><span className="filter-text">App Development</span></button>
      </div>
      </div>
      <div className="resizer"></div></div>
    </>
  )
}

export default SectionPortfolioArea
