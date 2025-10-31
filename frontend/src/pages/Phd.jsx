import CollegeAdmissionHome from "../components/CollegeAdmissionHome";
import PHD02 from "../components/PHD02";

const Phd = () => {
  const para1 =
    "PhD courses in India provide advanced research opportunities in various fields, allowing students to explore topics deeply and contribute new ideas to their area of study. To pursue a PhD, candidates usually need a Master’s degree with good grades and must clear entrance exams like UGC-NET, CSIR-NET, or university-specific tests, followed by an interview. The duration of a PhD typically ranges from three to six years and includes coursework, research work, and thesis submission.";
  const para2 =
    "Top universities like IITs, JNU, DU, and BHU offer PhD programs in disciplines such as science, engineering, management, and humanities. After completing a PhD, graduates can work as professors, researchers, or experts in industries and organizations, making it a respected and rewarding academic path.";
  const title = "PHD (Doctor of Philosophy)";
  return (
    <div>
      <CollegeAdmissionHome para1={para1} para2={para2} title={title} />
      <PHD02 />
    </div>
  );
};

export default Phd;
