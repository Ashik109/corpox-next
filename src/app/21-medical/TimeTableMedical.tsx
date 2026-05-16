"use client";

import { Fragment, useState } from "react";

const tabs = ["CARDIOLOGY", "ORTHOPEDICS", "NEUROLOGY", "PEDIATRICS"] as const;
const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"] as const;

const schedules = {
    CARDIOLOGY: [
        ["Dr. Ahmed Khan", "Consultation\n9:00 - 12:00"],
        ["Dr. Fatima Begum", "ECG Checkup\n10:00 - 1:00"],
        ["Dr. Rahman Ali", "Echo Test\n2:00 - 5:00"],
        ["Dr. Kamal Hossain", "OPD\n8:00 - 11:00"],
        ["Dr. Ahmed Khan", "Morning OPD\n9:00 - 12:00"],
        ["Dr. Fatima Begum", "Evening OPD\n4:00 - 7:00"],
        ["Dr. Rahman Ali", "OPD\n10:00 - 1:00"],
        ["Dr. Nusrat Jahan", "Consultation\n2:00 - 5:00"],
        ["Dr. Ahmed Khan", "ECG\n11:00 - 2:00"],
        ["Dr. Fatima Begum", "OPD\n3:00 - 6:00"],
        ["Dr. Rahman Ali", "Consultation\n9:00 - 12:00"],
        ["Dr. Nusrat Jahan", "OPD\n1:00 - 4:00"],
        ["Dr. Ahmed Khan", "Cardiac Checkup\n10:00 - 1:00"],
        ["Dr. Fatima Begum", "Consultation\n2:00 - 5:00"],
        ["Dr. Rahman Ali", "Echo\n3:00 - 6:00"],
        ["Dr. Nusrat Jahan", "OPD\n4:00 - 7:00"],
        ["Dr. Ahmed Khan", "Consultation\n9:00 - 12:00"],
        ["Dr. Fatima Begum", "ECG Test\n10:00 - 1:00"],
        ["Dr. Rahman Ali", "OPD\n2:00 - 5:00"],
        ["Dr. Nusrat Jahan", "Consultation\n3:00 - 6:00"],
    ],
    ORTHOPEDICS: [
        ["Dr. Arif Mahmud", "Joint Pain\n3:00 - 6:00"],
        ["Dr. Sonia Rahman", "Physiotherapy\n4:00 - 7:00"],
        ["Dr. Kamal Hossain", "OPD\n8:00 - 11:00"],
        ["Dr. Sonia Rahman", "Joint Checkup\n9:00 - 12:00"],
        ["Dr. Arif Mahmud", "Physio Consultation\n10:00 - 1:00"],
        ["Dr. Kamal Hossain", "Fracture OPD\n11:00 - 2:00"],
        ["Dr. Sonia Rahman", "OPD\n12:00 - 3:00"],
        ["Dr. Arif Mahmud", "Joint Injection\n1:00 - 4:00"],
        ["Dr. Kamal Hossain", "Consultation\n2:00 - 5:00"],
        ["Dr. Sonia Rahman", "Physio Therapy\n3:00 - 6:00"],
        ["Dr. Arif Mahmud", "OPD\n4:00 - 7:00"],
        ["Dr. Kamal Hossain", "Bone Surgery\n5:00 - 8:00"],
        ["Dr. Sonia Rahman", "Consultation\n6:00 - 9:00"],
        ["Dr. Arif Mahmud", "Joint OPD\n7:00 - 10:00"],
        ["Dr. Kamal Hossain", "OPD\n8:00 - 11:00"],
        ["Dr. Sonia Rahman", "Fracture Check\n9:00 - 12:00"],
        ["Dr. Arif Mahmud", "Physio Consultation\n10:00 - 1:00"],
        ["Dr. Kamal Hossain", "Consultation\n11:00 - 2:00"],
        ["Dr. Sonia Rahman", "OPD\n12:00 - 3:00"],
        ["Dr. Arif Mahmud", "Joint Pain Clinic\n1:00 - 4:00"],
    ],
    NEUROLOGY: [
        ["Dr. Rahman Ali", "Neuro OPD\n9:00 - 12:00"],
        ["Dr. Nusrat Jahan", "Brain Scan\n10:00 - 1:00"],
        ["Dr. Ahmed Khan", "Consultation\n1:00 - 4:00"],
        ["Dr. Rahman Ali", "Follow Up\n2:00 - 5:00"],
        ["Dr. Nusrat Jahan", "Neuro Test\n3:00 - 6:00"],
        ["Dr. Ahmed Khan", "OPD\n4:00 - 7:00"],
        ["Dr. Rahman Ali", "Consultation\n5:00 - 8:00"],
        ["Dr. Nusrat Jahan", "EEG\n6:00 - 9:00"],
        ["Dr. Rahman Ali", "OPD\n8:00 - 11:00"],
        ["Dr. Nusrat Jahan", "Consultation\n9:00 - 12:00"],
        ["Dr. Ahmed Khan", "Neuro Care\n10:00 - 1:00"],
        ["Dr. Rahman Ali", "OPD\n11:00 - 2:00"],
        ["Dr. Nusrat Jahan", "Brain Clinic\n12:00 - 3:00"],
        ["Dr. Ahmed Khan", "Follow Up\n1:00 - 4:00"],
        ["Dr. Rahman Ali", "Consultation\n2:00 - 5:00"],
        ["Dr. Nusrat Jahan", "OPD\n3:00 - 6:00"],
        ["Dr. Ahmed Khan", "EEG Test\n4:00 - 7:00"],
        ["Dr. Rahman Ali", "Consultation\n5:00 - 8:00"],
        ["Dr. Nusrat Jahan", "Follow Up\n6:00 - 9:00"],
        ["Dr. Ahmed Khan", "OPD\n7:00 - 10:00"],
    ],
    PEDIATRICS: [
        ["Dr. Fatima Begum", "Child OPD\n9:00 - 12:00"],
        ["Dr. Sonia Rahman", "Vaccination\n10:00 - 1:00"],
        ["Dr. Nusrat Jahan", "Consultation\n11:00 - 2:00"],
        ["Dr. Fatima Begum", "Pediatric Care\n12:00 - 3:00"],
        ["Dr. Sonia Rahman", "OPD\n1:00 - 4:00"],
        ["Dr. Nusrat Jahan", "Follow Up\n2:00 - 5:00"],
        ["Dr. Fatima Begum", "Child Checkup\n3:00 - 6:00"],
        ["Dr. Sonia Rahman", "Consultation\n4:00 - 7:00"],
        ["Dr. Nusrat Jahan", "OPD\n5:00 - 8:00"],
        ["Dr. Fatima Begum", "Vaccination\n6:00 - 9:00"],
        ["Dr. Sonia Rahman", "Child OPD\n8:00 - 11:00"],
        ["Dr. Nusrat Jahan", "Consultation\n9:00 - 12:00"],
        ["Dr. Fatima Begum", "Follow Up\n10:00 - 1:00"],
        ["Dr. Sonia Rahman", "Pediatric Care\n11:00 - 2:00"],
        ["Dr. Nusrat Jahan", "OPD\n12:00 - 3:00"],
        ["Dr. Fatima Begum", "Consultation\n1:00 - 4:00"],
        ["Dr. Sonia Rahman", "Vaccination\n2:00 - 5:00"],
        ["Dr. Nusrat Jahan", "Child Clinic\n3:00 - 6:00"],
        ["Dr. Fatima Begum", "OPD\n4:00 - 7:00"],
        ["Dr. Sonia Rahman", "Follow Up\n5:00 - 8:00"],
    ],
} as const;

function TimeTableMedical() {
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("CARDIOLOGY");

    return (
        <div className="tmp-time-table-area tmp-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tmp-section-title-border text-center">
                            <div className="pres-line-separator-wrapper text-center mb--10">
                                <div className="line-separator line-left" />
                                <span className="subtitle">
                                    <span className="number">4</span>
                                    <span className="subtitle-text">Doctor Schedule</span>
                                </span>
                                <div className="line-separator line-right" />
                            </div>
                            <h2 className="title w-700">Doctor Appointment Timetable</h2>
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
                                            <div className="title">DEPARTMENTS</div>
                                            {days.map((day) => (
                                                <div className="day" key={day}>
                                                    {day}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="timetable-tabs tabs-box">
                                            <ul className="tab-btns tab-buttons clearfix">
                                                {tabs.map((tab) => (
                                                    <li className={`tab-btn ${activeTab === tab ? "active-btn" : ""}`} key={tab} onClick={() => setActiveTab(tab)}>
                                                        {tab}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="tabs-content">
                                                <div className="tab active-tab">
                                                    <div className="content">
                                                        <div className="clearfix">
                                                            {schedules[activeTab].map(([name, detail], index) => (
                                                                <div className="time-box tmponhover" key={`${activeTab}-${name}-${index}`}>
                                                                    <div className="box-inner">
                                                                        <div className="time">
                                                                            {name}{" "}
                                                                            <span>
                                                                                {detail.split("\n").map((line, lineIndex) =>
                                                                                    lineIndex === 0 ? (
                                                                                        <Fragment key={`${name}-${lineIndex}`}>{line}</Fragment>
                                                                                    ) : (
                                                                                        <Fragment key={`${name}-${lineIndex}`}>
                                                                                            <br />
                                                                                            {line}
                                                                                        </Fragment>
                                                                                    ),
                                                                                )}
                                                                            </span>
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
                </div>
            </div>
        </div>
    );
}

export default TimeTableMedical;
