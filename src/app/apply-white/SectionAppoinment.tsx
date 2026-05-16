function SectionAppoinment() {
  return (
    <>
      <div className="inv-appoinment-area-start tmp-section-gapBottom">
      <div className="container">
      <div className="row mb--20">
      <div className="col-lg-12">
      <div className="tmp-section-title-border text-center" data-aos="slide-up" data-aos-duration="700" data-aos-delay="100">
      <div className="pres-line-separator-wrapper text-center mb--10">
      <div className="line-separator line-left"></div>
      <span className="subtitle">
      <span className="number">03</span>
      <span className="subtitle-text">Apply To Join Our Team</span>
      </span>
      <div className="line-separator line-right"></div>
      </div>
      <h2 className="title w-700 tmp-title-split">Apply To Join Our Team</h2>
      <p className="description b1 tmp-title-split-p">Easily schedule your appointment with just a few clicks. Our team is <br /> always ready to assist you at your preferred time.</p>
      </div>
      </div>
      </div>
      <div className="row g-5">
      <div className="col-lg-5 mt_md--30 mt_sm--30">
      <div className="aapoiment-left-area-thumbnail">
      <img src="/assets/images/appoinment/02.webp" alt="appoinment" />
      </div>
      </div>
      <div className="col-lg-7">
      <form className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form" id="contact-form" method="POST" action="mail.php">
      <div className="form-group-wrapper">
      <div className="form-group tmponhover">
      <input type="text" name="contact-name" id="contact-name" placeholder="Your Name" required />
      </div>
      <div className="form-group tmponhover">
      <input type="tel" name="contact-phone" id="contact-phone" placeholder="Phone Number" />
      </div>
      </div>
      <div className="form-group-wrapper">
      <div className="form-group tmponhover">
      <input type="email" id="contact-email" name="contact-email" placeholder="Your Email" required />
      </div>
      <div className="form-group tmponhover">
      <input type="text" id="subject" name="subject" placeholder="Position" />
      </div>
      </div>
      <div className="form-group tmponhover">
      <div className="attach">
      <label className="upload-btn">Attach Or Upload File
                                              <input type="file" />
      </label>
      </div>
      </div>
      <div className="form-group tmponhover">
      <textarea name="contact-message" id="contact-message" placeholder="Your Message"></textarea>
      </div>
      <div className="form-group tmponhover">
      <button name="submit" type="submit" id="submit" className="btn-default btn-large tmp-btn" style={{ width: '100%' }}>
      <span>Apply Now</span>
      </button>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SectionAppoinment
