import Link from 'next/link'
function SectionStartSinglePortfolio2() {
  return (
    <>
      <div className="portfolio-3 cat--3">
      <div className="tmp-card portfolio">
      <div className="inner">
      <div className="thumbnail">
      <figure className="card-image">
      <Link href="/portfolio-details">
      <img src="/assets/images/portfolio/11.webp" alt="Portfolio-01" />
      </Link>
      </figure>
      <Link className="tmp-overlay" href="/portfolio-details"></Link>
      </div>
      <div className="content">
      <h5 className="title mb--20">
      <Link href="/portfolio-details">Business Development</Link>
      </h5>
      <div className="tmp-badge-group">
      <Link href="#" className="tmp-badge-2">Design</Link>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionStartSinglePortfolio2
