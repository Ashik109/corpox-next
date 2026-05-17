import Link from 'next/link'
function SectionStartSinglePortfolio4() {
  return (
    <>
      <div className="portfolio-3 cat--3">
      <div className="tmp-card portfolio">
      <div className="inner">
      <div className="thumbnail">
      <figure className="card-image">
      <Link href="/portfolio-details">
      <img src="/assets/images/portfolio/13.webp" alt="Portfolio-01" />
      </Link>
      </figure>
      <Link className="tmp-overlay" href="/portfolio-details"></Link>
      </div>
      <div className="content">
      <h5 className="title mb--20">
      <Link href="/portfolio-details">Native Application</Link>
      </h5>
      <div className="tmp-badge-group">
      <Link href="#" className="tmp-badge-2">Dev</Link>
      <Link href="#" className="tmp-badge-2">App</Link>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionStartSinglePortfolio4
