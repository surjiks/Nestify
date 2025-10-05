import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext';

const PropertyContext = createContext();

export const useProperty = () => useContext(PropertyContext)

export const PropertyProvider = ({ children }) => {
    
//fetch properties

    const [properties,setProperties] = useState([]);
    const [propLoading,setPropLoading] = useState(true)
    const {profile} = useAuth()

        useEffect(()=>{
            if (!profile) return;
            const fetchProperties = async() => {
                try {
                    
                    const res = await fetch('/api/BuyProperty')
                    const data = await res.json();
                    if(!res.ok){
                        throw new Error(data.msg || "Something Went Wrong !")
                    }
                setProperties(data)
                } catch (error) {
                    console.log(error.message);
                }finally{
                    setPropLoading(false)
                }
            }
            fetchProperties()
        },[profile])
            


  return (
    <PropertyContext.Provider value={{properties, propLoading}}>{children}</PropertyContext.Provider>
  )
}

