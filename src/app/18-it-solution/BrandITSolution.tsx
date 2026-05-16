const brands = ["brand-01.png", "brand-02.png", "brand-03.png", "brand-04.png", "brand-05.png", "brand-06.png", "brand-07.png", "brand-08.png"];

function BrandITSolution() {
    return (
        <div className="tmp-brand-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Our Awesome Client</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Trusted by Leading Companies</h2>
                            <p className="description b1">
                                There are many variations of passages of Lorem Ipsum available,
                                <br />
                                but the majority have suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt--40">
                        <ul className="brand-list brand-style-1">
                            {brands.map((brand) => (
                                <li key={brand}>
                                    <a href="#">
                                        <img src={`/assets/images/brand/${brand}`} alt="Brand Image" />
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

export default BrandITSolution;
