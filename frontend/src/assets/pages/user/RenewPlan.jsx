import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const RenewPlanDesign = () => {
  const [plan,setPlan] = useState('');
  const { id } = useParams();

  const handleSubmit = async(e) => {
    e.preventDefault()
   try {
     const res = await fetch(`/api/dummyPayment/${id}`,{
      method: "POST",
      credentials: "include",
      headers: {
       'Content-Type':'application/json',
            },
            body: JSON.stringify({
                Plan: plan,
            }) ,
    })
    const data = await res.json()
    if(!res.ok){
      throw new Error(data.msg || "Failed to renew")
    }
    setPlan(data)
    alert(data.msg)
    Navigate('/myproperty')
   } catch (error) {
    alert(error.message)
   }

  }
  return (
    
    <div className="flex items-center justify-center h-[90vh]">
      <div className="bg-gray-100 shadow-lg rounded-2xl p-8 w-full max-w-[70%] h-[600px] grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl">
        
        {/* LEFT SIDE - Plans */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Choose a Plan
          </h1>
          <div className="space-y-10">

            <div className="p-4 border rounded-lg cursor-pointer hover:border-green-600 hover:bg-green-50">
              <h2 className="text-lg font-semibold">Silver Plan</h2>
              <p className="text-gray-600">Extend for <b>2 months</b></p>
              <p className="text-green-600 font-bold">₹100</p>
            </div>


            <div className="p-4 border rounded-lg cursor-pointer hover:border-yellow-500 hover:bg-yellow-50">
              <h2 className="text-lg font-semibold">Gold Plan</h2>
              <p className="text-gray-600">Extend for <b>3 months</b></p>
              <p className="text-yellow-600 font-bold">₹200</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Payment Form */}
        <div>
          <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Payment Details
          </h1>
          <div className="space-y-10">
            <div className="mt-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Choose Plan
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2" value={plan} onChange={(e)=>setPlan(e.target.value)} required>
              <option value="">-- Select a Plan --</option>
              <option value="silver">Silver (₹100 - 2 months)</option>
              <option value="gold">Gold (₹200 - 3 months)</option>
            </select>
          </div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-2 rounded-lg"
              required
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border p-2 rounded-lg"
              required
              />
              <input
                type="password"
                placeholder="CVV"
                className="w-1/2 border p-2 rounded-lg"
              required
              />
            </div>
          </div>

          <button type="submit" className="mt-6 w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">
            Pay Now
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RenewPlanDesign;
