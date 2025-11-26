import React from "react";

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

  return (
    <div className="bg-[#F8F3ED] border-b border-[#D4D4D4]">
      {/* Header */}
      <header className="bg-[#008080] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            Home Tuitions & Online Tuitions
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="bg-[#F8F3ED]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {tuitionData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex-shrink-0 min-w-[140px] sm:min-w-[180px]">
                    <h3
                      className="text-sm sm:text-base font-semibold text-gray-900"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {item.category}
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-sm text-gray-700 leading-relaxed"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeTuition;

