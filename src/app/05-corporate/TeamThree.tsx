import React from "react";

const SOCIAL_LINKS = [
  { name: "Facebook", icon: "feather-facebook", href: "https://www.facebook.com/" },
  { name: "Twitter", icon: "feather-twitter", href: "https://www.twitter.com" },
  { name: "Instagram", icon: "feather-instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", icon: "feather-linkedin", href: "https://www.linkedin.com/" },
];

const teamMembers = [
  {
    name: "Monsur Mia",
    role: "Sr Product Designer",
    location: "Colorado, USA",
    image: "/assets/images/team/team-04.jpg",
  },
  {
    name: "Mark Jokar",
    role: "CEO",
    location: "Austin, USA",
    image: "/assets/images/team/team-05.jpg",
  },
  {
    name: "Sr Janen Sara",
    role: "Sr. Designer",
    location: "Chicago, USA",
    image: "/assets/images/team/team-06.jpg",
  },
  {
    name: "Nina Lara",
    role: "Jr Designer",
    location: "Seattle, USA",
    image: "/assets/images/team/team-07.jpg",
  },
];

function TeamThree() {
  return (
    <section className="tmp-team-area tmp-section-gap" aria-labelledby="team-three-title">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4 className="subtitle color-secondary">Amazing Team</h4>
              <h2 id="team-three-title" className="title w-600 tmp-title-split">
                Some of Our Talents
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {teamMembers.map((member) => (
            <div key={member.name} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article className="tmp-team team-style-default style-two tmponhover">
                <div className="inner">
                  <div className="thumbnail">
                    <img src={member.image} alt={`${member.name} portrait`} loading="lazy" />
                  </div>
                  <div className="content">
                    <h3 className="title">{member.name}</h3>
                    <h6 className="subtitle">{member.role}</h6>
                    <span className="team-form">
                      <i className="feather-map-pin" aria-hidden="true" />
                      <span className="location">{member.location}</span>
                    </span>
                    <ul className="social-icon social-default icon-naked mt--5">
                      {SOCIAL_LINKS.map((social) => (
                        <li key={social.name}>
                          <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamThree;