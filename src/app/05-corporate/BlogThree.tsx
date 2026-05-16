'use client'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

function BlogThree() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        })
    }, [])
    return (
        <>
            {/* Start Blog Area  */}
            <div className="blog-area tmp-section-gap bg-color-card">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h4 className="subtitle color-secondary">Latest Article</h4>
                                <h2 className="title w-600 tmp-title-split">Our Latests News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div
                            className="col-lg-4 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <div className="tmp-card box-card-style-default tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img
                                                loading="lazy"
                                                className="w-100"
                                                src="/assets/images/blog-grid/blog-01.jpg"
                                                alt="Blog Image"
                                            />
                                        </a>
                                        <span className="tag-news">Business</span>
                                    </div>
                                    <div className="content">
                                        <ul className="inversweb-meta-list">
                                            <li>
                                                <span>
                                                    <i className="feather-user" />
                                                </span>
                                                <a href="#">John Deon</a>
                                            </li>
                                            <li className="separator">-</li>
                                            <li>15 Dec 2025</li>
                                            <li className="comment-area">
                                                <i className="feather-message-circle" />
                                                <span>05</span>
                                            </li>
                                        </ul>
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">
                                                How to Analyze Your Best Pages for SEO Performance
                                            </a>
                                        </h4>
                                        <p className="descriptiion">
                                            It is an established fact that corporate success is not
                                            achieved overnight.
                                        </p>
                                        <div className="read-more-btn">
                                            <a className="tmp-btn btn-border" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <div className="tmp-card box-card-style-default tmponhover">
                                <div className="inner">
                                    <div className="content">
                                        <ul className="inversweb-meta-list">
                                            <li>
                                                <span>
                                                    <i className="feather-user" />
                                                </span>
                                                <a href="#">Kalvin Klin</a>
                                            </li>
                                            <li className="separator">-</li>
                                            <li>28 Dec 2025</li>
                                            <li className="comment-area">
                                                <i className="feather-message-circle" />
                                                <span>03</span>
                                            </li>
                                        </ul>
                                        <h4 className="title">
                                            <a href="/blog/best-corporate-tips">
                                                Corporate Success How to Achieve Your Goals
                                            </a>
                                        </h4>
                                        <p className="descriptiion">
                                            Corporate success is an established fact that comes from
                                            strategic.
                                        </p>
                                        <div className="read-more-btn">
                                            <a className="tmp-btn btn-border" href="/blog/corporate-success-strategy">
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/leadership-confidence">
                                            <img
                                                loading="lazy"
                                                className="w-100"
                                                src="/assets/images/blog-grid/blog-02.jpg"
                                                alt="Blog Image"
                                            />
                                        </a>
                                        <span className="tag-news">Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="200"
                        >
                            <div className="tmp-card box-card-style-default tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img
                                                loading="lazy"
                                                className="w-100"
                                                src="/assets/images/blog-grid/blog-03.jpg"
                                                alt="Blog Image"
                                            />
                                        </a>
                                        <span className="tag-news">Technology</span>
                                        <div className="video-icon">
                                            <a
                                                className="tmp-btn btn-small rounded-player popup-video"
                                                href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                            >
                                                <span>
                                                    <i className="feather-play" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <ul className="inversweb-meta-list">
                                            <li>
                                                <span>
                                                    <i className="feather-user" />
                                                </span>
                                                <a href="#">Kalvin Klin</a>
                                            </li>
                                            <li className="separator">-</li>
                                            <li>12 Dec 2025</li>
                                            <li className="comment-area">
                                                <i className="feather-message-circle" />
                                                <span>01</span>
                                            </li>
                                        </ul>
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">
                                                Corporate Leadership How to Lead with Confidence
                                            </a>
                                        </h4>
                                        <p className="descriptiion">
                                            Corporate success is widely recognized as the outcome of
                                            innovation.
                                        </p>
                                        <div className="read-more-btn">
                                            <a className="tmp-btn btn-border" href="/blog/leadership-confidence">
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
            {/* End Blog Area  */}
        </>

    )
}

export default BlogThree