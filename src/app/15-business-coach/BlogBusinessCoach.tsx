import Link from 'next/link'
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

function BlogBusinessCoach() {
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
                                    <span className="subtitle-text">News</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Recent Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {blogs.map((blog) => (
                        <div className="col-lg-6" key={blog.image}>
                            <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link className="image" href="/blog/best-corporate-tips">
                                            <img src={`/assets/images/blog/${blog.image}`} alt="Blog Image" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <Link href="/blog/corporate-success-strategy">{blog.title}</Link>
                                        </h4>
                                        <p className="descriptiion">{blog.text}</p>
                                        <div className="read-more-btn">
                                            <Link className="btn-read-more" href="/blog/leadership-confidence">
                                                <span>Read More</span>
                                            </Link>
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

export default BlogBusinessCoach;
