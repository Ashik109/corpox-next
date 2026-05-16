const posts = [
    ["13.webp", "Event Tips", "Alice Johnson", "15 Dec 2025", "05", "Top Strategies to Host a Successful Event", "Organizing an impactful event requires careful planning, creativity, and effective communication."],
    ["15.webp", "Event Planning", "Michael Brown", "28 Dec 2025", "03", "Engaging Attendees for Maximum Impact", "Learn how to attract, engage, and retain attendees throughout your conference or event."],
    ["14.webp", "Networking", "Sophie Lee", "12 Dec 2025", "01", "Effective Networking Strategies at Conferences", "Discover tips to build meaningful connections and expand your professional network during events."],
] as const;

function BlogEvent() {
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
                    {posts.map(([image, tag, author, date, comments, title, text], index) => (
                        <div className="col-lg-4 col-md-6 col-12" data-aos="slide-up" data-aos-duration="700" data-aos-delay={index * 100} key={title}>
                            <div className="tmp-card box-card-style-default tmponhover">
                                <div className="inner">
                                    {index === 1 ? <BlogContent author={author} date={date} comments={comments} title={title} text={text} /> : null}
                                    <div className="thumbnail invers-anime">
                                        <a className="image" href="/blog/best-corporate-tips">
                                            <img loading="lazy" className="w-100" src={`/assets/images/blog/${image}`} alt={title} />
                                        </a>
                                        <span className="tag-news">{tag}</span>
                                        {index === 2 ? (
                                            <div className="video-icon">
                                                <a className="tmp-btn btn-small rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                                                    <span>
                                                        <i className="feather-play" />
                                                    </span>
                                                </a>
                                            </div>
                                        ) : null}
                                    </div>
                                    {index === 1 ? null : <BlogContent author={author} date={date} comments={comments} title={title} text={text} />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function BlogContent({ author, date, comments, title, text }: { author: string; date: string; comments: string; title: string; text: string }) {
    return (
        <div className="content">
            <ul className="inversweb-meta-list">
                <li>
                    <span>
                        <i className="feather-user" />
                    </span>
                    <a href="#">{author}</a>
                </li>
                <li className="separator">-</li>
                <li>{date}</li>
                <li className="comment-area">
                    <i className="feather-message-circle" />
                    <span>{comments}</span>
                </li>
            </ul>
            <h4 className="title">
                <a href="/blog/corporate-success-strategy">{title}</a>
            </h4>
            <p className="descriptiion">{text}</p>
            <div className="read-more-btn">
                <a className="tmp-btn btn-border" href="/blog/leadership-confidence">
                    <span>Read More</span>
                </a>
            </div>
        </div>
    );
}

export default BlogEvent;
