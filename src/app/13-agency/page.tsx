import AboutAgencyThirteen from "./AboutAgencyThirteen";
import AgencyThirteenAnimations from "./AgencyThirteenAnimations";
import AppointmentAgencyThirteen from "./AppointmentAgencyThirteen";
import BannerAgencyThirteen from "./BannerAgencyThirteen";
import BlogAgencyThirteen from "./BlogAgencyThirteen";
import BrandAgencyThirteen from "./BrandAgencyThirteen";
import CounterAgencyThirteen from "./CounterAgencyThirteen";
import CtaAgencyThirteen from "./CtaAgencyThirteen";
import FooterAgencyThirteen from "./FooterAgencyThirteen";
import HeaderThree from "../03-agency/HeaderThree";
import MissionAgencyThirteen from "./MissionAgencyThirteen";
import PortfolioAgencyThirteen from "./PortfolioAgencyThirteen";
import ServicesAgencyThirteen from "./ServicesAgencyThirteen";
import TeamAgencyThirteen from "./TeamAgencyThirteen";
import TestimonialAgencyThirteen from "./TestimonialAgencyThirteen";

function Page() {
    return (
        <>
            <AgencyThirteenAnimations />
            <main className="page-wrapper">
                <HeaderThree />
                <BannerAgencyThirteen />
                <AboutAgencyThirteen />
                <ServicesAgencyThirteen />
                <BrandAgencyThirteen />
                <MissionAgencyThirteen />
                <PortfolioAgencyThirteen />
                <CounterAgencyThirteen />
                <TeamAgencyThirteen />
                <CtaAgencyThirteen />
                <AppointmentAgencyThirteen />
                <TestimonialAgencyThirteen />
                <BlogAgencyThirteen />
                <FooterAgencyThirteen />
            </main>
        </>
    );
}

export default Page;
