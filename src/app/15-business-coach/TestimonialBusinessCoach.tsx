const testimonials = [
    {
        image: "testimonial-01.jpg",
        name: "Sr Janen Sara",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus eum consequuntur pariatur laudantium odit.",
        delay: 0,
    },
    {
        image: "testimonial-02.jpg",
        name: "Mr. Jakob",
        text: "There ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus eum consequuntur pariatur laudantium odit.",
        delay: 100,
    },
    {
        image: "testimonial-03.jpg",
        name: "Mr. John Kabir",
        text: "Corpox ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus eum consequuntur pariatur laudantium odit.",
        delay: 200,
    },
];

function TestimonialBusinessCoach() {
    return (
        <div className="tmp-testimonial-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">+3</span>
                                    <span className="subtitle-text">Client Feedback</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">Client Feedback.</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--5">
                    {testimonials.map((testimonial) => (
                        <div className="col-lg-4 col-md-6 col-12" data-aos="slide-up" data-aos-delay={testimonial.delay} data-aos-duration="700" key={testimonial.image}>
                            <div className="tmp-box-card card-style-default testimonial-style-one tmponhover">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <img src={`/assets/images/testimonial/${testimonial.image}`} alt="Corporate Template" />
                                    </div>
                                    <div className="content">
                                        <p className="description">{testimonial.text}</p>
                                        <h2 className="title">{testimonial.name}</h2>
                                        <h6 className="subtitle">inversweb.com</h6>
                                        <div className="rating mt--10">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <a href="#" key={star}>
                                                    <i className="feather-star" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TestimonialBusinessCoach;
