"use client";

import Link from "next/link";
import React from "react";
import { useAosOnce } from "../components/useAosOnce";

const services = [
  {
    title: "Business Solution",
    description: "There are many variations variations of passages of Lorem available.",
    icon: "/assets/images/services/icons/02.png",
    delay: 0,
  },
  {
    title: "Creative Ideas",
    description: "Passages there are many variations variations of of Lorem available.",
    icon: "/assets/images/services/icons/01.png",
    delay: 100,
  },
  {
    title: "App Development",
    description: "Variations There are many variations of passages of Lorem available.",
    icon: "/assets/images/services/icons/03.png",
    delay: 200,
  },
  {
    title: "Market Research",
    description: "There are many variations of passages of Lorem available pro content.",
    icon: "/assets/images/services/icons/04.png",
    delay: 200,
  },
];

function ServicesNine() {
  useAosOnce();

  return (
    <section className="tmp-service-area tmp-section-gap bg-color-card" aria-labelledby="services-nine-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4
                className="subtitle color-secondary"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Amazing design services
              </h4>
              <h2
                id="services-nine-title"
                className="title w-600"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
              >
                Amazing services.
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-5 service-wrapper mt--30">
          {services.map((service) => (
            <div
              key={service.title}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={service.delay}
            >
              <article className="service service__style--1 bg-color-blackest radius text-center tmp-border">
                <div className="icon">
                  <img src={service.icon} alt={`${service.title} service icon`} loading="lazy" />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    <Link href="/service/management-leadership">{service.title}</Link>
                  </h4>
                  <p className="description mb--0">{service.description}</p>
                  <div className="discover-btn mt--20">
                    <Link className="tmp-btn round btn-small btn-border hover-icon-reverse" href="/service/financial-growth">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Discover services</span>
                        <span className="btn-icon" aria-hidden="true">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon" aria-hidden="true">
                          <i className="feather-arrow-right" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesNine;
