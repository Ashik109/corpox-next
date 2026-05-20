import AboutMarketingAgency from "./AboutMarketingAgency";
import BannerMarketingAgency from "./BannerMarketingAgency";
import BlogMarketingAgency from "./BlogMarketingAgency";
import BrandMarketingAgency from "./BrandMarketingAgency";
import FooterMarketingAgency from "./FooterMarketingAgency";
import HeaderTwo from "../02-index-business-consulting-2/HeaderTwo";
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
                <HeaderTwo ctaClassName="tmp-btn btn-small" showTopNews />
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
