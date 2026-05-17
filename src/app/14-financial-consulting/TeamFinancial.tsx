import Link from 'next/link'
const members = [
    { image: "team-04.jpg", name: "Monsur Mia", role: "Sr Product Designer" },
    { image: "team-05.jpg", name: "Mark Jokar", role: "CEO Officer" },
    { image: "team-06.jpg", name: "Sr Janen Sara", role: "Sr. Designer" },
    { image: "team-06.jpg", name: "Sr Janen Sara", role: "Jr Designer" },
];

function TeamFinancial() {
    return (
        <div className="tmp-team-area tmp-section-gap">
            <div className="container">
                <div className="row mb--50">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle tmp-title-split">Talents</h4>
                            <h2 className="title w-600 tmp-title-split">Some of Our Talents.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    {members.map((member, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={`${member.name}-${member.role}`}>
                            <div className="tmp-team team-style-default style-two tmponhover">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={`/assets/images/team/${member.image}`} alt="Corporate Template" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">{member.name}</h2>
                                        <h6 className="subtitle">{member.role}</h6>
                                        <span className="team-form">
                                            <i className="feather-map-pin" />
                                            <span className="location">CO Miego, AD,USA</span>
                                        </span>
                                        <ul className="social-icon social-default icon-naked mt--5">
                                            {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                                                <li key={`${icon}-${index}`}>
                                                    <Link href={`https://www.${icon}.com/`}>
                                                        <i className={`feather-${icon}`} />
                                                    </Link>
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

export default TeamFinancial;
