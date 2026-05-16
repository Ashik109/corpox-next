const brands = ["brand-01.png", "brand-02.png", "brand-03.png", "brand-04.png", "brand-05.png", "brand-06.png", "brand-07.png", "brand-08.png"];

function BrandSolar() {
    return (
        <div className="tmp-brand-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Our Awesome Client</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Awesome Clients.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt--40">
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

export default BrandSolar;
