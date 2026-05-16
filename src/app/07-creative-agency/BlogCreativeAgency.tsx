const posts = [
    {
        image: "/assets/images/blog/blog-01.jpg",
        title: "How to Analyze Your Best Pages for SEO Performance",
        description: "It is a long established fact that a reader.",
    },
    {
        image: "/assets/images/blog/blog-02.jpg",
        title: "Corporate Success: How to Achieve Your Goals",
        description: "Corporate Success established fact that.",
    },
];

function BlogCreativeAgency() {
    return (
        <div className="tmp-blog-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center" data-aos="fade-up" data-aos-duration="700">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Latests News</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Latests News.</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available,
                                <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5">
                    {posts.map((post, index) => (
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 100} key={post.title}>
                            <div className="tmp-card box-card-style-default card-list-view tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img loading="lazy" src={post.image} alt="Blog Image" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <a href="/blog/corporate-success-strategy">{post.title}</a>
                                        </h4>
                                        <p className="descriptiion">{post.description}</p>
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

export default BlogCreativeAgency;
