import React, { useEffect, useState } from 'react'
import Table from './Table';

const Viewuser = () => {
    const [users, setUsers] = useState([]);
    const [error,setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/ViewUsers");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError(error.message)
      }
    };
    fetchUser();
  }, []);

  return (
    <Table 
    Error = {error}
        title="User Details"
        columns={["_id","userName",'email']}
        data ={users}
        renderAction={(details)=>(
            <button
        type="button"
          className="border-2 border-green-500 w-[100px] text-green-500 hover:bg-green-100"
        >
          View
        </button>
        )}
    />
  )
}

export default Viewuser