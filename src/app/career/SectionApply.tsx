function SectionApply() {
  return (
    <>
      <section className="tmp-apply-area tmp-section-gapBottom">

      <div className="tmp-section-title-border text-center">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">03</span>
      <span className="subtitle-text">Career Opportunity</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Find Open Positions and Apply</h2>
      </div>
      <div className="section-inner">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Manufacturing Operations</button>
      </li>
      <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Engineers</button>
      </li>
      <li className="nav-item" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Research & Development</button>
      </li>
      <li className="nav-item" role="presentation">
      <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">Sales & Marketing Professionals</button>
      </li>
      <li className="nav-item" role="presentation">
      <button className="nav-link" id="support-tab" data-bs-toggle="tab" data-bs-target="#support-tab-pane" type="button" role="tab" aria-controls="support-tab-pane" aria-selected="false">Customer Support</button>
      </li>
      </ul>
      </div></section>
    </>
  )
}

export default SectionApply
