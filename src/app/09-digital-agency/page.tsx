import AboutDigitalAgency from "./AboutDigitalAgency";
import BannerDigitalAgency from "./BannerDigitalAgency";
import BlogDigitalAgency from "./BlogDigitalAgency";
import CounterDigitalAgency from "./CounterDigitalAgency";
import DigitalAgencyAnimations from "./DigitalAgencyAnimations";
import FooterDigitalAgency from "./FooterDigitalAgency";
import HeaderTwo from "../02-index-business-consulting-2/HeaderTwo";
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
                <HeaderTwo ctaClassName="tmp-btn btn-small" />
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
