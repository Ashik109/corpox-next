import Link from 'next/link'
function SectionButton1Area2() {
  return (
    <>
      <div className="tmp-button-area tmp-section-gapTop">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">05</span>
      <span className="subtitle-text">BUTTON Outlined</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Buttons <span className="theme-gradient">Outlined.</span></h2>
      </div>
      </div>
      </div>
      <div className="row mt--30">
      <div className="col-lg-12">
      <div className="tmp-button-group">
      <Link className="tmp-btn btn-small btn-border" href="#">Button SM</Link>
      <Link className="tmp-btn btn-border" href="#">Button MD</Link>
      <Link className="tmp-btn btn-large btn-border" href="#">Button LG</Link>
      <Link className="tmp-btn btn-large btn-border" href="#">Button XL</Link>
      <Link className="tmp-btn btn-extra-large btn-border" href="#">Button XXL</Link>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionButton1Area2
