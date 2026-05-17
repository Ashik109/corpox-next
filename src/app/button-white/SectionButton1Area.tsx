import Link from 'next/link'
function SectionButton1Area() {
  return (
    <>
      <div className="tmp-button-area">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">05</span>
      <span className="subtitle-text">BUTTON SIZE</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Size <span className="theme-gradient">Variation.</span></h2>
      </div>
      </div>
      </div>
      <div className="row mt--30">
      <div className="col-lg-12">
      <div className="tmp-button-group">
      <Link className="tmp-btn btn-gradient btn-small" href="#">Button SM</Link>
      <Link className="tmp-btn btn-gradient" href="#">Button MD</Link>
      <Link className="tmp-btn btn-gradient btn-large" href="#">Button LG</Link>
      <Link className="tmp-btn btn-gradient btn-xl" href="#">Button XL</Link>
      <Link className="tmp-btn btn-gradient btn-extra-large" href="#">Button XXL</Link>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionButton1Area
