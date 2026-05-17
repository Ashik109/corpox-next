import Link from 'next/link'
const projects = [
    ["05.webp", "AI Business Intelligence", "col-lg-8 col-md-12 col-sm-12"],
    ["01.webp", "Predictive Analytics", "col-lg-4 col-md-6 col-sm-12"],
    ["02.webp", "Machine Learning Model", "col-lg-4 col-md-6 col-sm-12"],
    ["03.webp", "AI Automation System", "col-lg-4 col-md-6 col-sm-12"],
    ["04.webp", "Smart Data Processing", "col-lg-4 col-md-6 col-sm-12"],
] as const;

function PortfolioAiAgency() {
    return (
        <div className="tmp-portfolio-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle color-secondary">Recent Work</h4>
                            <h2 className="title w-600 tmp-title-split">Recent Case Studies</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    {projects.map(([image, title, column]) => (
                        <div className={column} key={title}>
                            <div className="single-modern-case-studies">
                                <Link href="/portfolio/brand-refresh-venture" className="thumbnail invers-anime">
                                    <img src={`/assets/images/ai-agency/project/${image}`} alt={title} />
                                </Link>
                                <div className="inner-content-area">
                                    <span className="tags">2025, AI Project</span>
                                    <Link href="#" className="tmponhover">
                                        <h3 className="title">{title}</h3>
                                        <div className="tmp-icon">
                                            <span className="default">
                                                <i className="feather-arrow-up-right" />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioAiAgency;
