import Link from 'next/link'
import type { TeamMember } from '../../data/teamMembers'
import { teamMembers } from '../../data/teamMembers'

type Props = {
  member: TeamMember
  detailRoute: string
}

export default function TeamDetailContent({ member, detailRoute }: Props) {
  return (
    <div className="main-content">
      <div className="tmp-team-area tmp-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pr--60 pr_md--0 pr_sm--15">
              <div className="image-area-large-team-details tmponhover">
                <img src={member.image} alt={member.name} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-sticky-top-120">
                <div className="team-content-area">
                  <h2 className="title">{member.name}</h2>
                  <h6 className="designation">{member.designation}</h6>
                  <p className="desc">{member.shortBio}</p>
                  <ul className="team-content-quick-contact">
                    <li>
                      <p className="tag">Phone : </p>
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a>
                    </li>
                    <li>
                      <p className="tag">Email : </p>
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </li>
                    <li>
                      <p className="tag">Experience : </p>
                      {member.experience}
                    </li>
                  </ul>
                  <ul className="social-icon social-default justify-content-start">
                    <li><a href="https://www.facebook.com/"><i className="feather-facebook" /></a></li>
                    <li><a href="https://www.twitter.com"><i className="feather-twitter" /></a></li>
                    <li><a href="https://www.instagram.com/"><i className="feather-instagram" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="feather-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="team-about-area mt--30">
                  <h3 className="title">About {member.name}</h3>
                  {member.aboutParagraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
                <div className="team-details-bottom-area">
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <div className="skill-area">
                        <h3 className="title">Professional skills</h3>
                        <p>{member.skillsIntro}</p>
                        <div className="progress-bar-area">
                          {member.skills.map((skill) => (
                            <div className="single-progress" key={skill.name}>
                              <div className="top">
                                <span className="name">{skill.name}</span>
                                <span className="digit">{skill.percent}%</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  role="progressbar"
                                  style={{ width: `${skill.percent}%` }}
                                  aria-valuenow={skill.percent}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="award-area mt--30">
                        <h3 className="title">Awards & Honor</h3>
                        <p>{member.awardsIntro}</p>
                        <ul className="awards">
                          {member.awards.map((award) => (
                            <li key={award.title}>
                              <span><img src={award.icon} alt="" /></span>
                              <h6>{award.title}</h6>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--60">
            <div className="col-lg-12">
              <h4 className="title w-600 text-center mb--40">More Team Members</h4>
              <div className="row g-4">
                {teamMembers.filter((m) => m.slug !== member.slug).map((m) => (
                  <div className="col-lg-3 col-md-6" key={m.slug}>
                    <div className="tmp-team team-style-default style-two tmponhover">
                      <div className="inner">
                        <div className="thumbnail">
                          <Link href={`${detailRoute}/${m.slug}`}>
                            <img src={m.image} alt={m.name} />
                          </Link>
                        </div>
                        <div className="content">
                          <h2 className="title"><Link href={`${detailRoute}/${m.slug}`}>{m.name}</Link></h2>
                          <h6 className="subtitle">{m.designation}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
