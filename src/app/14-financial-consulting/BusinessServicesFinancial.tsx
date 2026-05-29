import Link from 'next/link'
const serviceList = [
    {
        title: "Business Growth",
        image: "01.webp",
        icon: "01.svg",
        text: "My business growth service helps companies expand faster with strategic planning, marketing solutions, and expert guidance to achieve sustainable success.",
        reverse: false,
    },
    {
        title: "Audit Consulting",
        image: "02.webp",
        icon: "02.svg",
        text: "My audit consulting service ensures transparency, compliance, and financial accuracy with expert guidance to optimize performance and reduce risks.",
        reverse: true,
    },
    {
        title: "Financial Idea",
        image: "03.webp",
        icon: "03.svg",
        text: "My Financial Idea service helps companies expand faster with strategic planning, marketing solutions, and expert guidance to achieve sustainable success.",
        reverse: false,
    },
    {
        title: "Minimal Achievement",
        image: "04.webp",
        icon: "04.svg",
        text: "My minimal achievement strategy focuses on steady growth, smart resource use, and sustainable progress to reach goals with efficiency.",
        reverse: true,
    },
];

function ServiceRow({ item }: { item: (typeof serviceList)[number] }) {
    const image = (
        <div className={`col-lg-6 ${item.reverse ? "order-1 order-lg-2 order-md-1 order-sm-1" : ""}`}>
            <Link href="/service-details/management-leadership" className="thumbnail-service-list invers-anime">
                <img src={`/assets/images/services/list/${item.image}`} alt="Business consulting" />
            </Link>
        </div>
    );

    const content = (
        <div className={`col-lg-6 ${item.reverse ? "order-2 order-lg-1 order-md-2 order-sm-2" : ""}`}>
            <div className="inner-content">
                <div className="head">
                    <div className="icon">
                        <img src={`/assets/images/services/list/icon/${item.icon}`} alt="Business" />
                    </div>
                    <h6 className="title">{item.title}</h6>
                </div>
                <p className="disc">{item.text}</p>
                <Link className="tmp-btn hover-icon-reverse" href="/service-details/financial-growth">
                    <span className="icon-reverse-wrapper">
                        <span className="btn-text">See Details</span>
                        <span className="btn-icon">
                            <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                            <i className="feather-arrow-right" />
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="single-service-list-area">
            <div className="row g-5 align-items-center">
                {item.reverse ? (
                    <>
                        {content}
                        {image}
                    </>
                ) : (
                    <>
                        {image}
                        {content}
                    </>
                )}
            </div>
        </div>
    );
}

function BusinessServicesFinancial() {
    return (
        <div className="my-business-service-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-flex-between">
                            <div className="tmp-section-title-border text-start">
                                <div className="pres-line-separator-wrapper text-start mb--10">
                                    <span className="subtitle">
                                        <span className="subtitle-text">My Business Services</span>
                                    </span>
                                    <div className="line-separator line-right" />
                                </div>
                                <h2 className="title w-700 tmp-title-split">
                                    Innovative Service For Your <br /> Business Solution
                                </h2>
                            </div>
                            <div className="tmp-load-more d-flex justify-content-center">
                                <Link className="tmp-btn btn-large hover-icon-reverse" href="#">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">View More Service</span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-loader" />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    <div className="col-lg-12">
                        {serviceList.map((item) => (
                            <ServiceRow item={item} key={item.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessServicesFinancial;
