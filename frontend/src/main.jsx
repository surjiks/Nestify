import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './App';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { PropertyProvider } from './context/PropertyContext.jsx';
import { LoginContext } from './context/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <WishlistProvider>
        <PropertyProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={3000} />
        </PropertyProvider>
      </WishlistProvider>
    </AuthProvider>
  </StrictMode>,
);
