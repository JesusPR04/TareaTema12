import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Search from './pages/Search.jsx';
import Information from './pages/Information.jsx';
import Buy from './pages/Buy.jsx';

// Estructura principal de mi página web
function AppLayout() {
  return <>
   <Navbar />
    <Outlet />
   <Footer />  
  </>
} 

// Diferentes rutas
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    /* errorElement: <ErrorPage />,  */
    children: [{
      path: "/",
      element: <App />,
    },
    {
      path: "/movies",
      element: <Search />,
    },
    {
      path: "/information/:id",
      element: <Information />,
    },
    {
      path: "/buy",
      element: <Buy />,
    }]
  }
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
);
