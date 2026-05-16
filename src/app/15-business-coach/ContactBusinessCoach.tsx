function ContactBusinessCoach() {
    return (
        <div className="contact-area-agency finance">
            <div className="container">
                <div className="row mb--40 mb_sm--0">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+3</span>
                                    <span className="subtitle-text">Contact Us</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Contact With Us.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="thumbnail invers-anime" data-aos="slide-right" data-aos-duration="800">
                            <img className="w-100 radius" loading="lazy" src="/assets/images/about/about-5.png" alt="About Images" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form className="contact-form-1 tmp-dynamic-form" action="#">
                            {[
                                ["coach-contact-name", "contact-name", "text", "Your Name"],
                                ["coach-contact-phone", "contact-phone", "text", "Phone Number"],
                                ["coach-contact-email", "contact-email", "email", "Your Email"],
                                ["coach-subject", "subject", "text", "Your Subject"],
                            ].map(([id, name, type, placeholder]) => (
                                <div className="form-group tmponhover" key={id}>
                                    <input type={type} name={name} id={id} placeholder={placeholder} />
                                </div>
                            ))}
                            <div className="form-group tmponhover">
                                <textarea name="contact-message" id="coach-contact-message" placeholder="Your Message" />
                            </div>
                            <div className="form-group tmponhover">
                                <button name="submit" type="submit" id="coach-submit" className="btn-default btn-large tmp-btn w-100">
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

export default ContactBusinessCoach;
