const brands = [
    "brand-01.png",
    "brand-02.png",
    "brand-03.png",
    "brand-04.png",
    "brand-05.png",
    "brand-06.png",
    "brand-07.png",
    "brand-08.png",
    "brand-01.png",
];

function BrandMarketingAgency() {
    return (
        <div className="tmp-brand-area pb--80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt--10">
                        <ul className="brand-list brand-style-2">
                            {brands.map((brand, index) => (
                                <li key={`${brand}-${index}`}>
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

export default BrandMarketingAgency;
