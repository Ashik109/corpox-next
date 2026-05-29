import HeaderOne from "../01-index-consulting/HeaderOne";
import TopbarOne from "../01-index-consulting/TopbarOne";
import HeaderTwo from "../02-index-business-consulting-2/HeaderTwo";
import TopbarTwo from "../02-index-business-consulting-2/TopbarTwo";
import HeaderThree from "../03-agency/HeaderThree";
import TopbarThree from "../03-agency/TopbarThree";
import HeaderFour from "../04-services-agency/HeaderFour";
import TopbarFour from "../04-services-agency/TopbarFour";
import HeaderFive from "../05-corporate/HeaderFive";
import HeaderSix from "../06-startup/HeaderSix";
import HeaderFinancial from "../14-financial-consulting/HeaderFinancial";
import HeaderPersonalAdvisory from "../19-personal-advisory/HeaderPersonalAdvisory";
import TopbarPersonalAdvisory from "../19-personal-advisory/TopbarPersonalAdvisory";
import HeaderGymFitness from "../20-gym-fitness/HeaderGymFitness";
import HeaderMedical from "../21-medical/HeaderMedical";
import HeaderSolar from "../22-solar/HeaderSolar";
import HeaderEvent from "../23-event/HeaderEvent";
import HeaderAiAgency from "../24-ai-agency/HeaderAiAgency";
import HeaderArchitecture from "../25-architecture/HeaderArchitecture";
import HeaderConstruction from "../26-construction/HeaderConstruction";
import TopbarConstruction from "../26-construction/TopbarConstruction";
import HeaderFinancialWhite from "../white-14-financial-consulting/HeaderFinancialWhite";
import HeaderBusinessCoachWhite from "../white-15-business-coach/HeaderBusinessCoachWhite";
import HeaderRealEstateTwoWhite from "../white-17-real-estate-consulting/HeaderRealEstateTwoWhite";
import { WHITE_HEADER_ON_LIGHT, WHITE_HEADER_OVER_HERO } from "./HeaderModeClasses";

type OnepageDemoHeaderProps = {
  demo: string;
  lightMode?: boolean;
};

export default function OnepageDemoHeader({ demo, lightMode = false }: OnepageDemoHeaderProps) {
  if (lightMode) {
    switch (demo) {
      case "one":
        return (
          <>
            <TopbarOne />
            <HeaderOne className={WHITE_HEADER_OVER_HERO} />
          </>
        );
      case "two":
        return (
          <>
            <TopbarTwo />
            <HeaderTwo className={WHITE_HEADER_ON_LIGHT} />
          </>
        );
      case "three":
        return (
          <>
            <TopbarThree />
            <HeaderThree className={WHITE_HEADER_OVER_HERO} />
          </>
        );
      case "four":
        return (
          <>
            <TopbarFour />
            <HeaderFour className={WHITE_HEADER_ON_LIGHT} />
          </>
        );
      case "five":
        return (
          <>
            <TopbarTwo />
            <HeaderFive className={WHITE_HEADER_OVER_HERO} />
          </>
        );
      case "six":
        return <HeaderSix ctaHref="/contact-white" />;
      case "seven":
      case "eight":
      case "nine":
        return <HeaderTwo ctaHref="/contact-white" ctaTarget={null} mobileButtonClassName="hamberger-button" />;
      case "ten":
        return <HeaderOne className={WHITE_HEADER_OVER_HERO} />;
      case "eleven":
        return <HeaderTwo className={WHITE_HEADER_ON_LIGHT} ctaHref="/contact-white" />;
      case "twelve":
        return <HeaderTwo ctaHref="/contact-white" ctaTarget={null} homeActive variant="transparent" />;
      case "thirteen":
        return <HeaderThree className={WHITE_HEADER_OVER_HERO} />;
      case "fourteen":
        return <HeaderFinancialWhite />;
      case "fifteen":
        return <HeaderBusinessCoachWhite />;
      case "sixteen":
        return <HeaderThree className={WHITE_HEADER_OVER_HERO} />;
      case "seventeen":
        return <HeaderRealEstateTwoWhite />;
      case "eighteen":
        return (
          <HeaderTwo
            ctaHref="/contact-white"
            ctaTarget={null}
            homeActive
            mobileButtonClassName="hamberger-button"
            showTopNews
          />
        );
      case "nineteen":
        return (
          <>
            <TopbarPersonalAdvisory />
            <HeaderTwo ctaHref="/contact-white" ctaTarget={null} homeActive mobileButtonClassName="hamberger-button" />
          </>
        );
      case "twenty":
        return <HeaderGymFitness className={WHITE_HEADER_ON_LIGHT} />;
      case "21":
        return (
          <>
            <TopbarOne />
            <HeaderOne className={WHITE_HEADER_OVER_HERO} />
          </>
        );
      case "22":
        return <HeaderSolar className={WHITE_HEADER_ON_LIGHT} />;
      case "23":
        return <HeaderEvent className={WHITE_HEADER_ON_LIGHT} />;
      case "24":
        return <HeaderAiAgency className={WHITE_HEADER_ON_LIGHT} variant="light" navVariant="main" />;
      case "25":
        return <HeaderArchitecture className={WHITE_HEADER_OVER_HERO} ctaHref="/contact-white" />;
      case "26":
        return (
          <>
            <TopbarConstruction />
            <HeaderConstruction className={WHITE_HEADER_OVER_HERO} />
          </>
        );
      default:
        return <HeaderOne className={WHITE_HEADER_ON_LIGHT} />;
    }
  }

  switch (demo) {
    case "one":
      return (
        <>
          <TopbarOne />
          <HeaderOne ctaClassName="tmp-btn round" />
        </>
      );
    case "two":
      return (
        <>
          <TopbarTwo />
          <HeaderTwo />
        </>
      );
    case "three":
      return (
        <>
          <TopbarThree />
          <HeaderThree />
        </>
      );
    case "four":
      return (
        <>
          <TopbarFour />
          <HeaderFour />
        </>
      );
    case "five":
      return (
        <>
          <TopbarTwo />
          <HeaderFive />
        </>
      );
    case "six":
      return <HeaderSix />;
    case "seven":
    case "eight":
    case "eleven":
      return <HeaderOne />;
    case "nine":
      return <HeaderTwo ctaClassName="tmp-btn btn-small" />;
    case "ten":
      return <HeaderTwo ctaClassName="tmp-btn btn-small" showTopNews />;
    case "twelve":
      return <HeaderTwo variant="transparent" />;
    case "thirteen":
    case "fifteen":
    case "sixteen":
    case "seventeen":
    case "eighteen":
      return <HeaderThree />;
    case "fourteen":
      return <HeaderFinancial />;
    case "nineteen":
      return (
        <>
          <TopbarPersonalAdvisory />
          <HeaderPersonalAdvisory />
        </>
      );
    case "twenty":
      return <HeaderGymFitness />;
    case "21":
      return <HeaderMedical />;
    case "22":
      return <HeaderSolar />;
    case "23":
      return <HeaderEvent />;
    case "24":
      return <HeaderAiAgency navVariant="main" />;
    case "25":
      return <HeaderArchitecture />;
    case "26":
      return (
        <>
          <TopbarConstruction />
          <HeaderConstruction />
        </>
      );
    default:
      return <HeaderOne />;
  }
}
