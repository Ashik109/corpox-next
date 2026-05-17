import Link from 'next/link'
const blogs = [
    ["blog-01.jpg", "Business", "John Deon", "15 Dec 2025", "05", "How to Analyze Your Best Pages for SEO Performance", "It is an established fact that corporate success is not achieved overnight."],
    ["blog-02.jpg", "Development", "Kalvin Klin", "28 Dec 2025", "03", "Corporate Success How to Achieve Your Goals", "Corporate success is an established fact that comes from strategic."],
    ["blog-03.jpg", "Technology", "Kalvin Klin", "12 Dec 2025", "01", "Corporate Leadership How to Lead with Confidence", "Corporate success is widely recognized as the outcome of innovation."],
] as const;

function BlogAgencyThirteen() {
    return (
        <div className="tmp-blog-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Latest News</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Our Recent Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {blogs.map(([image, tag, author, date, comments, title, text], index) => (
                        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 100} key={title}>
                            <div className="tmp-card box-card-style-default tmponhover">
                                <div className="inner">
                                    {index === 1 ? null : (
                                        <div className="thumbnail invers-anime">
                                            <Link className="image" href="/blog/best-corporate-tips">
                                                <img loading="lazy" className="w-100" src={`/assets/images/blog-grid/${image}`} alt="Blog" />
                                            </Link>
                                            <span className="tag-news">{tag}</span>
                                            {index === 2 && (
                                                <div className="video-icon">
                                                    <Link className="tmp-btn btn-small rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                                        <span>
                                                            <i className="feather-play" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <div className="content">
                                        <ul className="inversweb-meta-list">
                                            <li>
                                                <span>
                                                    <i className="feather-user" />
                                                </span>
                                                <Link href="#">{author}</Link>
                                            </li>
                                            <li className="separator">-</li>
                                            <li>{date}</li>
                                            <li className="comment-area">
                                                <i className="feather-message-circle" />
                                                <span>{comments}</span>
                                            </li>
                                        </ul>
                                        <h4 className="title">
                                            <Link href="/blog/corporate-success-strategy">{title}</Link>
                                        </h4>
                                        <p className="descriptiion">{text}</p>
                                        <div className="read-more-btn">
                                            <Link className="tmp-btn btn-border" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </Link>
                                        </div>
                                    </div>
                                    {index === 1 && (
                                        <div className="thumbnail invers-anime">
                                            <Link className="image" href="/blog/best-corporate-tips">
                                                <img loading="lazy" className="w-100" src={`/assets/images/blog-grid/${image}`} alt="Blog" />
                                            </Link>
                                            <span className="tag-news">{tag}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogAgencyThirteen;
