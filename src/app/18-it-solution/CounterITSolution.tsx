import RealEstateOdometer from "../16-real-estate-consulting/RealEstateOdometer";

const counters = [
    { value: 199, suffix: "K", title: "Happy Clients.", delay: 0 },
    { value: 575, suffix: "+", title: "Employees", delay: 100 },
    { value: 69, suffix: "M", title: "Useful Programs", delay: 200 },
    { value: 500, suffix: "+", title: "Useful Programs", delay: 300 },
];

function CounterITSolution() {
    return (
        <div className="tmp-counterup-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+15000</span>
                                    <span className="subtitle-text">Trusted</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Happy customers.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--20 tmp_jump_animation-wrapper">
                    {counters.map((counter) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 tmp-jump__item" data-aos-delay={counter.delay} key={`${counter.title}-${counter.value}`}>
                            <div className="count-box counter-style-4 tmp-card text-center without-border tmponhover">
                                <div>
                                    <div className="count-number">
                                        <RealEstateOdometer value={counter.value} />
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

export default CounterITSolution;
