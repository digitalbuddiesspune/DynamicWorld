import StudyAbroadServices from "../components/StudyAbroadServices";
import StudyAbroadTestimonials from "../components/StudyAbroadTestomonials";
import ContactForm from "./ContectForm";
import DynamicCountries from "./DynamicCountries";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <DynamicCountries />
      <StudyAbroadServices />
      <StudyAbroadTestimonials />
      <ContactForm />
    </div>
  );
};

export default HomePage;
