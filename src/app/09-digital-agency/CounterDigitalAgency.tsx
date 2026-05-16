import DigitalAgencyOdometer from "./DigitalAgencyOdometer";

const counters = [
    { icon: "/assets/images/fun-facts/01.svg", value: 1200, suffix: "+", title: "Project Done" },
    { icon: "/assets/images/fun-facts/02.svg", value: 99, suffix: "%", title: "Business Solution" },
    { icon: "/assets/images/fun-facts/03.svg", value: 18, suffix: "M", title: "Global Customers" },
];

function CounterDigitalAgency() {
    return (
        <div className="tmp-counterup-area tmp-section-gapTop">
            <div className="container">
                <div className="row mb--10">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">04</span>
                                    <span className="subtitle-text">Fun Facts</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Our Agency <span className="theme-gradient">in Numbers</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--0">
                    {counters.map((counter) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={counter.title}>
                            <div className="signle-fun-facts-one tmponhover">
                                <div className="icon">
                                    <img src={counter.icon} alt="fun-facts" />
                                </div>
                                <h2 className="title">
                                    <DigitalAgencyOdometer value={counter.value} />
                                    {counter.suffix}
                                </h2>
                                <span className="bototm">{counter.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CounterDigitalAgency;
