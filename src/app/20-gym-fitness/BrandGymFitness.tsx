const brands = ["brand-01.png", "brand-02.png", "brand-03.png", "brand-04.png", "brand-05.png", "brand-06.png", "brand-07.png", "brand-08.png"];

function BrandGymFitness() {
    return (
        <div className="tmp-brand-area tmp-section-gapBottom">
            <div className="container">
                <div className="row mb--20">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center" data-aos="slide-up" data-aos-delay="100" data-aos-duration="700">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Our Awesome Client</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Trusted Client.</h2>
                            <p className="description b1 tmp-title-split-p">
                                Easily schedule your appointment with just a few clicks. Our team is <br /> always ready to assist you at your preferred time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt--10">
                        <ul className="brand-list brand-style-1">
                            {brands.map((brand) => (
                                <li key={brand}>
                                    <a href="#">
                                        <img src={`/assets/images/brand/${brand}`} alt="Brand" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandGymFitness;
