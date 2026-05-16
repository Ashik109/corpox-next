import AboutDigitalAgency from "./AboutDigitalAgency";
import BannerDigitalAgency from "./BannerDigitalAgency";
import BlogDigitalAgency from "./BlogDigitalAgency";
import CounterDigitalAgency from "./CounterDigitalAgency";
import DigitalAgencyAnimations from "./DigitalAgencyAnimations";
import FooterDigitalAgency from "./FooterDigitalAgency";
import HeaderOne from "../01-index-consulting/HeaderOne";
import LatestServiceDigitalAgency from "./LatestServiceDigitalAgency";
import PortfolioDigitalAgency from "./PortfolioDigitalAgency";
import ServicesDigitalAgency from "./ServicesDigitalAgency";
import TestimonialDigitalAgency from "./TestimonialDigitalAgency";
import WorkingProcessDigitalAgency from "./WorkingProcessDigitalAgency";

function Page() {
    return (
        <>
            <DigitalAgencyAnimations />
            <main className="page-wrapper">
                <HeaderOne />
                <BannerDigitalAgency />
                <LatestServiceDigitalAgency />
                <AboutDigitalAgency />
                <WorkingProcessDigitalAgency />
                <ServicesDigitalAgency />
                <PortfolioDigitalAgency />
                <CounterDigitalAgency />
                <TestimonialDigitalAgency />
                <BlogDigitalAgency />
                <FooterDigitalAgency />
            </main>
        </>
    );
}

export default Page;
