"use client";

import { useState } from "react";

const tabs = [
  { id: "home", label: "Description", buttonId: "home-tab" },
  { id: "profile", label: "Additional information", buttonId: "profile-tab" },
  { id: "messages", label: "Reviews (1)", buttonId: "messages-tab" },
];

function StarRating() {
  return (
    <ul className="star-rating">
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
      <li><i className="feather-star"></i></li>
    </ul>
  );
}

function ReviewBox({ image }: { image: string }) {
  return (
    <div className={`reveiw-box${image.includes("01") ? " mb--30" : ""}`}>
      <div className="author">
        <div className="image"><img src={`/assets/images/shop/${image}`} alt="" /></div>
        <div className="content">
          <h6>Jonathon Doe</h6>
          <p>A Week Ago</p>
        </div>
      </div>
      <p>I still have a lot of studying to do using this course and the other practice exams, but so far it's been great! I have not taken my Security+ exam as well, so I'll update this at a later time.</p>
      <StarRating />
    </div>
  );
}

function ShopDetailsTabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="row mt--60">
      <div className="col-md-12 mt--40">
        <div className="tab-area-shop-details">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link${isActive ? " active" : ""}`}
                    id={tab.buttonId}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="tab-content">
            <div className={`tab-pane description${activeTab === "home" ? " active" : ""}`} id="home" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
              <p>
                Renewable energy offers a beacon of hope, promising a sustainable future where power generation is clean, abundant, and accessible to all. Let's explore the transformative potential of renewable energy and its role in shaping our tomorrow.
              </p>
              <ul>
                <li>Advanced surface texturing</li>
                <li>Advanced surface texturing</li>
                <li>Advanced surface texturing</li>
                <li>Advanced surface texturing</li>
                <li>Advanced surface texturing</li>
                <li>Advanced surface texturing</li>
              </ul>
              <p>Renewable energy offers a beacon of hope, promising a sustainable future where power generation is clean, abundant, and accessible to all. Let's explore the transformative potential of renewable energy and its role in shaping our tomorrow. Renewable energy offers a beacon of hope, promising a sustainable future where power generation is clean, abundan.</p>
            </div>
            <div className={`tab-pane${activeTab === "profile" ? " active" : ""}`} id="profile" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
              <div className="ms-section-title">
                <h3 className="ms-heading-title"> Delivery Info</h3>
                <ul>
                  <li><i className="feather-check-circle"></i>At AutoTech Supplies, we offer fast and reliable delivery patmp and accessories</li>
                  <li><i className="feather-check-circle"></i>Orders placed before 2 PM are typically the same day,ranging business days.</li>
                  <li><i className="feather-check-circle"></i>Expedited shipping options are available for urgent needs, day delivery locations.</li>
                  <li><i className="feather-check-circle"></i>At AutoTech Supplies, we offer fast and reliable delivery patmp and accessories</li>
                  <li><i className="feather-check-circle"></i>Orders placed before 2 PM are typically the same day,ranging business days.</li>
                  <li><i className="feather-check-circle"></i>Expedited shipping options are available for urgent needs, day delivery locations.</li>
                </ul>
              </div>
            </div>
            <div className={`tab-pane${activeTab === "messages" ? " active" : ""}`} id="messages" role="tabpanel" aria-labelledby="messages-tab" tabIndex={0}>
              <div id="reviews" className="woocommerce-Reviews">
                <div className="reveiw">
                  <h2>Reveiw</h2>
                  <ReviewBox image="author-01.svg" />
                  <ReviewBox image="author-02.svg" />
                </div>
                <div className="reveiw-form tmponhover">
                  <h2 className="mb--30">Add a Review</h2>
                  <form action="#" method="get">
                    <div className="single-wrapper">
                      <input type="text" name="name" placeholder="Your Name" required />
                      <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <textarea name="comment" id="comment" placeholder="Add a Comment" required></textarea>
                    <div className="rating">
                      <h5>Your Rating </h5>
                      <StarRating />
                    </div>
                    <button className="tmp-btn radius-small btn-primary btn-two">Submit A Review</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetailsTabs;
