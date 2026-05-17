import Link from 'next/link'
const posts = [
    {
        image: "06.webp",
        tag: "Healthcare",
        author: "Dr. John Care",
        date: "15 Dec 2025",
        comments: "05",
        title: "How to Improve Patient Care with Modern Health care Medical service",
        text: "It is an established fact that quality healthcare improves patient trust.",
        imageFirst: true,
        video: false,
    },
    {
        image: "07.webp",
        tag: "Medical",
        author: "Dr. Kalvin Ross",
        date: "28 Dec 2025",
        comments: "03",
        title: "Hospital Management Systems for Better Patient Care",
        text: "Effective healthcare systems are built through planning and expertise.",
        imageFirst: false,
        video: false,
    },
    {
        image: "08.webp",
        tag: "Technology",
        author: "Dr. Kalvin Ross",
        date: "12 Dec 2025",
        comments: "01",
        title: "Medical Technology Advancing Modern Patient Treatment",
        text: "Modern medical technology plays a key role in patient recovery.",
        imageFirst: true,
        video: true,
    },
] as const;

function PostThumbnail({ post }: { post: (typeof posts)[number] }) {
    return (
        <div className="thumbnail invers-anime">
            <Link className="image" href="/blog/best-corporate-tips">
                <img loading="lazy" className="w-100" src={`/assets/images/blog/${post.image}`} alt="" />
            </Link>
            <span className="tag-news">{post.tag}</span>
            {post.video ? (
                <div className="video-icon">
                    <Link className="tmp-btn btn-small rounded-player popup-video" href="https://www.youtube.com/watch?v=4jnzf1yj48M">
                        <span>
                            <i className="feather-play" />
                        </span>
                    </Link>
                </div>
            ) : null}
        </div>
    );
}

function PostContent({ post }: { post: (typeof posts)[number] }) {
    return (
        <div className="content">
            <ul className="inversweb-meta-list">
                <li>
                    <span>
                        <i className="feather-user" />
                    </span>
                    <Link href="#">{post.author}</Link>
                </li>
                <li className="separator">-</li>
                <li>{post.date}</li>
                <li className="comment-area">
                    <i className="feather-message-circle" />
                    <span>{post.comments}</span>
                </li>
            </ul>
            <h4 className="title">
                <Link href="/blog/corporate-success-strategy">{post.title}</Link>
            </h4>
            <p className="descriptiion">{post.text}</p>
            <div className="read-more-btn">
                <Link className="tmp-btn btn-border" href="/blog/leadership-confidence">
                    <span>Read More</span>
                </Link>
            </div>
        </div>
    );
}

function BlogMedical() {
    return (
        <div className="blog-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Latests News</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Latests News</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available,
                                <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {posts.map((post, index) => (
                        <div className="col-lg-4 col-md-6 col-12" data-aos="slide-up" data-aos-delay={index * 100} data-aos-duration="700" key={post.title}>
                            <div className="tmp-card box-card-style-default tmponhover">
                                <div className="inner">
                                    {post.imageFirst ? (
                                        <>
                                            <PostThumbnail post={post} />
                                            <PostContent post={post} />
                                        </>
                                    ) : (
                                        <>
                                            <PostContent post={post} />
                                            <PostThumbnail post={post} />
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

export default BlogMedical;
