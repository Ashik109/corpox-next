import CountUpAiAgency from "../24-ai-agency/CountUpAiAgency";

const counters = [
    { value: 199, suffix: "K", title: "Happy Clients." },
    { value: 575, suffix: "+", title: "Employees" },
    { value: 69, suffix: "M", title: "Useful Programs" },
    { value: 500, suffix: "+", title: "Useful Programs" },
] as const;

function CounterConstruction() {
    return (
        <div className="tmp-counterup-area tmp-section-gapTop" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10" data-aos="fade-up" data-aos-duration="700">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+15000</span>
                                    <span className="subtitle-text">Trusted</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Our Fun Facts</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    {counters.map((counter, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 100} key={counter.title + counter.value}>
                            <div className="count-box counter-style-4 tmp-card text-center without-border tmponhover">
                                <div>
                                    <div className="count-number">
                                        <CountUpAiAgency value={counter.value} />
                                        {counter.suffix}
                                    </div>
                                </div>
                                <h5 className="counter-title">{counter.title}</h5>
                                <div className="left-hover-counter" />
                                <div className="right-hover-counter" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CounterConstruction;
