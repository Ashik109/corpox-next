"use client";

import { Fragment, useState } from "react";

const tabs = [
    { id: "prod-cardio", label: "CARDIO" },
    { id: "prod-crossfit", label: "CROSSFIT" },
    { id: "prod-gym", label: "GYM" },
    { id: "prod-powerlifting", label: "POWERLIFTING" },
] as const;
const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"] as const;

const schedule = [
    ["GYM OPEN", "11:00  -  12:00"],
    ["Crossfit Class", "Madison fren\n11:00  -  12:00"],
    null,
    ["GYM OPEN", "11:00  -  12:00"],
    ["GYM OPEN", "11:00  -  12:00"],
    null,
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    null,
    ["GYM OPEN", "11:00  -  12:00"],
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    null,
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    ["GYM OPEN", "11:00  -  12:00"],
    null,
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    ["Cardio Burn", "MAdona FRON\n11:00  -  12:00"],
    ["GYM OPEN", "11:00  -  12:00"],
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    null,
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    ["Cardio Burn", "MAdona FRON\n11:00  -  12:00"],
    ["GYM OPEN", "11:00  -  12:00"],
    ["Crossfit Class", "Madison fren\n11:00  -  12:00"],
    null,
    ["GYM OPEN", "11:00  -  12:00"],
    ["GYM OPEN", "11:00  -  12:00"],
    null,
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    null,
    ["GYM OPEN", "11:00  -  12:00"],
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    null,
    ["Power Lifting", "Steve Cross\n11:00  -  12:00"],
    ["GYM OPEN", "11:00  -  12:00"],
    null,
] as const;

function TimeTableGymFitness() {
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("prod-cardio");

    return (
        <div className="tmp-time-table-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Time Table</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Working Hours & Classes</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    <div className="col-lg-12">
                        <div className="time-table-area-wrapper">
                            <div className="inner-container">
                                <div className="table-outer">
                                    <div className="table-inner">
                                        <div className="table-title-box clearfix">
                                            <div className="title">ALL EVENTS</div>
                                            {days.map((day) => (
                                                <div className="day" key={day}>
                                                    {day}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="timetable-tabs tabs-box">
                                            <ul className="tab-btns tab-buttons clearfix">
                                                {tabs.map((tab) => (
                                                    <li className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`} key={tab.id} onClick={() => setActiveTab(tab.id)}>
                                                        {tab.label}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="tabs-content">
                                                {tabs.map((tab) => (
                                                    <div className={`tab ${activeTab === tab.id ? "active-tab" : ""}`} id={tab.id} key={tab.id}>
                                                        <div className="content">
                                                            <div className="clearfix">
                                                                {schedule.map((item, index) => (
                                                                    <div className="time-box tmponhover" key={`${tab.id}-${index}`}>
                                                                        <div className="box-inner">
                                                                            {item ? (
                                                                                <div className="time">
                                                                                    {item[0]}{" "}
                                                                                    <span>
                                                                                        {item[1].split("\n").map((line, lineIndex) =>
                                                                                            lineIndex === 0 ? (
                                                                                                <Fragment key={`${tab.id}-${index}-${lineIndex}`}>{line}</Fragment>
                                                                                            ) : (
                                                                                                <Fragment key={`${tab.id}-${index}-${lineIndex}`}>
                                                                                                    <br />
                                                                                                    {line}
                                                                                                </Fragment>
                                                                                            ),
                                                                                        )}
                                                                                    </span>
                                                                                </div>
                                                                            ) : null}
                                                                        </div>
                                                                    </div>
                                                                ))}
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
            </div>
        </div>
    );
}

export default TimeTableGymFitness;
