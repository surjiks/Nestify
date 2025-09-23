import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useMyProperty } from "../../../context/MyPropertyContext";

const MyProperty = () => {
  const {myProperty, error, formatDate, getStatusBg} = useMyProperty();
  const navigate = useNavigate();
  return (
    <div className="md:flex grid">
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
                      className="h-[100px] pl-5"
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
                        <button onClick={()=>navigate(`/renewplan/${property._id}`)} className="bg-amber-300 text-lg p-1 w-30 text-center rounded-lg">
                          Renew Now
                        </button>
                      </div>
                    )}
                  </div>

                  {(property.status == "Pending" || property.status == "Active") && (
                    <div className="outline flex items-center p-2 justify-end">
                    <button className="text-red-500 px-5 hover:outline hover:bg-red-100"
                    onClick={()=>navigate(`/updateproperty/${property._id}`)}>
                      Edit Details
                    </button>
  
                  </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProperty;
