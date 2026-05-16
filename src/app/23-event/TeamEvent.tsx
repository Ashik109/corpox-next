const speakers = [
    ["team-04.jpg", "James Johnson", "Marketing Director"],
    ["team-05.jpg", "David Miller", "Research Scientist"],
    ["team-06.jpg", "William White", "Team Lead"],
    ["team-07.jpg", "William White", "Senior developer"],
] as const;

function TeamEvent() {
    return (
        <div className="tmp-team-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Our Speakers</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Introducing the expert speakers <br /> joining our event
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5 justify-content-center">
                    {speakers.map(([image, name, role]) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={`${image}-${role}`}>
                            <div className="team-wrapper5 tmponhover">
                                <div className="image-area">
                                    <a href="/team/benjamin-taylor">
                                        <img src={`/assets/images/team/${image}`} alt={name} />
                                    </a>
                                </div>
                                <div className="content-area">
                                    <div className="left">
                                        <h6 className="title">
                                            <a href="/team/monsur-mia">{name}</a>
                                        </h6>
                                        <p className="designation">{role}</p>
                                    </div>
                                    <a href="#" className="share">
                                        <i className="feather-share-2" />
                                    </a>
                                </div>
                                <div className="social-wrapper">
                                    <ul>
                                        {["facebook", "twitter", "youtube"].map((icon) => (
                                            <li key={icon}>
                                                <a href="#">
                                                    <i className={`feather-${icon}`} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamEvent;
