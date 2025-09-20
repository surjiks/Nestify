import React from 'react'
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminNavbar = () => {

  const { logout } = useAuth()
  const navigate = useNavigate();

  const onLogout = async() => {
    try {
      await logout();                         
      toast.success("Logged out");
      navigate("/login", { replace: true }); 
    } catch {
      toast.error("Logout failed");
    }
  }
  return (
    <div className="md:flex grid justify-between items-center pr-10 pl-10 bg-[#66D096] h-[7vh] text-2xl fixed right-0 left-0 z-999">
        <div></div>
        <div><span className="font-bold text-white">ADMIN DASHBOARD</span></div>
        <button onClick={onLogout} >
              <i className="fa-solid fa-right-from-bracket text-white"></i>
            </button>
     </div>
  )
}

export default AdminNavbar