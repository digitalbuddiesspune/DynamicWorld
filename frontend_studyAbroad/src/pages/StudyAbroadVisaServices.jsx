import CollegeAdmissionHome from "../components/CollegeAdmissionHome";
import VicaServices1 from "../components/VisaService01";
import VicaServices2 from "../components/VisaService02";
import VicaServices3 from "../components/VisaService03";
import VicaServices4 from "../components/VisaService4";

const StudyAbroadVisaServies = () => {
  const para1 =
    "Our visa services offer a seamless and efficient process for obtaining work, travel, and study visas to top global destinations. We handle all the paperwork, application submissions, and documentation requirements, ensuring you a hassle-free experience. Whether you're looking to relocate for work or leisure, we provide expert guidance to make your visa journey smooth and stress-free.";
  const para2 =
    "Travelers entering any country are required to have a valid visa. Simplify your travel planning by reviewing essential information about various visa types, application processes, and document requirements, ensuring a smooth and hassle-free experience.";
  const title = "Visa Services";
  return (
    <div>
      <CollegeAdmissionHome title={title} para1={para1} para2={para2} />
      <VicaServices1 />
      <VicaServices2 />
      <VicaServices3 />
      <VicaServices4 />
    </div>
  );
};

export default StudyAbroadVisaServies;
