function SectionAppoinment() {
  return (
    <>
      <div className="inv-appoinment-area-start tmp-section-gapBottom">
      <div className="container">
      <div className="row g-5">
      <div className="col-lg-5">
      <div className="aapoiment-left-area-thumbnail">
      <img src="/assets/images/appoinment/01.webp" alt="appoinment" />
      </div>
      </div>
      <div className="col-lg-7">
      <form className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form" id="contact-form" method="POST" action="mail.php">
      <div className="form-group-wrapper">
      <div className="form-group tmponhover">
      <input type="text" name="contact-name" id="contact-name" placeholder="Your Name" required />
      </div>
      <div className="form-group tmponhover">
      <input type="text" name="contact-phone" id="contact-phone" placeholder="Phone Number" />
      </div>
      </div>
      <div className="form-group tmponhover">
      <input type="email" id="contact-email" name="contact-email" placeholder="Your Email" required />
      </div>
      <div className="form-group tmponhover">
      <input type="text" id="subject" name="subject" placeholder="Your Subject" />
      </div>
      <div className="form-group tmponhover">
      <textarea name="contact-message" id="contact-message" placeholder="Your Message"></textarea>
      </div>
      <div className="form-group">
      <button name="submit" type="submit" id="submit" className="btn-default btn-large tmp-btn" style={{ width: '100%' }}>
      <span>Submit Now</span>
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
