function AppointmentFinancial() {
    return (
        <div className="contact-area-agency finance tmp-section-gapBottom">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h4 className="subtitle tmp-title-split">Appoinment</h4>
                            <h2 className="title w-600 mb--20 tmp-title-split">Place An Appoinment.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-5 mt_md--30 mt_sm--30">
                        <div className="aapoiment-left-area-thumbnail">
                            <img src="/assets/images/appoinment/01.webp" alt="appoinment" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form" action="#">
                            <div className="form-group-wrapper">
                                <div className="form-group">
                                    <input type="text" name="contact-name" id="financial-contact-name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="contact-phone" id="financial-contact-phone" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" id="financial-contact-email" name="contact-email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="financial-subject" name="subject" placeholder="Your Subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="contact-message" id="financial-contact-message" placeholder="Your Message" />
                            </div>
                            <div className="form-group">
                                <button name="submit" type="submit" id="financial-submit" className="btn-default btn-large tmp-btn" style={{ width: "100%" }}>
                                    <span>Submit Now</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentFinancial;
