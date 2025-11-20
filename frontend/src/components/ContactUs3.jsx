import React from "react";

const ContactUs3 = () => {
  return (
    <section className="bg-gradient-to-b from-white via-[#f6f8fc] to-white">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 py-8 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full">
        {/* ===== Left: Map Section ===== */}
        <div className="bg-white rounded-3xl shadow-lg ring-1 ring-[#dbeafe] overflow-hidden h-[50vh] md:h-[80vh]">
          <iframe
            title="Dynamic World Head Office - Pune"
            src="https://maps.google.com/maps?q=Dynamic+World,+Office+No.+506,+5th+Floor,+Sterling+Centre,+MG+Road,+Opposite+Aurora+Towers,+Camp,+Pune,+Maharashtra+411001&output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>

        {/* ===== Right: Office Info Text Section ===== */}
        <div className="bg-white rounded-3xl shadow-lg ring-1 ring-[#dbeafe] p-6 lg:p-10 flex flex-col justify-center text-[#0f172a]">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Dynamic World – Head Office (Pune)
          </h2>
          <p className="text-base text-[#2B2B2B] leading-relaxed mb-3">
            Office No. 506, 5th Floor, Sterling Centre,
            Opposite Aurora Towers, MG Road, Camp, Pune 411001.
          </p>
          <p className="text-sm text-[#2B2B2B] leading-relaxed mb-2">
            <strong>Phone:</strong> +91 9820401375
          </p>
          <p className="text-sm text-[#2B2B2B] leading-relaxed mb-2">
            <strong>Email:</strong> Dynamicworld.edu@gmail.com
          </p>
          <p className="text-sm text-[#2B2B2B] leading-relaxed mb-2">
            <strong>Office Hours:</strong> Mon – Sun, 10:00 AM – 7:00 PM
          </p>
          <p className="text-sm text-[#2B2B2B] leading-relaxed mt-4">
            Our Pune head office is located in the heart of the city at MG Road,
            providing career counselling, university guidance, and study abroad
            services. Visit us for expert consultation and step-by-step admission
            assistance.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactUs3;
