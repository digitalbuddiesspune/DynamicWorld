import CollegeAdmissionHome from "../components/CollegeAdmissionHome";
import MBBSIndia02 from "../components/MBBSIndia02";

const MbbsInIndia = () => {
  const para1 =
    "MBBS is a 5-year undergraduate medical degree followed by a 1-year internship, combining medicine and surgery. It is the first step to becoming a practicing medical professional. Apart from MBBS, India offers various other medical courses, both undergraduate and postgraduate. To pursue MBBS, candidates need at least 50% in 10+2 with Physics, Biology, and Chemistry, along with a cleared NEET exam. NEET is mandatory for both undergraduate (NEET UG) and postgraduate (NEET PG) medical courses.";
  const para2 =
    "The MBBS program emphasizes in-depth theoretical learning and extensive clinical training, preparing students for real-world medical practice. Throughout the course, learners gain hands-on experience through hospital rotations, lab work, and patient care under expert supervision. Graduates can pursue specializations, postgraduate studies, or medical licensing exams in India or abroad, opening pathways to careers in clinical practice, research, or healthcare administration.";
  const title = "MBBS In india";
  return (
    <div className="">
      <CollegeAdmissionHome title={title} para1={para1} para2={para2} />
      <MBBSIndia02 />
    </div>
  );
};

export default MbbsInIndia;
