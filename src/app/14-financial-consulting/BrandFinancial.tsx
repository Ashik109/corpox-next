function BrandFinancial() {
    return (
        <div className="tmp-brand-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle tmp-title-split">Our Awesome Client</h4>
                            <h2 className="title w-600 mb--20 tmp-title-split">Our Trusted Client.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt--40">
                        <ul className="brand-list brand-style-1">
                            {Array.from({ length: 8 }, (_, index) => (
                                <li key={index + 1}>
                                    <a href="#">
                                        <img src={`/assets/images/brand/brand-0${index + 1}.png`} alt="Brand Image" />
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

export default BrandFinancial;
