import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutFluidConstruction from "./AboutFluidConstruction";
import BannerConstruction from "./BannerConstruction";
import BlogConstruction from "./BlogConstruction";
import BodyClassConstruction from "./BodyClassConstruction";
import BrandConstruction from "./BrandConstruction";
import ContactConstruction from "./ContactConstruction";
import ConstructionTabs from "./ConstructionTabs";
import CounterConstruction from "./CounterConstruction";
import FooterConstruction from "./FooterConstruction";
import GetInTouchConstruction from "./GetInTouchConstruction";
import HeaderConstruction from "./HeaderConstruction";
import PortfolioConstruction from "./PortfolioConstruction";
import PricingConstruction from "./PricingConstruction";
import ServicesConstruction from "./ServicesConstruction";
import VideoConstruction from "./VideoConstruction";
import TopbarConstruction from "./TopbarConstruction";

function Page() {
    return (
        <>
            <BodyClassConstruction />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <TopbarConstruction />
                <HeaderConstruction />
                <BannerConstruction />
                <ConstructionTabs />
                <ServicesConstruction />
                <PortfolioConstruction />
                <GetInTouchConstruction />
                <AboutFluidConstruction />
                <PricingConstruction />
                <CounterConstruction />
                <ContactConstruction />
                <VideoConstruction />
                <BlogConstruction />
                <BrandConstruction />
                <FooterConstruction />
            </main>
        </>
    );
}

export default Page;
