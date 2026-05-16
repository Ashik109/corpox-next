'use client'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

function ContactThree() {
    useEffect(() => {
            AOS.init({
                duration: 800,
                once: true
            })
        }, [])
    return (
        <>
            {/* appoinment area start */}
            <div className="inv-appoinment-area-start tmp-section-gapBottom">
                <div className="container">
                    <div className="row mb--20">
                        <div className="col-lg-12">
                            <div
                                className="tmp-section-title-border-none text-center"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay="100"
                            >
                                <div className="section-title text-center mb--20">
                                    <h4 className="subtitle color-secondary">Appoinment</h4>
                                    <h2 className="title w-600 tmp-title-split">
                                        Book An Appoinment
                                    </h2>
                                </div>
                                <p className="description b1 tmp-title-split-p">
                                    Easily schedule your appointment with just a few clicks. Our team
                                    is <br /> always ready to assist you at your preferred time.
                                </p>
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
                            <form
                                className="contact-form-1 appoinment-form-wrapper tmponhover tmp-dynamic-form"
                                id="contact-form"
                                method="POST"
                                action="mail.php"
                            >
                                <div className="form-group-wrapper">
                                    <div className="form-group tmponhover">
                                        <input
                                            type="text"
                                            name="contact-name"
                                            id="contact-name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group tmponhover">
                                        <input
                                            type="tel"
                                            name="contact-phone"
                                            id="contact-phone"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="form-group tmponhover">
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="contact-email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="form-group tmponhover">
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Your Subject"
                                    />
                                </div>
                                <div className="form-group tmponhover">
                                    <textarea
                                        name="contact-message"
                                        id="contact-message"
                                        placeholder="Your Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group tmponhover">
                                    <button
                                        name="submit"
                                        type="submit"
                                        id="submit"
                                        className="btn-default btn-large tmp-btn"
                                        style={{ width: "100%" }}
                                    >
                                        <span>Submit Now</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* appoinment area end */}
        </>

    )
}

export default ContactThree