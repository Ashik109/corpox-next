const services = ["01.webp", "02.webp", "03.webp"] as const;

function ServicesAiAgency() {
    return (
        <div className="ai-service-area-start tmp-section-gapBottom">
            <div className="container">
                <div className="row g-5">
                    {services.map((image) => (
                        <div className="col-lg-4" key={image}>
                            <a href="/service/management-leadership" className="single-ai-service">
                                <div className="thumbnail">
                                    <img src={`/assets/images/ai-agency/service/${image}`} alt="" />
                                </div>
                                <div className="inner-content">
                                    <h4 className="title">Immersive Intelligence Across Every Digital Dimension</h4>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesAiAgency;
