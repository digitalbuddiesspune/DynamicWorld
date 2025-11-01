import React from "react";

const ContactUs1 = () => {
  const address =
    "Office No. 506, 5th Floor, Sterling Center, Opposite Arora Tower, MG Road, Camp, Pune 411001";
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const buttonBase =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all hover:-translate-y-0.5";
  const blueBtn = "bg-[#3E96F4] text-white hover:bg-[#2f79c4]";
  const grayBtn =
    "bg-gray-100 text-[#31393C] ring-1 ring-gray-200 hover:bg-gray-200";

  return (
    <div className="w-full bg-[#EDEEEB] text-[#31393C]">
      {/* Top Header */}
      <header className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl py-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 text-xs font-medium px-3 py-1">
              We’re here to help
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Contact Dynamic World
            </h1>
            <p className="mt-2 max-w-2xl text-white/85">
              Reach out to our team via phone, email, or visit our head office.
            </p>
          </div>
        </div>
      </header>

      {/* Cards Section */}
      <main className="py-20 flex justify-center items-center">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Helpline */}
            <div className="group rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#3E96F4] ring-1 ring-blue-100">
                  {/* Phone icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Helpline
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#31393C]">
                    (+91) 9820401375
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Talk to our counsellor for quick assistance.” to appear
                    across three lines for better visual balance
                  </p>

                  {/* Aligned Buttons */}
                  <div className="mt-4 flex gap-3">
                    <a
                      href="tel:+919820401375"
                      className={`${buttonBase} ${blueBtn} px-5 py-2.5 text-sm`}
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919820401375"
                      target="_blank"
                      rel="noreferrer"
                      className={`${buttonBase} ${grayBtn} px-5 py-2.5 text-sm`}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div className="group rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                  {/* Building icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="currentColor"
                  >
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Head Office
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#31393C]">
                    Pune, India
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 leading-snug">
                    Office No. 506, 5th Floor, Sterling Center
                    <br />
                    Opposite Arora Tower, MG Road, Camp
                    <br />
                    Pune 411001
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className={`${buttonBase} ${blueBtn} px-5 py-2.5 text-sm`}
                    >
                      Open in Maps
                    </a>
                    <a
                      href="https://maps.google.com/?q=Dynamic%20World%20Pune"
                      target="_blank"
                      rel="noreferrer"
                      className={`${buttonBase} ${grayBtn} px-5 py-2.5 text-sm`}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Mail */}
            <div className="group rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200 p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  {/* Mail icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Support Mail
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#31393C]">
                    Dynamicworld.edu@gmail.com
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Drop us a line and we’ll get back to you.
                    Write an email to our counsellor for quick assistance.
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://mail.google.com/mail/u/0/?fs=1&to=Dynamicworld.edu@gmail.com&tf=cm"
                      className={`${buttonBase} ${blueBtn} px-5 py-2.5 text-sm`}
                    >
                      Email Us
                    </a>
                    <a
                      href="mailto:support@dynamicworld.in?subject=Inquiry%20via%20Website&body=Hi%20Dynamic%20World%20Team,%0A%0A"
                      className={`${buttonBase} ${grayBtn} px-5 py-2.5 text-sm`}
                    >
                      Quick Template
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8" />
        </div>
      </main>
    </div>
  );
};

export default ContactUs1;
