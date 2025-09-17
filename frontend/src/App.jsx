import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from './assets/pages/Login'
import Signup from './assets/pages/Signup'
import HomePage from './assets/pages/user/HomePage'
import AdminDashboard from './assets/pages/admin/AdminDashboard'
import VerifyProperty from './assets/pages/admin/VerifyProperty'
import AuthLayout from './layouts/AuthLayout'
import { MainLayout } from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {index:true, element:<Login />},   // "/"
      {path: "signup", element: <Signup />},  // "/sign-up"
      {path: "login", element: <Login />}
    ]
  },
  {
    element: <MainLayout />,
    children: [
      {path: "homepage", element: <HomePage />},
    ]
  },
  {
    element: <AdminLayout />,
    children: [
      {path: "admin", element: <AdminDashboard />},
      {path: "verifyproperty/:id", element: <VerifyProperty />}
    ]
  },
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
