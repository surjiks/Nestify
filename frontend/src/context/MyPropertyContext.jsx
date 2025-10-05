import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext';

const MyPropertyContext = createContext();

export const useMyProperty = () => useContext(MyPropertyContext)

export const MyPropertyProvider = ({ children }) => {
    
    const [myProperty, setMyProperty] = useState([]);
    const { profile } = useAuth();
    const [error, setError] = useState("");

    // fetch my property 
  useEffect(() => {
    const fetchMyProperty = async () => {
        if (!profile?.userName) return;
      try {
        const res = await fetch(
          `/api/myProperty?UserName=${profile?.userName}`
        );
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.msg || "You have no listing");
        }
        const data = await res.json(); 
        setMyProperty(data);
      } catch (error) {
        setError(error.message);
      }
    };
    // if (profile?.userName) {
    //   fetchMyProperty();
    // }
    fetchMyProperty();
  }, [profile?.userName]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#28a745]";
      case "Pending":
        return "bg-gray-500";
      case "Expired":
        return "bg-[#b02a37]";
      case "Rejected":
        return "bg-[#dc3545]";
        case "Sold":
        return "bg-[#0d6efd]";
    }
  };

  // fetch enquiries

  const [enquiry,setEnquiry] = useState([])

    useEffect(()=>{
        const fetchEnquiry = async() =>{
            if (!profile?.userName) return;
            try {
                const res = await fetch('/api/ViewEnquiry')
                const data = await res.json()

            if(!res.ok){
                throw new Error(data.msg)
            }
            setEnquiry(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchEnquiry()
    },[profile?.userName])
  return (
    <MyPropertyContext.Provider value={{myProperty, error, formatDate, getStatusBg , enquiry, setMyProperty}}>{children}</MyPropertyContext.Provider>
  )
}

