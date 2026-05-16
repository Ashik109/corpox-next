import AgencyThirteenOdometer from "./AgencyThirteenOdometer";

const counters = [
    ["01.svg", 1200, "+", "Project Done"],
    ["02.svg", 99, "%", "Business Solution"],
    ["03.svg", 18, "M", "Global Customers"],
] as const;

function CounterAgencyThirteen() {
    return (
        <div className="tmp-counterup-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+2000</span>
                                    <span className="subtitle-text">Awesome Clients</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Our Agency in Numbers</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="row g-5 mt--0">
                            {counters.map(([icon, value, suffix, label]) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={label}>
                                    <div className="signle-fun-facts-one tmponhover">
                                        <div className="icon">
                                            <img src={`/assets/images/fun-facts/${icon}`} alt="fun-facts" />
                                        </div>
                                        <h2 className="title">
                                            <AgencyThirteenOdometer value={value} />
                                            {suffix}
                                        </h2>
                                        <span className="bototm">{label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterAgencyThirteen;
