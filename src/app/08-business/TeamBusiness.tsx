import Link from 'next/link'
const teamMembers = [
    { image: "/assets/images/team/team-04.jpg", name: "Sr Janen Sara", role: "Sr Product Designer" },
    { image: "/assets/images/team/team-05.jpg", name: "John Deon", role: "App Developer" },
    { image: "/assets/images/team/team-06.jpg", name: "Mark Henry", role: "Accounts Manager" },
    { image: "/assets/images/team/team-07.jpg", name: "Muskan Sarif", role: "Accounts Manager" },
];

const socials = [
    { icon: "feather-facebook", href: "https://www.facebook.com/" },
    { icon: "feather-twitter", href: "https://www.twitter.com" },
    { icon: "feather-instagram", href: "https://www.instagram.com/" },
];

function TeamBusiness() {
    return (
        <div className="tmp-team-area tmp-section-gapBottom overlyto-top">
            <div className="container">
                <div className="row g-5 mt--5">
                    {teamMembers.map((member, index) => (
                        <div
                            className="col-lg-3 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay={index * 100}
                            key={member.name}
                        >
                            <div className="tmp-team team-style-two">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={member.image} alt="Corporate Template" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">{member.name}</h2>
                                        <h6 className="subtitle color-body">{member.role}</h6>
                                        <ul className="social-icon social-default icon-naked justify-content-start">
                                            {socials.map((social, socialIndex) => (
                                                <li
                                                    data-aos="fade-up"
                                                    data-aos-duration="400"
                                                    data-aos-delay={200 + socialIndex * 100}
                                                    key={social.icon}
                                                >
                                                    <Link href={social.href}>
                                                        <i className={social.icon} />
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

export default TeamBusiness;
