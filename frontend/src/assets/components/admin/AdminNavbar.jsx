import React from 'react'

const AdminNavbar = () => {
  return (
    <div className="md:flex grid justify-between items-center pr-10 pl-10 bg-[#66D096] h-[7vh] text-2xl fixed right-0 left-0 z-999">
        <div></div>
        <div><span className="font-bold text-white">ADMIN DASHBOARD</span></div>
        <a href="landing.html"><i className="fa-solid fa-right-from-bracket text-white"></i></a>
     </div>
  )
}

export default AdminNavbar