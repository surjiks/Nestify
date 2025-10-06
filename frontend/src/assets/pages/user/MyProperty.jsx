import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useMyProperty } from "../../../context/MyPropertyContext";
import { toast } from "react-toastify";

const MyProperty = () => {
  const { myProperty, error, formatDate, getStatusBg, setMyProperty } = useMyProperty();
  const navigate = useNavigate();

  const handleClick = async (id) => {
    try {
      const res = await fetch(`/api/markSold/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Property marked as sold!");
        setMyProperty((prev) =>
          prev.map((p) => (p._id === id ? { ...p, status: "Sold" } : p))
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="md:flex grid  ">
      <div className="m-auto w-[60%] space-y-15">
        {error && <p>{error}</p>}
        {myProperty.length === 0 ? (
          <div className="w-[80%] flex items-center justify-center items-center h-[80vh] m-auto">
            <h2 className="text-2xl font-semibold text-gray-500">
              No properties available
            </h2>
          </div>
        ) : (
          myProperty.map((property) => (
            <div key={property._id} className="outline mt-5 h-[25%]">
              <div className="outline flex h-full">
                <div className=" h-full w-[12%] p-3 flex items-center">
                  <p>
                    FROM: <b>{formatDate(property.IssueDate)}</b> <br /> TO:{" "}
                    <b>{formatDate(property.DueDate)}</b>
                  </p>
                </div>
                <div className="outline grid w-full">
                  <div className="flex p-3">
                    <img
                      className="h-[100px] w-[120px] pl-5"
                      src={`data:image/jpeg;base64,${property.PropertyImage}`}
                      alt="property image"
                    />
                    <div className="p-3 w-[35%]">
                      <p className="text-2xl font-bold">{property.Title}</p>
                      <p className="text-xl pl-5 text-black/60">
                        {property.BHK}-BHK {property.Bathrooms}-Bathrooms{" "}
                        {property.PArea}sqft ...
                      </p>
                    </div>
                    <div className="flex items-center break-all w-[150px]">
                      <span className="font-bold text-2xl">
                        ₹ {property.Price}
                      </span>
                    </div>
                    <div>
                      <div className="ml-5 flex items-center h-full">
                        <span
                          className={`text-white text-lg p-1 w-30 text-center rounded-lg ${getStatusBg(
                            property.status
                          )}`}
                        >
                          {property.status}
                        </span>
                      </div>
                    </div>
                    {property.status == "Expired" && (
                      <div className="m-auto">
                        <button
                          onClick={() => navigate(`/renewplan/${property._id}`)}
                          className="bg-amber-300 text-lg p-1 w-30 text-center rounded-lg"
                        >
                          Renew Now
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="outline flex items-center p-2 justify-end">
                    {property.status === "Active" && (
                      <button
                        className="text-green-500 px-5 hover:outline hover:bg-green-100"
                        onClick={() => handleClick(property._id)}
                      >
                        Mark As Sold
                      </button>
                    )}

                    {(property.status === "Pending" ||
                      property.status === "Active") && (
                      <button
                        className="text-red-500 px-5 hover:outline hover:bg-red-100 ml-2"
                        onClick={() =>
                          navigate(`/updateproperty/${property._id}`)
                        }
                      >
                        Edit Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="fixed right-10 top-50 w-72 rounded-2xl shadow-lg bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 p-6 text-center space-y-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl">👑</span>
          <h3 className="text-lg font-semibold text-yellow-800 mt-2">
            Exclusive Membership
          </h3>
        </div>

        <p className="text-sm text-gray-600">
          Unlock more benefits by taking our premium membership:
        </p>

        <ul className="text-left list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Post unlimited ads</li>
          <li>
            Package valid for <b>365 days</b>
          </li>
          <li>Priority support</li>
        </ul>

        <button onClick={()=>navigate('/membership')} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold py-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition duration-300">
          👑 Take Membership
        </button>
      </div>
    </div>
  );
};

export default MyProperty;
