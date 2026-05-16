const projects = [
    ["19.webp", "2025, Dental", "Dental Care System", "col-lg-8 col-md-12 col-sm-12"],
    ["20.webp", "2024, Cardio", "Cardiology Interface", "col-lg-4 col-md-6 col-sm-12"],
    ["21.webp", "2025, Brain", "Neurology Platform", "col-lg-4 col-md-6 col-sm-12"],
    ["22.webp", "2025, Gastro", "Gastro Care Plan", "col-lg-4 col-md-6 col-sm-12"],
    ["23.webp", "2025, Healthcare", "Healthcare Solution", "col-lg-4 col-md-6 col-sm-12"],
] as const;

function PortfolioMedical() {
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
                                    <span className="subtitle-text">Our Portfolio</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">All The Gret Work That We Done</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {projects.map(([image, tag, title, column]) => (
                        <div className={column} key={title}>
                            <div className="single-modern-case-studies">
                                <a href="/portfolio/brand-refresh-venture" className="thumbnail invers-anime">
                                    <img src={`/assets/images/portfolio/${image}`} alt="" />
                                </a>
                                <div className="inner-content-area">
                                    <span className="tags">{tag}</span>
                                    <a href="#" className="tmponhover">
                                        <h3 className="title">{title}</h3>
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

export default PortfolioMedical;
