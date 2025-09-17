import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from './assets/pages/Login'
import Signup from './assets/pages/Signup'
import HomePage from './assets/pages/user/HomePage'
import AdminDashboard from './assets/pages/admin/AdminDashboard'
import VerifyProperty from './assets/pages/admin/VerifyProperty'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/signup' replace />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup /> 
  },
  {
    path: '/homepage',
    element: <HomePage />
  },
  {
    path: '/admin',
    element: <AdminDashboard />
  },
  {
    path: '/verifyproperty/:id',
    element: <VerifyProperty />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
