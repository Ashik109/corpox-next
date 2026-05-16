'use client'
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

function ContactTwo() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        })
    }, [])

    return (
        <>
            {/* tmp contact area start */}
            <div className="contact-area-agency tmp-section-gapBottom">
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
                                <h2 className="title w-700 tmp-title-split">
                                    Place An Appoinment.
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">

                        {/* image */}
                        <div className="col-lg-5">
                            <div
                                className="thumbnail invers-anime"
                                data-aos="fade-right"
                                data-aos-duration="800"
                            >
                                <img
                                    className="w-100 radius"
                                    loading="lazy"
                                    src="/assets/images/about/about-5.png"
                                    alt="About Images"
                                />
                            </div>
                        </div>

                        {/* form */}
                        <div className="col-lg-7">
                            <form
                                className="contact-form-1 tmp-dynamic-form"
                                id="contact-form"
                                method="POST"
                                action="mail.php"
                                data-aos="fade-left"
                                data-aos-duration="800"
                            >
                                <div className="form-group tmponhover">
                                    <input
                                        type="text"
                                        name="contact-name"
                                        id="contact-name"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group tmponhover">
                                    <input
                                        type="text"
                                        name="contact-phone"
                                        id="contact-phone"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                <div className="form-group tmponhover">
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="contact-email"
                                        placeholder="Your Email"
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
                                    />
                                </div>

                                <div className="form-group tmponhover">
                                    <button
                                        name="submit"
                                        type="submit"
                                        id="submit"
                                        className="btn-default btn-large tmp-btn w-100"
                                    >
                                        <span>Submit Now</span>
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* tmp contact area end */}
        </>
    )
}

export default ContactTwo