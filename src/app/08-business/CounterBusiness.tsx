import BusinessOdometer from "./BusinessOdometer";

const counters = [
    { value: 120, suffix: "+", title: "Employees" },
    { value: 892, suffix: "", title: "Awards" },
    { value: 69, suffix: "K", title: "Useful Programs" },
    { value: 435, suffix: "M", title: "Happy Clients" },
];

function CounterBusiness() {
    return (
        <div className="tmp-counterup-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+200</span>
                                    <span className="subtitle-text">ustomizable counters</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Clients <span className="theme-gradient">Feedback</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5">
                    {counters.map((counter, index) => (
                        <div
                            className="col-lg-3 col-md-6 col-sm-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={index * 100}
                            key={counter.title}
                        >
                            <div className="count-box counter-style-1 text-center">
                                <div>
                                    <h3 className="count-number">
                                        <BusinessOdometer value={counter.value} />
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

export default CounterBusiness;
