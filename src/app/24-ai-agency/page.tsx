import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutAiAgency from "./AboutAiAgency";
import BannerAiAgency from "./BannerAiAgency";
import BlogAiAgency from "./BlogAiAgency";
import BodyClassAiAgency from "./BodyClassAiAgency";
import BrandAiAgency from "./BrandAiAgency";
import CounterAiAgency from "./CounterAiAgency";
import FaqAiAgency from "./FaqAiAgency";
import FooterAiAgency from "./FooterAiAgency";
import HeaderAiAgency from "./HeaderAiAgency";
import PortfolioAiAgency from "./PortfolioAiAgency";
import ServicesAiAgency from "./ServicesAiAgency";
import WorkProcessAiAgency from "./WorkProcessAiAgency";

function Page() {
    return (
        <>
            <BodyClassAiAgency />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderAiAgency />
                <BannerAiAgency />
                <BrandAiAgency />
                <ServicesAiAgency />
                <AboutAiAgency />
                <WorkProcessAiAgency />
                <CounterAiAgency />
                <PortfolioAiAgency />
                <FaqAiAgency />
                <BlogAiAgency />
                <FooterAiAgency />
            </main>
        </>
    );
}

export default Page;
