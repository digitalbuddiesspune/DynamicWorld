const Boards = () => {
  return (
    <section className="min-h-screen w-full  text-[#31393C]">
      {/* Header */}
      <header className="bg-[#3E96F4] text-white py-6  shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center tracking-wide">
          Educational Boards Overview
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-5 lg:px-10 py-10 space-y-10">
        {/* 1. Maharashtra Board */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            1. Maharashtra State Board (MSBSHSE)
          </h2>
          <p>
            The Maharashtra State Board of Secondary and Higher Secondary
            Education (MSBSHSE) is an autonomous body established under the
            "Maharashtra Secondary Boards Act" 1965 (amended in 1977). It
            conducts the SSC (Class 10) and HSC (Class 12) examinations in
            Maharashtra, India.
          </p>
          <p className="mt-2">
            Headquarters: Pune, with nine divisional boards at Pune, Mumbai,
            Chhatrapati Sambhaji Nagar, Nashik, Kolhapur, Amravati, Latur,
            Nagpur, and Konkan.
          </p>

          <h3 className="font-semibold mt-5">HSC Streams and Subjects</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Science:</b> Physics, Chemistry, Biology, Mathematics &
              Statistics, IT, English, Environmental Education.
            </li>
            <li>
              <b>Commerce:</b> Accountancy, Commerce & Management, Economics,
              Secretarial Practice, Mathematics & Statistics, English,
              Environmental Education.
            </li>
            <li>
              <b>Arts:</b> History, Geography, Political Science, Economics,
              Logic, Psychology, Sociology, English, Environmental Education.
            </li>
          </ul>

          <h3 className="font-semibold mt-5">Recognition and Validity</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Recognized by the Government of Maharashtra.</li>
            <li>
              Member of COBSE (Council of Boards of School Education in India).
            </li>
            <li>Accepted for higher education and employment across India.</li>
            <li>Certificates available digitally via DigiLocker.</li>
          </ul>
        </div>

        {/* 2. NIOS */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. NIOS (National Institute of Open Schooling)
          </h2>
          <p>
            The National Institute of Open Schooling (NIOS) is an autonomous
            organization under the Ministry of Education, Government of India.
            It offers formal courses at secondary and senior secondary levels
            via open and distance learning.
          </p>

          <h3 className="font-semibold mt-5">Recognition and Validity</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Recognized national board under the Ministry of Education.</li>
            <li>Member of COBSE and recognized by AIU for higher studies.</li>
            <li>
              Accepted for competitive exams like NEET, JEE, UPSC, and State
              PSCs.
            </li>
            <li>
              Accepted by AICTE-approved institutions for technical and
              professional courses.
            </li>
          </ul>

          <h3 className="font-semibold mt-5">
            Streams and Subject Combinations
          </h3>
          <p>NIOS allows flexible subject selection without rigid streams:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Science:</b> Physics, Chemistry, Biology, Mathematics, Computer
              Science.
            </li>
            <li>
              <b>Commerce:</b> Accountancy, Economics, Business Studies, Data
              Entry Operations.
            </li>
            <li>
              <b>Arts/Humanities:</b> History, Geography, Political Science,
              Psychology, Law.
            </li>
          </ul>

          <h3 className="font-semibold mt-5">Examination System</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Public Exams: Twice a year (April/May & October/November).</li>
            <li>On-Demand Exams (ODES): Flexible testing when ready.</li>
            <li>
              Transfer of Credit: Up to two passed subjects from other boards
              can be carried over.
            </li>
          </ul>
        </div>

        {/* 3. BOSSE */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            3. BOSSE (Board of Open Schooling and Skill Education, Sikkim)
          </h2>
          <p>
            BOSSE is a state open schooling board established by the Government
            of Sikkim, recognized for secondary and senior secondary education
            with academic and vocational options.
          </p>

          <h3 className="font-semibold mt-5">Recognition and Approvals</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Member of COBSE.</li>
            <li>
              Granted AIU equivalence for higher education and employment.
            </li>
            <li>
              Recognized by NIOS and professional councils like PCI and INC.
            </li>
          </ul>

          <h3 className="font-semibold mt-5">Streams and Subjects</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Languages:</b> Hindi, English, Urdu, Sanskrit, Bengali, Tamil.
            </li>
            <li>
              <b>Academic:</b> Mathematics, Physics, Chemistry, Biology,
              Economics, Business Studies.
            </li>
            <li>
              <b>Vocational:</b> Data Entry, Secretarial Practice,
              Entrepreneurship, House Keeping.
            </li>
          </ul>
        </div>

        {/* 4. Jamia Urdu Aligarh */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. Jamia Urdu Aligarh (JUA)
          </h2>
          <p>
            Jamia Urdu Aligarh, established in 1939, promotes Urdu education and
            offers recognized secondary (Adeeb) and senior secondary
            (Adeeb-e-Mahir) programs equivalent to Classes 10 and 12.
          </p>

          <h3 className="font-semibold mt-5">Recognition and Approvals</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Member of COBSE.</li>
            <li>
              Recognized by the Government of India for employment purposes.
            </li>
            <li>Minority status under the NCMEI Act 2004.</li>
            <li>
              AIU equivalence varies by university; advised to confirm at the
              time of admission.
            </li>
          </ul>

          <h3 className="font-semibold mt-5">Streams and Courses</h3>
          <p>JUA offers two major programs:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Adeeb:</b> Class 10 equivalent.
            </li>
            <li>
              <b>Adeeb-e-Mahir:</b> Class 12 equivalent (Arts, Commerce,
              Science).
            </li>
          </ul>

          <h3 className="font-semibold mt-5">Selected Subjects</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Languages:</b> Urdu, English, Hindi, Punjabi, Bengali.
            </li>
            <li>
              <b>Core Academic:</b> Physics, Chemistry, Biology, Mathematics,
              History, Political Science, Economics, Business Studies,
              Accountancy.
            </li>
            <li>
              <b>Professional Courses:</b> Moallim-e-Urdu, B.Ed., D.El.Ed.
              (recognized by NCTE/State Universities).
            </li>
          </ul>
        </div>

        {/* 5. NWAC */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            5. Northwest Accreditation Commission (NWAC), USA
          </h2>
          <p>
            NWAC is a U.S.-based accreditation body that offers an American High
            School Diploma recognized in India as equivalent to Grade 12.
          </p>

          <h3 className="font-semibold mt-5">Recognition and Approvals</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Associate Member of COBSE since 2019.</li>
            <li>
              AIU accords equivalence to Grade 12/Senior Secondary (+2) level in
              India.
            </li>
            <li>
              Accepted for higher education and university admissions across
              India.
            </li>
          </ul>

          <h3 className="font-semibold mt-5">Streams and Subjects</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Science:</b> English, Physics, Chemistry, Mathematics, Biology,
              Computer Science, Psychology.
            </li>
            <li>
              <b>Commerce:</b> Accountancy, Business Studies, Economics,
              English, Mathematics, Computer Science.
            </li>
            <li>
              <b>Arts:</b> English, History, Political Science, Sociology,
              Psychology, Mathematics.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Boards;
