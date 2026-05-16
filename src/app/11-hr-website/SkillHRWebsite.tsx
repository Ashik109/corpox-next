const features = [
    ["24/7 Support", "Lorem ipsum dolor consectetur adipiscing."],
    ["Secure Payments", "Do eiusmod tempor incididunt labore."],
    ["Daily Updates", "Daily Updates tempor incididunt labore."],
    ["Market Research", "Market Research tempor incididunt labore."],
];

const skills = [
    ["Web Development", 90],
    ["App Development", 95],
    ["Application Development", 45],
    ["Web Design", 45],
];

function SkillHRWebsite() {
    return (
        <div className="about-area about-style-4 tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+4</span>
                                    <span className="subtitle-text">Skill</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-splitt">
                                Our Working <span className="theme-gradient"> Skill & Service.</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5">
                    <div className="col-lg-6">
                        <div className="working-experience-left">
                            <div className="content">
                                <h3 className="title w-700 mb--20 tmp-title-split">What I Do?</h3>
                                <p className="b1">The full service we are offering is specifically designed to meet your business needs and projects.</p>
                            </div>
                            <ul className="feature-list row g-5">
                                {features.map(([title, text]) => (
                                    <li className="col-lg-6 col-md-6 col-sm-6 col-12" key={title}>
                                        <div className="icon">
                                            <i className="feather-check" />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">{title}</h4>
                                            <p className="text">{text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="view-more-project">
                                <a className="btn-read-more" href="#">
                                    <span>
                                        Download My CV <i className="feather-arrow-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tmp-progress-style-1">
                            {skills.map(([title, value]) => (
                                <div className="single-progress" key={title}>
                                    <h6 className="title">{title}</h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar" data-aos="fade-right"
                                            role="progressbar"
                                            style={{ width: `${value}%` }}
                                            aria-valuenow={Number(value)}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                        <span className="progress-number">{value}%</span>
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

export default SkillHRWebsite;
