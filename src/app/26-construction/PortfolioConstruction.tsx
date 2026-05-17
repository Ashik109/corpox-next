import Link from 'next/link'
const projects = [
    ["29.webp", "Residential Building", "Home Construction"],
    ["28.webp", "Commercial Complex", "Commercial Construction"],
    ["30.webp", "Modern Renovation", "Renovation Project"],
    ["31.webp", "Interior Fit-Out", "Interior Construction"],
] as const;

function PortfolioConstruction() {
    return (
        <div className="tmp-business-case tmp-section-gapBottom" id="project">
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
                            <h2 className="title w-700 tmp-title-split">Our Construction Projects</h2>
                            <p className="description b1 tmp-title-split-p">
                                Explore some of our completed construction projects that showcase
                                <br />
                                quality craftsmanship, smart planning, and durable results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {projects.map(([image, title, category], index) => (
                        <div className="col-lg-6 col-md-6 col-sm-12 tmp-jump__item" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 100} key={title}>
                            <div className="single-project-style-three invers-anime">
                                <Link className="thumbnail" href="/project-details">
                                    <img loading="lazy" src={`/assets/images/portfolio/${image}`} alt={title} />
                                </Link>
                                <div className="inner-content tmponhover">
                                    <Link href="/project-details">
                                        <h4 className="title">{title}</h4>
                                    </Link>
                                    <span>{category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioConstruction;
