import AgencyThirteenOdometer from "./AgencyThirteenOdometer";

const lookbooks = [
    ["avatar8.webp", "Lisa W.", "portion-md", 23, 15, "placed-right", "Their team is always available to answer my questions. I trust them completely with my business insurance."],
    ["avatar9.webp", "Katherine", "portion-lg", 45, 30, "placed-top", "Insurance Consulting made the process so simple. I finally feel secure with my home insurance!"],
    ["avatar10.webp", "Michael Burlie.", "portion-xm", 10, 40, "placed-top", "Their service is top-notch! I appreciate the personalized approach to my family's insurance needs."],
    ["avatar11.webp", "Emily Rose", "", 70, 54, "placed-top", "Thanks to their guidance, I found the perfect business insurance plan. Highly recommend!"],
    ["avatar12.webp", "Sarah Tery.", "portion-xl", 30, 73, "placed-top", "The team at Insurance Consulting transformed our coverage strategy. Their expertise was invaluable!"],
    ["avatar13.webp", "Katherine", "portion-sm", 82, 87, "placed-top", "Professional, knowledgeable, and reliable. They made navigating insurance easy for me."],
] as const;

function Rating() {
    return (
        <span className="tmp-fw-medium">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 15" fill="none">
                    <path
                        d="M5.52447 1.15102C5.67415 0.690369 6.32585 0.69037 6.47553 1.15103L7.45934 4.17889C7.52628 4.3849 7.71826 4.52438 7.93487 4.52438H11.1186C11.6029 4.52438 11.8043 5.14419 11.4124 5.42889L8.83679 7.30021C8.66155 7.42753 8.58822 7.65322 8.65516 7.85923L9.63897 10.8871C9.78864 11.3477 9.2614 11.7308 8.86955 11.4461L6.29389 9.57479C6.11865 9.44747 5.88135 9.44747 5.70611 9.57479L3.13045 11.4461C2.73859 11.7308 2.21136 11.3477 2.36103 10.8871L3.34484 7.85923C3.41178 7.65322 3.33845 7.42753 3.16321 7.30021L0.587553 5.42889C0.195696 5.14419 0.397084 4.52438 0.881446 4.52438H4.06513C4.28174 4.52438 4.47372 4.3849 4.54066 4.17889L5.52447 1.15102Z"
                        fill="#F7A51E"
                    />
                </svg>
            </span>
            4.9
        </span>
    );
}

function TestimonialAgencyThirteen() {
    return (
        <section className="tmp-section-gapTop position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tmp-section-title-border text-center">
                            <h4 className="subtitle tmp-title-split">Testimonials</h4>
                            <h2 className="title w-600 mb--20 tmp-title-split">Our customers success stories</h2>
                        </div>
                        <div className="tmp-section-title-border text-center" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                            <p className="b2 d-flex flex-wrap tmp-col-gap-20 justify-content-center map-wrapper-subtitle">
                                <span>August, 2025</span>
                                <span className="tmp-separator-vertical tmp-bg-primary-500" />
                                <span className="d-flex align-items-center">
                                    <span className="tmp-counter tmp-count tmp-counter-gradient tmp-gradient-text-4 tmp-fw-semibold mr--5">
                                        <AgencyThirteenOdometer value={20} />
                                        <span className="tmp-counter-suffix">k+</span>
                                    </span>
                                    Success People
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="tmp-testimonial-map-wrapper">
                    <div className="tmp-inner position-relative z-2">
                        <div className="tmp-testimonial-map-img">
                            <img src="/assets/images/testimonial/map.png" alt="World Map" />
                        </div>
                        {lookbooks.map(([image, name, portion, vertical, horizontal, placement, text]) => (
                            <div className={`tmp-lookbook-portion ${portion}`} data-tmp-position-vertical={vertical} data-tmp-position-horigental={horizontal} key={`${image}-${vertical}`}>
                                <div className="tmp-lookbook-thumb">
                                    <img src={`/assets/images/avatar/${image}`} alt="Thumbnail" />
                                </div>
                                <div className="tmp-lookbook-content-box-wrapper">
                                    <button className="tmp-lookbook-close-btn" type="button">
                                        <i className="fas fa-times" />
                                    </button>
                                    <div className={`tmp-lookbook-content-box ${placement}`}>
                                        <div className="tmp-message-shape" />
                                        <div className="tmp-inner">
                                            <p className="b2 tmp-text-heading mb--20">&quot;{text}&quot;</p>
                                            <div className="tmp-separator tmp-bg-primary-opacity-400 mb--10" />
                                            <div className="b4 d-flex justify-content-between">
                                                <span>
                                                    <span className="tmp-fw-medium tmp-text-heading">{name}</span> - UI/UX Designer
                                                </span>
                                                <Rating />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="tmp-round-blur-shape tmp-round-blur-top-left d-none d-lg-block">
                        <div className="blur-shape-inner" />
                    </div>
                    <div className="tmp-testimonial-bottom-area pb--0">
                        <h4 className="tmp-counter tmp-count tmp-w-fit mx-auto mb--0">
                            <AgencyThirteenOdometer value={216000} />
                            <span className="counter-suffix">+</span>
                        </h4>
                        <p className="mb--5 mt--5">Worldwide Customers Feedback</p>
                        <p className="b3 mb--0 tmp-text-heading tmp-fw-medium">Since 1989</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialAgencyThirteen;
