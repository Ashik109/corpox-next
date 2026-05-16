import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutSolar from "./AboutSolar";
import BannerSolar from "./BannerSolar";
import BlogSolar from "./BlogSolar";
import BodyClassSolar from "./BodyClassSolar";
import BrandSolar from "./BrandSolar";
import ContactSolar from "./ContactSolar";
import FooterSolar from "./FooterSolar";
import GetInTouchSolar from "./GetInTouchSolar";
import HeaderSolar from "./HeaderSolar";
import PricingSolar from "./PricingSolar";
import ServicesSolar from "./ServicesSolar";
import ServiceTabsSolar from "./ServiceTabsSolar";
import VideoSolar from "./VideoSolar";

function Page() {
    return (
        <>
            <BodyClassSolar />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderSolar />
                <BannerSolar />
                <ServiceTabsSolar />
                <GetInTouchSolar />
                <ServicesSolar />
                <AboutSolar />
                <PricingSolar />
                <ContactSolar />
                <VideoSolar />
                <BlogSolar />
                <BrandSolar />
                <FooterSolar />
            </main>
        </>
    );
}

export default Page;
