import Link from 'next/link'
const listPosts = ["10.webp", "11.webp", "12.webp"] as const;

function BlogConstruction() {
    return (
        <div className="blog-area tmp-section-gap" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-flex-between">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper text-start mb--10" data-aos="fade-up" data-aos-duration="700">
                                    <span className="subtitle">
                                        <span className="number">03</span>
                                        <span className="subtitle-text">Latests News</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    Our <span className="theme-gradient">Latests News</span>
                                </h2>
                            </div>
                            <div className="tmp-load-more d-flex justify-content-center" data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                                <Link className="tmp-btn btn-large hover-icon-reverse" href="/blog/best-corporate-tips">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">View More News</span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    <div className="col-lg-5" data-aos="fade-up" data-aos-duration="700">
                        <div className="tmp-card box-card-style-default bentostyle-left-blog tmponhover">
                            <div className="inner">
                                <div className="thumbnail invers-anime">
                                    <Link className="image" href="/blog/best-corporate-tips">
                                        <img loading="lazy" className="w-100" src="/assets/images/blog/09.webp" alt="Construction blog" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/blog/corporate-success-strategy">How to Analyze Your Best Pages for SEO Performance Marketing.</Link>
                                    </h4>
                                    <p className="descriptiion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque unde culpa aut voluptates rem, adipisci nostrum libero dolor</p>
                                    <div className="read-more-btn">
                                        <Link className="btn-read-more" href="/blog/leadership-confidence">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        {listPosts.map((image, index) => (
                            <div className="tmp-card box-card-style-default card-list-view bentostyle tmponhover" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 100} key={image}>
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <Link className="image" href="/blog/best-corporate-tips">
                                            <img loading="lazy" src={`/assets/images/blog/${image}`} alt="Construction blog" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <Link href="/blog/corporate-success-strategy">How to Analyze Your Best Pages for SEO Performance</Link>
                                        </h4>
                                        <p className="descriptiion">It is a long established fact that a reader.</p>
                                        <div className="read-more-btn">
                                            <Link className="btn-read-more" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogConstruction;
