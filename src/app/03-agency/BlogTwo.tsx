import React from 'react'

interface BlogTwoProps {
  className?: string
  id?: string
}

function BlogTwo({ className = ""}: BlogTwoProps) {
    return (
        <>
            {/* Start Blog List View  */}
            <div className={`tmp-blog-area ${className}`}>
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
                                        <div className="line-separator line-right" />
                                    </div>
                                    <h2 className="title w-700 tmp-title-split">
                                        Our Recent Article
                                    </h2>
                                </div>
                                <div className="tmp-load-more d-flex justify-content-center">
                                    <a className="tmp-btn btn-large hover-icon-reverse" href="#">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">View More News</span>
                                            <span className="btn-icon">
                                                <i className="feather-loader" />
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-loader" />
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--5">
                        <div className="col-lg-6">
                            <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img src="/assets/images/blog/blog-01.jpg" alt="Blog Image" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">
                                                How to Analyze Your Best Pages for SEO Performance
                                            </a>
                                        </h4>
                                        <p className="descriptiion">
                                            It is a long established fact that a reader.
                                        </p>
                                        <div className="read-more-btn">
                                            <a className="btn-read-more" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img src="/assets/images/blog/blog-02.jpg" alt="Blog Image" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">
                                                Corporate Success: How to Achieve Your Goals
                                            </a>
                                        </h4>
                                        <p className="descriptiion">
                                            Corporate Success established fact that.
                                        </p>
                                        <div className="read-more-btn">
                                            <a className="btn-read-more" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img src="/assets/images/blog/blog-03.jpg" alt="Blog Image" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">
                                                Corporate Leadership: How to Lead with Confidence
                                            </a>
                                        </h4>
                                        <p className="descriptiion">
                                            Leadership established fact that a reader.
                                        </p>
                                        <div className="read-more-btn">
                                            <a className="btn-read-more" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img src="/assets/images/blog/blog-04.jpg" alt="Blog Image" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">
                                                Navigating the Corporate Landscape: A Guide
                                            </a>
                                        </h4>
                                        <p className="descriptiion">
                                            Navigating long established fact that a reader.
                                        </p>
                                        <div className="read-more-btn">
                                            <a className="btn-read-more" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog List View  */}
        </>

    )
}

export default BlogTwo