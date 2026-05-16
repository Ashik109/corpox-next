const brands = ["brand-01.png", "brand-02.png", "brand-03.png", "brand-04.png", "brand-05.png", "brand-06.png", "brand-06.png", "brand-06.png"];

function BrandMedical() {
    return (
        <div className="tmp-brand-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt--20">
                        <ul className="brand-list brand-carousel-activation tmp-slick-arrow tmp-slick-dot mb--40">
                            {brands.map((brand, index) => (
                                <li key={`${brand}-${index}`}>
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

export default BrandMedical;
