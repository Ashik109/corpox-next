import Link from 'next/link'
function SectionBlogListView() {
  return (
    <>
      <div className="tmp-blog-area tmp-section-gapBottom">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div className="title-flex-between">
      <div className="tmp-section-title-border text-start">
      <div className="pres-line-separator-wrapper text-start mb--10">
      <span className="subtitle">
      <span className="number">4</span>
      <span className="subtitle-text">Recent News</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Our Recent Article</h2>
      </div>
      <div className="tmp-load-more d-flex justify-content-center">
      <Link className="tmp-btn btn-large hover-icon-reverse" href="/blog-bento">
      <span className="icon-reverse-wrapper">
      <span className="btn-text">View More News</span>
      <span className="btn-icon"><i className="feather-loader"></i></span>
      <span className="btn-icon"><i className="feather-loader"></i></span>
      </span>
      </Link>
      </div>
      </div>
      </div>
      </div>
      <div className="row g-5 mt--5">
      <div className="col-lg-6">
      <div className="tmp-card box-card-style-default card-list-view tmponhover">
      <div className="inner">
      <div className="thumbnail invers-anime">
      <Link className="image" href="/blog-details">
      <img src="/assets/images/blog/blog-01.jpg" alt="Blog Image" />
      </Link>
      </div>
      <div className="content">
      <h4 className="title"><Link href="/blog-details">How to Analyze Your Best
                                                  Pages for SEO Performance</Link></h4>
      <p className="descriptiion">It is a long established fact that a reader.</p>
      <div className="read-more-btn">
      <Link className="btn-read-more" href="/blog-details"><span>Read More</span></Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6">
      <div className="tmp-card box-card-style-default card-list-view tmponhover">
      <div className="inner">
      <div className="thumbnail invers-anime">
      <Link className="image" href="/blog-details"><img src="/assets/images/blog/blog-02.jpg" alt="Blog Image" />
      </Link>
      </div>
      <div className="content">
      <h4 className="title"><Link href="/blog-details">Corporate Success: How to
                                                  Achieve Your Goals</Link></h4>
      <p className="descriptiion">Corporate Success established fact that.</p>
      <div className="read-more-btn">
      <Link className="btn-read-more" href="/blog-details"><span>Read More</span></Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6">
      <div className="tmp-card box-card-style-default card-list-view tmponhover">
      <div className="inner">
      <div className="thumbnail invers-anime"><Link className="image" href="/blog-details"><img src="/assets/images/blog/blog-03.jpg" alt="Blog Image" /></Link></div>
      <div className="content">
      <h4 className="title"><Link href="/blog-details">Corporate Leadership: How
                                                  to Lead with Confidence</Link></h4>
      <p className="descriptiion">Leadership established fact that a reader.</p>
      <div className="read-more-btn">
      <Link className="btn-read-more" href="/blog-details"><span>Read More</span></Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6">
      <div className="tmp-card box-card-style-default card-list-view tmponhover">
      <div className="inner">
      <div className="thumbnail invers-anime"><Link className="image" href="/blog-details"><img src="/assets/images/blog/blog-04.jpg" alt="Blog Image" /></Link></div>
      <div className="content">
      <h4 className="title"><Link href="/blog-details">Navigating the Corporate
                                                  Landscape: A Guide</Link></h4>
      <p className="descriptiion">Navigating long established fact that a reader.
                                          </p>
      <div className="read-more-btn">
      <Link className="btn-read-more" href="/blog-details"><span>Read More</span></Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionBlogListView
