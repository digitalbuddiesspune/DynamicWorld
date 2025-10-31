import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import StudyAbroadImmigration from "../pages/StudyAbroadImmigration";
import StudyAbroadVisaServies from "../pages/StudyAbroadVisaServices";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookiePolicy from "../pages/CookiePolicy";
import ReturnAndRefund from "../pages/ReturnAndRefund";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route path="/" element={<HomePage />} />
      {/* <Route path="/countries" element={} /> */}
      <Route path="/visa-services" element={<StudyAbroadVisaServies />} />
      <Route path="/immigration" element={<StudyAbroadImmigration />} />
      <Route path="/about-us" element={<AboutUs/>} />
      {/* <Route path="contact-us"></Route> */}
      <Route path="/return-and-refund" element={<ReturnAndRefund />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="cookie-policy" element={<CookiePolicy />} />
    </Route>
  )
);
