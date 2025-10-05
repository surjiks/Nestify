import React from "react";
import { useNavigate } from "react-router-dom";

const MembershipPayment = () => {
  const navigate = useNavigate();

  const handlePayment = async(e) => {
    e.preventDefault();
    const res = await fetch('/api/membership',{
        method: "POST",
        credentials: "include"
    })
     const data = await res.json()
    if(res.ok){
    alert("Payment Successful! 🎉 Membership Activated");
    navigate("/myproperty");
    }
    else{
         alert(data.msg);
    }
  };

  return (
    <div className="h-[90vh] flex justify-center items-center p-5">
      <div className="bg-gradient-to-br from-yellow-50 to-white w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">

        <div className="text-center">
          <span className="text-4xl">👑</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Premium Membership</h2>
          <p className="text-gray-500 text-sm mt-1">Enjoy exclusive benefits for 365 days</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 mt-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800">Membership Plan</h3>
          <p className="text-gray-700 mt-1">Unlimited ads • 365 days • Priority support</p>
          <p className="text-2xl font-bold text-yellow-700 mt-3">₹ 1999</p>
        </div>

        <form onSubmit={handlePayment} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium">CVV</label>
              <input
                type="password"
                placeholder="***"
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition duration-300"
          >
            Pay Now ₹1999
          </button>
        </form>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full text-gray-600 hover:text-gray-800 underline text-sm"
        >
          Cancel & Go Back
        </button>
      </div>
    </div>
  );
};

export default MembershipPayment;
