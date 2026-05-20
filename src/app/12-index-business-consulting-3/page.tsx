import AboutBusinessThree from "./AboutBusinessThree";
import AccordionBusinessThree from "./AccordionBusinessThree";
import AppointmentBusinessThree from "./AppointmentBusinessThree";
import BannerBusinessThree from "./BannerBusinessThree";
import BlogBusinessThree from "./BlogBusinessThree";
import BusinessThreeAnimations from "./BusinessThreeAnimations";
import CtaBusinessThree from "./CtaBusinessThree";
import FooterBusinessThree from "./FooterBusinessThree";
import HeaderTwo from "../02-index-business-consulting-2/HeaderTwo";
import MarqueeBusinessThree from "./MarqueeBusinessThree";
import ServiceTabsBusinessThree from "./ServiceTabsBusinessThree";
import TestimonialBusinessThree from "./TestimonialBusinessThree";

function Page() {
    return (
        <>
            <BusinessThreeAnimations />
            <main className="page-wrapper">
                <HeaderTwo variant="transparent" />
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
