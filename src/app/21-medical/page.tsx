import CtaModernBusiness from "../08-business/CtaModernBusiness";
import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutMedical from "./AboutMedical";
import BannerMedical from "./BannerMedical";
import BlogMedical from "./BlogMedical";
import BodyClassMedical from "./BodyClassMedical";
import BrandMedical from "./BrandMedical";
import CounterMedical from "./CounterMedical";
import FooterMedical from "./FooterMedical";
import HeaderMedical from "./HeaderMedical";
import PortfolioMedical from "./PortfolioMedical";
import ServicesMedical from "./ServicesMedical";
import TestimonialMedical from "./TestimonialMedical";
import TimeTableMedical from "./TimeTableMedical";

function Page() {
    return (
        <>
            <BodyClassMedical />
            <RealEstateAnimations />
            <main className="page-wrapper demo-medical">
                <HeaderMedical />
                <BannerMedical />
                <TimeTableMedical />
                <AboutMedical />
                <ServicesMedical />
                <CounterMedical />
                <PortfolioMedical />
                <TestimonialMedical />
                <BlogMedical />
                <BrandMedical />
                <CtaModernBusiness />
                <FooterMedical />
            </main>
        </>
    );
}

export default Page;
