import Link from 'next/link'
const posts = ["16.webp", "17.webp"] as const;

function BlogArchitecture() {
    return (
        <div className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10" data-aos="fade-up" data-aos-duration="700">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Case Studies</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Specialist Business Cases</h2>
                            <p className="description b1 tmp-title-split-p">
                                There are many variations of passages of Lorem Ipsum available,
                                <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {posts.map((image, index) => (
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 100} key={image}>
                            <div className="tmp-card box-card-style-default bentostyle-left-blog tmponhover">
                                <div className="inner">
                                    <div className="thumbnail invers-anime">
                                        <Link className="image" href="/blog/best-corporate-tips">
                                            <img loading="lazy" className="w-100" src={`/assets/images/blog/${image}`} alt="Architecture blog" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            <Link href="/blog/corporate-success-strategy">How to Analyze Your Best Pages for SEO Performance Marketing.</Link>
                                        </h4>
                                        <p className="descriptiion">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque unde culpa aut voluptates rem, adipisci nostrum libero dolor
                                        </p>
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

export default BlogArchitecture;
