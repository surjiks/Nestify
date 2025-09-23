import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setAccepted(e.target.checked);
    if (e.target.checked) {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        How It Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SELLER CARD */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-2">
            👤 Sellers (Property Owners)
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>⏳ List your property with details and documents. Status starts as <b>Pending</b>.</li>
            <li>✅ After admin approval, property becomes <b>Active</b> and visible to the public.</li>
            <li>⌛ Property remains <b>Active for 1 month</b> and then moves to <b>Expired</b>.</li>
            <li>🚫 After expiry, you cannot add a new property for <b>1 month</b>.</li>
            <li>💰 You can extend your due date by making a payment to bypass the wait.</li>
          </ul>
        </div>

        {/* BUYER CARD */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center gap-2">
            🏡 Buyers
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>📢 Buyers can view all <b>Active</b> properties approved by admin.</li>
            <li>✉️ If interested, send an <b>Enquiry</b> to the property owner for further communication.</li>
          </ul>
        </div>
      </div>
        {/* ACCEPT CHECKBOX */}
        <div className="mt-6 flex items-center gap-3 justify-center">
          <input
            type="checkbox"
            id="accept"
            className="w-5 h-5 text-blue-600"
            checked={accepted}
            onChange={handleCheckboxChange}
          />
          <label className="text-xl font-bold">
            I accept the terms and conditions
          </label>
        </div>
      {/* IMPORTANT NOTES */}
      <div className="mt-16 bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Important Notes
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>One active listing per user at a time.</li>
          <li>Expired listings lock new property addition for 1 month unless extended by payment.</li>
          <li>Admin has full authority to approve or reject listings.</li>
        </ul>

      </div>
    </div>
  );
};

export default TermsAndConditions;
