import Link from 'next/link'
function SectionBrandStyle1() {
  return (
    <>
      <div className="tmp-brand-area tmp-section-gap">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="section-title text-center">
      <h4 className="subtitle">Our Awesome Client</h4>
      <h2 className="title w-600 tmp-title-split mb--20">Trusted by Leading Brands</h2>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-12 mt--40">
      <ul className="brand-list brand-carousel-activation tmp-slick-arrow tmp-slick-dot mb--40">
      <li><Link href="#"><img src="/assets/images/brand/brand-01.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-02.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-03.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-04.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-05.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-06.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-06.png" alt="Brand Image" /></Link></li>
      <li><Link href="#"><img src="/assets/images/brand/brand-06.png" alt="Brand Image" /></Link></li>
      </ul>
      </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default SectionBrandStyle1
