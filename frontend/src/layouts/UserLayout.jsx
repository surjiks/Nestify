import React from 'react'
import Navbar from '../assets/components/user/Navbar'
import Sidebar from '../assets/components/user/Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const UserLayout = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default UserLayout


