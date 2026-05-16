function AppointmentGymFitness() {
    return (
        <div className="inv-appoinment-area-start tmp-section-gapBottom">
            <div className="container">
                <div className="row mb--20">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center" data-aos="slide-up" data-aos-delay="100" data-aos-duration="700">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Appoinment</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Book An Appoinment</h2>
                            <p className="description b1 tmp-title-split-p">
                                Easily schedule your appointment with just a few clicks. Our team is <br /> always ready to assist you at your preferred time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-5 mt_md--30 mt_sm--30">
                        <div className="aapoiment-left-area-thumbnail">
                            <img src="/assets/images/appoinment/03.webp" alt="appoinment" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form" action="#">
                            <div className="form-group-wrapper">
                                <div className="form-group">
                                    <input type="text" name="contact-name" id="gym-contact-name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="contact-phone" id="gym-contact-phone" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" id="gym-contact-email" name="contact-email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="gym-subject" name="subject" placeholder="Your Subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="contact-message" id="gym-contact-message" placeholder="Your Message" />
                            </div>
                            <div className="form-group">
                                <button name="submit" type="submit" id="gym-submit" className="btn-default btn-large tmp-btn w-100">
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

export default AppointmentGymFitness;
