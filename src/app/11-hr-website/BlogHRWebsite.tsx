import Link from 'next/link'
const listBlogs = [
    { image: "blog-02.jpg", title: "How to Analyze Your Best Pages for SEO Performance" },
    { image: "blog-03.jpg", title: "How to Analyze Your Best Pages for SEO Performance" },
    { image: "blog-01.jpg", title: "How to Analyze Your Best Pages for SEO Performance" },
];

function BlogHRWebsite() {
    return (
        <div className="blog-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-flex-between">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper text-start mb--10">
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
                            <div className="tmp-load-more d-flex justify-content-center">
                                <Link className="tmp-btn btn-large hover-icon-reverse" href="#">
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
                    <div className="col-lg-5">
                        <div className="tmp-card box-card-style-default bentostyle-left-blog tmponhover">
                            <div className="inner">
                                <div className="thumbnail invers-anime">
                                    <Link className="image" href="/blog/best-corporate-tips">
                                        <img loading="lazy" className="w-100" src="/assets/images/blog/01.webp" alt="Blog" />
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
                        {listBlogs.map((blog) => (
                            <div className="tmp-card box-card-style-default card-list-view bentostyle tmponhover" key={blog.image}>
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <Link className="image" href="/blog/best-corporate-tips">
                                            <img loading="lazy" src={`/assets/images/blog/${blog.image}`} alt="Blog" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <Link href="/blog/corporate-success-strategy">{blog.title}</Link>
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

export default BlogHRWebsite;
