import CtaModernBusiness from "../08-business/CtaModernBusiness";
import CtaRealEstate from "../16-real-estate-consulting/CtaRealEstate";
import FooterRealEstate from "../16-real-estate-consulting/FooterRealEstate";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import HeaderThree from "../03-agency/HeaderThree";
import AboutITSolution from "./AboutITSolution";
import AppointmentITSolution from "./AppointmentITSolution";
import BannerITSolution from "./BannerITSolution";
import BlogITSolution from "./BlogITSolution";
import BrandITSolution from "./BrandITSolution";
import CounterITSolution from "./CounterITSolution";
import PortfolioITSolution from "./PortfolioITSolution";
import PricingITSolution from "./PricingITSolution";
import ServicesITSolution from "./ServicesITSolution";
import TeamITSolution from "./TeamITSolution";
import TimelineITSolution from "./TimelineITSolution";
import TestimonialOne from "../01-index-consulting/TestimonialOne";
import VideoOne from "../01-index-consulting/VideoOne";

function Page() {
    return (
        <>
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderThree />
                <BannerITSolution />
                <AboutITSolution />
                <ServicesITSolution />
                <CounterITSolution />
                <PortfolioITSolution />
                <TestimonialOne />
                <TimelineITSolution />
                <VideoOne />
                <PricingITSolution />
                <TeamITSolution />
                <CtaRealEstate />
                <AppointmentITSolution />
                <BrandITSolution />
                <BlogITSolution />
                <CtaModernBusiness />
                <FooterRealEstate />
            </main>
        </>
    );
}

export default Page;
