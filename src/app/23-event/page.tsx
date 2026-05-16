import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutEvent from "./AboutEvent";
import BannerEvent from "./BannerEvent";
import BlogEvent from "./BlogEvent";
import BodyClassEvent from "./BodyClassEvent";
import FooterEvent from "./FooterEvent";
import HeaderEvent from "./HeaderEvent";
import HighlightsEvent from "./HighlightsEvent";
import PricingEvent from "./PricingEvent";
import ScheduleEvent from "./ScheduleEvent";
import ServicesEvent from "./ServicesEvent";
import TeamEvent from "./TeamEvent";

function Page() {
    return (
        <>
            <BodyClassEvent />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderEvent />
                <BannerEvent />
                <AboutEvent />
                <ServicesEvent />
                <ScheduleEvent />
                <TeamEvent />
                <HighlightsEvent />
                <PricingEvent />
                <BlogEvent />
                <FooterEvent />
            </main>
        </>
    );
}

export default Page;
