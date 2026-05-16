"use client";

import React from "react";
import ServicesCardOne from "./ServicesCardOne";
import { useTitleSplitAnimation } from "../components/useTitleSplitAnimation";

function ServiceOne() {
  // This will animate all elements with class .tmp-title-split
  useTitleSplitAnimation();

  return (
    <div className="tmp-service-area tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tmp-section-title-border text-center">
              <div className="pres-line-separator-wrapper text-center mb--10">
                <div className="line-separator line-left" />
                <span className="subtitle">
                  <span className="number">04</span>
                  <span className="subtitle-text">Services</span>
                </span>
                <div className="line-separator line-right" />
              </div>

              <h2 className="title w-700 tmp-title-split">
                Premium Services.
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-5 service-wrapper mt--10">
          <ServicesCardOne />
        </div>
      </div>
    </div>
  );
}

export default ServiceOne;