const blogs = [
    {
        image: "/assets/images/blog-grid/blog-01.jpg",
        tag: "Business",
        author: "John Deon",
        date: "15 Dec 2025",
        comments: "05",
        title: "How to Analyze Your Best Pages for SEO Performance",
        text: "It is an established fact that corporate success is not achieved overnight.",
    },
    {
        image: "/assets/images/blog-grid/blog-02.jpg",
        tag: "Development",
        author: "Kalvin Klin",
        date: "28 Dec 2025",
        comments: "03",
        title: "Corporate Success How to Achieve Your Goals",
        text: "Corporate success is an established fact that comes from strategic.",
        imageAfter: true,
    },
    {
        image: "/assets/images/blog-grid/blog-03.jpg",
        tag: "Technology",
        author: "Kalvin Klin",
        date: "12 Dec 2025",
        comments: "01",
        title: "Corporate Leadership How to Lead with Confidence",
        text: "Corporate success is widely recognized as the outcome of innovation.",
        video: true,
    },
];

function BlogImage({ blog }: { blog: (typeof blogs)[number] }) {
    return (
        <div className="thumbnail invers-anime">
            <a className="image" href="/blog/best-corporate-tips">
                <img loading="lazy" className="w-100" src={blog.image} alt="Blog Image" />
            </a>
            <span className="tag-news">{blog.tag}</span>
            {blog.video && (
                <div className="video-icon">
                    <a className="tmp-btn btn-small rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                        <span>
                            <i className="feather-play" />
                        </span>
                    </a>
                </div>
            )}
        </div>
    );
}

function BlogContent({ blog }: { blog: (typeof blogs)[number] }) {
    return (
        <div className="content">
            <ul className="inversweb-meta-list">
                <li>
                    <span>
                        <i className="feather-user" />
                    </span>
                    <a href="#">{blog.author}</a>
                </li>
                <li className="separator">-</li>
                <li>{blog.date}</li>
                <li className="comment-area">
                    <i className="feather-message-circle" />
                    <span>{blog.comments}</span>
                </li>
            </ul>
            <h4 className="title">
                <a href="/blog/corporate-success-strategy">{blog.title}</a>
            </h4>
            <p className="descriptiion">{blog.text}</p>
            <div className="read-more-btn">
                <a className="tmp-btn btn-border" href="/blog/leadership-confidence">
                    <span>Read More</span>
                </a>
            </div>
        </div>
    );
}

function BlogMarketingAgency() {
    return (
        <div className="blog-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="section-title text-center"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            <h4 className="subtitle">Latests News</h4>
                            <h2 className="title w-600 mb--20">Our Latests News.</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available, <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {blogs.map((blog, index) => (
                        <div
                            className="col-lg-4 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={index * 100}
                            key={blog.title}
                        >
                            <div className="tmp-card box-card-style-default tmponhover">
                                <div className="inner">
                                    {blog.imageAfter ? (
                                        <>
                                            <BlogContent blog={blog} />
                                            <BlogImage blog={blog} />
                                        </>
                                    ) : (
                                        <>
                                            <BlogImage blog={blog} />
                                            <BlogContent blog={blog} />
                                        </>
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

export default BlogMarketingAgency;
