const blogs = [
    {
        image: "blog-01.jpg",
        title: "How to Analyze Your Best Pages for SEO Performance",
        text: "It is a long established fact that a reader.",
    },
    {
        image: "blog-02.jpg",
        title: "Corporate Success: How to Achieve Your Goals",
        text: "Corporate Success established fact that.",
    },
];

function BlogBusinessThree() {
    return (
        <div className="main-content tmp-section-gap">
            <div className="tmp-blog-area">
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
                                <h2 className="title w-700 tmp-title-split">My Recent Article</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--0">
                        {blogs.map((blog) => (
                            <div className="col-lg-6" key={blog.image}>
                                <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <a className="image" href="/blog/best-corporate-tips">
                                                <img src={`/assets/images/blog/${blog.image}`} alt="Blog" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">
                                                <a href="/blog/corporate-success-strategy">{blog.title}</a>
                                            </h4>
                                            <p className="descriptiion">{blog.text}</p>
                                            <div className="read-more-btn">
                                                <a className="btn-read-more" href="/blog/leadership-confidence">
                                                    <span>Read More</span>
                                                </a>
                                            </div>
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

export default BlogBusinessThree;
