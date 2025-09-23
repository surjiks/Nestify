import React from "react";
import { FaUpload, FaCheckCircle, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="max-w-6xl m-auto">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#095B15] mb-12">
        How It Works
      </h2>

      {/* STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Step 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 text-center hover:shadow-xl transition">
          <FaUpload className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">1. List Your Property</h3>
          <p className="text-gray-600">
            Sellers can upload property details & documents. Our team verifies
            each listing before it goes live.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 text-center hover:shadow-xl transition">
          <FaCheckCircle className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">2. Get Verified</h3>
          <p className="text-gray-600">
            After admin approval, properties become active and visible to
            interested buyers instantly.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600 text-center hover:shadow-xl transition">
          <FaHandshake className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">3. Connect & Close</h3>
          <p className="text-gray-600">
            Buyers send enquiries directly to owners, making deals simple,
            transparent, and hassle-free.
          </p>
        </div>
      </div>

      {/* NOTE */}
      <div className="mt-12 text-center text-gray-600">
        <p className="italic">
          📌 Verified listings. Transparent process. Trusted connections.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
