import Link from 'next/link'
const services = [
    ["10.webp", "Solar Strategy Planning"],
    ["11.webp", "Energy Efficiency Programs"],
    ["12.webp", "Solar Marketing Solutions"],
    ["13.webp", "Solar Growth Advisory"],
    ["14.webp", "Solar Financial Advisory"],
    ["15.webp", "Energy Risk Management"],
    ["10.webp", "Solar System Support"],
    ["11.webp", "Solar Operations Consulting"],
] as const;

function ServicesSolar() {
    return (
        <div className="main-content">
            <div className="tmp-service-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tmp-section-title-border text-center">
                                <div className="pres-line-separator-wrapper text-center mb--10">
                                    <div className="line-separator line-left" />
                                    <span className="subtitle">
                                        <span className="number">04</span>
                                        <span className="subtitle-text">Services</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">Our Popular Services.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 service-wrapper mt--10">
                        <div className="col-lg-12">
                            <div className="inversweb-service-main-wrapper-list">
                                {services.map(([image, title], index) => (
                                    <Link href="/service/management-leadership" className="single-service-wrapper tmponhover" key={`${title}-${index}`}>
                                        <div className="thumbnail invers-anime">
                                            <img src={`/assets/images/services/${image}`} alt="" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title">{title}</h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSolar;
