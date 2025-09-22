import React from "react";
import Sidebar from "../../components/user/Sidebar";
import PropertyCard from "../../components/user/PropertyCard";
import { useAuth } from "../../../context/AuthContext";
import { useParams, useSearchParams } from "react-router-dom";

const Buy = () => {
  const { properties, propLoading } = useAuth();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const type = searchParams.get("type");

  const filterProperties = properties.filter((property)=>{
    if(category && type){
    return property.Category === category && property.Type === type
    }
    return true
  })

  return (
    <div className="flex">
      
      {/* <span className="text-xl font-bold">Fresh Recomendation</span>
            <span className="text-xl font-bold">-----FEATURED-----</span> */}
      {propLoading ? (
        <h1>Loading...</h1>
      ) : filterProperties.length === 0 ? (
        <div className="w-[80%] flex items-center justify-center items-center h-[80vh] m-auto">
          <h2 className="text-2xl font-semibold text-gray-500">
            No properties available
          </h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-5 grid-cols-1 justify-around gap-5 p-6 w-[80%] ml-[260px]">
          {filterProperties.map((propertyData) => (
            <PropertyCard key={propertyData._id} property={propertyData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Buy;
