const members = [
    ["02.webp", "James Johnson", "HR Manager"],
    ["03.webp", "David Miller", "CEO Corpox"],
    ["04.webp", "William White", "Team Lead"],
    ["05.webp", "William White", "Senior developer"],
] as const;

function TeamGymFitness() {
    return (
        <div className="tmp-team-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Team Staff</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Team of Expert Coaches</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5 justify-content-center">
                    {members.map(([image, name, role]) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={`${image}-${role}`}>
                            <div className="team-wrapper5 tmponhover">
                                <div className="image-area">
                                    <a href="/team/benjamin-taylor">
                                        <img src={`/assets/images/team/${image}`} alt="" />
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

export default TeamGymFitness;
