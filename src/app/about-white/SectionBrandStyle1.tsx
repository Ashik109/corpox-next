import Link from 'next/link'
function SectionBrandStyle1() {
  return (
    <>
      <div className="tmp-brand-area tmp-section-gapBottom">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">4</span>
      <span className="subtitle-text">My Awesome Client</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">My Awesome Clients.</h2>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-12 mt--40">
      <ul className="brand-list brand-style-1">
      <li><Link href="#"><img src="/assets/images/brand/brand-01.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-02.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-03.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-04.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-05.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-06.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-07.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-08.png" alt="Brand Image" /></Link></li>
      </ul>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionBrandStyle1
