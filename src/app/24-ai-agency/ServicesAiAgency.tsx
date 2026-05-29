import Link from 'next/link'
const services = [
    { image: "01.webp", href: "/service-details/management-leadership" },
    { image: "02.webp", href: "/service-details/digital-transformation" },
    { image: "03.webp", href: "/service-details/financial-growth" },
] as const;

function ServicesAiAgency() {
    return (
        <div className="ai-service-area-start tmp-section-gapBottom">
            <div className="container">
                <div className="row g-5">
                    {services.map((service) => (
                        <div className="col-lg-4" key={service.image}>
                            <Link href={service.href} className="single-ai-service">
                                <div className="thumbnail">
                                    <img src={`/assets/images/ai-agency/service/${service.image}`} alt="" />
                                </div>
                                <div className="inner-content">
                                    <h4 className="title">Immersive Intelligence Across Every Digital Dimension</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesAiAgency;
