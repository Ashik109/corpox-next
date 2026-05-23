"use client";

import { Fragment, useState } from "react";

const tabs = [
    { id: "prod-cardio", label: "CARDIOLOGY" },
    { id: "prod-crossfit", label: "ORTHOPEDICS" },
    { id: "prod-gym", label: "NEUROLOGY" },
    { id: "prod-powerlifting", label: "PEDIATRICS" },
] as const;
const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"] as const;

const schedules = {
    "prod-cardio": [
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
        ["Dr. Ahmed Khan", "OPD\n11:00 - 2:00"],
        ["Dr. Fatima Begum", "Consultation\n12:00 - 3:00"],
        ["Dr. Rahman Ali", "Echo Test\n1:00 - 4:00"],
        ["Dr. Nusrat Jahan", "OPD\n2:00 - 5:00"],
        ["Dr. Ahmed Khan", "Consultation\n9:00 - 12:00"],
        ["Dr. Fatima Begum", "OPD\n10:00 - 1:00"],
        ["Dr. Rahman Ali", "Cardiac Checkup\n11:00 - 2:00"],
        ["Dr. Nusrat Jahan", "Consultation\n12:00 - 3:00"],
        ["Dr. Ahmed Khan", "ECG Test\n1:00 - 4:00"],
        ["Dr. Fatima Begum", "OPD\n2:00 - 5:00"],
        ["Dr. Rahman Ali", "Consultation\n3:00 - 6:00"],
        ["Dr. Nusrat Jahan", "Echo\n4:00 - 7:00"],
        ["Dr. Ahmed Khan", "OPD\n5:00 - 8:00"],
        ["Dr. Fatima Begum", "Consultation\n6:00 - 9:00"],
        ["Dr. Rahman Ali", "OPD\n7:00 - 10:00"],
    ],
    "prod-crossfit": [
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
        ["Dr. Kamal Hossain", "Surgery OPD\n2:00 - 5:00"],
        ["Dr. Sonia Rahman", "Consultation\n3:00 - 6:00"],
        ["Dr. Arif Mahmud", "Physio Therapy\n4:00 - 7:00"],
        ["Dr. Kamal Hossain", "OPD\n5:00 - 8:00"],
        ["Dr. Sonia Rahman", "Fracture Follow-up\n6:00 - 9:00"],
        ["Dr. Arif Mahmud", "Consultation\n7:00 - 10:00"],
        ["Dr. Kamal Hossain", "Joint Clinic\n8:00 - 11:00"],
        ["Dr. Sonia Rahman", "OPD\n9:00 - 12:00"],
        ["Dr. Arif Mahmud", "Physio Checkup\n10:00 - 1:00"],
        ["Dr. Kamal Hossain", "Consultation\n11:00 - 2:00"],
        ["Dr. Sonia Rahman", "Fracture OPD\n12:00 - 3:00"],
        ["Dr. Arif Mahmud", "Joint Consultation\n1:00 - 4:00"],
        ["Dr. Kamal Hossain", "OPD\n2:00 - 5:00"],
        ["Dr. Sonia Rahman", "Physio Therapy\n3:00 - 6:00"],
        ["Dr. Arif Mahmud", "Consultation\n4:00 - 7:00"],
    ],
    "prod-gym": [
        ["Dr. Tasnim Ahmed", "Neurology OPD\n8:00 - 11:00"],
        ["Dr. Imran Chowdhury", "Migraine Clinic\n9:00 - 12:00"],
        ["Dr. Tasnim Ahmed", "EEG Test\n10:00 - 1:00"],
        ["Dr. Sakib Hasan", "Consultation\n11:00 - 2:00"],
        ["Dr. Imran Chowdhury", "Follow-up\n12:00 - 3:00"],
        ["Dr. Tasnim Ahmed", "OPD\n1:00 - 4:00"],
        ["Dr. Imran Chowdhury", "Neurology Check\n2:00 - 5:00"],
        ["Dr. Sakib Hasan", "Consultation\n3:00 - 6:00"],
        ["Dr. Tasnim Ahmed", "EEG Test\n4:00 - 7:00"],
        ["Dr. Imran Chowdhury", "OPD\n5:00 - 8:00"],
        ["Dr. Sakib Hasan", "Neurology Clinic\n6:00 - 9:00"],
        ["Dr. Tasnim Ahmed", "Consultation\n7:00 - 10:00"],
        ["Dr. Imran Chowdhury", "Migraine OPD\n8:00 - 11:00"],
        ["Dr. Sakib Hasan", "Neurology Test\n9:00 - 12:00"],
        ["Dr. Tasnim Ahmed", "OPD\n10:00 - 1:00"],
        ["Dr. Imran Chowdhury", "Consultation\n11:00 - 2:00"],
        ["Dr. Sakib Hasan", "EEG Test\n12:00 - 3:00"],
        ["Dr. Tasnim Ahmed", "Neurology OPD\n1:00 - 4:00"],
        ["Dr. Imran Chowdhury", "Migraine Clinic\n2:00 - 5:00"],
        ["Dr. Sakib Hasan", "Consultation\n3:00 - 6:00"],
        ["Dr. Tasnim Ahmed", "OPD\n4:00 - 7:00"],
        ["Dr. Imran Chowdhury", "Neurology Check\n5:00 - 8:00"],
        ["Dr. Sakib Hasan", "EEG Test\n6:00 - 9:00"],
        ["Dr. Tasnim Ahmed", "Consultation\n7:00 - 10:00"],
        ["Dr. Imran Chowdhury", "OPD\n8:00 - 11:00"],
        ["Dr. Sakib Hasan", "Neurology Clinic\n9:00 - 12:00"],
        ["Dr. Tasnim Ahmed", "Migraine OPD\n10:00 - 1:00"],
        ["Dr. Imran Chowdhury", "Consultation\n11:00 - 2:00"],
        ["Dr. Sakib Hasan", "Neurology Test\n12:00 - 3:00"],
        ["Dr. Tasnim Ahmed", "OPD\n1:00 - 4:00"],
        ["Dr. Imran Chowdhury", "EEG Test\n2:00 - 5:00"],
        ["Dr. Sakib Hasan", "Consultation\n3:00 - 6:00"],
        ["Dr. Tasnim Ahmed", "Neurology OPD\n4:00 - 7:00"],
        ["Dr. Imran Chowdhury", "Migraine Clinic\n5:00 - 8:00"],
        ["Dr. Sakib Hasan", "Consultation\n6:00 - 9:00"],
    ],
    "prod-powerlifting": [
        ["Dr. Rina Akter", "Child Checkup\n9:00 - 12:00"],
        ["Dr. Anisur Rahman", "Vaccination\n10:00 - 1:00"],
        ["Dr. Rina Akter", "Newborn Care\n11:00 - 2:00"],
        ["Dr. Farhana Islam", "Growth Monitoring\n12:00 - 3:00"],
        ["Dr. Anisur Rahman", "Emergency\n1:00 - 4:00"],
        ["Dr. Rina Akter", "OPD\n2:00 - 5:00"],
        ["Dr. Anisur Rahman", "Child Consultation\n3:00 - 6:00"],
        ["Dr. Farhana Islam", "Vaccination\n4:00 - 7:00"],
        ["Dr. Rina Akter", "Newborn Clinic\n5:00 - 8:00"],
        ["Dr. Anisur Rahman", "OPD\n6:00 - 9:00"],
        ["Dr. Farhana Islam", "Growth Check\n7:00 - 10:00"],
        ["Dr. Rina Akter", "Consultation\n8:00 - 11:00"],
        ["Dr. Anisur Rahman", "Vaccination OPD\n9:00 - 12:00"],
        ["Dr. Farhana Islam", "Child Checkup\n10:00 - 1:00"],
        ["Dr. Rina Akter", "OPD\n11:00 - 2:00"],
        ["Dr. Anisur Rahman", "Consultation\n12:00 - 3:00"],
        ["Dr. Farhana Islam", "Newborn Care\n1:00 - 4:00"],
        ["Dr. Rina Akter", "Growth Monitoring\n2:00 - 5:00"],
        ["Dr. Anisur Rahman", "OPD\n3:00 - 6:00"],
        ["Dr. Farhana Islam", "Vaccination\n4:00 - 7:00"],
        ["Dr. Rina Akter", "Child Consultation\n5:00 - 8:00"],
        ["Dr. Anisur Rahman", "Newborn Clinic\n6:00 - 9:00"],
        ["Dr. Farhana Islam", "OPD\n7:00 - 10:00"],
        ["Dr. Rina Akter", "Growth Check\n8:00 - 11:00"],
        ["Dr. Anisur Rahman", "Consultation\n9:00 - 12:00"],
        ["Dr. Farhana Islam", "Vaccination OPD\n10:00 - 1:00"],
        ["Dr. Rina Akter", "Child Checkup\n11:00 - 2:00"],
        ["Dr. Anisur Rahman", "OPD\n12:00 - 3:00"],
        ["Dr. Farhana Islam", "Consultation\n1:00 - 4:00"],
        ["Dr. Rina Akter", "Newborn Care\n2:00 - 5:00"],
        ["Dr. Anisur Rahman", "Growth Monitoring\n3:00 - 6:00"],
        ["Dr. Farhana Islam", "OPD\n4:00 - 7:00"],
        ["Dr. Rina Akter", "Vaccination\n5:00 - 8:00"],
        ["Dr. Anisur Rahman", "Child Consultation\n6:00 - 9:00"],
        ["Dr. Farhana Islam", "Newborn Clinic\n7:00 - 10:00"],
    ],
} as const;

function TimeTableMedical() {
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("prod-cardio");

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
                                                                {schedules[tab.id].map(([name, detail], index) => (
                                                                    <div className="time-box tmponhover" key={`${tab.id}-${name}-${index}`}>
                                                                        <div className="box-inner">
                                                                            <div className="time">
                                                                                {name}{" "}
                                                                                <span>
                                                                                    {detail.split("\n").map((line, lineIndex) =>
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

export default TimeTableMedical;
