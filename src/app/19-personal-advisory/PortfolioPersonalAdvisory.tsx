const projects = [
    { image: "05.webp", title: "App Development", tags: "2025, Business", wide: true },
    { image: "06.webp", title: "UI/UX Design", tags: "2024, design", wide: false },
    { image: "07.webp", title: "Software Developemnt", tags: "2025, App", wide: false },
    { image: "08.webp", title: "SEO Marketing", tags: "2025, Marketing", wide: false },
    { image: "09.webp", title: "Business Solution", tags: "2025, Business", wide: false },
] as const;

function PortfolioPersonalAdvisory() {
    return (
        <div className="tmp-portfolio-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Portfolio</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">
                                Discover My Brilliant <br /> Case Studies
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {projects.map((project) => (
                        <div className={`${project.wide ? "col-lg-8 col-md-12" : "col-lg-4 col-md-6"} col-sm-12`} key={project.image}>
                            <div className="single-modern-case-studies">
                                <a href="/portfolio/brand-refresh-venture" className="thumbnail invers-anime">
                                    <img src={`/assets/images/portfolio/${project.image}`} alt="case-studies" />
                                </a>
                                <div className="inner-content-area">
                                    <span className="tags">{project.tags}</span>
                                    <a href="/portfolio/analytics-platform" className="tmponhover">
                                        <h3 className="title">{project.title}</h3>
                                        <div className="tmp-icon">
                                            <span className="default">
                                                <i className="feather-arrow-up-right" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioPersonalAdvisory;
