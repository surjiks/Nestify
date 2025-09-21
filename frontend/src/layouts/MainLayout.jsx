import React from 'react'
import Navbar from '../assets/components/user/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Sidebar from '../assets/components/user/Sidebar'

export const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Outlet />
    <ToastContainer />
    </>
  )
}
