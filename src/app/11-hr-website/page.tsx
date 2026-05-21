import AboutHRWebsite from "./AboutHRWebsite";
import BannerHRWebsite from "./BannerHRWebsite";
import BlogHRWebsite from "./BlogHRWebsite";
import BrandHRWebsite from "./BrandHRWebsite";
import CounterHRWebsite from "./CounterHRWebsite";
import FooterHRWebsite from "./FooterHRWebsite";
import HeaderHRWebsite from "./HeaderHRWebsite";
import HRWebsiteAnimations from "./HRWebsiteAnimations";
import PortfolioHRWebsite from "./PortfolioHRWebsite";
import ServicesHRWebsite from "./ServicesHRWebsite";
import SkillHRWebsite from "./SkillHRWebsite";
import TestimonialMapHRWebsite from "./TestimonialMapHRWebsite";
import VideoHRWebsite from "./VideoHRWebsite";
import BodyClass from "../white-01-index-consulting/BodyClass";

function Page() {
    return (
        <>
            <BodyClass className="dark-home" />
            <HRWebsiteAnimations />
            <main className="page-wrapper">
                <HeaderHRWebsite />
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
