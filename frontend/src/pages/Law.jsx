import CollegeAdmissionHome from "../components/CollegeAdmissionHome";
import Law02 from "../components/Law02";

const Law = () => {
  const para1 =
    "If you’re looking to build a career in law, you can choose from a variety of undergraduate LLB programs such as BA LLB, BBA LLB, BLS-LLB, BSc LLB, or BCom LLB. These courses are designed to provide a strong foundation in legal studies, and their duration typically spans five years.";
  const para2 =
    "During the program, students gain an in-depth understanding of constitutional law, criminal law, corporate law, and international legal systems, along with practical training through moot courts, legal aid camps, and internships. Graduates can pursue careers as advocates, legal advisors, corporate counsels, or judicial officers, or continue their education with specialized LLM or diploma programs in fields like intellectual property law, cyber law, or human rights.";
  const title = "LAW";
  return (
    <div>
      <CollegeAdmissionHome para1={para1} para2={para2} title={title} />
      <Law02 />
    </div>
  );
};

export default Law;
