import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import QuienesSomos from './pages/QuienesSomos.jsx';

import Directivos from './pages/Directivos.jsx';
import Instalaciones from './pages/Instalaciones.jsx';
import Contacto from './pages/Contacto.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "somos",
    element: <QuienesSomos/>,
  },
  {
    path: "directivos",
    element: <Directivos/>,
  },
  {
    path:"instalaciones",
    element:<Instalaciones/>
  },
  {
    path:"contacto",
    element:<Contacto/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
