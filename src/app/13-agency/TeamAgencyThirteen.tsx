const team = [
    ["team-04.jpg", "Sr Janen Sara", "Sr Product Designer"],
    ["team-05.jpg", "John Deon", "App Developer"],
    ["team-06.jpg", "Mark Henry", "Accounts Manager"],
    ["team-07.jpg", "Muskan Sarif", "Accounts Manager"],
];

function TeamAgencyThirteen() {
    return (
        <div className="tmp-team-area tmp-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Talents</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Some of Our Talents.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5">
                    {team.map(([image, name, role], index) => (
                        <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 100} key={name}>
                            <div className="tmp-team team-style-two">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={`/assets/images/team/${image}`} alt="Corporate Template" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">{name}</h2>
                                        <h6 className="subtitle color-body">{role}</h6>
                                        <ul className="social-icon social-default icon-naked justify-content-start">
                                            {["feather-facebook", "feather-twitter", "feather-instagram"].map((icon, socialIndex) => (
                                                <li data-aos="fade-up" data-aos-duration="400" data-aos-delay={200 + socialIndex * 100} key={icon}>
                                                    <a href="#">
                                                        <i className={icon} />
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

export default TeamAgencyThirteen;
