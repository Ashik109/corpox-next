function SectionTypography() {
  return (
    <>
      <div className="typography-area-start tmp-section-gapBottom">
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <div id="formElements" className="tmp-elements-area tmponhover typography-elements bg-card">
      <div className="wrapper">
      <div className="section-title">
      <h4 className="tmp-title-style-3">Form Elements</h4>
      </div>
      <div className="row g-5">
      <div className="col-lg-6">
      <h5>Input</h5>
      <div className="form-group">
      <input name="con_name" type="text" />
      </div>
      </div>
      <div className="col-lg-6">
      <h5>Password</h5>
      <div className="form-group">
      <input name="con_password" type="password" />
      </div>
      </div>
      <div className="col-lg-12">
      <h5>Textarea</h5>
      <div className="form-group">
      <textarea></textarea>
      </div>
      </div>
      <div className="col-lg-6">
      <h5>Checkbox</h5>
      <p className="tmp-checkbox-wrapper mb--5">
      <input id="tmp-checkbox-1" name="tmp-checkbox-1" type="checkbox" value="yes" />
      <label htmlFor="tmp-checkbox-1">Option One</label>
      </p>
      <p className="tmp-checkbox-wrapper">
      <input id="tmp-checkbox-2" name="tmp-checkbox-2" type="checkbox" value="yes" />
      <label htmlFor="tmp-checkbox-2">Option Two</label>
      </p>
      </div>
      <div className="col-lg-6">
      <h5>Radio</h5>
      <div className="tmp-form-check">
      <input className="form-check-input" type="radio" name="tmp-radio" id="tmp-radio-1" />
      <label className="form-check-label" htmlFor="tmp-radio-1"> Option One</label>
      </div>
      <div className="tmp-form-check">
      <input className="form-check-input" type="radio" name="tmp-radio" id="tmp-radio-2" />
      <label className="form-check-label" htmlFor="tmp-radio-2"> Option Two</label>
      </div>
      </div>
      <div className="col-lg-6">
      <h5>Disabled Checkbox</h5>
      <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
      <label className="form-check-label" htmlFor="flexCheckDisabled">
                                                      Disabled checkbox
                                                  </label>
      </div>
      </div>
      <div className="col-lg-6">
      <h5>Disabled Radio</h5>
      <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
      <label className="form-check-label" htmlFor="flexRadioDisabled">
                                                      Disabled radio
                                                  </label>
      </div>
      <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled />
      <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                                                      Disabled checked radio
                                                  </label>
      </div>
      </div>
      <div className="col-lg-6">
      <h5>Default switch checkbox input</h5>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
      </div>
      <div className="col-lg-6">
      <h5>Select</h5>
      <div className="tmp-modern-select bg-transparent height-45">
      <select className="w-100">
      <option>Barisal</option>
      <option>Dhaka</option>
      <option>Khulna</option>
      <option>Comilla</option>
      <option>Chittagong</option>
      </select>
      </div>
      </div>
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

export default SectionTypography
