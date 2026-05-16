import FinancialOdometer from "./FinancialOdometer";

const counters = [
    { value: 1199, suffix: "K", title: "Happy Clients." },
    { value: 1200, suffix: "+", title: "Projects Completed" },
    { value: 130, suffix: "+", title: "Dedicated Staff" },
    { value: 70, suffix: "+", title: "Awards Achieved" },
];

function CounterFinancial() {
    return (
        <div className="tmp-counterup-area tmp-section-gapBottom">
            <div className="container">
                <div className="row mb--25">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle tmp-title-split">Ustomizable counters</h4>
                            <h2 className="title w-600 tmp-title-split">Increasing Success With Us</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    {counters.map((counter) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={counter.title}>
                            <div className="count-box counter-style-2 border-style small-radious text-center">
                                <div>
                                    <div className="count-number tmponhover">
                                        <div className="inner">
                                            <FinancialOdometer value={counter.value} />
                                            {counter.suffix}
                                        </div>
                                    </div>
                                </div>
                                <h5 className="title">{counter.title}</h5>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CounterFinancial;
