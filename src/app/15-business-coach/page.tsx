import AboutBusinessCoach from "./AboutBusinessCoach";
import BannerBusinessCoach from "./BannerBusinessCoach";
import BlogBusinessCoach from "./BlogBusinessCoach";
import BrandBusinessCoach from "./BrandBusinessCoach";
import BusinessCoachAnimations from "./BusinessCoachAnimations";
import BusinessServicesCoach from "./BusinessServicesCoach";
import ContactBusinessCoach from "./ContactBusinessCoach";
import CtaBusinessCoach from "./CtaBusinessCoach";
import FooterBusinessCoach from "./FooterBusinessCoach";
import HeaderThree from "../03-agency/HeaderThree";
import PortfolioBusinessCoach from "./PortfolioBusinessCoach";
import PricingBusinessCoach from "./PricingBusinessCoach";
import ServicesBusinessCoach from "./ServicesBusinessCoach";
import TeamBusinessCoach from "./TeamBusinessCoach";
import TestimonialBusinessCoach from "./TestimonialBusinessCoach";
import TimelineBusinessCoach from "./TimelineBusinessCoach";

function Page() {
    return (
        <>
            <BusinessCoachAnimations />
            <main className="page-wrapper">
                <HeaderThree />
                <BannerBusinessCoach />
                <AboutBusinessCoach />
                <ServicesBusinessCoach />
                <BusinessServicesCoach />
                <TimelineBusinessCoach />
                <PortfolioBusinessCoach />
                <TestimonialBusinessCoach />
                <PricingBusinessCoach />
                <TeamBusinessCoach />
                <BrandBusinessCoach />
                <ContactBusinessCoach />
                <CtaBusinessCoach />
                <BlogBusinessCoach />
                <FooterBusinessCoach />
            </main>
        </>
    );
}

export default Page;
