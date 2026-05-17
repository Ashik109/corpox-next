import Link from 'next/link'
function SectionBreadcarumbArea() {
  return (
    <>
      <div className="breadcrumb-area breadcarumb-style-1 ptb--90 pb_sm--50">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="breadcrumb-inner">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number"><Link href="/index">01</Link></span>
      <span className="subtitle-text">Our Avatars</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h1 className="title w-700 tmp-title-split">Our Avatars Styles.</h1>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionBreadcarumbArea
