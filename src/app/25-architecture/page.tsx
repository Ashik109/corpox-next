import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutArchitecture from "./AboutArchitecture";
import BannerArchitecture from "./BannerArchitecture";
import BlogArchitecture from "./BlogArchitecture";
import BodyClassArchitecture from "./BodyClassArchitecture";
import FooterArchitecture from "./FooterArchitecture";
import HeaderArchitecture from "./HeaderArchitecture";
import PortfolioArchitecture from "./PortfolioArchitecture";
import ServicesArchitecture from "./ServicesArchitecture";

function Page() {
    return (
        <>
            <BodyClassArchitecture />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderArchitecture />
                <BannerArchitecture />
                <AboutArchitecture />
                <PortfolioArchitecture />
                <ServicesArchitecture />
                <BlogArchitecture />
                <FooterArchitecture />
            </main>
        </>
    );
}

export default Page;
