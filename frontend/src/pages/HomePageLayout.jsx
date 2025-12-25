import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ConfusedAboutCollege02 from "../components/ConfusedAboutCollege02";
import DynamicWorldPortal from "../components/DynamicWorldPortal";
import SEO from "../components/SEO";
import AboutInfo from "./AboutInfo";
import DynamicUniversityCarousel from "./DynamicUniversityCarousel";
import ExpertGuidance from "./ExpertGuidance";
import FAQAccordion from "./FrequentlyAskedQuestion";
import Hero from "./Hero";
import InquiryDetails from "./InquiryDetails";
import AllTestimonials from "./Testomonials";

const HomePageLayout = () => {
  return (
    <>
      <SEO
        title="Dynamic World – Education Consultant for Online, Distance, Regular & Overseas Education"
        description="Dynamic World is a leading education consultancy in India offering Online, Distance and Regular education across 50+ universities. We provide expert guidance for MBBS in India & Abroad, Engineering, Pharmacy, Law, PhD, Overseas Education, Career Counselling, Immigration & Visa services, and Skill-based courses like DVOC, BVOC, MVOC, Diploma and more."
        keywords="education consultant india, online education india, distance education universities, regular education colleges, mbbs admission india, mbbs abroad, overseas education consultant, engineering admission india, pharmacy admission, law admission, phd admission, vocational courses dvoc bvoc mvoc, diploma courses, career counselling, immigration and visa services, apostille attestation services, home tuition, online tuition, placement services"
        url="https://www.dynamicworld.in/"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Dynamic World",
          url: "https://www.dynamicworld.in/",
          description:
            "Dynamic World is an education consultancy offering Online, Distance and Regular education across Indian universities, MBBS in India and Abroad, Overseas Education guidance, Vocational and Skill-based courses, Career Counselling, Visa and Immigration services.",
          areaServed: ["India", "International"],
          educationalCredentialAwarded: [
            "Online Degrees",
            "Distance Degrees",
            "Regular Degrees",
            "MBBS",
            "Engineering",
            "Pharmacy",
            "Law",
            "PhD",
            "DVOC",
            "BVOC",
            "MVOC",
            "Diploma",
            "Skill Courses",
          ],
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Education & Admission Services",
            itemListElement: [
              "Online Education",
              "Distance Education",
              "Regular Education",
              "Overseas Education",
              "MBBS Admission India & Abroad",
              "Engineering Admission",
              "Career Counselling",
              "Immigration & Visa Services",
              "Attestation & Apostille Services",
              "Home & Online Tuition",
              "Placement Services",
            ],
          },
        }}
      />

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
    </>
  );
};

export default HomePageLayout;
