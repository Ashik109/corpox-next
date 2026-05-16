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

function BlogFinancial() {
    return (
        <div className="tmp-blog-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle tmp-title-split">Our Latest News</h4>
                            <h2 className="title w-600 tmp-title-split">Our Recent Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {blogs.map((blog) => (
                        <div className="col-lg-6" key={blog.image}>
                            <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img src={`/assets/images/blog/${blog.image}`} alt="Blog Image" />
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
    );
}

export default BlogFinancial;
