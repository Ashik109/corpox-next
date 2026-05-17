import Link from 'next/link'
const members = [
    ["team-04.jpg", "James Johnson", "HR Manager"],
    ["team-05.jpg", "David Miller", "CEO Corpox"],
    ["team-06.jpg", "William White", "Team Lead"],
    ["team-07.jpg", "William White", "Senior developer"],
] as const;

function TeamITSolution() {
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
                                    <span className="subtitle-text">Talents</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Some of Our Talents.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5 justify-content-center">
                    {members.map(([image, name, role]) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={`${image}-${role}`}>
                            <div className="team-wrapper5 tmponhover">
                                <div className="image-area">
                                    <Link href="/team/benjamin-taylor">
                                        <img src={`/assets/images/team/${image}`} alt="" />
                                    </Link>
                                </div>
                                <div className="content-area">
                                    <div className="left">
                                        <h6 className="title">
                                            <Link href="/team/monsur-mia">{name}</Link>
                                        </h6>
                                        <p className="designation">{role}</p>
                                    </div>
                                    <Link href="#" className="share">
                                        <i className="feather-share-2" />
                                    </Link>
                                </div>
                                <div className="social-wrapper">
                                    <ul>
                                        {["facebook", "twitter", "youtube"].map((icon) => (
                                            <li key={icon}>
                                                <Link href="#">
                                                    <i className={`feather-${icon}`} />
                                                </Link>
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

export default TeamITSolution;
