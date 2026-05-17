import Link from 'next/link'
const blocks = [
    {
        image: "32.webp",
        subtitle: "Build Strong Foundations With Us",
        title: "Reliable Construction Solutions for Modern Living",
        features: ["Customized construction planning", "Durable and safe building solutions"],
        reverse: false,
    },
    {
        image: "33.webp",
        subtitle: "Power Your Projects With Expertise",
        title: "End-to-End Construction for Homes and Businesses",
        features: ["Client-focused project execution", "Optimized cost and time management"],
        reverse: true,
    },
    {
        image: "34.webp",
        subtitle: "Create Lasting Structures With Confidence",
        title: "Smart Construction Designed for Long-Term Value",
        features: ["Tailored building strategies", "Ongoing maintenance and support"],
        reverse: false,
    },
] as const;

function BlockContent({ block }: { block: (typeof blocks)[number] }) {
    return (
        <div className="content" style={{ maxWidth: "95%" }}>
            <div className="tmp-section-title-border text-start about-style-4 pt_md--60 pt_sm--40 pb_sm--40">
                <div className="pres-line-separator-wrapper mb--10" data-aos="fade-up" data-aos-duration="700">
                    <span className="subtitle">
                        <span className="number">01</span>
                        <span className="subtitle-text">{block.subtitle}</span>
                    </span>
                    <div className="line-separator" />
                </div>
                <h2 className="title w-700 mb--30 tmp-title-split">{block.title}</h2>
                <ul className="feature-list">
                    {block.features.map((feature) => (
                        <li key={feature}>
                            <div className="icon">
                                <i className="feather-check" />
                            </div>
                            <div className="title-wrapper">
                                <h4 className="title">{feature}</h4>
                                <p className="text">Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum.</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="read-more-btn mt--30">
                    <Link className="tmp-btn icon-hover text-center" href="#contactus">
                        <span className="btn-text">Contact Us</span>
                        <span className="btn-icon">
                            <i className="feather-arrow-right" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function BlockImage({ image }: { image: string }) {
    return (
        <div className="why-choose-us-thumbnail invers-anime">
            <img src={`/assets/images/about/${image}`} alt="construction feature" />
        </div>
    );
}

function AboutFluidConstruction() {
    return (
        <div className="sticky-wrapper-about-fluid">
            {blocks.map((block) => (
                <div className={`tmp-about-area-fluid ${block.image === "34.webp" ? "pt_md--60 pt_sm--40" : ""}`} key={block.title}>
                    <div className="container-fluid">
                        <div className="row g-0 align-items-center">
                            {block.reverse ? (
                                <>
                                    <div className="col-lg-6 pl--40 pt_lg--40 pb_lg--40 pl_sm--0">
                                        <BlockContent block={block} />
                                    </div>
                                    <div className="col-lg-6">
                                        <BlockImage image={block.image} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-lg-6">
                                        <BlockImage image={block.image} />
                                    </div>
                                    <div className="col-lg-6 pl--40 pt_lg--40 pb_lg--40 pl_sm--0">
                                        <BlockContent block={block} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutFluidConstruction;
