import React, { useEffect, useState } from 'react'
import Table from './Table';
import ActionButton from './ActionButton';

const ViewProperties = () => {
    const [property, setProperty] = useState([]);
    const [error,setError] = useState('')

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch("/api/ViewAllProperties");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.msg || "Something went wrong");
        }
        setProperty(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProperty();
  }, []);
  return (
    <Table
    Error = {error}
      title="Properties"
      columns={["Title", "area","status", "userName"]}
      data={property}
      renderAction={(details) => (
        <ActionButton 
            action="View"
        />
      )}
    />
  )
}

export default ViewProperties