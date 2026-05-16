const posts = [
    ["09.webp", "How to Analyze Your Best Pages for SEO Performance Marketing.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque unde culpa aut voluptates rem, adipisci nostrum libero dolor"],
    ["10.webp", "How to Analyze Your Best Pages for SEO Performance", "It is a long established fact that a reader."],
    ["11.webp", "How to Analyze Your Best Pages for SEO Performance", "It is a long established fact that a reader."],
    ["12.webp", "How to Analyze Your Best Pages for SEO Performance", "It is a long established fact that a reader."],
] as const;

function BlogSolar() {
    const [featured, ...sidePosts] = posts;

    return (
        <div className="blog-area tmp-section-gap">
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
                <div className="row g-5 mt--10">
                    <div className="col-lg-5">
                        <div className="tmp-card box-card-style-default bentostyle-left-blog tmponhover">
                            <div className="inner">
                                <div className="thumbnail invers-anime">
                                    <a className="image" href="/blog/best-corporate-tips">
                                        <img loading="lazy" className="w-100" src={`/assets/images/blog/${featured[0]}`} alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <a href="/blog/corporate-success-strategy">{featured[1]}</a>
                                    </h4>
                                    <p className="descriptiion">{featured[2]}</p>
                                    <div className="read-more-btn">
                                        <a className="btn-read-more" href="/blog/leadership-confidence">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        {sidePosts.map(([image, title, text]) => (
                            <div className="tmp-card box-card-style-default card-list-view bentostyle tmponhover" key={image}>
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img loading="lazy" src={`/assets/images/blog/${image}`} alt="" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">{title}</a>
                                        </h4>
                                        <p className="descriptiion">{text}</p>
                                        <div className="read-more-btn">
                                            <a className="btn-read-more" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </a>
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

export default BlogSolar;
