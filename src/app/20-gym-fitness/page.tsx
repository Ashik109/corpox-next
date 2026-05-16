import RealEstateAnimations from "../16-real-estate-consulting/RealEstateAnimations";
import AboutGymFitness from "./AboutGymFitness";
import AppointmentGymFitness from "./AppointmentGymFitness";
import BannerGymFitness from "./BannerGymFitness";
import BlogGymFitness from "./BlogGymFitness";
import BodyClassGymFitness from "./BodyClassGymFitness";
import BrandGymFitness from "./BrandGymFitness";
import FooterGymFitness from "./FooterGymFitness";
import HeaderGymFitness from "./HeaderGymFitness";
import PricingGymFitness from "./PricingGymFitness";
import ServicesGymFitness from "./ServicesGymFitness";
import TeamGymFitness from "./TeamGymFitness";
import TimeTableGymFitness from "./TimeTableGymFitness";

function Page() {
    return (
        <>
            <BodyClassGymFitness />
            <RealEstateAnimations />
            <main className="page-wrapper">
                <HeaderGymFitness />
                <BannerGymFitness />
                <ServicesGymFitness />
                <AboutGymFitness />
                <TeamGymFitness />
                <TimeTableGymFitness />
                <PricingGymFitness />
                <AppointmentGymFitness />
                <BlogGymFitness />
                <BrandGymFitness />
                <FooterGymFitness />
            </main>
        </>
    );
}

export default Page;
