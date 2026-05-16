const members = [
    { image: "team-04.jpg", name: "Sr Janen Sara", role: "Sr Product Designer", delay: 0 },
    { image: "team-05.jpg", name: "John Deon", role: "App Developer", delay: 100 },
    { image: "team-06.jpg", name: "Mark Henry", role: "Accounts Manager", delay: 200 },
    { image: "team-07.jpg", name: "Muskan Sarif", role: "Accounts Manager", delay: 300 },
];

function TeamBusinessCoach() {
    return (
        <div className="tmp-team-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+3</span>
                                    <span className="subtitle-text">Talents</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Some of Our Talents</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5">
                    {members.map((member) => (
                        <div className="col-lg-3 col-md-6 col-12" data-aos="slide-up" data-aos-delay={member.delay} data-aos-duration="700" key={member.name}>
                            <div className="tmp-team team-style-two">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={`/assets/images/team/${member.image}`} alt="Corporate Template" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">{member.name}</h2>
                                        <h6 className="subtitle color-body">{member.role}</h6>
                                        <ul className="social-icon social-default icon-naked justify-content-start">
                                            {["facebook", "twitter", "instagram"].map((icon, index) => (
                                                <li data-aos="slide-up" data-aos-delay={200 + index * 100} data-aos-duration="400" key={icon}>
                                                    <a href={`https://www.${icon}.com/`}>
                                                        <i className={`feather-${icon}`} />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamBusinessCoach;
