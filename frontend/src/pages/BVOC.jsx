import BVOC2 from "../components/BVOC2";
import VocationCoursesHome from "../components/VocationCoursesHome";

const BVOC = () => {
  const para1 =
    "The Bachelor of Vocation (BVoc) is an undergraduate program focused on practical skills and vocational training. BVoc emphasizes hands-on learning, industry projects, and internships, preparing students for employment or entrepreneurship. Specializations span retail, healthcare, hospitality, IT, and more. Programs use a modular structure with flexible exit points (Diploma / Advanced Diploma), aligning with modern workforce demands.";
  const para2 =
    "The BVoc degree promotes employability by bridging the gap between academic learning and industry needs. Students gain exposure to real-world practices through collaborations with companies, expert-led sessions, and continuous skill assessment. This approach ensures graduates are job-ready, capable of adapting to evolving technologies, and prepared to launch successful careers across multiple sectors or pursue higher vocational qualifications.";
  const title = "Bachelor of Vocation Courses";
  const short = "BVOC";
  return (
    <div className="">
      <VocationCoursesHome
        title={title}
        short={short}
        para1={para1}
        para2={para2}
      />
      <BVOC2 />
      {/* <BVOC3 /> */}
    </div>
  );
};

export default BVOC;
