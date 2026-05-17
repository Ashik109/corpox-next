import Link from 'next/link'
const splitList = [
    "Track your teams progress with mobile app.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Ipsum dolor sit amet consectetur adipisicing.",
    "Your teams progress with mobile app.",
];

function SplitMarketingAgency() {
    return (
        <div className="tmp-split-area">
            <div className="wrapper">
                <div className="tmp-splite-style bg-color-blackest">
                    <div className="split-wrapper">
                        <div className="row g-0 radius-10 align-items-end">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail">
                                    <img src="/assets/images/split/split-04.png" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner pb--0">
                                    <span className="tmp-badge-2 mb--30">LET&apos;S WORK TOGETHER</span>
                                    <h4 className="title tmp-title-split">
                                        Digital technology and marketing for create dmood.
                                    </h4>
                                    <p className="description">
                                        Randomised words which don&apos;t look even slightly believable. If you are
                                        to use a passage of Lorem Ipsum. You need to be sure there isn&apos;t
                                        anything embarrassing hidden in the middle of text.
                                    </p>
                                    <ul className="list-icon mb--40">
                                        {splitList.map((item) => (
                                            <li key={item}>
                                                <span className="icon">
                                                    <i className="feather-check" />
                                                </span>{" "}
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="read-more-btn">
                                        <Link
                                            className="btn-collaborate-play popup-video"
                                            href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                        >
                                            <i className="feather-play" />
                                            <span>See how it works</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SplitMarketingAgency;
