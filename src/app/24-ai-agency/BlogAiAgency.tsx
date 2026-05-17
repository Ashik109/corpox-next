import Link from 'next/link'
const posts = [
    "The Complete Guide to Choosing Solar System",
    "How AI Automation Improves Team Productivity",
    "Practical Ways to Scale Data-Driven Decisions",
] as const;

function BlogAiAgency() {
    return (
        <div className="tmp-blog-style-minimal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle color-secondary">Recent News</h4>
                            <h2 className="title w-600 tmp-title-split">Recent Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--30">
                    {posts.map((post) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={post}>
                            <div className="blog-card-text style-minimal tmponhover">
                                <div className="blog-content-area-2">
                                    <div className="text">
                                        <ul className="blog-meta">
                                            <li>
                                                <i className="feather-user" />
                                                <p>By Author</p>
                                            </li>
                                            <li>
                                                <i className="feather-message-circle" />
                                                <p>Comments(08)</p>
                                            </li>
                                        </ul>
                                        <h6 className="blog-title">
                                            <Link href="/blog/best-corporate-tips">{post}</Link>
                                        </h6>
                                    </div>
                                    <div className="button-area">
                                        <div className="tmp-button-overlay-with-text btn-sm p-0">
                                            <Link href="/blog/corporate-success-strategy" className="tmp-icon-overlay-link-btn with-text-btn primary-btn">
                                                <span className="tmp-btn-overlay">
                                                    <i className="tmp-icon feather-arrow-right" />
                                                    <i className="tmp-icon-bottom feather-arrow-right" />
                                                </span>
                                            </Link>
                                            <Link className="text-btn" href="/blog/leadership-confidence">
                                                Read More
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

export default BlogAiAgency;
