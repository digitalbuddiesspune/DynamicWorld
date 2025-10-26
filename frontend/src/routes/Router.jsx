import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import AffordableCountries from "../components/AffordableCountries";
import BVOCvsMVOC from "../components/BVOC_Vs_DVOC";
import CareerBrochurePage, {
  CareerTree,
} from "../components/CareerCounselling01";
import DistanceEducationTips from "../components/DistanceEducationTips";
import ExamToolkit90Day from "../components/ExamToolkit90Day";
import Immigration_Canada from "../components/Immigration_Canada";
import OnlineVsDistanceMBA from "../components/OnlineVsDistanceMBA";
import TopUniForBvoc from "../components/TopUniForBvoc";
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/Blogs";
import BVOC from "../pages/BVOC";
import Career from "../pages/Career";
import ContactUs from "../pages/ContactUs";
import CookiePolicy from "../pages/CookiePolicy";
import Diploma from "../pages/Diploma";
import DVOC from "../pages/DVOC";
import Engineering from "../pages/Engineering";
import ExecutiveMBAOneYear from "../pages/ExecutiveMBAOneYear";
import FAQAccordion from "../pages/FrequentlyAskedQuestion";
import HomePageLayout from "../pages/HomePageLayout";
import MbbsInAbroad from "../pages/MbbsInAbroad";
import MbbsInIndia from "../pages/MbbsInIndia";
import MVOC from "../pages/MVOC";
import OnlineEducation from "../pages/OnlineEducation";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ReturnAndRefund from "../pages/ReturnAndRefund";
import SkillCourses from "../pages/SkillCourses";
import StudyAbroad from "../pages/StudyAbroad";
import StudyAbroadAttestationApostile from "../pages/StudyAbroadAttestationApostile";
import StudyAbroadImmigration from "../pages/StudyAbroadImmigration";
import StudyAbroadVisaServies from "../pages/StudyAbroadVisaServices";
import TermsAndConditions from "../pages/TermsAndConditions";
import AllTestimonials from "../pages/Testomonials";
import Upgrad from "../pages/Upgrad";
import OnlineEducationUniversities from '../pages/OnlineEducationUniversities'
import DistanceEducationUniversities from '../pages/DistanceEducationUniversities'
import RegularEducationUniversities from '../pages/RegularEducationUniversities'
import BussinessOpportunity from "../pages/BussinessOpportunity";
const Router_Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePageLayout />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/return-and-refund" element={<ReturnAndRefund />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route path="/career-guidance" element={<CareerGuidance />} /> */}
      <Route path="blogs/online-education" element={<OnlineEducation />} />
      <Route path="/bachelor-of-vocation-dvoc" element={<BVOC />} />
      <Route path="/diploma-of-vocation-dvoc" element={<DVOC />} />
      <Route path="/master-of-vocation-mvoc" element={<MVOC />} />
      <Route path="/diploma" element={<Diploma />} />
      <Route path="/skill-course" element={<SkillCourses />} />
      <Route path="/upgrad" element={<Upgrad />} />
      <Route path="/Immigration_Canada" element={<Immigration_Canada />} />
      <Route path="/testimonials" element={<AllTestimonials />} />
      <Route path="/faqs" element={<FAQAccordion />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/career-guidance" element={<CareerBrochurePage />} />
      <Route
        path="/blogs/one-year-executive-mba"
        element={<ExecutiveMBAOneYear />}
      />
      <Route
        path="/blogs/distance-learning"
        element={<DistanceEducationTips />}
      />
      <Route path="/blog/bvocVsdvoc" element={<BVOCvsMVOC />} />

      <Route
        path="/blog/affordable-countries"
        element={<AffordableCountries />}
      />
      <Route
        path="blog/online-mba-vs-distance-mba"
        element={<OnlineVsDistanceMBA />}
      />
      <Route
        path="blog/exam-toolkit-90-day-plan"
        element={<ExamToolkit90Day />}
      />
      <Route
        path="blog/distance-learning"
        element={<DistanceEducationTips />}
      />
      <Route path="blog/career-tree" element={<CareerTree />} />
      <Route path="blog/bvoc-universities" element={<TopUniForBvoc />} />
      <Route path="/career" element={<Career />} />
      <Route
        path="/services/online-education"
        element={<OnlineEducationUniversities/>}
      />
      <Route
        path="/services/distance-education"
        element={<DistanceEducationUniversities />}
      />
      <Route
        path="/services/regular-full-time-education"
        element={<RegularEducationUniversities />}
      />

      <Route path="/services/bvoc" element={<BVOC />} />
      <Route path="/services/dvoc" element={<DVOC />} />
      <Route path="/services/mvoc" element={<MVOC />} />
      <Route path="/services/diploma-&-pg" element={<Diploma />} />
      <Route
        path="/services/certificate-&-skill-courses"
        element={<SkillCourses />}
      />
      <Route path="/services/upgrad" element={<Upgrad />} />
      <Route path="/services/mbbs-india" element={<MbbsInIndia />} />
      <Route path="/services/mbbs-abroad" element={<MbbsInAbroad />} />
      <Route path="/services/be-btech-admission" element={<Engineering />} />
      <Route path="/services/study-abroad" element={<StudyAbroad />} />
      <Route
        path="/services/immigration"
        element={<StudyAbroadImmigration />}
      />
      <Route
        path="/services/attestation-&-apostille"
        element={<StudyAbroadAttestationApostile />}
      />
      <Route
        path="/services/visa-services"
        element={<StudyAbroadVisaServies />}
      />
       <Route
        path="/services/bussiness-opportunity"
        element={<BussinessOpportunity />}
      />
    </Route>
  )
);
export default Router_Router;
