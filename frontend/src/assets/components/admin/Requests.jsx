import React, { useEffect, useState } from 'react'
import Table from './Table'
import ActionButton from './ActionButton';
import { useNavigate } from "react-router-dom";


const Requests = () => {
    const [pendingProperty, setPendingProperty] = useState([]);
    const [error,setError] = useState('')
    const navigate = useNavigate()
  useEffect(() => {
    const fetchPendingProperty = async () => {
      try {
        const res = await fetch("/api/ViewProperty");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.msg || "Something went wrong");
        }
        setPendingProperty(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPendingProperty();
  }, []);
  return (
    <Table
      Error={error}
      title="Requests"
      columns={["Title", "userName", "Date"]}
      data={pendingProperty}
      renderAction={(details) => (
        <ActionButton 
        action="View" 
        onClick={()=>navigate(`/verifyproperty/${details._id}`)} 
        />
      )}
    />
  )
}

export default Requests