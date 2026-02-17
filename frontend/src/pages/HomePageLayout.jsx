import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ConfusedAboutCollege02 from "../components/ConfusedAboutCollege02";
import DynamicWorldPortal from "../components/DynamicWorldPortal";

import AboutInfo from "./AboutInfo";
import DynamicUniversityCarousel from "./DynamicUniversityCarousel";
import ExpertGuidance from "./ExpertGuidance";
import FAQAccordion from "./FrequentlyAskedQuestion";
import Hero from "./Hero";
import InquiryDetails from "./InquiryDetails";
import AllTestimonials from "./Testomonials";

const HomePageLayout = () => {
  return (
    
     

      <div>
        <Hero />
        <DynamicWorldPortal />
        <InquiryDetails />
        <DynamicUniversityCarousel />
        <AboutInfo />
        <ExpertGuidance />
        <AllTestimonials />
        <FAQAccordion />
        <ConfusedAboutCollege02 />
      </div>
   
  );
};

export default HomePageLayout;
