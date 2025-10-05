import React, { useEffect, useState } from 'react'
import Table from './Table';
import ActionButton from './ActionButton';

const Viewuser = () => {
    const [users, setUsers] = useState([]);
    const [error,setError] = useState('');
    const [selectedUser,setSelectedUser] = useState(null)
    const [showModel,setShowModel] = useState(false)
    const [userProperty,setUserProperty] = useState([])

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

   const handleView = async(detail) =>{
      setSelectedUser(detail)
      setShowModel(true)

      try {
        const res = await fetch(`/api/UserProperty/${detail.userName}`);
        const data = await res.json()
        if(!res.ok){
          throw new Error(data.msg ||"Failed to fetch user properties")
        }
        
        setUserProperty(data)
      } catch (error) {
        console.log(error.message)
      }
    }
  return (
    <div>
    <Table 
    Error = {error}
        title="User Details"
        columns={["_id","userName",'email']}
        data ={users}
        renderAction={(details)=>(

        <ActionButton 
        action="View" 
        onClick={()=>handleView(details)}
        />
        )}
    />

        {selectedUser && showModel && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 text-black'> 
          <div className='bg-white p-6 rounded-lg shadow-lg w-[600px] space-y-3'>

              <button onClick={()=>setShowModel(false)} className='float-right'><i class="fa-regular fa-circle-xmark text-3xl cursor-pointer"></i></button>

            <h2 className="text-xl font-bold mb-3 text-center">User Info</h2>

              <p><strong>Name:</strong> {selectedUser.userName}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>ID:</strong> {selectedUser._id}</p>
              <p><strong>Membership:</strong> {selectedUser.membership ? "Active" : "Inactive"}</p>

              <h2 className="text-xl font-bold mb-3 text-center">Properties</h2>

                {userProperty.length >0 ? (
                  <ul>
                    {userProperty.map((property, index)=>(
                      <li key={index}>
                        <span className="font-medium">{property.Title}</span> – {property.status}
                      </li>
                    ))}
                  </ul>
                ):(<p className="text-red-500">No properties found.</p>)}
          </div>
          </div>
        )}
    </div>

    
  )
}

export default Viewuser