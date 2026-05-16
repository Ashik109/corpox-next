function ContactConstruction() {
    return (
        <div className="contact-area-agency tmp-section-gap" id="contactus">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10" data-aos="fade-up" data-aos-duration="700">
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
                        <div className="thumbnail invers-anime" data-aos="fade-right" data-aos-duration="800">
                            <img className="w-100 radius" loading="lazy" src="/assets/images/about/35.webp" alt="Construction appointment" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className="contact-form-1 tmp-dynamic-form" action="#">
                            <div className="form-group tmponhover">
                                <input type="text" name="contact-name" placeholder="Your Name" />
                            </div>
                            <div className="form-group tmponhover">
                                <input type="text" name="contact-phone" placeholder="Phone Number" />
                            </div>
                            <div className="form-group tmponhover">
                                <input type="email" name="contact-email" placeholder="Your Email" />
                            </div>
                            <div className="form-group tmponhover">
                                <input type="text" name="subject" placeholder="Your Subject" />
                            </div>
                            <div className="form-group tmponhover">
                                <textarea name="contact-message" placeholder="Your Message" />
                            </div>
                            <div className="form-group tmponhover">
                                <button className="btn-default btn-large tmp-btn w-100" type="submit">
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

export default ContactConstruction;
