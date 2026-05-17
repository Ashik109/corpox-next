"use client";
import Link from 'next/link'


import { useState } from "react";

const eventItems = [
    ["01.webp", "Corporate Hall", "15 Jan, 2026", "Annual Business Strategy Summit", "Register Now"],
    ["02.webp", "Downtown Center", "28 Feb, 2026", "Corporate Leadership Forum", "Join Event"],
    ["03.webp", "Innovation Hub", "12 Mar, 2026", "Digital Transformation Conference", "View Details"],
    ["04.webp", "Executive Center", "05 Apr, 2026", "Corporate Innovation & Meet", "Get Invitation"],
] as const;

const days = ["Day 01", "Day 02", "Day 03"] as const;

function ScheduleEvent() {
    const [activeDay, setActiveDay] = useState(0);

    return (
        <div className="event-shedule-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Our Event Schedule</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700 tmp-title-split">
                                Discover the complete schedule <br /> for our event.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--25">
                    <div className="col-lg-12">
                        <div className="event-shedule-tab-area">
                            <ul className="nav nav-tabs" role="tablist">
                                {days.map((day, index) => (
                                    <li className="nav-item" role="presentation" key={day}>
                                        <button className={`nav-link ${activeDay === index ? "active" : ""}`} type="button" role="tab" aria-selected={activeDay === index} onClick={() => setActiveDay(index)}>
                                            {day}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content mt--40">
                                <div className="tab-pane fade show active" role="tabpanel">
                                    <div className="row g-5">
                                        {eventItems.map(([image, location, date, title, cta]) => (
                                            <div className="col-lg-6" key={`${activeDay}-${title}`}>
                                                <div className="single-events-wrapper tmponhover">
                                                    <Link href="/contact" className="thumbnail">
                                                        <img src={`/assets/images/event/${image}`} alt={title} />
                                                    </Link>
                                                    <div className="inner-content">
                                                        <div className="top-area mb--15">
                                                            <div className="single">
                                                                <i className="feather-map-pin" />
                                                                <p>{location}</p>
                                                            </div>
                                                            <div className="single">
                                                                <i className="feather-calendar" />
                                                                <p>{date}</p>
                                                            </div>
                                                        </div>
                                                        <Link href="/contact">
                                                            <h3 className="title">{title}</h3>
                                                        </Link>
                                                        <Link className="tmp-btn icon-hover btn-small text-center" href="/contact">
                                                            <span className="btn-text">{cta}</span>
                                                            <span className="btn-icon">
                                                                <i className="feather-arrow-right" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

export default ScheduleEvent;
