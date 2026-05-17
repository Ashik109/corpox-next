import Link from 'next/link'
const posts = [
    ["02.webp", "How to Analyze Your Best Pages for SEO Performance Marketing.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque unde culpa aut voluptates rem, adipisci nostrum libero dolor"],
    ["03.webp", "How to Analyze Your Best Pages for SEO Performance", "It is a long established fact that a reader."],
    ["04.webp", "How to Analyze Your Best Pages for SEO Performance", "It is a long established fact that a reader."],
    ["05.webp", "How to Analyze Your Best Pages for SEO Performance", "It is a long established fact that a reader."],
] as const;

function BlogGymFitness() {
    const [featured, ...sidePosts] = posts;

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
                                        <img loading="lazy" className="w-100" src={`/assets/images/blog/${featured[0]}`} alt="Blog" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/blog/corporate-success-strategy">{featured[1]}</Link>
                                    </h4>
                                    <p className="descriptiion">{featured[2]}</p>
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
                        {sidePosts.map(([image, title, text]) => (
                            <div className="tmp-card box-card-style-default card-list-view bentostyle tmponhover" key={image}>
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <Link className="image" href="/blog/best-corporate-tips">
                                            <img loading="lazy" src={`/assets/images/blog/${image}`} alt="Blog" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <Link href="/blog/corporate-success-strategy">{title}</Link>
                                        </h4>
                                        <p className="descriptiion">{text}</p>
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

export default BlogGymFitness;
