"use client";

import Link from "next/link";
import { useHoverAnimation } from "../components/useHoverAnimation";

const featuredTitle =
    "How to Analyze Your Best Pages for SEO Performance Marketing.";

const listPosts = [
    {
        image: "/assets/images/blog/blog-01.jpg",
        title: "How to Analyze Your Best Pages for SEO Performance",
    },
    {
        image: "/assets/images/blog/07.jpg",
        title: "How to Analyze Your Best Pages for SEO Performance",
    },
    {
        image: "/assets/images/blog/08.jpg",
        title: "How to Analyze Your Best Pages for SEO Performance",
    },
];

function BlogListCard({ post, delay, className = "" }: { post: (typeof listPosts)[0]; delay: number; className?: string }) {
    const hoverRef = useHoverAnimation<HTMLDivElement>();

    return (
        <div className={className} data-aos="fade-up" data-aos-duration="700" data-aos-delay={delay}>
            <div
                ref={hoverRef}
                className="tmp-card box-card-style-default card-list-view bentostyle tmponhover"
            >
                <div className="inner">
                    <div className="thumbnail invers-anime">
                        <Link className="image" href="#">
                            <img loading="lazy" src={post.image} alt="" />
                        </Link>
                    </div>
                    <div className="content">
                        <h4 className="title">
                            <Link href="#">{post.title}</Link>
                        </h4>
                        <p className="descriptiion">It is a long established fact that a reader.</p>
                        <div className="read-more-btn">
                            <Link className="btn-read-more" href="#">
                                <span>Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BlogStartup() {
    const hoverFeatured = useHoverAnimation<HTMLDivElement>();

    return (
        <section className="blog-area tmp-section-gap" aria-labelledby="blog-startup-title">
            <div className="container">
                <div className="row mb--20">
                    <div className="col-lg-12">
                        <div className="title-flex-between">
                            <div className="section-title text-start">
                                <h4
                                    className="subtitle color-secondary"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                >
                                    Latests News
                                </h4>
                                <h2
                                    id="blog-startup-title"
                                    className="title w-600"
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    data-aos-delay="100"
                                >
                                    Our Latests News
                                </h2>
                            </div>
                            <div
                                className="tmp-load-more d-flex justify-content-center"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="150"
                            >
                                <Link className="tmp-btn btn-large hover-icon-reverse" href="#">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">View More News</span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mt--10">
                    <div className="col-lg-5" data-aos="fade-up" data-aos-duration="700">
                        <div
                            ref={hoverFeatured}
                            className="tmp-card box-card-style-default bentostyle-left-blog tmponhover"
                        >
                            <div className="inner">
                                <div className="thumbnail invers-anime">
                                    <Link className="image" href="#">
                                        <img className="w-100" src="/assets/images/blog/01.webp" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="#">{featuredTitle}</Link>
                                    </h4>
                                    <p className="descriptiion">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque unde
                                        culpa aut voluptates rem, adipisci nostrum libero dolor
                                    </p>
                                    <div className="read-more-btn">
                                        <Link className="btn-read-more" href="#">
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        {listPosts.map((post, index) => (
                            <BlogListCard
                                key={post.image}
                                post={post}
                                delay={100 + index * 80}
                                className={index > 0 ? "mt--20" : ""}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogStartup;
