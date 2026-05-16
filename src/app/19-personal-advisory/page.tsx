import CtaModernBusiness from "../08-business/CtaModernBusiness";
import HeaderThree from "../03-agency/HeaderThree";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import FooterRealEstate from "../16-real-estate-consulting/FooterRealEstate";
import CounterITSolution from "../18-it-solution/CounterITSolution";
import BannerPersonalAdvisory from "./BannerPersonalAdvisory";
import BlogPersonalAdvisory from "./BlogPersonalAdvisory";
import BusinessServicesPersonalAdvisory from "./BusinessServicesPersonalAdvisory";
import GetInTouchPersonalAdvisory from "./GetInTouchPersonalAdvisory";
import PortfolioPersonalAdvisory from "./PortfolioPersonalAdvisory";
import PricingPersonalAdvisory from "./PricingPersonalAdvisory";
import ServicesPersonalAdvisory from "./ServicesPersonalAdvisory";
import TopbarPersonalAdvisory from "./TopbarPersonalAdvisory";
import TestimonialOne from "../01-index-consulting/TestimonialOne";

function Page() {
    return (
        <>
            <RealEstateAnimations />
            <main className="page-wrapper">
                <TopbarPersonalAdvisory />
                <HeaderThree />
                <BannerPersonalAdvisory />
                <ServicesPersonalAdvisory />
                <BusinessServicesPersonalAdvisory />
                <CounterITSolution />
                <PortfolioPersonalAdvisory />
                <TestimonialOne />
                <GetInTouchPersonalAdvisory />
                <PricingPersonalAdvisory />
                <BlogPersonalAdvisory />
                <CtaModernBusiness />
                <FooterRealEstate />
            </main>
        </>
    );
}

export default Page;
