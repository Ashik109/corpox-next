import AboutBusiness from "./AboutBusiness";
import AboutBusinessFluid from "./AboutBusinessFluid";
import BannerBusiness from "./BannerBusiness";
import BlogBusiness from "./BlogBusiness";
import BrandBusiness from "./BrandBusiness";
import BusinessAnimations from "./BusinessAnimations";
import CounterBusiness from "./CounterBusiness";
import CtaBusiness from "./CtaBusiness";
import CtaModernBusiness from "./CtaModernBusiness";
import FooterBusiness from "./FooterBusiness";
import HeaderOne from "../01-index-consulting/HeaderOne";
import PortfolioBusiness from "./PortfolioBusiness";
import ServicesBusiness from "./ServicesBusiness";
import TeamBusiness from "./TeamBusiness";
import WorkingProcessBusiness from "./WorkingProcessBusiness";

function page() {
    return (
        <>
            <BusinessAnimations />
            <main className='page-wrapper'>
                <HeaderOne />
                <BannerBusiness />
                <TeamBusiness />
                <AboutBusiness />
                <BrandBusiness />
                <PortfolioBusiness />
                <AboutBusinessFluid />
                <ServicesBusiness />
                <CounterBusiness />
                <WorkingProcessBusiness />
                <CtaBusiness />
                <BlogBusiness />
                <CtaModernBusiness />
                <FooterBusiness />
            </main>
        </>
    )
}

export default page
