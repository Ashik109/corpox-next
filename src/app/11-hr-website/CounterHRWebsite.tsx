import HROdometer from "./HROdometer";

const counters = [
    { icon: "01.svg", value: 1200, suffix: "+", label: "Project Done" },
    { icon: "02.svg", value: 99, suffix: "%", label: "Business Solution" },
    { icon: "03.svg", value: 18, suffix: "M", label: "Global Customers" },
];

function CounterHRWebsite() {
    return (
        <div className="tmp-counterup-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+2000</span>
                                    <span className="subtitle-text">Our Fun Facts</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Our Fun <span className="theme-gradient">Facts.</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--0">
                    {counters.map((counter) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={counter.label}>
                            <div className="signle-fun-facts-one tmponhover">
                                <div className="icon">
                                    <img src={`/assets/images/fun-facts/${counter.icon}`} alt="fun-facts" />
                                </div>
                                <h2 className="title">
                                    <HROdometer value={counter.value} />
                                    {counter.suffix}
                                </h2>
                                <span className="bototm">{counter.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CounterHRWebsite;
