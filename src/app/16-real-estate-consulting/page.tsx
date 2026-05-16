import BodyClass from "../white-01-index-consulting/BodyClass";
import AboutRealEstate from "./AboutRealEstate";
import BannerRealEstate from "./BannerRealEstate";
import BlogRealEstate from "./BlogRealEstate";
import ContactRealEstate from "./ContactRealEstate";
import CounterRealEstate from "./CounterRealEstate";
import CtaRealEstate from "./CtaRealEstate";
import FeaturedPropertiesRealEstate from "./FeaturedPropertiesRealEstate";
import FooterRealEstate from "./FooterRealEstate";
import GalleryRealEstate from "./GalleryRealEstate";
import HeaderThree from "../03-agency/HeaderThree";
import MissionVisionRealEstate from "./MissionVisionRealEstate";
import RealEstateAnimations from "./RealEstateAnimations";
import ServicesRealEstate from "./ServicesRealEstate";
import VideoRealEstate from "./VideoRealEstate";

function Page() {
    return (
        <>
            <BodyClass className="real-estate-demo" />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderThree />
                <BannerRealEstate />
                <ServicesRealEstate />
                <AboutRealEstate />
                <CounterRealEstate />
                <MissionVisionRealEstate />
                <FeaturedPropertiesRealEstate />
                <GalleryRealEstate />
                <VideoRealEstate />
                <ContactRealEstate />
                <CtaRealEstate />
                <BlogRealEstate />
                <FooterRealEstate />
            </main>
        </>
    );
}

export default Page;
