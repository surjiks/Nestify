import React, { useEffect, useState } from "react";
import PropertyCard from "../../components/user/PropertyCard";
import { useAuth } from "../../../context/AuthContext";
import { useLocation } from "react-router-dom";


const SearchResult = () => {
    const [searchProperty,setSearchProperty] = useState([])
    const location = useLocation();
    

    useEffect(()=>{
        const fetchSearchProperty = async() => {
            try {
                const SearchParam = new URLSearchParams(location.search);
                const area = SearchParam.get("area");
                const type = SearchParam.get("type");
                const price = SearchParam.get("price");

                const res = await fetch(`/api/Filter?area=${area || ""}&type=${type || ""}&price=${price || ""}`);
                const data = await res.json();
                if(!res.ok){
                    throw new Error("Property not Found")
                }
                setSearchProperty(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchSearchProperty()
    },[location.search])

  return (
    <div className="flex">

      {searchProperty.length === 0 ? (
        <div className="w-[80%] flex items-center justify-center items-center h-[80vh] m-auto">
          <h2 className="text-2xl font-semibold text-gray-500">
            No properties available
          </h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-5 grid-cols-1 justify-around gap-5 p-6 w-[80%] ml-[260px]">
          {searchProperty.map((propertyData) => (
            <PropertyCard key={propertyData._id} property={propertyData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;