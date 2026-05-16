import AboutTabsFinancial from "./AboutTabsFinancial";
import AppointmentFinancial from "./AppointmentFinancial";
import BannerFinancial from "./BannerFinancial";
import BlogFinancial from "./BlogFinancial";
import BrandFinancial from "./BrandFinancial";
import BusinessServicesFinancial from "./BusinessServicesFinancial";
import CounterFinancial from "./CounterFinancial";
import FinancialAnimations from "./FinancialAnimations";
import FooterFinancial from "./FooterFinancial";
import HeaderThree from "../03-agency/HeaderThree";
import ServicesFinancial from "./ServicesFinancial";
import TeamFinancial from "./TeamFinancial";
import TestimonialFinancial from "./TestimonialFinancial";
import VideoFinancial from "./VideoFinancial";

function Page() {
    return (
        <>
            <FinancialAnimations />
            <main className="page-wrapper financial-page-wrapper">
                <HeaderThree />
                <BannerFinancial />
                <AboutTabsFinancial />
                <ServicesFinancial />
                <BusinessServicesFinancial />
                <CounterFinancial />
                <VideoFinancial />
                <TeamFinancial />
                <BlogFinancial />
                <AppointmentFinancial />
                <BrandFinancial />
                <TestimonialFinancial />
                <FooterFinancial />
            </main>
        </>
    );
}

export default Page;
