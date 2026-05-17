import Link from 'next/link'
const blocks = [
    {
        image: "21.webp",
        reverse: false,
        subtitle: "Power Your Future With Solar Energy",
        title: "Smart Solar Solutions for a Sustainable Tomorrow",
        features: ["Customized solar system planning", "Reliable renewable energy solutions"],
    },
    {
        image: "23.webp",
        reverse: true,
        subtitle: "Power Your Business With Clean Energy",
        title: "Future-Ready Solar Projects for Homes and Businesses",
        features: ["Client-focused solar project execution", "Optimized energy output solutions"],
    },
    {
        image: "22.webp",
        reverse: false,
        subtitle: "Build a Greener Tomorrow With Us",
        title: "Smarter Solar Systems Designed for Long-Term Impact",
        features: ["Tailored solar installation strategies", "Advanced monitoring and maintenance"],
    },
] as const;

function TextContent({ block }: { block: (typeof blocks)[number] }) {
    return (
        <div className="col-lg-6 pl--40 pt_lg--40 pb_lg--40 pl_sm--0">
            <div className="content" style={{ maxWidth: "95%" }}>
                <div className="tmp-section-title-border text-start about-style-4 pt_md--60 pt_sm--40 pb_sm--40">
                    <div className="pres-line-separator-wrapper mb--10">
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
                        <Link className="tmp-btn icon-hover text-center" href="/contact">
                            <span className="btn-text">Contact Us</span>
                            <span className="btn-icon">
                                <i className="feather-arrow-right" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImageContent({ image }: { image: string }) {
    return (
        <div className="col-lg-6">
            <div className="why-choose-us-thumbnail invers-anime">
                <img src={`/assets/images/about/${image}`} alt="" />
            </div>
        </div>
    );
}

function AboutSolar() {
    return (
        <div className="sticky-wrapper-about-fluid">
            {blocks.map((block) => (
                <div className="tmp-about-area-fluid sticky-stack" key={block.title}>
                    <div className="container-fluid">
                        <div className="row g-0 align-items-center">
                            {block.reverse ? (
                                <>
                                    <TextContent block={block} />
                                    <ImageContent image={block.image} />
                                </>
                            ) : (
                                <>
                                    <ImageContent image={block.image} />
                                    <TextContent block={block} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutSolar;
