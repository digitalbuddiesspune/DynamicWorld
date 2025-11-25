import {
  AdmissionCulturalBenefits,
  UltraLightweightLandingPage,
} from "../components/StudyAbroadCountriesList";
import StudyAbroadServices from "../components/StudyAbroadServices";
import StudyAbroadTestomonials from "../components/StudyAbroadTestomonials";
import WhatWeProvide from "../components/StudyAbroadWhatWeProvide";
import StudyAbroad from "./StudyAbroad";
const StudyAbroadHomePage = () => {
  return (
    <div>
      <UltraLightweightLandingPage />
      <AdmissionCulturalBenefits />
      <StudyAbroad />
      <StudyAbroadServices />
      <WhatWeProvide />
      <StudyAbroadTestomonials />
    </div>
  );
};

export default StudyAbroadHomePage;
