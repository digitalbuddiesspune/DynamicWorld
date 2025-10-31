import React from "react";
import Pharmacy01 from "../components/Pharmacy01";
import Pharmacy02 from "../components/Pharmacy02";
import CollegeAdmissionHome from "../components/CollegeAdmissionHome";

const Pharmacy = () => {
  const para1 =
    "To pursue a Pharmacy course, students must have completed Class 12 in the Science stream, with subjects like Physics, Chemistry, and Biology or Mathematics (PCMB/PCM). Studying Pharmacy (D.Pharm | B.Pharm | M.Pharm) offers a wide range of academic, professional, and personal benefits. It provides students with a strong foundation in science—combining chemistry, biology, and medicine—to understand how drugs are developed, tested, and used to treat diseases. Pharmacy graduates enjoy diverse career opportunities across healthcare, research, the pharmaceutical industry, and regulatory bodies.";
  const para2 =
    "The demand for skilled pharmacists continues to rise globally, offering excellent job stability and growth. Beyond employment, pharmacy education also opens doors to entrepreneurship, allowing professionals to establish their own pharmacies or pharmaceutical ventures. Moreover, the field contributes directly to public health and patient safety, making it both a respected and rewarding profession. With international recognition and opportunities for higher studies or work abroad, pursuing pharmacy ensures a meaningful and future-proof career in the ever-evolving healthcare sector.";
  const title = "Pharmacy (D.Pharm | B.Pharm | M.Pharm)";

  return (
    <div>
      <CollegeAdmissionHome para1={para1} para2={para2} title={title} />
      <Pharmacy02 />
    </div>
  );
};

export default Pharmacy;
