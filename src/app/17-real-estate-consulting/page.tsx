import BodyClass from "../white-01-index-consulting/BodyClass";
import HeaderThree from "../03-agency/HeaderThree";
import BlogRealEstate from "../16-real-estate-consulting/BlogRealEstate";
import CtaRealEstate from "../16-real-estate-consulting/CtaRealEstate";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import VideoRealEstate from "../16-real-estate-consulting/VideoRealEstate";
import AboutRealEstateTwo from "./AboutRealEstateTwo";
import BannerRealEstateTwo from "./BannerRealEstateTwo";
import CounterRealEstateTwo from "./CounterRealEstateTwo";
import FeaturedPropertiesRealEstateTwo from "./FeaturedPropertiesRealEstateTwo";
import FooterRealEstateTwo from "./FooterRealEstateTwo";
import GalleryRealEstateTwo from "./GalleryRealEstateTwo";
import MissionVisionRealEstateTwo from "./MissionVisionRealEstateTwo";
import ServiceTabsRealEstateTwo from "./ServiceTabsRealEstateTwo";
import ContactRealEstate from "../16-real-estate-consulting/ContactRealEstate";

function Page() {
    return (
        <>
            <BodyClass className="real-estate-demo" />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderThree />
                <BannerRealEstateTwo />
                <AboutRealEstateTwo />
                <ServiceTabsRealEstateTwo />
                <FeaturedPropertiesRealEstateTwo />
                <CounterRealEstateTwo />
                <MissionVisionRealEstateTwo />
                <GalleryRealEstateTwo />
                <VideoRealEstate />
                <ContactRealEstate />
                <CtaRealEstate />
                <BlogRealEstate />
                <FooterRealEstateTwo />
            </main>
        </>
    );
}

export default Page;
