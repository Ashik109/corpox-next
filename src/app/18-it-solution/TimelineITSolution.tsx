const steps = [
    ["Knowledge", "Present all available features in Essentials."],
    ["Working", "All Feature available features in Essentials."],
    ["Solution", "Popular Feature available features in Essentials."],
    ["Process", "Latest Feature available features in Essentials."],
] as const;

function TimelineITSolution() {
    return (
        <div className="tmp-timeline-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+3</span>
                                    <span className="subtitle-text">Working Process</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">How We Do It?</h2>
                            <p className="b1 tmp-title-split">We make your spending stress-free for you to have the perfect control.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt--10">
                    <div className="timeline-style-two bg-color-blackest">
                        <div className="row row--0">
                            {steps.map(([title, text]) => (
                                <div className="col-lg-3 col-md-3 tmp-timeline-single no-gradient" key={title}>
                                    <div className="tmp-timeline">
                                        <h6 className="title" data-aos="slide-up" data-aos-delay="200" data-aos-duration="700">
                                            {title}
                                        </h6>
                                        <div className="progress-line">
                                            <div className="line-inner" />
                                        </div>
                                        <div className="progress-dot">
                                            <div className="dot-level">
                                                <div className="dot-inner" />
                                            </div>
                                        </div>
                                        <p className="description" data-aos="slide-up" data-aos-delay="300" data-aos-duration="700">
                                            {text}
                                        </p>
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

export default TimelineITSolution;
