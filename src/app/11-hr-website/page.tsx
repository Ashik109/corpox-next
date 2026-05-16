import AboutHRWebsite from "./AboutHRWebsite";
import BannerHRWebsite from "./BannerHRWebsite";
import BlogHRWebsite from "./BlogHRWebsite";
import BrandHRWebsite from "./BrandHRWebsite";
import CounterHRWebsite from "./CounterHRWebsite";
import FooterHRWebsite from "./FooterHRWebsite";
import HeaderOne from "../01-index-consulting/HeaderOne";
import HRWebsiteAnimations from "./HRWebsiteAnimations";
import PortfolioHRWebsite from "./PortfolioHRWebsite";
import ServicesHRWebsite from "./ServicesHRWebsite";
import SkillHRWebsite from "./SkillHRWebsite";
import TestimonialMapHRWebsite from "./TestimonialMapHRWebsite";
import VideoHRWebsite from "./VideoHRWebsite";

function Page() {
    return (
        <>
            <HRWebsiteAnimations />
            <main className="page-wrapper">
                <HeaderOne />
                <BannerHRWebsite />
                <ServicesHRWebsite />
                <AboutHRWebsite />
                <PortfolioHRWebsite />
                <CounterHRWebsite />
                <SkillHRWebsite />
                <TestimonialMapHRWebsite />
                <VideoHRWebsite />
                <BrandHRWebsite />
                <BlogHRWebsite />
                <FooterHRWebsite />
            </main>
        </>
    );
}

export default Page;
