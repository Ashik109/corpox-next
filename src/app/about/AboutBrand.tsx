import Link from 'next/link'
const brands = Array.from({ length: 8 }, (_, index) => `brand-${String(index + 1).padStart(2, '0')}.png`)

function AboutBrand() {
  return (
    <div className="tmp-brand-area tmp-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle">
                  <span className="number">4</span>
                  <span className="subtitle-text">My Awesome Client</span>
                </span>
                <div className="line-separator line-right" />
              </div>
              <h2 className="title w-700 tmp-title-split">My Awesome Clients.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt--40">
            <ul className="brand-list brand-style-1">
              {brands.map((brand, index) => (
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 50} key={brand}>
                  <Link href="#">
                    <img src={`/assets/images/brand/${brand}`} alt="Brand" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBrand
