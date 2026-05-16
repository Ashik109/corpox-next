"use client";

import { useState } from "react";

const items = [
    ["What is Corpox ? How does it work?", "You can run Corpox easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node."],
    ["How can I get the customer support?", "After purchasing the product need you any support you can be share with us with sending mail to prsit10@gmail.com."],
    ["Can I get update regularly and For how long do I get updates?", "Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature."],
    ["How can I run Corpox html template?", "You can run Corpox easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version."],
];

function AccordionBusinessThree() {
    const [active, setActive] = useState(0);

    return (
        <div className="tmp-about-area tmp-section-gap">
            <div className="container">
                <div className="row g-5 row--30 align-items-center">
                    <div className="col-lg-6">
                        <div className="thumbnail">
                            <img className="w-100 radius" src="/assets/images/about/about-4.png" alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tmp-accordion-style accordion">
                            <div className="accordion">
                                {items.map(([title, body], index) => (
                                    <div className="accordion-item card tmponhover" key={title}>
                                        <h2 className="accordion-header card-header">
                                            <button
                                                className={`accordion-button ${active === index ? "" : "collapsed"}`}
                                                type="button"
                                                aria-expanded={active === index}
                                                onClick={() => setActive(active === index ? -1 : index)}
                                            >
                                                {title}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${active === index ? "show" : ""}`}>
                                            <div className="accordion-body card-body">{body}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccordionBusinessThree;
