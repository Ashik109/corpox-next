function SectionTabStyleOne() {
  return (
    <>
      <div className="tmp-tab-area tmp-section-gap">
      <div className="container">
      <div className="row mb--40">
      <div className="col-lg-12">
      <div className="section-title text-center">
      <h4 className="subtitle">You can Change Easily</h4>
      <h2 className="title w-600 tmp-title-split mb--20">Tab Style One</h2>
      </div>
      </div>
      </div>
      <div className="row g-5 align-items-center">
      <div className="col-lg-5">
      <img className="radius-small" src="/assets/images/about/about-1.jpg" alt="Corporate Template" />
      </div>
      <div className="col-lg-7 order-2 order-lg-1">
      <div className="tmp-default-tab">
      <ul className="nav nav-tabs tab-button" role="tablist">
      <li className="nav-item tabs__tab " role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Strategy</button>
      </li>
      <li className="nav-item tabs__tab " role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Reporting</button>
      </li>
      <li className="nav-item tabs__tab " role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Development</button>
      </li>
      </ul>
      <div className="tmp-tab-content tab-content">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa,
                                                  deleniti soluta minima minus asperiores doloribus enim vitae obcaecati
                                                  fuga assumenda laudantium nemo odio provident nulla exercitationem
                                                  tempore corrupti! Nemo.</p>
      <p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim
                                                  vitae obcaecati fuga assumenda laudantium nemo odio provident nulla
                                                  exercitationem tempore corrupti! Nemo.</p>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <p>Ipsum lorem dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa,
                                                  deleniti soluta minima minus asperiores doloribus enim vitae obcaecati
                                                  fuga assumenda laudantium nemo odio provident nulla exercitationem
                                                  tempore corrupti! Nemo.</p>
      <p>Ipsa Quibusdam, deleniti soluta minima minus asperiores doloribus enim
                                                  vitae obcaecati fuga assumenda laudantium nemo odio provident nulla
                                                  exercitationem tempore corrupti! Nemo.</p>
      </div>
      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <p>Exercitationem Ipsum lorem dolor sit amet consectetur, adipisicing elit.
                                                  Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim
                                                  vitae obcaecati fuga assumenda laudantium nemo odio provident nulla
                                                  tempore corrupti! Nemo.</p>
      <p>Ipsa Quibusdam, deleniti soluta minima minus asperiores doloribus enim
                                                  vitae obcaecati fuga assumenda laudantium nemo odio provident nulla
                                                  exercitationem tempore corrupti! Nemo.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionTabStyleOne
