import Link from 'next/link'
const properties = [
    ["portfolio-07.jpg", "Casa Lomas De Machali Machas", "A wise leader seeks growth in every.", "A creative mind finds success beyond"],
    ["portfolio-08.jpg", "Villa Vista Del Sol Santiago", "A wise leader seeks growth in.", "A good traveler has no fixed plans"],
    ["portfolio-09.jpg", "Residencia Los Alamos Rancagua", "A wise leader seeks growth.", "A good traveler has no fixed plans"],
    ["portfolio-10.jpg", "Casa Jardines De La Serena", "Wise leader seeks growth in every.", "A good traveler has no fixed plans"],
    ["portfolio-11.jpg", "Villa Los Olivos Machali", "Wise leader seeks growth in every.", "A good traveler has no fixed plans"],
] as const;

function FeatureList({ one, two, id }: { one: string; two: string; id: string }) {
    return (
        <ul className="feature-list">
            {[one, two].map((title, index) => (
                <li data-aos="slide-up" key={`${id}-${index}`}>
                    <div className="icon">
                        <i className="feather-check" />
                    </div>
                    <div className="title-wrapper">
                        <h4 className="title">{title}</h4>
                        <p className="text">Lorem ipsum dolor consectetur adipiscing do eiusmod tempor incididunt labore.</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

function FeaturedPropertiesRealEstateTwo() {
    return (
        <>
            <div className="tmp-feature-properties tmp-section-gapTop pb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h4 className="subtitle">Properties</h4>
                                <h2 className="title w-600">Our Top Rated Properties</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-section-sticky-wrapper">
                {properties.map(([image, title, one, two], index) => (
                    <section className={`card-large-sticky-style-one ${index === properties.length - 1 ? "pt--60 tmp-section-gapBottom" : "ptb--60"}`} key={image}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="portfolio-list-thumbnail jarallax">
                                    <img src={`/assets/images/portfolio/${image}`} className="jarallax-img" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 pl--50 pl_md--20 pl_sm--20 mt_md--40 mt_sm--40">
                                <div className="portfolio-list-inner-content">
                                    <h3 className="title">{title}</h3>
                                    <div className="tag-wrapper-area">
                                        {[
                                            ["feather-home", "3 Room"],
                                            ["feather-folder-minus", "Beds 4"],
                                            ["feather-box", "Sqft: 2200"],
                                        ].map(([icon, label]) => (
                                            <div className="single" key={label}>
                                                <i className={icon} />
                                                <span>{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="location-area">
                                        <i className="feather-map-pin" />
                                        <span>122 Logbo Ave, Califonia, New York</span>
                                    </div>
                                    <p>
                                        Real estate encompasses land, buildings, and natural resources associated with the land. It plays a critical role in economies worldwide, serving as a
                                        foundation for housing, commerce, and investment opportunities.
                                    </p>
                                    <FeatureList one={one} two={two} id={image} />
                                    <Link className="tmp-btn btn-small" href="/contact">
                                        Book Your Properties
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}

export default FeaturedPropertiesRealEstateTwo;
