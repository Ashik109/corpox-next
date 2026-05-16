import RealEstateOdometer from "./RealEstateOdometer";

const counters = [
    { value: 120, suffix: "+", title: "Employees", delay: 0 },
    { value: 892, suffix: "", title: "Awards", delay: 100 },
    { value: 69, suffix: "K", title: "Useful Programs", delay: 200 },
    { value: 435, suffix: "M", title: "Happy Clients", delay: 300 },
];

function CounterRealEstate() {
    return (
        <div className="tmp-counterup-area tmp-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center" data-aos="slide-up" data-aos-delay="100" data-aos-duration="700">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Fun Facts</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Fun Facts</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5">
                    {counters.map((counter) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="slide-up" data-aos-delay={counter.delay} data-aos-duration="700" key={counter.title}>
                            <div className="count-box counter-style-1 text-center">
                                <div>
                                    <h3 className="count-number">
                                        <RealEstateOdometer value={counter.value} />
                                        {counter.suffix}
                                    </h3>
                                </div>
                                <h5 className="title">{counter.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CounterRealEstate;
