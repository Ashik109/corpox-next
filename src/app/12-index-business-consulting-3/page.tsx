import AboutBusinessThree from "./AboutBusinessThree";
import AccordionBusinessThree from "./AccordionBusinessThree";
import AppointmentBusinessThree from "./AppointmentBusinessThree";
import BannerBusinessThree from "./BannerBusinessThree";
import BlogBusinessThree from "./BlogBusinessThree";
import BusinessThreeAnimations from "./BusinessThreeAnimations";
import CtaBusinessThree from "./CtaBusinessThree";
import FooterBusinessThree from "./FooterBusinessThree";
import HeaderOne from "../01-index-consulting/HeaderOne";
import MarqueeBusinessThree from "./MarqueeBusinessThree";
import ServiceTabsBusinessThree from "./ServiceTabsBusinessThree";
import TestimonialBusinessThree from "./TestimonialBusinessThree";

function Page() {
    return (
        <>
            <BusinessThreeAnimations />
            <main className="page-wrapper">
                <HeaderOne />
                <BannerBusinessThree />
                <MarqueeBusinessThree />
                <AboutBusinessThree />
                <ServiceTabsBusinessThree />
                <CtaBusinessThree />
                <AccordionBusinessThree />
                <TestimonialBusinessThree />
                <AppointmentBusinessThree />
                <BlogBusinessThree />
                <FooterBusinessThree />
            </main>
        </>
    );
}

export default Page;
