import Link from 'next/link'
function SectionButton1Area3() {
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
      <span className="number">04</span>
      <span className="subtitle-text">BUTTON HOVER</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Icon Hover <span className="theme-gradient">Animation.</span></h2>
      </div>
      </div>
      </div>
      <div className="row mt--30">
      <div className="col-lg-12">
      <div className="tmp-button-group">
      <Link className="tmp-btn icon-hover" href="#">
      <span className="btn-text">Corpox Button</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </Link>
      <Link className="tmp-btn round icon-hover" href="#">
      <span className="btn-text">Corpox Button</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </Link>
      <Link className="tmp-btn hover-icon-reverse" href="#">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Corpox Button</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </span>
      </Link>
      <Link className="tmp-btn round hover-icon-reverse" href="#">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">Corpox Button</span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
      </span>
      </Link>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionButton1Area3
