import AboutMarketingAgency from "./AboutMarketingAgency";
import BannerMarketingAgency from "./BannerMarketingAgency";
import BlogMarketingAgency from "./BlogMarketingAgency";
import BrandMarketingAgency from "./BrandMarketingAgency";
import FooterMarketingAgency from "./FooterMarketingAgency";
import HeaderOne from "../01-index-consulting/HeaderOne";
import MarketingAgencyAnimations from "./MarketingAgencyAnimations";
import PricingMarketingAgency from "./PricingMarketingAgency";
import SplitMarketingAgency from "./SplitMarketingAgency";
import TestimonialMarketingAgency from "./TestimonialMarketingAgency";
import TimelineMarketingAgency from "./TimelineMarketingAgency";

function Page() {
    return (
        <>
            <MarketingAgencyAnimations />
            <main className="page-wrapper">
                <HeaderOne />
                <BannerMarketingAgency />
                <hr />
                <AboutMarketingAgency />
                <TimelineMarketingAgency />
                <SplitMarketingAgency />
                <TestimonialMarketingAgency />
                <PricingMarketingAgency />
                <BlogMarketingAgency />
                <BrandMarketingAgency />
                <FooterMarketingAgency />
            </main>
        </>
    );
}

export default Page;
