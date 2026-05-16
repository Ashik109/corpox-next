function ContactSolar() {
    return (
        <div className="contact-area-agency tmp-section-gap">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">03</span>
                                    <span className="subtitle-text">Appoinment</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Place An Appoinment.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="thumbnail invers-anime" data-aos="slide-right" data-aos-duration="800">
                            <img className="w-100 radius" loading="lazy" src="/assets/images/about/24.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className="contact-form-1 tmp-dynamic-form" action="#">
                            <div className="form-group tmponhover">
                                <input type="text" name="contact-name" id="solar-contact-name" placeholder="Your Name" />
                            </div>
                            <div className="form-group tmponhover">
                                <input type="text" name="contact-phone" id="solar-contact-phone" placeholder="Phone Number" />
                            </div>
                            <div className="form-group tmponhover">
                                <input type="email" id="solar-contact-email" name="contact-email" placeholder="Your Email" />
                            </div>
                            <div className="form-group tmponhover">
                                <input type="text" id="solar-subject" name="subject" placeholder="Your Subject" />
                            </div>
                            <div className="form-group tmponhover">
                                <textarea name="contact-message" id="solar-contact-message" placeholder="Your Message" />
                            </div>
                            <div className="form-group tmponhover">
                                <button name="submit" type="submit" id="solar-submit" className="btn-default btn-large tmp-btn w-100">
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

export default ContactSolar;
