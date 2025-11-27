import React from "react";
import { BookOpen, Users, Clock, TrendingUp, FileCheck, Award, Target, CheckCircle2 } from "lucide-react";

const HomeTuition = () => {
  const tuitionData = [
    {
      category: "State Boards",
      details: "1st to 12th All Subjects",
    },
    {
      category: "CBSC Board",
      details: "1st to 12th All Subjects",
    },
    {
      category: "ICSE Board",
      details: "1st to 12th All Subjects",
    },
    {
      category: "IB Board",
      details: "1st to 12th All Subjects",
    },
    {
      category: "NIOS Board",
      details: "1st to 12th All Subjects",
    },
    {
      category: "MBA Entrance",
      details: "CAT | CET | CMAT | XAT | NMAT | SNAP | CUET PG | MAT",
    },
    {
      category: "TISS Entrance",
      details: "TISS NET",
    },
    {
      category: "LAW Entrance",
      details: "CLAT | AILET | LSAT | MH CET LAW",
    },
    {
      category: "MCA Entrance",
      details: "MHCET | NIMCET",
    },
    {
      category: "B.Ed Entrance",
      details: "B.Ed CET",
    },
    {
      category: "Govt / Bank Exams",
      details: "UPSC | SSC | Banking | Railway | Postal | Defense",
    },
    {
      category: "BBA Entrance",
      details: "IPMAT | SET | NPAT | DU JAT",
    },
    {
      category: "NCHMCT JEE",
      details: "Hotel Management",
    },
    {
      category: "BHMCT",
      details: "Bachelor of Hotel Management",
    },
    {
      category: "E-CHAT",
      details: "Engineering Common Entrance Test",
    },
    {
      category: "IHM-A",
      details: "Institute of Hotel Management",
    },
    {
      category: "IELTS",
      details: "International English Language Testing System",
    },
    {
      category: "TOEFL",
      details: "Test of English as A Foreign Language",
    },
    {
      category: "PTE",
      details: "Pearson Test of English",
    },
    {
      category: "GRE",
      details: "Graduate Record Examination",
    },
    {
      category: "GMAT",
      details: "Graduate Management Admission Test",
    },
    {
      category: "SAT",
      details: "Scholastic Assessment Test",
    },
    {
      category: "MPSC",
      details: "Maharashtra Public Service Commission",
    },
    {
      category: "UPSC",
      details: "Union Public Service Commission",
    },
  ];

  // Image URLs (using Unsplash for free high-quality images)
  const heroImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop";
  const tutorImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop";
  const studyImage = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop";
  const successImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop";

  return (
    <div className="bg-gradient-to-br from-[#F8F3ED] via-[#F5F0EA] to-[#F8F3ED] border-b border-[#D4D4D4]">
      {/* Header with Gradient */}
      <header className="bg-gradient-to-r from-[#008080] via-[#009999] to-[#008080] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 drop-shadow-lg">
                Home Tuitions & Online Tuitions
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
                Personalized learning that transforms academic performance
              </p>
            </div>
            <div className="w-full md:w-96 h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Home Tuition" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="bg-[#F8F3ED]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
          {/* Tuition Data Grid with Colors */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl shadow-lg border-2 border-blue-100 p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-[#008080] to-[#00B3B3] rounded-full"></span>
                Available Courses & Exams
              </h2>
              <p className="text-gray-600" style={{ fontSize: "0.9375rem" }}>
                Comprehensive tutoring for all boards, competitive exams, and entrance tests
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tuitionData.map((item, index) => {
                const colors = [
                  "from-blue-50 to-blue-100 border-blue-200",
                  "from-purple-50 to-purple-100 border-purple-200",
                  "from-green-50 to-green-100 border-green-200",
                  "from-orange-50 to-orange-100 border-orange-200",
                  "from-pink-50 to-pink-100 border-pink-200",
                  "from-teal-50 to-teal-100 border-teal-200",
                ];
                const colorClass = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colorClass} border-2 rounded-lg p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <span className="text-lg font-bold text-[#008080]">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-gray-900 mb-2 group-hover:text-[#008080] transition-colors"
                          style={{ fontSize: "0.9375rem" }}
                        >
                          {item.category}
                        </h3>
                        <p
                          className="text-gray-700 leading-relaxed"
                          style={{ fontSize: "0.875rem" }}
                        >
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Article Section */}
          <div className="bg-gradient-to-br from-white via-blue-50/20 to-white rounded-xl shadow-xl border-2 border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#008080] to-[#00B3B3] p-6 text-white">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-2"
                style={{ fontSize: "1.75rem" }}
              >
                Why Home Tuition Is the Best Learning Choice for Students in 2026
              </h2>
              <p className="text-white/90" style={{ fontSize: "0.9375rem" }}>
                Discover how personalized learning transforms academic success
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.75" }}>
                    In today's fast-paced education system, students face increasing pressure to perform well academically. With large classroom sizes, limited teacher attention, and increasing competition, many students struggle to keep up. This is where home tuition plays a vital role. Home tutoring provides personalized, one-on-one learning that helps students understand concepts better, builds confidence, and improves academic performance.
                  </p>
                </div>
                <div className="w-full md:w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={tutorImage} 
                    alt="Personalized Tutoring" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Benefit Card 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontSize: "1.25rem" }}>
                      1. Personalized Attention
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4" style={{ fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    In schools, teachers often have to manage 40–60 students at once. A home tutor teaches only one student, allowing personalized focus.
                  </p>
                  <ul className="space-y-2">
                    {["Better clarity of concepts", "Faster doubt-solving", "Customized teaching methods", "Improved retention"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700" style={{ fontSize: "0.875rem" }}>
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefit Card 2 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontSize: "1.25rem" }}>
                      2. Safe Learning Environment
                    </h3>
                  </div>
                  <p className="text-gray-700" style={{ fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    Learning at home reduces distractions and helps students focus better. Parents feel secure knowing their child is studying in a safe environment.
                  </p>
                </div>

                {/* Benefit Card 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontSize: "1.25rem" }}>
                      3. Flexible Timings
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4" style={{ fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    Home tuition offers complete flexibility. Students can choose timings that suit their school schedule.
                  </p>
                  <ul className="space-y-2">
                    {["Board exams", "Unit tests", "Homework support", "Revisions", "Competitive exams"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700" style={{ fontSize: "0.875rem" }}>
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefit Card 4 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontSize: "1.25rem" }}>
                      4. Improved Confidence & Marks
                    </h3>
                  </div>
                  <p className="text-gray-700" style={{ fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    With one-on-one support, students feel more confident and stress-free. As their understanding improves, their marks also start improving automatically.
                  </p>
                </div>

                {/* Benefit Card 5 */}
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontSize: "1.25rem" }}>
                      5. Progress Tracking
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4" style={{ fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    Most home tutors conduct weekly tests to monitor progress. Parents can track:
                  </p>
                  <ul className="space-y-2">
                    {["Test scores", "Improvement areas", "Strengths", "Overall performance"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700" style={{ fontSize: "0.875rem" }}>
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefit Card 6 */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontSize: "1.25rem" }}>
                      6. Exam Preparation
                    </h3>
                  </div>
                  <p className="text-gray-700" style={{ fontSize: "0.9375rem", lineHeight: "1.75" }}>
                    Home tutors help students focus on important topics, solve previous-year papers, and use exam strategies to score higher.
                  </p>
                </div>
              </div>

              {/* Benefit Card 7 - Full Width */}
              <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border-2 border-indigo-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontSize: "1.25rem" }}>
                      7. Boosts Discipline & Study Habits
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: "0.9375rem", lineHeight: "1.75" }}>
                      A home tutor helps students maintain a routine, complete homework on time, and follow an organized timetable—skills that stay with them for life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion with Image */}
              <div className="mt-8 bg-gradient-to-br from-[#008080] to-[#00B3B3] rounded-xl p-8 text-white shadow-xl">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontSize: "1.5rem" }}>
                      Conclusion
                    </h3>
                    <p className="text-white/95 leading-relaxed" style={{ fontSize: "1rem", lineHeight: "1.75" }}>
                      Home tuition is not just extra support—it is a personalized learning system that builds confidence, improves performance, and ensures academic growth. In 2025 and beyond, home tuition will continue to be the most effective method of learning for students across India.
                    </p>
                  </div>
                  <div className="w-full md:w-80 h-64 rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src={successImage} 
                      alt="Academic Success" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Topics Section */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl shadow-lg border-2 border-violet-200 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontSize: "1.5rem" }}>
              <BookOpen className="w-6 h-6 text-violet-600" />
              Related Topics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Signs Your Child Needs a Home Tutor",
                "Why Home Tuition is Better Than Coaching Classes",
                "How a Home Tutor Helps Improve Concentration",
                "Importance of Concept-Based Learning",
                "Best Study Tips for Slow Learners",
                "How Home Tuition Helps in Board Exam Preparation",
                "Why One-on-One Learning Works",
                "Do Students Still Need Tuition in 2025?",
                "Online vs Offline Home Tuition",
                "Tips for Parents to Select the Right Tutor"
              ].map((topic, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border-2 border-violet-100 hover:border-violet-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 group-hover:text-violet-700 font-medium transition-colors" style={{ fontSize: "0.9375rem" }}>
                      {topic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Home Page Content Section */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg border-2 border-cyan-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900" style={{ fontSize: "1.5rem" }}>
                Welcome to Dynamic World
              </h3>
            </div>
            <div className="space-y-4 text-gray-700" style={{ fontSize: "1rem", lineHeight: "1.75" }}>
              <p className="text-lg font-semibold text-gray-800">
                Your trusted home tutoring service. We provide expert tutors for Class 1–12, CBSE, ICSE, and State Board students.
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-cyan-100">
                <p className="font-bold text-gray-900 mb-4" style={{ fontSize: "1.125rem" }}>Our tutors offer:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "One-on-one home tuition",
                    "Personalized study plans",
                    "Weekly tests & doubt-solving",
                    "Competitive exam preparation",
                    "Online & offline classes"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg border-2 border-emerald-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900" style={{ fontSize: "1.5rem" }}>
                About Us
              </h3>
            </div>
            <div className="space-y-6 text-gray-700" style={{ fontSize: "1rem", lineHeight: "1.75" }}>
              <p className="text-lg">
                At <strong className="text-emerald-700">Dynamic World</strong>, we believe every child learns differently. With over <strong className="text-emerald-700">20 years of experience</strong>, we offer personalized teaching that helps students understand concepts better and improve marks faster.
              </p>

              <div className="bg-white rounded-lg p-6 border-2 border-emerald-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2" style={{ fontSize: "1.125rem" }}>
                  <Target className="w-5 h-5 text-emerald-600" />
                  Our Mission
                </h4>
                <p className="text-gray-700">
                  To provide high-quality education through expert tutors and individualized learning.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-emerald-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontSize: "1.125rem" }}>
                  <Award className="w-5 h-5 text-emerald-600" />
                  Why Choose Us?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Verified tutors",
                    "Customized study plans",
                    "100% parent satisfaction",
                    "Result-oriented teaching"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeTuition;

