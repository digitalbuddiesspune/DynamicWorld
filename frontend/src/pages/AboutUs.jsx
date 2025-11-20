import AboutUs01 from "../components/AboutUs01";
import AboutUs02 from "../components/AboutUs02";
import AboutUs03 from "../components/AboutUs03";
import AboutUs04 from "../components/AboutUs04";
import AboutUs05 from "../components/AboutUs05";
import BranchesWorld from "./BranchesAcrossWorld";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50  to-pink-50">
      <AboutUs01 />
      <AboutUs02 />
      <AboutUs03 />
      <AboutUs04 />
      <AboutUs05 />
      <BranchesWorld />
    </div>
  );
};

export default AboutUs;
