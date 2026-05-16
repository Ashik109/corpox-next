import Link from 'next/link'

const teamMembers = [
  { name: 'James Johnson', role: 'HR Manager', image: 'team-04.jpg' },
  { name: 'David Miller', role: 'CEO Corpox', image: 'team-05.jpg' },
  { name: 'William White', role: 'Team Lead', image: 'team-06.jpg' },
  { name: 'William White', role: 'Senior developer', image: 'team-07.jpg' },
]

const socialLinks = ['feather-facebook', 'feather-twitter', 'feather-youtube']

function AboutTeam() {
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
          {teamMembers.map((member) => (
            <div key={`${member.name}-${member.role}`} className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-wrapper5 tmponhover">
                <div className="image-area">
                  <Link href="/team/benjamin-taylor">
                    <img src={`/assets/images/team/${member.image}`} alt={member.name} />
                  </Link>
                </div>
                <div className="content-area">
                  <div className="left">
                    <h6 className="title">
                      <Link href="/team/monsur-mia">{member.name}</Link>
                    </h6>
                    <p className="designation">{member.role}</p>
                  </div>
                  <a href="#" className="share"><i className="feather-share-2" /></a>
                </div>
                <div className="social-wrapper">
                  <ul>
                    {socialLinks.map((icon) => (
                      <li key={icon}>
                        <a href="#"><i className={icon} /></a>
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
  )
}

export default AboutTeam
