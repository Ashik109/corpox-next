const highlights = [
    {
        image: "26.webp",
        number: "01",
        subtitle: "Keynote Speakers",
        title: "Inspiring Talks from Industry Leaders",
        features: [
            ["Global thought leaders", "Hear from renowned experts sharing insights on emerging trends, innovations, and strategies."],
            ["Exclusive insights", "Gain actionable knowledge from talks covering business, tech, and creative industries."],
        ],
        reverse: false,
        extraClass: "",
    },
    {
        image: "27.webp",
        number: "02",
        subtitle: "Workshops & Panels",
        title: "Hands-On Learning Experiences",
        features: [
            ["Interactive sessions", "Participate in workshops and panels to gain practical skills and insights from professionals."],
            ["Expert guidance", "Learn best practices and strategies directly from experienced speakers and mentors."],
        ],
        reverse: true,
        extraClass: "",
    },
    {
        image: "28.webp",
        number: "03",
        subtitle: "Networking Opportunities",
        title: "Build Connections That Last",
        features: [
            ["Meet industry peers", "Connect with professionals, innovators, and like-minded attendees to expand your network."],
            ["Collaborative opportunities", "Engage in meaningful discussions, partnerships, and collaborations during and after the event."],
        ],
        reverse: false,
        extraClass: "pt_md--60 pt_sm--40",
    },
] as const;

function HighlightContent({ item }: { item: (typeof highlights)[number] }) {
    return (
        <div className="col-lg-6 pl--40 pt_lg--40 pb_lg--40 pl_sm--0">
            <div className="content" style={{ maxWidth: "95%" }}>
                <div className="tmp-section-title-border text-start about-style-4 pt_md--60 pt_sm--40 pb_sm--40">
                    <div className="pres-line-separator-wrapper mb--10">
                        <span className="subtitle">
                            <span className="number">{item.number}</span>
                            <span className="subtitle-text">{item.subtitle}</span>
                        </span>
                        <div className="line-separator" />
                    </div>
                    <h2 className="title w-700 mb--30 tmp-title-split">{item.title}</h2>
                    <ul className="feature-list">
                        {item.features.map(([title, text]) => (
                            <li key={title}>
                                <div className="icon">
                                    <i className="feather-check" />
                                </div>
                                <div className="title-wrapper">
                                    <h4 className="title">{title}</h4>
                                    <p className="text">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="read-more-btn mt--30">
                        <a className="tmp-btn icon-hover text-center" href="/contact">
                            <span className="btn-text">Contact Us</span>
                            <span className="btn-icon">
                                <i className="feather-arrow-right" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HighlightImage({ image, title }: { image: string; title: string }) {
    return (
        <div className="col-lg-6">
            <div className="why-choose-us-thumbnail invers-anime">
                <img src={`/assets/images/about/${image}`} alt={title} />
            </div>
        </div>
    );
}

function HighlightsEvent() {
    return (
        <div className="sticky-wrapper-about-fluid tmp-section-gap">
            {highlights.map((item) => (
                <div className={`tmp-about-area-fluid sticky-stack ${item.extraClass ?? ""}`} key={item.subtitle}>
                    <div className="container-fluid">
                        <div className="row g-0 align-items-center">
                            {item.reverse ? (
                                <>
                                    <HighlightContent item={item} />
                                    <HighlightImage image={item.image} title={item.subtitle} />
                                </>
                            ) : (
                                <>
                                    <HighlightImage image={item.image} title={item.subtitle} />
                                    <HighlightContent item={item} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HighlightsEvent;
