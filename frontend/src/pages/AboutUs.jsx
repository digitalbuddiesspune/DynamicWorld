import AboutUs01 from "../components/AboutUs01";
import AboutUs02 from "../components/AboutUs02";
import AboutUs03 from "../components/AboutUs03";
import AboutUs04 from "../components/AboutUs04";
import AboutUs05 from "../components/AboutUs05";
import BranchesWorld from "./BranchesAcrossWorld";
import { TRUSTWORTHY_GLOBAL } from "../constants/colors";

const COLORS = TRUSTWORTHY_GLOBAL;

const AboutUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(to bottom right, ${COLORS.neutral}10, ${COLORS.neutralAlt}10, ${COLORS.neutral}10)`,
      }}
    >
      <div className="w-full">
        <AboutUs01 />
        <AboutUs02 />
        <AboutUs03 />
        <AboutUs04 />
        <AboutUs05 />
        <BranchesWorld />
      </div>
    </div>
  );
};

export default AboutUs;
